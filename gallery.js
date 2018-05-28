function showLoader() {
  let loader = document.querySelector(".container");
  loader.classList.remove("hiddenloader");
}

function hideLoader() {
  let loader = document.querySelector(".container");
  loader.classList.add("hiddenloader");

}

showLoader()

let handleProjectItemHover = function(projectItemElement, option) {
  projectItemElement.children[1].style.display = option;
}

function fetchGallery() {
  fetch("http://valsdottir.net/kea/07-cms/wordpress/wp-json/wp/v2/artist?_embed")
    .then(e => e.json())
    .then(showGallery)
}

function showGallery(data) {
  hideLoader();
  console.log(data);
  data.forEach(showSinglePiece);
}

function showSinglePiece(aPiece) {
  console.log("aPiece: ", aPiece);

  let template = document.querySelector("#gallerytemp").content;
  let clone = template.cloneNode(true);
  let recentItem = clone.querySelector(".recentitem");

  clone.querySelector(".title").textContent = aPiece.title.rendered;
  clone.querySelector(".medium").textContent = aPiece.acf.medium;

  recentItem.addEventListener("mouseover", function() {
    console.log('mouseover recentItem: ', recentItem);
    handleProjectItemHover(recentItem, 'block');
  });
  recentItem.addEventListener("mouseout", function() {
    console.log('mouseout recentItem: ', recentItem);
    handleProjectItemHover(recentItem, 'none');
  });

  clone.querySelector(".artworkimg").setAttribute("src", aPiece._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url)

  let gallerylist = document.querySelector("#gallerylist");
  gallerylist.appendChild(clone);
}

fetchGallery();