function LoadQuote(){
    let d = document.getElementById("quoteoftheday");



    let but = document.getElementById("buttonquote").addEventListener("click", function() {
        let image_x = document.getElementById('imagequote');
        if  (image_x !== null) {image_x.parentNode.removeChild(image_x);}
        d.innerHTML = "";
        d.setAttribute("class","loader");

        let inhoud;
        let request = new XMLHttpRequest();
        let dots = 1;
        request.onreadystatechange = function () {
            if (this.readyState === 0) {
                d.innerHTML = "Er is een fout opgetreden. Gelieve het later opnieuw te proberen...";
            }
            if (this.readyState === 4 && this.status == 200) {
                d.removeAttribute("class");
                inhoud = JSON.parse(this.responseText);
                d.innerHTML = "<p>" + inhoud.quote + "</p>";
                if (Object.entries(inhoud.photo).length !== 0 && inhoud.photo !== Object) {
                    let img = document.createElement("img");
                    img.src = inhoud.photo;
                    img.setAttribute("id", "imagequote");
                    let src = document.getElementById("divimageoftheday");
                    src.appendChild(img);

                }
            } else {

            }
        };
        request.open("GET", "https://thatsthespir.it/api", true);
        request.send();


    });


}

LoadQuote();