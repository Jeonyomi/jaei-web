export type NavItem = { label: string; href: string };

export const site = {
  title: "Jae-i on Stage",
  description: "재이의 뮤지컬 데뷔(킬리 깁슨 역)를 기념하는 랜딩 페이지",
  nav: [
    { label: "작품 소개", href: "#about" },
    { label: "공연 정보", href: "#performance" },
    { label: "예매 안내", href: "#tickets" },
    { label: "공연장", href: "#venue" },
    { label: "갤러리", href: "#gallery" },
    { label: "응원", href: "#guestbook" },
  ] satisfies NavItem[],
  hero: {
    headline: "재이의 첫 무대,\n그리고 첫 번째 도전",
    subheadline: "무대 위에서 꿈이 현실이 되는 순간을 함께해주세요.",
    badges: ["BILLY ELLIOT", "MUSICAL DEBUT", "KILLY GIBSON", "2026 SEASON"],
    ctas: [
      { label: "공연 정보 보기", href: "#performance", variant: "primary" as const },
      { label: "응원 메시지 남기기", href: "#guestbook", variant: "secondary" as const },
    ],
    note: "공연 일정과 예매 정보는 제작사/극장 사정에 따라 변동될 수 있습니다.",
  },
  highlights: [
    { title: "2026.04.12 – 2026.07.26", subtitle: "공연 기간", desc: "프리뷰 기간 포함" },
    { title: "화–금 19:30 / 토·일 14:00, 19:00", subtitle: "공연 시간", desc: "월요일 공연 없음" },
    { title: "블루스퀘어 우리은행홀", subtitle: "공연 장소", desc: "한강진역 연결(도보 이동)" },
    { title: "175분", subtitle: "러닝타임", desc: "인터미션 20분 포함" },
  ],
  performance: {
    title: "공연 정보",
    rows: [
      ["공연명", "뮤지컬 〈빌리 엘리어트〉"],
      ["공연 기간", "2026년 4월 12일(일) – 7월 26일(일)"],
      ["프리뷰", "4월 12일(일) 19:00 – 4월 19일(일) 14:00"],
      ["공연 시간", "화–금 19:30 / 토·일 14:00, 19:00 (월 공연 없음)"],
      ["공연 장소", "블루스퀘어 우리은행홀"],
      ["티켓 가격", "VIP 170,000원 / R 140,000원 / S 120,000원 / A 80,000원"],
      ["러닝타임", "175분 (인터미션 20분 포함)"],
      ["관람 연령", "8세 이상(2019년 출생자까지)"],
    ] as [string, string][],
  },
  about: {
    title: "작품 소개",
    bullets: [
      "1980년대 영국 북부 탄광촌을 배경으로, 복싱을 배우던 소년 ‘빌리’가 우연히 발레를 접하며 자신의 재능과 꿈을 발견합니다.",
      "편견과 현실의 벽을 넘어 꿈을 향해 나아가는 여정이 음악과 춤, 그리고 따뜻한 서사로 펼쳐지는 작품입니다.",
    ],
    credits: [
      "음악: 엘튼 존",
      "연출: 스테판 달드리",
      "극본: 리 홀",
    ],
  },
  tickets: {
    title: "예매 안내",
    cards: [
      {
        title: "프리뷰 티켓 오픈(안내)",
        desc: "1/29 선오픈 및 일반 오픈 안내(플랫폼/시간은 공지 기준)",
        ctaLabel: "프리뷰 공지 보기",
        ctaHref: "https://www.iseensee.com/Home/Community/Notice.aspx?IdArticle=11922&bbsPage=1&mode=v&tab=3",
      },
      {
        title: "1차 티켓 오픈(안내)",
        desc: "2/10 선오픈(13:00) 및 일반 오픈(14:00), 오픈 대상 기간 안내",
        ctaLabel: "1차 오픈 공지 보기",
        ctaHref: "https://www.iseensee.com/Home/Community/Notice.aspx?IdArticle=11924&bbsPage=62&mode=v&tab=3",
      },
    ],
    discounts: [
      { label: "프리뷰 할인", value: "30%" },
      { label: "1차 조기예매 할인", value: "20%" },
    ],
    notes: [
      "좌석/캐스팅/일정은 제작사 및 극장 사정에 따라 변경될 수 있습니다.",
      "공식 예매 공지와 예매처 안내를 최우선으로 확인해주세요.",
    ],
  },
  venue: {
    title: "공연장 & 오시는 길",
    name: "블루스퀘어 우리은행홀",
    address: "서울특별시 용산구 이태원로 294",
    subway: "6호선 한강진역(역 연결 통로)",
    seat: "우리은행홀 1,766석",
    mapQuery: "블루스퀘어 우리은행홀",
    ctas: [
      {
        label: "블루스퀘어 오시는 길",
        href: "https://www.bluesquare.kr/pages/cs/contact.php",
      },
    ],
  },
  gallery: {
    title: "포토 & 영상",
    note: "준비 중입니다. 공연이 시작되면 리허설/공연 사진과 영상 클립을 업데이트할 예정입니다.",
    // Local images placed under /public/gallery
    images: [
      { src: "/gallery/1.jpg", alt: "재이 프로필 사진 1" },
      { src: "/gallery/2.jpg", alt: "재이 프로필 사진 2" },
      { src: "/gallery/1710929579724.jpg", alt: "재이 프로필 사진 3" },
      { src: "/gallery/1710929579918.jpg", alt: "재이 프로필 사진 4" },
      { src: "/gallery/1710929580039.jpg", alt: "재이 프로필 사진 5" },
      { src: "/gallery/1713445456628(1).jpg", alt: "재이 프로필 사진 6" },
    ],
  },
  guestbook: {
    title: "응원 메시지 남기기",
    note: "비방/개인정보/상업성 내용은 게시되지 않을 수 있습니다.",
  },
  footer: {
    disclaimer:
      "이 페이지는 데뷔를 축하하기 위한 팬 페이지(비공식) 초안이며, 공연/예매 정보는 제작사 및 극장 공지를 우선으로 합니다.",
  },
};
