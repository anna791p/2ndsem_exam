
function fetchGallery(){
    fetch("http://valsdottir.net/kea/07-cms/wordpress/wp-json/wp/v2/artist?_embed")
        .then(e => e.json())
        .then(showGallery)
}

function showGallery(data){
    console.log(data)
    data.forEach(showSinglePiece)
}

function showSinglePiece(aPiece){

    let template = document.querySelector("#gallerytemp").content;
    let clone = template.cloneNode(true);

    clone.querySelector(".title").textContent = aPiece.title.rendered;
    clone.querySelector(".medium").textContent = aPiece.acf.medium;

    clone.querySelector(".artworkimg").setAttribute("src", aPiece._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url)

    let gallerylist = document.querySelector("#gallerylist");
    gallerylist.appendChild(clone);

}

fetchGallery();
