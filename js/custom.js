{
const sliderList = document.querySelector(".slider-list");
const sliderItems = document.querySelectorAll(".slider-item");
const sliderNext = document.querySelector(".slider-arrow-next");
const sliderPrev = document.querySelector(".slider-arrow-prev");
let numberOfItems;
let itemIndex;
const mediaQueryList = [
window.matchMedia("(max-width: 650px)"),
window.matchMedia("(max-width: 991px)")
];
const displayItems = () => {
let html = "";
let len = itemIndex + numberOfItems;
for (let i = itemIndex; i < len; i++) {
html += sliderItems[i].outerHTML;
}
sliderList.innerHTML = html;
};
const HandleScreen = () => {
if (mediaQueryList[0].matches) {
numberOfItems = 1;
itemIndex = 0;
sliderItems.forEach((item) => {
item.style.width = "100%";
item.style.minHeight = "150px";
});
} else if (mediaQueryList[1].matches) {
numberOfItems = 2;
itemIndex = 0;
sliderItems.forEach((item) => {
item.style.width = "50%";
item.style.minHeight = "150px";
});
} else {
numberOfItems = 3;
itemIndex = 0;
sliderItems.forEach((item) => {
item.style.width = "35%";
item.style.minHeight = "150px";
});
}
displayItems();
};
HandleScreen();
for (let i = 0; i < mediaQueryList.length; i++) {
mediaQueryList[i].addListener(HandleScreen);
}
sliderNext.addEventListener("click", function () {
if (itemIndex < sliderItems.length - numberOfItems) {
itemIndex++;
displayItems();
}
});
sliderPrev.addEventListener("click", function () {
if (itemIndex > 0) {
itemIndex--;
displayItems();
}
});
}
$('.brand-carousel').owlCarousel({
loop:true,
margin:10,
autoplay:true,
responsive:{
0:{
items:1
},
600:{
items:3
},
1000:{
items:5
}
}
})