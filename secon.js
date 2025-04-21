// ✅ 모달 설정 함수 가져오기
import { setupModal } from "./modal.js"
// ✅ 카드별 상세 설명 및 링크, 이미지 설정
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
// ✅ 모달 동작 초기화
setupModal(cardDetails)
