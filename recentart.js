


function fetchArtPieces(){
    fetch("http://valsdottir.net/kea/07-cms/wordpress/wp-json/wp/v2/artist?_embed&per_page=3")
        .then(e => e.json())
        .then(showArt)
}

function showArt(data){
    console.log(data);
    data.forEach(showSinglePiece)
}

function showSinglePiece(aPiece){
    //console.log(aPiece._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url);
    let template = document.querySelector("#recenttemp").content;
    let clone = template.cloneNode(true);

    clone.querySelector(".title").textContent = aPiece.title.rendered;
    clone.querySelector(".medium").textContent = aPiece.acf.medium;

    clone.querySelector(".artworkimg").setAttribute("src", aPiece._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url)

    let recentpiece = document.querySelector("#recentpiece");
    recentpiece.appendChild(clone);

}
fetchArtPieces();
