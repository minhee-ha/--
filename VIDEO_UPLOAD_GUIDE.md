# Video Content — 영상 업로드 가이드

수정 페이지: `projects_3.html`의 **02 Client Reels**.

## 권장 파일 구조

```text
images/projects/3/client-reels/
├── into-k-job/
│   ├── into-k-job-01.mp4   # 대표 릴스
│   ├── into-k-job-02.mp4   # 추가 릴스
│   └── into-k-job-03.mp4   # 추가 릴스 (선택)
├── worksy/
│   ├── worksy-01.mp4       # 저소음/사무실
│   └── worksy-02.mp4       # 타건감 또는 야간 사용 (선택)
├── mindhonors/
│   ├── mindhonors-01.mp4   # 서비스/아동상담 정보
│   └── mindhonors-02.mp4   # 다른 주제 (선택)
└── rozeco/
    ├── rozeco-01.mp4      # 프리미엄 커피 브랜드 릴스
    └── rozeco-02.mp4      # 레시피 또는 선물 콘셉트 (선택)
```

**최소 4개** (브랜드당 1개), **추천 6~8개**. 위 파일은 아직 업로드되지 않았으며 페이지에는 의도적인 플레이스홀더가 표시됩니다.

## 영상 권장 사양

- MP4 / H.264 비디오 + AAC 오디오
- 9:16 세로형, 1080×1920 권장 (용량이 크면 720×1280도 가능)
- 24~30fps, 웹 재생용 적절한 압축
- 가능한 한 파일당 20~30MB 이내를 목표로 인코딩. GitHub 일반 저장소는 대용량 영상에 적합하지 않음
- 고객사 로고, 패키지 텍스트, 인물/제품 원본을 임의로 수정하지 않은 **최종 승인본**만 사용
- 외부 공개 허가가 필요한 고객사 영상은 포트폴리오 공개 가능 여부 확인 후 업로드

## 영상 삽입 방식

현재 `projects_3.html`에는 가짜 영상 파일 경로를 넣지 않았습니다. 파일 업로드 후 각 `.p3-video-placeholder`를 실제 `<video controls muted playsinline preload="metadata" src="..."></video>` 요소로 교체하고 필요시 poster 이미지를 지정합니다.

## GitHub 업로드 주의

- 작업 브랜치: `portfolio-six-sections-20261021`
- `main`에 바로 올리지 말고 작업 브랜치에 추가
- 기존 영상 및 개인 릴스 파일은 이번 작업에서 삭제하지 않았음
- 100MB 초과 파일은 GitHub 일반 Git 업로드 제한에 걸리므로 외부 영상 호스팅 또는 별도 최적화 검토
