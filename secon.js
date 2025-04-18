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
    title: "",
    description: "공지사항 바로가기",
    link: "https://www.seconexpo.com/2025/kor/notice/list.asp",
    images: ["img/secon.jpg"],
  },
  {
    title: "📝 전시 품목 ",
    description:
      "Secon이란.<br>Information Security Conference & Exhibition의 약자로,<br> 정보보안 분야의 최신 동향과 기술을 공유하는 행사입니다.<br>이 전시회는 매년 다양한 최신 기술과 솔루션을 선보이며,<br> 정보보안 전문가와 기업들이 모여 지식과 경험을 나누는 중요한 플랫폼입니다.<br>주요 내용은 정보보안 관련 세미나, 워크숍, 전시회 등으로 구성되어 있습니다.",
    link: "https://www.seconexpo.com/2025/kor/exhibit/sub02.asp",
  },
  {
    title: "📍오시는 길",
    description: "서울시 마포구 마포대로 25 (마포동, 신한디엠빌딩 13F)",
    link: "https://www.seconexpo.com/2025/kor/about/sub05.asp",
    images: ["img/subway.jpg", "img/bus.jpg", "img/GTX.png", "img/car.jpg"],
  },
  {
    title: "💁 참관 안내",
    description:
      "행 사 명: 제 24회 세계 보안 엑스포 <br> 입 장 료: 온라인 사전 등록,초대장, 공무원증 소지자 - 무료 <br> 현장 등록 - 15,000원 <br>관람기간:2025년 3월 19일(수)~ 21일(금) <br> 관람시간: 10:00 ~ 17:00 <br> 장 소: 서울 코엑스 <br> 주 최: 한국정보보호산업협회 <br> 주 관: (주)코엑스",
    link: "https://www.seconexpo.com/2025/kor/visit/sub01.asp",
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
// 확대용 모달 관련 요소
const imageZoomModal = document.getElementById("image-zoom-modal")
const zoomedImage = document.getElementById("zoomed-image")
const closeZoom = document.getElementById("close-zoom")

// 슬라이더 이미지 클릭 시 확대
sliderImage.addEventListener("click", () => {
  zoomedImage.src = sliderImage.src
  imageZoomModal.style.display = "block"
})

// 확대 모달 닫기
closeZoom.addEventListener("click", () => {
  imageZoomModal.style.display = "none"
})

window.addEventListener("click", (e) => {
  if (e.target === imageZoomModal) {
    imageZoomModal.style.display = "none"
  }
})
