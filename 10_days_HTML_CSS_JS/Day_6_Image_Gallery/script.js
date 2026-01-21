
let modal = document.querySelector('.modal-container')
let modal_image = document.getElementById('modal-image')

let gallery_img = document.querySelectorAll('.gallery img')

gallery_img.forEach(img => {
        img.addEventListener('click',function(){
        modal.style.display = "flex";
        modal_image.src = img.src;
    });
});

modal.addEventListener('click',function(){
    modal.style.display = "none";
})