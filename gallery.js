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

fetch("http://valsdottir.net/kea/07-cms/wordpress/wp-json/wp/v2/categories")
  .then(e => e.json())
  .then(buildMenu)


function buildMenu(data) {
  let parentElement = document.querySelector(".tags");
  data.forEach(item => {
    console.log(item);
    if (item.name !== "Uncategorised") {
      let li = document.createElement("li");
      let a = document.createElement("a");
      li.id = item.id;
      a.textContent = item.name;
      a.href = "artwork.html?category=" + item.id;
      li.appendChild(a);
      parentElement.appendChild(li);
      console.log("categories:" + data);
    }

  })

}

let page = 1;
let lookingForData = false;
let categoryIdSelected = null;


function fetchGallery() {
  lookingForData = true;
  let urlParams = new URLSearchParams(window.location.search);
  let catid = urlParams.get("category");
  console.log("fetchGallery: catid: ", catid);
  let endpoint = "http://valsdottir.net/kea/07-cms/wordpress/wp-json/wp/v2/artist?_embed"
  if (catid) {
    categoryIdSelected = catid;
    endpoint = "http://valsdottir.net/kea/07-cms/wordpress/wp-json/wp/v2/artist?_embed" + "&categories=" + catid
  } else {
    categoryIdSelected = null;
  }
  fetch(endpoint)
    .then(e => e.json())
    .then(showGallery)
}

function showGallery(data) {
  hideLoader();
  console.log(data);
  data.forEach(showSinglePiece);

  if (categoryIdSelected) {
    let menuItemClick = document.getElementById(categoryIdSelected);
    console.log("fetchGallery: menuItemClick: ", menuItemClick);
    menuItemClick.classList.add("active_cat");
    endpoint = "http://valsdottir.net/kea/07-cms/wordpress/wp-json/wp/v2/artist?_embed" + "&categories=" + categoryIdSelected
  }
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

  clone.querySelector(".more").href = "subpage.html?id=" + aPiece.id;

  gallerylist.appendChild(clone);
}

fetchGallery();