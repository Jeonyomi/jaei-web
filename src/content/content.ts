export type NavItem = { label: string; href: string };

export const site = {
  title: "Jae-i on Stage",
  description: "재이의 뮤지컬 데뷔(킬리 깁슨 역)를 기념하는 랜딩 페이지",
  nav: [
    { label: "작품 소개", href: "#about" },
    { label: "공연 정보", href: "#performance" },
    { label: "예매 안내", href: "#tickets" },
    { label: "최근 소식", href: "#updates" },
    { label: "공연장", href: "#venue" },
    { label: "갤러리", href: "#gallery" },
    { label: "수상·활동", href: "#awards" },
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
  updates: {
    title: "최근 소식",
    note: "작품 관련 공식·언론 업데이트를 시간순으로 모아둔 섹션입니다.",
    items: [
      {
        date: "2026.04.23",
        source: "신시컴퍼니 블로그",
        title: "[빌Real] Ep10: 〈빌리 엘리어트〉 비하인드 공개",
        summary:
          "신시컴퍼니 블로그를 통해 뮤지컬 〈빌리 엘리어트〉 관련 비하인드 콘텐츠 Ep10이 공개되었습니다. 현장 분위기와 작품 준비 과정을 엿볼 수 있는 최신 업데이트입니다.",
        href: "https://blog.naver.com/seenseecom/224262656258",
      },
      {
        date: "2026.04.09",
        source: "신시컴퍼니 블로그",
        title: "[빌Real] Ep9: 빌리 엘리어트 쇼앤텔 비하인드 공개",
        summary:
          "쇼앤텔 현장의 무대 시연과 질의응답, 그리고 배우들의 연습실 분위기를 담은 비하인드 콘텐츠가 공개되었습니다.",
        href: "https://m.blog.naver.com/PostView.naver?blogId=seenseecom&logNo=224246675719&navType=by",
      },
      {
        date: "2026.04.06",
        source: "YouTube",
        title: "2026 영재발굴단 인피니티 영상 공개",
        summary:
          "유튜브 콘텐츠를 통해 2026 영재발굴단 인피니티와 뮤지컬 빌리 엘리어트 차세대 주인공 4인방이 공개되었습니다.",
        href: "https://www.youtube.com/watch?v=4eQ0dpWhT9o",
      },
      {
        date: "2026.03.26",
        source: "신시컴퍼니 블로그",
        title: "[빌Real] Ep8: 왓츠 인 마이 백 2화 공개",
        summary:
          "출연진의 가방과 애정 어린 소지품을 소개하는 비하인드 콘텐츠로, 배우들의 각기 다른 매력과 소중한 아이템을 보여줬습니다.",
        href: "https://m.blog.naver.com/PostView.naver?blogId=seenseecom&logNo=224230054088&navType=by",
      },
      {
        date: "2026.03.10",
        source: "연합뉴스",
        title: "‘빌리 엘리어트’ 쇼앤텔 현장 공개",
        summary:
          "고양아람누리 아람극장에서 쇼앤텔이 열려 출연진이 주요 장면을 시연하며 작품의 분위기와 에너지를 먼저 공개했습니다.",
        href: "https://naver.me/GLhjfDU4",
      },
      {
        date: "2026.03.10",
        source: "데일리안",
        title: "뮤지컬 ‘빌리 엘리어트’ 쇼앤텔(Show & Tell)",
        summary:
          "뮤지컬 ‘빌리 엘리어트’ 쇼앤텔(Show & Tell)이 10일 오후 고양 아람누리 아람극장에서 열렸다.",
        href: "https://naver.me/GSQZwiWz",
      },
      {
        date: "2026.02.10",
        source: "뉴데일리",
        title: "전체 상견례 및 연습 돌입 소식",
        summary:
          "전체 상견례와 함께 본격적인 연습이 시작됐고, 작품의 메시지와 공동체적 에너지를 강조한 현장 분위기가 전해졌습니다.",
        href: "https://www.newdaily.co.kr/site/data/html/2026/02/10/2026021000060.html",
      },
    ] as {
      date: string;
      source: string;
      title: string;
      summary: string;
      href: string;
    }[],
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
  awards: {
    title: "수상·활동",
    note: "주요 수상 및 활동 이력을 모아둔 섹션입니다. 공식 발표/프로그램 기준으로 업데이트됩니다.",
    items: [
      {
        year: "2026",
        event: "뮤지컬 빌리 엘리어트",
        venue: "블루스퀘어 우리은행홀",
        piece: "발레걸즈 - 킬리 깁슨 역",
        result: "데뷔",
      },
      {
        year: "2025",
        event: "유스스타뮤지컬콩쿠르",
        venue: "누림아트홀",
        piece: "뮤지컬 Cats \"Jellicle Songs for Jellicle Cats\"",
        result: "단체 금상",
      },
      {
        year: "2025",
        event: "알콩달콩 뮤지컬대회",
        venue: "코엑스 컨퍼런스룸",
        piece: "뮤지컬 Hairspray \"Good Morning Baltimore\"",
        result: "최우수상",
      },
      {
        year: "2025",
        event: "The Greatest Show",
        venue: "북아현아트홀",
        piece: "뮤지컬 Billy Elliot \"Electricity\" 등",
        result: "무대 공연",
      },
      {
        year: "2025",
        event: "리틀 뮤지컬 스타",
        venue: "하남문화예술회관",
        piece: "뮤지컬 Billy Elliot \"Electricity\"",
        result: "개인 장려상",
      },
      {
        year: "2025",
        event: "리틀 뮤지컬 스타",
        venue: "하남문화예술회관",
        piece: "뮤지컬 Hairspray \"Good Morning Baltimore\"",
        result: "단체 우수상",
      },
      {
        year: "2024",
        event: "Redstage",
        venue: "스타필드하남",
        piece: "KATSEYE \"Touch\", NMIXX \"별별별(See that?)\" (K-Pop Dance)",
        result: "공연",
      },
      {
        year: "2024",
        event: "경향뮤지컬콩쿠르",
        venue: "경향아트힐",
        piece: "뮤지컬 Annie \"Smile\"",
        result: "초중고등부 단체 우수상",
      },
      {
        year: "2024",
        event: "리틀 뮤지컬 스타",
        venue: "하남문화예술회관",
        piece: "뮤지컬 Annie \"Smile\"",
        result: "단체 우수상",
      },
      {
        year: "2024",
        event: "누가 누가 잘하나 912회",
        venue: "KBS별관 공개홀",
        piece: "\"메겨라 받아라\"",
        result: "방송 출연",
      },
      {
        year: "2023",
        event: "한국해사주간",
        venue: "서울신라호텔 다이너스티홀",
        piece: "\"Four Seasons\", \"아기 물고기의 소원\" 등",
        result: "행사 공연",
      },
      {
        year: "2023",
        event: "The Greatest Show",
        venue: "서교스퀘어",
        piece: "뮤지컬 Annie \"Tomorrow\", \"It’s the Hard Knock Life\" 등",
        result: "무대 공연",
      },
      {
        year: "2023",
        event: "The Greatest Show",
        venue: "서교스퀘어",
        piece: "뮤지컬 Soul \"The Space is Ruined\", Dammora \"Wolves\" 등",
        result: "무대 공연",
      },
      {
        year: "2022",
        event: "국제무용예술전국대회",
        venue: "온라인",
        piece: "단체",
        result: "최우수상",
      },
      {
        year: "2020",
        event: "Global Korea 무용 콩쿠르",
        venue: "온라인",
        piece: "한국무용 군무",
        result: "우수상",
      },
    ] as {
      year: string;
      event: string;
      venue: string;
      piece: string;
      result: string;
    }[],
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
