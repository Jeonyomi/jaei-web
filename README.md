# Jae-i on Stage

재이가 지나온 무대와 앞으로의 새로운 활동을 한 장면씩 쌓아가는 개인 활동 아카이브입니다.

- Production: https://jaei-web.vercel.app/
- Instagram: https://www.instagram.com/j_on_stage/

## Information architecture

1. **About** — 재이 중심 소개와 활동 방향
2. **Recent activity** — 가장 최근의 공식 활동
3. **Journey** — 2020년부터 이어진 무대·수상·방송 기록
4. **Stories** — 공식 콘텐츠와 언론 기록
5. **Gallery** — 프로필·공연 이미지와 영상
6. **Cheer** — 공개 노출 없이 저장되는 응원 메시지

〈빌리 엘리어트〉는 사이트 전체의 정체성이 아니라 2026년 최근 활동과 성장 기록 중 하나로 다룹니다.

## Content updates

콘텐츠는 `src/content/content.ts`에서 관리합니다.

- 새 대표 활동: `site.activities` 배열 앞쪽에 추가하고 `featured: true`로 지정
- 연도별 이력: `site.journey.items`에 추가
- 기사·공식 콘텐츠: `site.stories.items`에 추가하고 대표 소식 하나만 `featured: true`로 지정
- 이미지·영상: `public/gallery`에 파일을 넣고 `site.gallery.images`에 추가
- 공식 채널: `src/content/officialLinks.ts`에서 관리

개인정보, 비공개 일정, 학교나 거주지처럼 공개가 불필요한 정보는 추가하지 않습니다. 활동명·역할·기간·장소는 공식 프로그램이나 공개 출처로 확인한 내용만 사용합니다.

## Development

```bash
npm install
npm run dev
```

기본 개발 주소는 http://localhost:3000 입니다.

## Quality checks

```bash
npm run lint
npm run build
git diff --check
```

프로덕션 배포 전에는 데스크톱과 390px 모바일 viewport에서 Hero, 내비게이션, 가로 갤러리, 외부 링크 속성을 확인합니다.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Lucide React
- Vercel

자세한 시각·콘텐츠 원칙은 [`DESIGN.md`](./DESIGN.md)를 참고하세요.
