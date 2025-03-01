const pictures = [
    {
        "pictureUrl": "https://picsum.photos/600/400?random=1",
    },
    {
        "pictureUrl": "https://picsum.photos/600/400?random=2",
    },
    {
        "pictureUrl": "https://picsum.photos/600/400?random=3",
    },
    {
        "pictureUrl": "https://picsum.photos/600/400?random=4",
    },
    {
        "pictureUrl": "https://picsum.photos/600/400?random=5",
    }
];

for(i=0; i<pictures.length; i++){
    const carouselItem = document.createElement("div");
    if(i===0){
        carouselItem.setAttribute("class" , "carousel-item active");
    }else{
        carouselItem.setAttribute("class", "carousel-item");
    }
    
    const carouselImage = document.createElement("img");
    carouselImage.setAttribute("src" , pictures[i]["pictureUrl"]);
    carouselImage.setAttribute("class", "d-block w-100");
    carouselImage.setAttribute("alt" , "some img here...");

    const innerCarouselElement = document.getElementById("innerCarousel");
    innerCarouselElement.appendChild(carouselItem);
    
    carouselItem.appendChild(carouselImage);
}