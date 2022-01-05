const slideWarp = document.querySelector('.slider-warp');
const slideImg = document.querySelectorAll('.slider-warp img');

const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

/* Dùng chọn khi có danh sách nhiều elements */
const buyBtns = document.querySelectorAll('.js-buy-ticket')
/* Dùng chọn khi chỉ có 1 elements */
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')

var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;
var menuItems = document.querySelectorAll('#header li a[href*="#"]');

let count = 1;
const size = slideImg[0].offsetWidth;

start();

//Ham start
function start() {
    slideWarp.style.transform = 'translateX(' + (-size*count) + 'px)';
    
    /* Nghe hành vi click vào nút button */
    modalClose.addEventListener('click', closebuytickets) 

    /* Lắng nghe hành vi click vào nút close của modal tickets */
    modal.addEventListener('click', closebuytickets )

    /* Lắng nghe hành vi ngưng nổi bọt một class nào đó để class đó không bị ảnh hưởng mặc định của thẻ cha */
    modalContainer.addEventListener('click', function(event) {
        event.stopPropagation()
    });

    /* Lặp qua từng thẻ button và nghe click của người dùng */
    for(const buyBtn of buyBtns) {
        buyBtn.addEventListener('click', showbuytickets) 
    }

    mobileMenu.onclick = function() {
        var isClose = header.clientHeight === headerHeight;
        if(isClose){
            header.style.height = 'auto';
        }else{
            header.style.height = null;
        } 
    }
    
    for(var i = 0; i < menuItems.length; i++) {
        var menuItem = menuItems[i];
    
        menuItem.onclick = function(event) {
            var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
            if(isParentMenu){
                event.preventDefault();
            }else{
                header.style.height = null;
            }
        }
    }

    nextBtn.addEventListener('click', nextSlide);

    prevBtn.addEventListener('click', prevSlide);
}
setInterval(nextSlide, 4500);




function nextSlide() {
    if(count >= slideImg.length-1) return;
    slideWarp.style.transition = 'transform 0.6s ease-in-out';
    count++;
    slideWarp.style.transform = 'translateX(' + (-size*count) + 'px)';
}

function prevSlide() {
    if(count <= 0) return;
    slideWarp.style.transition = 'transform 0.6s ease-in-out';
    count--;
    slideWarp.style.transform = 'translateX(' + (-size*count) + 'px)';
}



slideWarp.addEventListener('transitionend', function() {
    if (slideImg[count].className === 'first-slide') {
        slideWarp.style.transition = 'none';
        count = 1;
        slideWarp.style.transform = 'translateX(' + (-size*count) + 'px)';
    }

    if (slideImg[count].className === 'last-slide') {
        slideWarp.style.transition = 'none';
        count = slideImg.length - 2;
        slideWarp.style.transform = 'translateX(' + (-size*count) + 'px)';
    }
});

/*Hàm thêm class open vào trong modal */
function showbuytickets() {
    modal.classList.add('open') 
}

/*Hàm xóa class open ra khỏi modal */
function closebuytickets() {
    modal.classList.remove('open')
}

var bandContent = document.querySelector('.band-section');
var tuorContent = document.querySelector('.Tour-section');
var contactContent = document.querySelector('.contact-section');
window.onscroll = ()=> {
    if (window.pageYOffset >= 300) {
        bandContent.classList.add('show');
    }
    if (window.pageYOffset < 300) {
        bandContent.classList.remove('show');
        tuorContent.classList.remove('show');
        contactContent.classList.remove('show');
    }
    if (window.pageYOffset >= 1042) {
        tuorContent.classList.add('show');
    }
    if (window.pageYOffset >= 1928) {
        contactContent.classList.add('show');
    }
    console.log(window.pageYOffset);
}





