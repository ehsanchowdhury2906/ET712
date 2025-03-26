let carbtn = document.querySelector(".carbtn")
let robtBtn = document.querySelector(".robtBtn")
function scrollgallery(pexels){
    let gallerycontainer = document.querySelector(".gallerycontainer")
    gallerycontainer.scrollBy({
        left:pexels,
        behavior:"smooth"
    })
}

carbtn.addEventListener("click", function(){
    scrollgallery(1200)
})
robtBtn.addEventListener("click", function(){
    scrollgallery(-1200)
})
