# Video Content — 업종별 영상 업로드 가이드

대상: `projects_3.html`의 02 IT Service / 03 Electronics / 04 F&B & Wellness. 고객사 이름을 웹페이지에 노출하지 않는 구성.

## 1. 업로드 폴더

```text
images/projects/3/industry-reels/
├── it-service/
│   ├── character/
│   │   ├── character-ep01.mp4
│   │   ├── character-ep02.mp4
│   │   ├── character-ep03.mp4
│   │   ├── consistency-01.jpg
│   │   ├── consistency-02.jpg
│   │   ├── consistency-03.jpg
│   │   ├── consistency-04.jpg
│   │   └── thumbs/
│   │       ├── ep01.jpg
│   │       ├── ep02.jpg
│   │       └── ... ep10.jpg
│   ├── service-explainer-01.mp4
│   └── service-explainer-02.mp4
├── electronics/
│   ├── electronics-01.mp4
│   ├── electronics-02.mp4
│   └── electronics-03.mp4
└── fnb-wellness/
    ├── premium-beverage-01.mp4
    ├── food-promotion-01.mp4
    └── wellness-product-01.mp4
```

영상은 우선 11개(IT 5, 전자기기 3, F&B & Wellness 3), 비교 이미지 4개, 썸네일 10개. 실제 공개 가능 영상 중 가장 완성도 높은 편으로 선별. 모든 에피소드를 GitHub에 올릴 필요는 없음.

## 2. 기존 콘텐츠

- 01 Brand Film: 기존 `images/projects/3/브랜드영상/home 수정.mp4` 참조
- 05 Fashion & Lifestyle Reels: 기존 `images/projects/3/릴스/*.mov` 6편 참조
- 06 유튜브 영상 편집: 기존 `youtube.mov` 참조
- 07 Video Prototype: 기존 `images/projects/3/스토리보드 기획/4-4~엔딩 컷편집.mp4` 참조

기존 파일이 실제로 저장소에 있는지, Live Server에서 재생되는지 확인.

## 3. 영상 내보내기

- MP4(H.264), 오디오 AAC, 9:16, 1080×1920 권장. 24~30fps
- 가급적 파일당 20~30MB 이내로 압축하고, 웹에서는 `preload="metadata"` 사용
- 100MB 이상 파일은 일반 GitHub 저장소에 push할 수 없음
- 외부 공개 권한을 확인한 최종본만 업로드. 화면 및 파일명에 고객사 이름을 넣지 않는 방침 유지

## 4. Mac에서 업로드

VS Code 터미널에서 프로젝트 폴더로 이동한 상태로:

```bash
git branch --show-current
git status
git pull --ff-only
mkdir -p images/projects/3/industry-reels/{it-service/character/thumbs,electronics,fnb-wellness}
```

`git branch --show-current`가 `portfolio-six-sections-20261021`인지 확인. Mac Finder에서 각 폴더에 파일 복사 후:

```bash
git add images/projects/3/industry-reels/
git commit -m "Add industry reels portfolio media"
git push origin portfolio-six-sections-20261021
```

로컬에 미커밋 변경이 있으면 `git pull --ff-only` 전 먼저 처리해야 함. `git status` 확인.

## 5. 웹페이지 연결

현재 `projects_3.html`의 업종별 영상·이미지는 플레이스홀더이며 **파일을 올리는 것만으로 자동 재생되지는 않음**. 업로드 후 HTML의 `.p3-video-placeholder`, `.p3-consistency-shot`, `.p3-series-thumb`를 실제 `<video>` 및 `<img>` 요소로 연결하고 CSS를 점검해야 함.

예:
```html
<video controls muted playsinline preload="metadata"
  src="./images/projects/3/industry-reels/it-service/character/character-ep01.mp4"></video>
```

영상 파일이 준비되면 실제 경로에 맞춰 페이지 코드 연결 작업을 진행.
