// ✅ 모달 설정 함수 import
import { setupModal } from "./modal.js"

// ✅ 카드별 상세 데이터 정의
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
// ✅ 카드 정보 전달하여 모달 동작 설정
setupModal(cardDetails)
