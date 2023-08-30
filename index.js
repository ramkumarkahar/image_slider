const slides = document.querySelectorAll(".slide")
var counter = 0;

slides.forEach(
    (slide , index) => {
        slide.style.left = '${index * 100}%'
    }
)

const goPre = () =>{
    counter --
    slideImg()
}

const goNext = () =>{
    counter ++
    slideImg()
}

const slideImg = () => {
    slides.forEach(
        (slide) => {
            slide.style.transfrom = 'trnaslateX(-${counter * 100}%)'
        }
    )
}