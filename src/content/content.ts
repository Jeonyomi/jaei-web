export type NavItem = { label: string; href: string };

export type JourneyItem = {
  year: string;
  event: string;
  venue: string;
  piece: string;
  result: string;
};

export type StoryItem = {
  featured: boolean;
  date: string;
  source: string;
  title: string;
  summary: string;
  href: string;
};

export type ActivityItem = {
  slug: string;
  featured: boolean;
  eyebrow: string;
  title: string;
  role: string;
  period: string;
  venue: string;
  status: string;
  summary: string;
  mainImage: string;
  mainImageAlt: string;
  detailImage: string;
  detailImageAlt: string;
  links: Array<{ label: string; href: string }>;
};

export const site = {
  title: "Jae-i on Stage",
  description: "전재이의 공연과 활동을 정리한 개인 아카이브",
  nav: [
    { label: "재이 소개", href: "#about" },
    { label: "최근 활동", href: "#activities" },
    { label: "활동 기록", href: "#journey" },
    { label: "소식", href: "#stories" },
    { label: "갤러리", href: "#gallery" },
    { label: "응원", href: "#guestbook" },
  ] satisfies NavItem[],
  hero: {
    eyebrow: "JAE-I ON STAGE",
    headline: "재이의 무대와\n활동 기록",
    subheadline:
      "2020년부터 참여한 무용, 뮤지컬, 방송 활동을 모았습니다.",
    image: "/gallery/portrait-2026-02.jpg",
    imageAlt: "재이의 흑백 프로필 사진",
    ctas: [
      { label: "최근 활동 보기", href: "#activities", variant: "primary" as const },
      { label: "활동 기록 보기", href: "#journey", variant: "secondary" as const },
    ],
  },
  highlights: [
    { label: "ARCHIVE", value: "2020 → NOW", note: "공연 · 방송 · 콩쿠르" },
    { label: "MUSICAL DEBUT", value: "2026", note: "〈빌리 엘리어트〉" },
    { label: "ON STAGE", value: "Musical · Dance", note: "노래 · 연기 · 퍼포먼스" },
  ],
  profile: {
    title: "전재이",
    lead:
      "무용을 시작했고, 이후 뮤지컬과 방송에도 참여했습니다.",
    body:
      "2020년부터 공개된 활동과 사진, 영상을 연도별로 정리했습니다.",
    focus: ["Musical", "Dance", "Broadcast"],
    image: "/gallery/portrait-2026-01.jpg",
    imageAlt: "재이의 밝은 프로필 사진",
    instagram: {
      label: "Instagram @j_on_stage",
      href: "https://www.instagram.com/j_on_stage/",
    },
  },
  activities: [
    {
      slug: "billy-elliot-2026",
      featured: true,
      eyebrow: "2026",
      title: "뮤지컬 〈빌리 엘리어트〉",
      role: "발레걸즈 · 킬리 깁슨 역",
      period: "2026.04.12 — 07.26",
      venue: "블루스퀘어 우리은행홀",
      status: "공연 종료",
      summary: "재이의 첫 뮤지컬 출연작입니다.",
      mainImage: "/gallery/performance-2026-03.jpg",
      mainImageAlt: "뮤지컬 빌리 엘리어트 공연 장면",
      detailImage: "/gallery/performance-2026-08.jpg",
      detailImageAlt: "2026 뮤지컬 빌리 엘리어트 출연진 보드",
      links: [
        {
          label: "공식 영상 플레이리스트",
          href: "https://www.youtube.com/playlist?list=PLWb9aB-BHnIUdhzyzvuZh7D45cvnckTlc",
        },
        {
          label: "신시컴퍼니 기록 보기",
          href: "https://blog.naver.com/seenseecom/224262656258",
        },
      ],
    },
  ] satisfies ActivityItem[],
  journey: {
    title: "활동 기록",
    note: "공개된 프로그램과 공식 자료를 기준으로 정리했습니다.",
    items: [
      {
        year: "2026",
        event: "뮤지컬 빌리 엘리어트",
        venue: "블루스퀘어 우리은행홀",
        piece: "발레걸즈 · 킬리 깁슨 역",
        result: "뮤지컬 데뷔",
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
        piece: "KATSEYE \"Touch\", NMIXX \"별별별(See that?)\"",
        result: "K-Pop Dance 공연",
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
    ] satisfies JourneyItem[],
  },
  stories: {
    title: "소식",
    note: "공식 콘텐츠와 기사 링크입니다.",
    items: [
      {
        featured: true,
        date: "2026.04.23",
        source: "신시컴퍼니 블로그",
        title: "[빌Real] Ep10: 〈빌리 엘리어트〉 비하인드 공개",
        summary: "출연진의 연습과 공연 준비 과정을 소개한 콘텐츠입니다.",
        href: "https://blog.naver.com/seenseecom/224262656258",
      },
      {
        featured: false,
        date: "2026.04.09",
        source: "신시컴퍼니 블로그",
        title: "[빌Real] Ep9: 쇼앤텔 비하인드 공개",
        summary: "쇼앤텔 무대 시연과 질의응답, 연습실 모습을 담았습니다.",
        href: "https://m.blog.naver.com/PostView.naver?blogId=seenseecom&logNo=224246675719&navType=by",
      },
      {
        featured: false,
        date: "2026.04.06",
        source: "YouTube",
        title: "2026 영재발굴단 인피니티 영상 공개",
        summary: "〈빌리 엘리어트〉 차세대 출연진을 소개한 영상입니다.",
        href: "https://www.youtube.com/watch?v=4eQ0dpWhT9o",
      },
      {
        featured: false,
        date: "2026.03.26",
        source: "신시컴퍼니 블로그",
        title: "[빌Real] Ep8: 왓츠 인 마이 백 2화",
        summary: "출연진의 소지품과 연습실 안팎 모습을 담았습니다.",
        href: "https://m.blog.naver.com/PostView.naver?blogId=seenseecom&logNo=224230054088&navType=by",
      },
      {
        featured: false,
        date: "2026.03.10",
        source: "연합뉴스",
        title: "‘빌리 엘리어트’ 쇼앤텔 현장 공개",
        summary: "고양아람누리에서 열린 쇼앤텔 현장 기사입니다.",
        href: "https://naver.me/GLhjfDU4",
      },
      {
        featured: false,
        date: "2026.02.10",
        source: "뉴데일리",
        title: "전체 상견례 및 연습 돌입 소식",
        summary: "상견례와 연습 시작을 알린 기사입니다.",
        href: "https://www.newdaily.co.kr/site/data/html/2026/02/10/2026021000060.html",
      },
    ] satisfies StoryItem[],
  },
  gallery: {
    title: "사진과 영상",
    note: "프로필과 공연 사진, 영상을 모았습니다.",
    images: [
      { src: "/gallery/portrait-2026-01.jpg", alt: "재이 프로필 사진" },
      { src: "/gallery/1.jpg", alt: "재이의 전신 프로필 사진" },
      { src: "/gallery/2.jpg", alt: "재이의 빌리 엘리어트 프로필 사진" },
      { src: "/gallery/performance-2026-clip-01.mp4", alt: "재이 공연 현장 영상", type: "video" },
      { src: "/gallery/performance-2026-01.jpg", alt: "재이의 공연 준비 기록" },
      { src: "/gallery/performance-2026-02.jpg", alt: "뮤지컬 빌리 엘리어트 공연 장면" },
      { src: "/gallery/performance-2026-04.jpg", alt: "뮤지컬 빌리 엘리어트 커튼콜 장면" },
      { src: "/gallery/performance-2026-06.jpg", alt: "뮤지컬 빌리 엘리어트 공연 장면" },
      { src: "/gallery/performance-2026-07.jpg", alt: "뮤지컬 빌리 엘리어트 활동 사진" },
      { src: "/gallery/activity-2026-09-01-01.jpg", alt: "재이 2026년 9월 활동 사진" },
      { src: "/gallery/activity-2026-09-01-02.jpg", alt: "재이 2026년 9월 활동 사진" },
      { src: "/gallery/activity-2026-09-01-03.jpg", alt: "재이 2026년 9월 활동 사진" },
    ],
  },
  guestbook: {
    title: "응원 메시지",
    note: "비방, 개인정보, 상업성 내용은 삭제될 수 있습니다.",
  },
  footer: {
    disclaimer: "공연·기사 정보와 이미지의 권리는 각 제작사와 원출처에 있습니다.",
  },
};
