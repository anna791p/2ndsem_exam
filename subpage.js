let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");


    fetch("http://valsdottir.net/kea/07-cms/wordpress/wp-json/wp/v2/artist/"+ id + "?_embed")
    .then(e=>e.json())
    .then(showSingleArt)

    function showSingleArt(aArt){
        console.log("aArt")

          document.querySelector(".title-more").textContent = aArt.title.rendered;
        document.querySelector(".desc-more").innerHTML = aArt.content.rendered;
        document.querySelector(".medium-more").textContent = aArt.acf.medium;
        document.querySelector(".price-more span").textContent = aArt.acf.price;
         if(aArt.acf.price == 0){
              document.querySelector(".price-more").style.display = "none";
              }

        document.querySelector(".size-more").textContent = aArt.acf.size;


    }
