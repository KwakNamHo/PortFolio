const modal = document.getElementById("modal")
const modalTitle = document.getElementById("modal-title")
const modalDescription = document.getElementById("modal-description")
const modalLink = document.getElementById("modal-link")
const closeButton = document.querySelector(".close-button")

const slider = document.querySelector(".slider")
const sliderImage = document.getElementById("slider-image")
const leftArrow = document.querySelector(".arrow.left")
const rightArrow = document.querySelector(".arrow.right")

const cardDetails = [
  {
    title: "👤 김태빈",
    description: "",
    link: null,
  },
  {
    title: "👤 이원준",
    description: ".",
    link: null,
  },
  {
    title: "👤 김민우",
    description: " ",
    link: null,
  },
  {
    title: "👤 곽남호",
    description: " ",
    link: null,
  },
]

let currentCardIndex = 0
let currentImageIndex = 0

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    currentCardIndex = Number(card.dataset.index)
    currentImageIndex = 0

    const detail = cardDetails[currentCardIndex]

    modalTitle.textContent = detail.title
    modalDescription.innerHTML = detail.description

    if (detail.link) {
      modalLink.href = detail.link
      modalLink.style.display = "block"
    } else {
      modalLink.style.display = "none"
    }

    if (detail.images && detail.images.length > 0) {
      slider.style.display = "block"
      sliderImage.src = detail.images[currentImageIndex]
    } else {
      slider.style.display = "none"
      sliderImage.src = ""
    }

    modal.style.display = "block"
  })
})

closeButton.addEventListener("click", () => {
  modal.style.display = "none"
})

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none"
  }
})

leftArrow.addEventListener("click", () => {
  const images = cardDetails[currentCardIndex].images
  if (!images || images.length === 0) return

  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length
  sliderImage.src = images[currentImageIndex]
})

rightArrow.addEventListener("click", () => {
  const images = cardDetails[currentCardIndex].images
  if (!images || images.length === 0) return

  currentImageIndex = (currentImageIndex + 1) % images.length
  sliderImage.src = images[currentImageIndex]
})
