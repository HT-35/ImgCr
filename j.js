const listImg = [
    "/P/Screenshot 2023-01-25 144242.png",
    "/P/Screenshot 2023-01-14 091007.png",
    "/P/Screenshot 2023-01-10 041250.png"
];

let index = 0;

const button = document.querySelector(".button");

button.addEventListener(("click"), function(e) {
    const template = `   <div class="modal">
<div class="content-modal">
    <i class="fa fa-angle-left lightbox-prev"></i>
    <img src="${listImg[index]}"   alt="" class="lightbox-image"  />
    <i class="fa fa-angle-right lightbox-next"></i>
</div>
</div>`;
    document.body.insertAdjacentHTML("afterbegin", template);
})



document.body.addEventListener(("click"), function(e) {

    const imgSrc = document.querySelector(".lightbox-image");

    // console.log(e.target.matches(".modal"));
    if (e.target.matches(".modal")) {
        e.target.parentNode.removeChild(e.target);
    } else if (e.target.matches(".lightbox-next")) {
        index += 1;
        if (index > listImg.length - 1) {
            index = 0;
        }
        imgSrc.setAttribute("src", listImg[index]);
    }
})