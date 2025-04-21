// ✅ 모달 설정 함수 가져오기
import { setupModal } from "./modal.js"

// ✅ 팀원 카드별 정보 입력
const cardDetails = [
  {
    title: "👤 김태빈",
    description:
      "학과: 정보보호학과<br>학번: 92212790<br>연락처 : 010-7221-7727",
    link: "https://private-homepage-pi.vercel.app/",
  },
  {
    title: "👤 이원준",
    description:
      "학과: 정보보호학과<br>학번 : 92416140<br>연락처 : 010-4841-6929",
    link: "https://portfolio-lee-won-joons-projects.vercel.app/ ",
  },
  {
    title: "👤 김민우",
    description:
      "학과: 정보보호학과<br>학번 : 92212752<br>연락처 : 010-8700-9404",
    link: "https://portfolio-m497.vercel.app/",
  },
  {
    title: "👤 곽남호",
    description:
      "학과: 정보보호학과<br>학번: 92212697<br>연락처 : 010-7454-3904",
    link: "https://namho-portfolio.vercel.app/",
  },
  {
    title: "보안과 암호학의 세계",
    description:
      "보안과 암호학의 기초 개념을 알아보고, 다양한 체험과 정보를 제공합니다. ",
    link: "https://team-project-gray-theta.vercel.app/",
  },
]
// ✅ 모달 설정 적용
setupModal(cardDetails)
