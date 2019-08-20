/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const imgSources = ['mountains', 'computer', 'trees', 'turntable']
const carouselContainer = document.querySelector('.carousel-container')

Carousel(carouselContainer, imgSources)

function Carousel(parent, imgSources){
  const carousel = document.createElement('div')
  carousel.classList.add('carousel')
  parent.appendChild(carousel)

  const leftButton = document.createElement('div')
  leftButton.classList.add('.left-button')
  leftButton.textContent = ' < '
  carousel.appendChild(leftButton)
  
  imgSources.forEach(imgSrc => {
    const img = document.createElement('img')
    img.src = `./assets/carousel/${imgSrc}.jpeg`
    carousel.appendChild(img)
    
    return img
  })

  const rightButton = document.createElement('div')
  rightButton.classList.add('.right-button')
  rightButton.textContent = ' > '
  carousel.appendChild(rightButton)

  // Slider functionality
  
  function sliderFunctionality() {
    const images = document.querySelectorAll('img')
    images.forEach(image => {
      image.style.width = '90%'
      image.style.padding = '0 3%'
    })
    console.log(images)
    
    let slideIndex = 1
    
    function plusSlides(n) {
      showSlides(slideIndex += n)
    }
    
    function showSlides(n) {
      // if index number is greater than the array length, reset to the first index
      if (n > images.length) {
        slideIndex = 1
      }
      // if user slides back before first index, go to last index
      if (n < 1) {
        slideIndex = images.length
      }
      
      images[slideIndex-1].style.display = 'block'
    }
    plusSlides(slideIndex)
    leftButton.addEventListener('click', () => {
      plusSlides(slideIndex - 1)
    })
    rightButton.addEventListener('click', () => {
      plusSlides(slideIndex + 1)
    })
  }
  sliderFunctionality()

  return carousel
}