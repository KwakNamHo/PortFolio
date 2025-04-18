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
    title: "👤 자기소개",
    description:
      "대학교:중부 대학교 <br> 전공: 정보보호학과과 <br> 사는 곳: 경기도 부천시<br> 관심 직업: CERT, 보안관제, 디지털포랜식",
    link: null,
  },
  {
    title: "💻 GitHub",
    description: "현재 운영중입니다.",
    link: "https://github.com/KwakNamHo",
  },
  {
    title: "💻 PortFolio",
    description: "자격증 및 활동 내용을 정리했습니다.",
    link: "https://example.com",
    images: ["img/img1.jpg", "img/img2.jpg"],
  },
  {
    title: "📈 목표",
    description: "정보보안 분야에서 전문가로 성장하기 위해 노력하고 있습니다.",
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
