// SVG map fix
(function() {
    var allItems = document.querySelectorAll('use');

    for (var i = 0; i < allItems.length; i++) {
        var item = allItems[i];
        var anchor = '#' + item.getAttribute('xlink:href').split('#')[1];
        var itemData = window.publiiSvgFix[anchor];

        if(!itemData) {
            console.log('ANCHOR', anchor, i);
            continue;
        }

        var svgItem = item.parentNode;
        svgItem.innerHTML = itemData.content;
        svgItem.setAttribute('viewBox', itemData.viewbox);
        
    }
})();
function imageReceived() {
        console.log("recieved"); 
}

document.addEventListener('DOMContentLoaded', () => {

    //console.log("test");    
    //fetch('https://udvdrpsdz.goatcounter.com/counter///home/cenneunborifisms/Documents/Publii/sites/udvdr-sdz/preview/.svg?&no_branding=1'
    //, { mode: 'no-cors',
        //headers: { 'Access-Control-Allow-Origin' : '*' }})
    //.then(response => response.text())
    //.then(html => {
        //// Process the fetched HTML
        //console.log("test3");  
        //console.log(html);
    //})
    //.catch(error => {
        //console.error('Error fetching HTML:', error);
    //});

    //console.log("test2");   
    
    //let imageURL =
    //"https://udvdrpsdz.goatcounter.com/counter///home/cenneunborifisms/Documents/Publii/sites/udvdr-sdz/preview/.svg?&no_branding=1";
    //let imageDescription = "The Mozilla logo";

      //downloadedImg = new Image();
      //downloadedImg.crossOrigin = "anonymous";
      //downloadedImg.addEventListener("load", imageReceived, false);
      //downloadedImg.alt = imageDescription;
      //downloadedImg.src = imageURL;
      
        //console.log(downloadedImg);  
        
    //console.log("test");   
     
    //fetch( 'https://udvdrpsdz.goatcounter.com/api/v0/stats/total'
         //, { credentials: "include"
           //, method: "GET"
           //, headers: { Accept: "application/json"
                      //, "Content-Type": "application/json"
                      //, Authorization: "Bearer kd4luuhc6qi4ckwkscaay684frwkwgugc1cp1t1sau8owlvvr"
                      //, "User-Agent": "any-name"
                      //,  } } )
    //.then(response => response.text())
    //.then(html => {
        //// Process the fetched HTML
        //console.log("test3");  
        //console.log(html);
    //})
    //.catch(error => {
        //console.error('Error fetching HTML:', error);
    //});
    
    //fetch('https://udvdrpsdz.goatcounter.com/api/v0/stats/total', {
    //credentials: "include",
    //method: "GET",
    //headers: {
      //Accept: "application/json",
      //"Content-Type": "application/json",
      //Authorization: "Bearer kd4luuhc6qi4ckwkscaay684frwkwgugc1cp1t1sau8owlvvr",
      //"User-Agent": "any-name"
    //}
    //})
    //.then(response => {
        //return response.text();
    //})
    //.then(html => {
        //// Process the fetched HTML
        //console.log("test3");  
        //console.log(html);
    //})
    //.catch(error => {
        //console.error('Error fetching HTML:', error);
    //});
    
    //const r = new XMLHttpRequest();
      //r.addEventListener('load', function() {
          //document.querySelector('#views').innerText = JSON.parse(this.responseText).count
          //console.log( JSON.parse(this.responseText).count ); 
      //});
      
      //const uri = location.pathname.replace(/\/$/, "");
      //r.open('GET', 'https://udvdrpsdz.goatcounter.com/counter/%2F%2Fhome%2Fcenneunborifisms%2FDocuments%2FPublii%2Fsites%2Fudvdr-sdz%2Fpreview%2F.html?&no_branding=1');
      //r.send();

    //console.log("test2");  
    
    //fetch('https://udvdrpsdz.goatcounter.com/api/v0/stats/total?access_token=kd4luuhc6qi4ckwkscaay684frwkwgugc1cp1t1sau8owlvvr', {
      //credentials: 'include',
      //headers: {
        //'Authorization': 'Bearer kd4luuhc6qi4ckwkscaay684frwkwgugc1cp1t1sau8owlvvr'
      //}
    //});
    
    //fetch('https://udvdrpsdz.goatcounter.com/counter/%2F%2Fhome%2Fcenneunborifisms%2FDocuments%2FPublii%2Fsites%2Fudvdr-sdz%2Fpreview%2F.html?&no_branding=1')
    
    //fetch('https://udvdrpsdz.goatcounter.com/api/v0/stats/total', {
        //credentials: "include",
        //method: "GET",
        //headers: {
          //Accept: "application/json",
          //"Content-Type": "text/plain",
          ////Authorization: "Bearer kd4luuhc6qi4ckwkscaay684frwkwgugc1cp1t1sau8owlvvr",
          //"User-Agent": "any-name"
        //}
    //})
    //.then(response => {
        //return response.text();
    //})
    //.then(html => {
        //// Process the fetched HTML
        //console.log("test3");  
        //console.log(html);
    //})
    //.catch(error => {
        //console.error('Error fetching HTML:', error);
    //});
    
    fetch('https://page-views-counter.netlify.app/page_view?page=https://example.com/index.html/', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Origin" : "*",
          "Content-Type": "text/plain",
          "User-Agent": "any-name"
        }
    })
    .then(response => {
        return response.text();
    })
    .then(html => {
        // Process the fetched HTML
        console.log("test3");  
        console.log(html);
    })
    .catch(error => {
        console.error('Error fetching HTML:', error);
    });
    
});
