// ✅ 모달 작동 설정 함수
export function setupModal(cardDetails) {
  // ✅ 모달 요소 가져오기
  const modal = document.getElementById("modal")
  const modalTitle = document.getElementById("modal-title")
  const modalDescription = document.getElementById("modal-description")
  const modalLink = document.getElementById("modal-link")
  const closeButton = document.querySelector(".close-button")

  const slider = document.querySelector(".slider")
  const sliderImage = document.getElementById("slider-image")
  const leftArrow = document.querySelector(".arrow.left")
  const rightArrow = document.querySelector(".arrow.right")

  let currentCardIndex = 0
  let currentImageIndex = 0
  // ✅ 카드 클릭 이벤트 등록
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
  // ✅ 닫기 버튼, 배경 클릭 시 모달 닫기
  closeButton.addEventListener("click", () => {
    modal.style.display = "none"
  })

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none"
    }
  })
  // ✅ 슬라이더 왼쪽/오른쪽 이미지 이동
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
  // ✅ 확대용 모달 요소 가져오기
  const zoomModal = document.getElementById("image-zoom-modal")
  const zoomedImage = document.getElementById("zoomed-image")
  const closeZoom = document.getElementById("close-zoom")

  // ✅ 슬라이더 이미지 클릭 시 확대 모달 열기
  sliderImage.addEventListener("click", (e) => {
    e.stopPropagation() // 📌 클릭 이벤트 버블링 방지 (겹침 방지)
    if (!sliderImage.src) return
    zoomedImage.src = sliderImage.src
    zoomModal.style.display = "block"
  })

  // ✅ 확대 모달 닫기 버튼
  closeZoom.addEventListener("click", () => {
    zoomModal.style.display = "none"
  })

  // ✅ 확대 모달 외부 클릭 시 닫기
  zoomModal.addEventListener("click", (e) => {
    if (e.target === zoomModal) {
      zoomModal.style.display = "none"
    }
  })
}
