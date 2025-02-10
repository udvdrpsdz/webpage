import { getStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  try {
    const urlParams = new URLSearchParams(req.url.split('?')[1]);
    const page = urlParams.get('page');
    const view = getStore("view");
    const dateTime = new Date();

    let entry = await view.get(page);

    if (!entry) {
      await view.set(page, 1, {
        metadata: { last_modified: dateTime, previous_count: 0 },
      });
    } else {
      await view.set(page, parseInt(entry) + 1, {
        metadata: { last_modified: dateTime, previous_count: parseInt(entry) },
      });
    }

    entry = await view.get(page);

    return Response.json(
      {
        data: {
          page_url: page,
          view_count: parseInt(entry),
          last_modified: dateTime
        }
    });
  }
  catch (error) {
    console.error(error);
    return Response.json({ error: "Internal Server Error" });
  }
};

