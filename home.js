//! SLIDE //

const slide = document.querySelector('.content')
firstImg = slide.querySelectorAll('img') [0],
arrows = document.querySelectorAll('.carousel i');

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const hideArrow = () => {
    let scrollWidth = slide.scrollWidth - slide.clientWidth;
    arrows[0].style.display = slide.scrollLeft == 0 ? 'none' : 'block'; 
    arrows[1].style.display = slide.scrollLeft == scrollWidth ? 'none' : 'block';
}

arrows.forEach(element => {
    element.addEventListener('click',() => {
        let firstImgWidth = firstImg.clientWidth + 14;
        slide.scrollLeft += element.id == 'left' ? -firstImgWidth : firstImgWidth;
        setTimeout(() => hideArrow(), 60);
    });
});

const autoSlide = () => {
    if (slide.scrollLeft == (slide.scrollWidth - slide.clientWidth)) return;

    positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstImg.clientWidth + 14; 
    let valDifference = firstImgWidth - positionDiff;

    if (slide.scrollLeft > prevScrollLeft) {
        return slide.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    slide.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = slide.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    slide.classList.add('dragging');
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    slide.scrollLeft = prevScrollLeft - positionDiff;
    hideArrow();
}
 
const dragStop = () => {
    isDragStart = false;
    slide.classList.remove('dragging');
    
    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

slide.addEventListener('mousedown', dragStart);
// slide.addEventListener('touchstart', dragStart);

slide.addEventListener('mousemove', dragging);
// slide.addEventListener('touchmove', dragging);

slide.addEventListener('mouseup', dragStop);
slide.addEventListener('mouseleave', dragStop);
// slide.addEventListener('touched', dragStop);



//!ANIMATION

const title = document.querySelector('.titlef');
title.classList.add('animated');
setTimeout(() => {
    title.classList.add('fast');
  }, 2000);


