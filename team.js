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
    description:
      "학과: 정보보호학과<br>학번: 92212790<br>연락처 : 010-7221-7727",
    link: "https://github.com/taebin327",
  },
  {
    title: "👤 이원준",
    description:
      "학과: 정보보호학과<br>학번 : 92416140<br>연락처 : 010-4841-6929",
    link: "https://github.com/joon-afk",
  },
  {
    title: "👤 김민우",
    description:
      "학과: 정보보호학과<br>학번 : 92212752<br>연락처 : 010-8700-9404",
    link: "https://github.com/vmaca123",
  },
  {
    title: "👤 곽남호",
    description:
      "학과: 정보보호학과<br>학번: 92212697<br>연락처 : 010-7454-3904",
    link: "https://github.com/KwakNamHo",
  },
  {
    title: "Team Project",
    description:
      "보안과 암호학의 기초 개념을 알아보고, 다양한 체험과 정보를 제공합니다. ",
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
