export interface AnimeItem {
  id: string;
  title: string;
  year: number | null;
  quarter: number;
  quarterLabel: string;
  genres: string[];
  image: string;
  bannerImage?: string;
  largeCoverImage?: string;
  favorite: boolean;
  favoriteRank: number | null;
  featured: boolean;
  featuredRank: number | null;
  originalIndex: number;
}

export const ANIME_GENRES = [
  "액션",
  "모험",
  "판타지",
  "SF",
  "메카",
  "스포츠",
  "공포",
  "스릴러",
  "미스터리",
  "심리",
  "로맨스",
  "코미디",
  "드라마",
  "일상",
  "음악"
] as const;

export const ANIME_ITEMS: AnimeItem[] = [
  {
    "id": "196935",
    "title": "아카네 이야기",
    "year": 2026,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "드라마"
    ],
    "image": "./images/anime/196935.jpg",
    "bannerImage": "./images/anime_banners/196935.jpg",
    "largeCoverImage": "./images/anime_covers_large/196935.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": true,
    "featuredRank": 3,
    "originalIndex": 0
  },
  {
    "id": "199588",
    "title": "오타쿠에게 상냥한 갸루는 없다?!",
    "year": 2026,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "로맨스",
      "코미디"
    ],
    "image": "./images/anime/199588.jpg",
    "bannerImage": "./images/anime_banners/199588.jpg",
    "largeCoverImage": "./images/anime_covers_large/199588.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": true,
    "featuredRank": 2,
    "originalIndex": 1
  },
  {
    "id": "195600",
    "title": "황천의 츠가이",
    "year": 2026,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "판타지",
      "코미디",
      "모험"
    ],
    "image": "./images/anime/195600.jpg",
    "bannerImage": "./images/anime_banners/195600.jpg",
    "largeCoverImage": "./images/anime_covers_large/195600.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": true,
    "featuredRank": 0,
    "originalIndex": 2
  },
  {
    "id": "178025",
    "title": "가치아쿠타",
    "year": 2025,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "액션",
      "판타지",
      "드라마"
    ],
    "image": "./images/anime/178025.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 3
  },
  {
    "id": "185736",
    "title": "비질랜티 -나의 히어로 아카데미아 ILLEGALS-",
    "year": 2025,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "판타지",
      "드라마",
      "모험"
    ],
    "image": "./images/anime/185736.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 4
  },
  {
    "id": "179955",
    "title": "촌구석 아저씨, 검성이 되다",
    "year": 2025,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "판타지",
      "코미디",
      "모험"
    ],
    "image": "./images/anime/179955.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 5
  },
  {
    "id": "178788",
    "title": "귀멸의 칼날: 무한성편",
    "year": 2025,
    "quarter": -1,
    "quarterLabel": "극장판",
    "genres": [
      "액션",
      "판타지",
      "드라마",
      "모험"
    ],
    "image": "./images/anime/178788.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 6
  },
  {
    "id": "171627",
    "title": "체인소 맨: 레제편",
    "year": 2025,
    "quarter": -1,
    "quarterLabel": "극장판",
    "genres": [
      "액션",
      "공포",
      "로맨스",
      "드라마"
    ],
    "image": "./images/anime/171627.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 7
  },
  {
    "id": "174654",
    "title": "니트 쿠노이치와 어쩌다가 동거 시작했습니다",
    "year": 2025,
    "quarter": -2,
    "quarterLabel": "웹",
    "genres": [
      "로맨스",
      "코미디"
    ],
    "image": "./images/anime/174654.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 8
  },
  {
    "id": "177709",
    "title": "사카모토 데이즈",
    "year": 2025,
    "quarter": -2,
    "quarterLabel": "웹",
    "genres": [
      "액션",
      "코미디"
    ],
    "image": "./images/anime/177709.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 9
  },
  {
    "id": "158559",
    "title": "2.5차원의 유혹",
    "year": 2024,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "로맨스",
      "코미디",
      "일상"
    ],
    "image": "./images/anime/158559.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 10
  },
  {
    "id": "163292",
    "title": "신참 아재 모험가, 최강 파티에서 죽을 정도로 단련해서 무적이 된다",
    "year": 2024,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "액션",
      "판타지",
      "코미디",
      "모험"
    ],
    "image": "./images/anime/163292.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 11
  },
  {
    "id": "171457",
    "title": "패배 히로인이 너무 많아!",
    "year": 2024,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "로맨스",
      "코미디",
      "일상"
    ],
    "image": "./images/anime/171457.jpg",
    "bannerImage": "./images/anime_banners/171457.jpg",
    "largeCoverImage": "./images/anime_covers_large/171457.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": true,
    "featuredRank": 1,
    "originalIndex": 12
  },
  {
    "id": "174576",
    "title": "지팡이와 검의 위스토리아",
    "year": 2024,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "액션",
      "판타지",
      "코미디",
      "드라마"
    ],
    "image": "./images/anime/174576.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 13
  },
  {
    "id": "164212",
    "title": "걸즈 밴드 크라이",
    "year": 2024,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "드라마",
      "음악",
      "일상"
    ],
    "image": "./images/anime/164212.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 14
  },
  {
    "id": "153288",
    "title": "괴수 8호",
    "year": 2024,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "SF"
    ],
    "image": "./images/anime/153288.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 15
  },
  {
    "id": "141821",
    "title": "마도정병의 슬레이브",
    "year": 2024,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "액션",
      "판타지",
      "로맨스",
      "드라마"
    ],
    "image": "./images/anime/141821.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 16
  },
  {
    "id": "151807",
    "title": "나 혼자만 레벨업",
    "year": 2024,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "액션",
      "판타지",
      "모험"
    ],
    "image": "./images/anime/151807.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 17
  },
  {
    "id": "163142",
    "title": "귀환자의 마법은 특별해야 합니다",
    "year": 2023,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "모험"
    ],
    "image": "./images/anime/163142.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 18
  },
  {
    "id": "159831",
    "title": "좀100 ~좀비가 되기 전에 하고 싶은 100가지~",
    "year": 2023,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "액션",
      "공포",
      "코미디",
      "모험"
    ],
    "image": "./images/anime/159831.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 19
  },
  {
    "id": "148048",
    "title": "신 없는 세계의 신 활동",
    "year": 2023,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "판타지",
      "코미디",
      "드라마"
    ],
    "image": "./images/anime/148048.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 20
  },
  {
    "id": "153152",
    "title": "내 마음의 위험한 녀석",
    "year": 2023,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "로맨스",
      "코미디",
      "일상"
    ],
    "image": "./images/anime/153152.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 21
  },
  {
    "id": "151801",
    "title": "마슐",
    "year": 2023,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "판타지",
      "코미디"
    ],
    "image": "./images/anime/151801.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 22
  },
  {
    "id": "128893",
    "title": "지옥락",
    "year": 2023,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "미스터리",
      "모험"
    ],
    "image": "./images/anime/128893.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 23
  },
  {
    "id": "150672",
    "title": "최애의 아이",
    "year": 2023,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "미스터리",
      "심리",
      "드라마"
    ],
    "image": "./images/anime/150672.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 24
  },
  {
    "id": "158870",
    "title": "포켓몬스터W: 내 꿈은 포켓몬마스터",
    "year": 2023,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "액션",
      "판타지",
      "코미디",
      "모험"
    ],
    "image": "./images/anime/158870.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 25
  },
  {
    "id": "130003",
    "title": "봇치 더 록!",
    "year": 2022,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "코미디",
      "음악",
      "일상"
    ],
    "image": "./images/anime/130003.png",
    "favorite": true,
    "favoriteRank": 1,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 26
  },
  {
    "id": "137822",
    "title": "블루 록",
    "year": 2022,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "스포츠",
      "드라마"
    ],
    "image": "./images/anime/137822.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 27
  },
  {
    "id": "130298",
    "title": "어둠의 실력자가 되고 싶어서!",
    "year": 2022,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "코미디"
    ],
    "image": "./images/anime/130298.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 28
  },
  {
    "id": "127230",
    "title": "체인소 맨",
    "year": 2022,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "공포",
      "드라마"
    ],
    "image": "./images/anime/127230.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 29
  },
  {
    "id": "149326",
    "title": "최근 고용한 메이드가 수상하다",
    "year": 2022,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "로맨스",
      "코미디",
      "일상"
    ],
    "image": "./images/anime/149326.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 30
  },
  {
    "id": "135806",
    "title": "이세계 삼촌",
    "year": 2022,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "판타지",
      "코미디",
      "모험"
    ],
    "image": "./images/anime/135806.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 31
  },
  {
    "id": "141391",
    "title": "철야의 노래",
    "year": 2022,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "심리",
      "로맨스",
      "코미디",
      "일상"
    ],
    "image": "./images/anime/141391.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 32
  },
  {
    "id": "141774",
    "title": "파티피플 공명",
    "year": 2022,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "코미디",
      "드라마",
      "음악"
    ],
    "image": "./images/anime/141774.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 33
  },
  {
    "id": "142074",
    "title": "여성향 게임 세계는 모브에게 가혹한 세계입니다",
    "year": 2022,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "메카",
      "판타지",
      "로맨스"
    ],
    "image": "./images/anime/142074.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 34
  },
  {
    "id": "127911",
    "title": "귀엽기만 한 게 아닌 시키모리 양",
    "year": 2022,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "로맨스",
      "코미디",
      "일상"
    ],
    "image": "./images/anime/127911.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 35
  },
  {
    "id": "140960",
    "title": "스파이 패밀리",
    "year": 2022,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "코미디",
      "일상"
    ],
    "image": "./images/anime/140960.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 36
  },
  {
    "id": "132405",
    "title": "그 비스크 돌은 사랑을 한다",
    "year": 2022,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "로맨스",
      "코미디",
      "일상"
    ],
    "image": "./images/anime/132405.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 37
  },
  {
    "id": "120377",
    "title": "사이버펑크: 엣지러너",
    "year": 2022,
    "quarter": -2,
    "quarterLabel": "웹",
    "genres": [
      "액션",
      "SF",
      "심리",
      "드라마"
    ],
    "image": "./images/anime/120377.jpg",
    "favorite": true,
    "favoriteRank": 4,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 38
  },
  {
    "id": "120646",
    "title": "선배가 짜증나는 후배 이야기",
    "year": 2021,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "로맨스",
      "코미디",
      "일상"
    ],
    "image": "./images/anime/120646.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 39
  },
  {
    "id": "113717",
    "title": "임금님 랭킹",
    "year": 2021,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "드라마",
      "모험"
    ],
    "image": "./images/anime/113717.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 40
  },
  {
    "id": "133965",
    "title": "코미 양은 커뮤증입니다",
    "year": 2021,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "로맨스",
      "코미디",
      "일상"
    ],
    "image": "./images/anime/133965.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 41
  },
  {
    "id": "129277",
    "title": "사신 도련님과 검은 메이드",
    "year": 2021,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "로맨스",
      "코미디",
      "드라마"
    ],
    "image": "./images/anime/129277.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 42
  },
  {
    "id": "126047",
    "title": "만난 지 5초만에 배틀",
    "year": 2021,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "액션",
      "드라마"
    ],
    "image": "./images/anime/126047.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 43
  },
  {
    "id": "132456",
    "title": "쟈히님은 기죽지 않아!",
    "year": 2021,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "판타지",
      "코미디",
      "일상"
    ],
    "image": "./images/anime/132456.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 44
  },
  {
    "id": "113950",
    "title": "SSSS.DYNAZENON",
    "year": 2021,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "메카",
      "SF",
      "로맨스"
    ],
    "image": "./images/anime/113950.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 45
  },
  {
    "id": "116588",
    "title": "전투원, 파견합니다!",
    "year": 2021,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "판타지",
      "SF",
      "코미디"
    ],
    "image": "./images/anime/116588.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 46
  },
  {
    "id": "120697",
    "title": "괴롭히지 말아요, 나가토로 양",
    "year": 2021,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "로맨스",
      "코미디",
      "일상"
    ],
    "image": "./images/anime/120697.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 47
  },
  {
    "id": "114085",
    "title": "괴물사변",
    "year": 2021,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "액션",
      "미스터리",
      "드라마"
    ],
    "image": "./images/anime/114085.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 48
  },
  {
    "id": "118375",
    "title": "나만 들어가는 숨겨진 던전",
    "year": 2021,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "액션",
      "판타지",
      "로맨스",
      "코미디"
    ],
    "image": "./images/anime/118375.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 49
  },
  {
    "id": "108465",
    "title": "무직전생 ~이세계에 갔으면 최선을 다한다~",
    "year": 2021,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "판타지",
      "드라마",
      "모험"
    ],
    "image": "./images/anime/108465.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 50
  },
  {
    "id": "114446",
    "title": "쓰르라미 울 적에 업",
    "year": 2020,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "공포",
      "미스터리",
      "심리",
      "스릴러"
    ],
    "image": "./images/anime/114446.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 51
  },
  {
    "id": "116242",
    "title": "나는 100만 명의 목숨 위에 서 있다",
    "year": 2020,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "드라마"
    ],
    "image": "./images/anime/116242.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 52
  },
  {
    "id": "117343",
    "title": "무능한 나나",
    "year": 2020,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "공포",
      "미스터리",
      "심리",
      "스릴러"
    ],
    "image": "./images/anime/117343.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 53
  },
  {
    "id": "113415",
    "title": "주술회전",
    "year": 2020,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "드라마"
    ],
    "image": "./images/anime/113415.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 54
  },
  {
    "id": "108489",
    "title": "역시 내 청춘의 러브 코미디는 잘못됐다. 완",
    "year": 2020,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "로맨스",
      "코미디",
      "드라마",
      "일상"
    ],
    "image": "./images/anime/108489.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 55
  },
  {
    "id": "116006",
    "title": "갓 오브 하이스쿨",
    "year": 2020,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "액션",
      "판타지"
    ],
    "image": "./images/anime/116006.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 56
  },
  {
    "id": "113813",
    "title": "여친, 빌리겠습니다",
    "year": 2020,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "로맨스",
      "코미디",
      "드라마"
    ],
    "image": "./images/anime/113813.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 57
  },
  {
    "id": "108241",
    "title": "글레이프니르",
    "year": 2020,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "미스터리"
    ],
    "image": "./images/anime/108241.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 58
  },
  {
    "id": "115230",
    "title": "신의 탑",
    "year": 2020,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "판타지",
      "미스터리",
      "드라마"
    ],
    "image": "./images/anime/115230.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 59
  },
  {
    "id": "104462",
    "title": "어떤 과학의 초전자포 T",
    "year": 2020,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "액션",
      "SF"
    ],
    "image": "./images/anime/104462.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 60
  },
  {
    "id": "107201",
    "title": "허구추리",
    "year": 2020,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "미스터리",
      "로맨스",
      "코미디"
    ],
    "image": "./images/anime/107201.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 61
  },
  {
    "id": "21719",
    "title": "페이트/스테이 나이트 [헤븐즈 필] 제3장 스프링 송",
    "year": 2020,
    "quarter": -1,
    "quarterLabel": "극장판",
    "genres": [
      "액션",
      "판타지",
      "심리",
      "스릴러"
    ],
    "image": "./images/anime/21719.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 62
  },
  {
    "id": "112151",
    "title": "귀멸의 칼날: 무한열차편",
    "year": 2020,
    "quarter": -1,
    "quarterLabel": "극장판",
    "genres": [
      "액션",
      "판타지",
      "미스터리",
      "드라마"
    ],
    "image": "./images/anime/112151.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 63
  },
  {
    "id": "107666",
    "title": "요리왕 비룡 더 마스터",
    "year": 2019,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "코미디"
    ],
    "image": "./images/anime/107666.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 64
  },
  {
    "id": "112153",
    "title": "포켓몬스터W",
    "year": 2019,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "코미디",
      "모험"
    ],
    "image": "./images/anime/112153.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 65
  },
  {
    "id": "104722",
    "title": "어새신즈 프라이드",
    "year": 2019,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "미스터리",
      "로맨스"
    ],
    "image": "./images/anime/104722.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 66
  },
  {
    "id": "104464",
    "title": "나를 좋아하는 건 너뿐이냐",
    "year": 2019,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "로맨스",
      "코미디",
      "드라마",
      "일상"
    ],
    "image": "./images/anime/104464.png",
    "favorite": true,
    "favoriteRank": 8,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 67
  },
  {
    "id": "105156",
    "title": "이 용사가 ZZANG센 주제에 너무 신중하다",
    "year": 2019,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "코미디",
      "모험"
    ],
    "image": "./images/anime/105156.png",
    "favorite": true,
    "favoriteRank": 9,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 68
  },
  {
    "id": "107660",
    "title": "비스타즈",
    "year": 2019,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "미스터리",
      "심리",
      "로맨스",
      "드라마"
    ],
    "image": "./images/anime/107660.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 69
  },
  {
    "id": "107663",
    "title": "저 너머의 아스트라",
    "year": 2019,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "SF",
      "미스터리",
      "모험"
    ],
    "image": "./images/anime/107663.jpg",
    "favorite": true,
    "favoriteRank": 11,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 70
  },
  {
    "id": "107226",
    "title": "덤벨 몇 킬로까지 들 수 있어?",
    "year": 2019,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "스포츠",
      "코미디",
      "일상"
    ],
    "image": "./images/anime/107226.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 71
  },
  {
    "id": "105310",
    "title": "불꽃 소방대",
    "year": 2019,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "액션",
      "SF",
      "드라마"
    ],
    "image": "./images/anime/105310.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 72
  },
  {
    "id": "105333",
    "title": "닥터 스톤",
    "year": 2019,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "액션",
      "SF",
      "코미디",
      "모험"
    ],
    "image": "./images/anime/105333.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 73
  },
  {
    "id": "103900",
    "title": "우리는 공부를 못해",
    "year": 2019,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "로맨스",
      "코미디",
      "일상"
    ],
    "image": "./images/anime/103900.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 74
  },
  {
    "id": "101922",
    "title": "귀멸의 칼날",
    "year": 2019,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "판타지",
      "드라마",
      "모험"
    ],
    "image": "./images/anime/101922.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 75
  },
  {
    "id": "103222",
    "title": "마법소녀 특수전 아스카",
    "year": 2019,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "액션",
      "공포",
      "드라마"
    ],
    "image": "./images/anime/103222.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 76
  },
  {
    "id": "101347",
    "title": "도로로",
    "year": 2019,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "액션",
      "드라마",
      "모험"
    ],
    "image": "./images/anime/101347.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 77
  },
  {
    "id": "103572",
    "title": "5등분의 신부",
    "year": 2019,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "로맨스",
      "코미디",
      "드라마",
      "일상"
    ],
    "image": "./images/anime/103572.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 78
  },
  {
    "id": "99263",
    "title": "방패 용사 성공담",
    "year": 2019,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "액션",
      "판타지",
      "모험"
    ],
    "image": "./images/anime/99263.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 79
  },
  {
    "id": "101759",
    "title": "약속의 네버랜드",
    "year": 2019,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "판타지",
      "공포",
      "미스터리",
      "심리"
    ],
    "image": "./images/anime/101759.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 80
  },
  {
    "id": "101921",
    "title": "카구야 님은 고백받고 싶어 ~천재들의 연애 두뇌전~",
    "year": 2019,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "심리",
      "로맨스",
      "코미디",
      "일상"
    ],
    "image": "./images/anime/101921.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 81
  },
  {
    "id": "97880",
    "title": "코드 기아스 부활의 를르슈",
    "year": 2019,
    "quarter": -1,
    "quarterLabel": "극장판",
    "genres": [
      "액션",
      "메카",
      "SF",
      "드라마"
    ],
    "image": "./images/anime/97880.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 82
  },
  {
    "id": "21718",
    "title": "페이트/스테이 나이트 [헤븐즈 필] 제2장 로스트 버터플라이",
    "year": 2019,
    "quarter": -1,
    "quarterLabel": "극장판",
    "genres": [
      "액션",
      "판타지",
      "심리",
      "스릴러"
    ],
    "image": "./images/anime/21718.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 83
  },
  {
    "id": "106286",
    "title": "날씨의 아이",
    "year": 2019,
    "quarter": -1,
    "quarterLabel": "극장판",
    "genres": [
      "로맨스",
      "드라마",
      "일상"
    ],
    "image": "./images/anime/106286.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 84
  },
  {
    "id": "100891",
    "title": "켄간 아슈라",
    "year": 2019,
    "quarter": -2,
    "quarterLabel": "웹",
    "genres": [
      "액션",
      "스포츠"
    ],
    "image": "./images/anime/100891.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 85
  },
  {
    "id": "101014",
    "title": "릴리즈 더 스파이스",
    "year": 2018,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "모험"
    ],
    "image": "./images/anime/101014.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 86
  },
  {
    "id": "101336",
    "title": "꼭두각시 서커스",
    "year": 2018,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "미스터리",
      "모험"
    ],
    "image": "./images/anime/101336.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 87
  },
  {
    "id": "100185",
    "title": "어떤 마술의 금서목록 Ⅲ",
    "year": 2018,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "SF"
    ],
    "image": "./images/anime/100185.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 88
  },
  {
    "id": "99424",
    "title": "SSSS.GRIDMAN",
    "year": 2018,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "메카",
      "SF"
    ],
    "image": "./images/anime/99424.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 89
  },
  {
    "id": "100182",
    "title": "소드 아트 온라인 앨리시제이션",
    "year": 2018,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "모험"
    ],
    "image": "./images/anime/100182.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 90
  },
  {
    "id": "101165",
    "title": "고블린 슬레이어",
    "year": 2018,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "모험"
    ],
    "image": "./images/anime/101165.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 91
  },
  {
    "id": "102883",
    "title": "죠죠의 기묘한 모험: 황금의 바람",
    "year": 2018,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "미스터리",
      "드라마",
      "모험"
    ],
    "image": "./images/anime/102883.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 92
  },
  {
    "id": "101280",
    "title": "전생했더니 슬라임이었던 건에 대하여",
    "year": 2018,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "코미디",
      "모험"
    ],
    "image": "./images/anime/101280.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 93
  },
  {
    "id": "101291",
    "title": "청춘 돼지는 바니걸 선배의 꿈을 꾸지 않는다",
    "year": 2018,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "미스터리",
      "심리",
      "로맨스",
      "코미디"
    ],
    "image": "./images/anime/101291.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 94
  },
  {
    "id": "101161",
    "title": "중간관리록 토네가와",
    "year": 2018,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "심리",
      "코미디",
      "드라마"
    ],
    "image": "./images/anime/101161.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 95
  },
  {
    "id": "101340",
    "title": "무효와 로지의 마법률상담사무소",
    "year": 2018,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "액션",
      "미스터리",
      "코미디"
    ],
    "image": "./images/anime/101340.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 96
  },
  {
    "id": "100483",
    "title": "유라기장의 유우나 씨",
    "year": 2018,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "로맨스",
      "코미디"
    ],
    "image": "./images/anime/100483.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 97
  },
  {
    "id": "100978",
    "title": "게게게의 키타로",
    "year": 2018,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "공포",
      "코미디"
    ],
    "image": "./images/anime/100978.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 98
  },
  {
    "id": "99693",
    "title": "페르소나 5 the Animation",
    "year": 2018,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "판타지"
    ],
    "image": "./images/anime/99693.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 99
  },
  {
    "id": "100240",
    "title": "도쿄 구울:re",
    "year": 2018,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "공포",
      "미스터리",
      "심리"
    ],
    "image": "./images/anime/100240.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 100
  },
  {
    "id": "21127",
    "title": "슈타인즈 게이트 제로",
    "year": 2018,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "SF",
      "심리",
      "스릴러",
      "드라마"
    ],
    "image": "./images/anime/21127.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 101
  },
  {
    "id": "100332",
    "title": "째깍째깍",
    "year": 2018,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "액션",
      "미스터리",
      "심리",
      "스릴러"
    ],
    "image": "./images/anime/100332.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 102
  },
  {
    "id": "97768",
    "title": "그랑크레스트 전기",
    "year": 2018,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "액션",
      "판타지",
      "로맨스"
    ],
    "image": "./images/anime/97768.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 103
  },
  {
    "id": "99468",
    "title": "장난을 잘 치는 타카기 양",
    "year": 2018,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "로맨스",
      "코미디",
      "일상"
    ],
    "image": "./images/anime/99468.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 104
  },
  {
    "id": "99423",
    "title": "달링 인 더 프랑키스",
    "year": 2018,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "액션",
      "메카",
      "SF",
      "심리"
    ],
    "image": "./images/anime/99423.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 105
  },
  {
    "id": "21855",
    "title": "UQ Holder!",
    "year": 2017,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "SF"
    ],
    "image": "./images/anime/21855.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 106
  },
  {
    "id": "98443",
    "title": "십이대전",
    "year": 2017,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "스릴러"
    ],
    "image": "./images/anime/98443.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 107
  },
  {
    "id": "98707",
    "title": "보석의 나라",
    "year": 2017,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "미스터리",
      "심리"
    ],
    "image": "./images/anime/98707.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 108
  },
  {
    "id": "97922",
    "title": "이누야시키",
    "year": 2017,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "SF",
      "심리",
      "드라마"
    ],
    "image": "./images/anime/97922.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 109
  },
  {
    "id": "97940",
    "title": "블랙 클로버",
    "year": 2017,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "코미디",
      "모험"
    ],
    "image": "./images/anime/97940.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 110
  },
  {
    "id": "98144",
    "title": "전설의 마법 쿠루쿠루",
    "year": 2017,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "판타지",
      "코미디",
      "모험"
    ],
    "image": "./images/anime/98144.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 111
  },
  {
    "id": "97663",
    "title": "나이츠 & 매직",
    "year": 2017,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "액션",
      "메카",
      "판타지"
    ],
    "image": "./images/anime/97663.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 112
  },
  {
    "id": "98005",
    "title": "볼룸에 오신 것을 환영합니다",
    "year": 2017,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "스포츠",
      "로맨스",
      "드라마"
    ],
    "image": "./images/anime/98005.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 113
  },
  {
    "id": "21745",
    "title": "속·오와리모노가타리",
    "year": 2017,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "미스터리",
      "심리",
      "로맨스",
      "코미디"
    ],
    "image": "./images/anime/21745.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 114
  },
  {
    "id": "98251",
    "title": "바보걸",
    "year": 2017,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "로맨스",
      "코미디"
    ],
    "image": "./images/anime/98251.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 115
  },
  {
    "id": "98035",
    "title": "페이트/아포크리파",
    "year": 2017,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "액션",
      "판타지",
      "드라마"
    ],
    "image": "./images/anime/98035.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 116
  },
  {
    "id": "98491",
    "title": "이세계는 스마트폰과 함께.",
    "year": 2017,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "판타지",
      "로맨스",
      "코미디",
      "모험"
    ],
    "image": "./images/anime/98491.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 117
  },
  {
    "id": "97986",
    "title": "메이드 인 어비스",
    "year": 2017,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "판타지",
      "공포",
      "SF",
      "미스터리"
    ],
    "image": "./images/anime/97986.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 118
  },
  {
    "id": "98659",
    "title": "어서 오세요 실력지상주의 교실에",
    "year": 2017,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "심리",
      "드라마"
    ],
    "image": "./images/anime/98659.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 119
  },
  {
    "id": "98314",
    "title": "카케구루이",
    "year": 2017,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "미스터리",
      "심리",
      "드라마"
    ],
    "image": "./images/anime/98314.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 120
  },
  {
    "id": "97625",
    "title": "츠구모모",
    "year": 2017,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "코미디"
    ],
    "image": "./images/anime/97625.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 121
  },
  {
    "id": "97682",
    "title": "제로에서 시작하는 마법의 서",
    "year": 2017,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "판타지",
      "드라마"
    ],
    "image": "./images/anime/97682.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 122
  },
  {
    "id": "21851",
    "title": "무장소녀 마키아벨리즘",
    "year": 2017,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "로맨스",
      "코미디"
    ],
    "image": "./images/anime/21851.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 123
  },
  {
    "id": "21180",
    "title": "시원찮은 그녀를 위한 육성방법 ♭",
    "year": 2017,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "로맨스",
      "코미디",
      "일상"
    ],
    "image": "./images/anime/21180.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 124
  },
  {
    "id": "97980",
    "title": "Re:CREATORS",
    "year": 2017,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "메카",
      "판타지",
      "스릴러"
    ],
    "image": "./images/anime/97980.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 125
  },
  {
    "id": "21685",
    "title": "에로망가 선생",
    "year": 2017,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "로맨스",
      "코미디",
      "드라마",
      "일상"
    ],
    "image": "./images/anime/21685.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 126
  },
  {
    "id": "97938",
    "title": "보루토: 나루토 넥스트 제너레이션즈",
    "year": 2017,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "판타지",
      "모험"
    ],
    "image": "./images/anime/97938.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 127
  },
  {
    "id": "21700",
    "title": "변변찮은 마술강사와 금기교전",
    "year": 2017,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "판타지",
      "코미디"
    ],
    "image": "./images/anime/21700.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 128
  },
  {
    "id": "87435",
    "title": "BanG Dream!",
    "year": 2017,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "코미디",
      "드라마",
      "음악",
      "일상"
    ],
    "image": "./images/anime/87435.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 129
  },
  {
    "id": "21857",
    "title": "마사무네의 리벤지",
    "year": 2017,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "로맨스",
      "코미디",
      "일상"
    ],
    "image": "./images/anime/21857.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 130
  },
  {
    "id": "20791",
    "title": "페이트/스테이 나이트 [헤븐즈 필] 제1장 프레시지 플라워",
    "year": 2017,
    "quarter": -1,
    "quarterLabel": "극장판",
    "genres": [
      "액션",
      "판타지",
      "심리"
    ],
    "image": "./images/anime/20791.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 131
  },
  {
    "id": "21400",
    "title": "키즈모노가타리 III 냉혈편",
    "year": 2017,
    "quarter": -1,
    "quarterLabel": "극장판",
    "genres": [
      "액션",
      "미스터리",
      "심리",
      "드라마"
    ],
    "image": "./images/anime/21400.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 132
  },
  {
    "id": "97634",
    "title": "포켓몬스터 썬&문",
    "year": 2016,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "코미디",
      "일상"
    ],
    "image": "./images/anime/97634.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 133
  },
  {
    "id": "21715",
    "title": "작열의 탁구소녀",
    "year": 2016,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "스포츠"
    ],
    "image": "./images/anime/21715.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 134
  },
  {
    "id": "21560",
    "title": "베르세르크",
    "year": 2016,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "액션",
      "판타지",
      "공포",
      "드라마"
    ],
    "image": "./images/anime/21560.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 135
  },
  {
    "id": "21825",
    "title": "단간론파 3 -The End of 키보가미네 학원-",
    "year": 2016,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "액션",
      "공포",
      "SF",
      "미스터리"
    ],
    "image": "./images/anime/21825.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 136
  },
  {
    "id": "21507",
    "title": "모브사이코 100",
    "year": 2016,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "액션",
      "심리",
      "코미디",
      "드라마"
    ],
    "image": "./images/anime/21507.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 137
  },
  {
    "id": "21334",
    "title": "삼자삼엽",
    "year": 2016,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "코미디",
      "일상"
    ],
    "image": "./images/anime/21334.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 138
  },
  {
    "id": "21360",
    "title": "역전재판",
    "year": 2016,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "미스터리",
      "코미디",
      "드라마"
    ],
    "image": "./images/anime/21360.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 139
  },
  {
    "id": "21499",
    "title": "쌍성의 음양사",
    "year": 2016,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "판타지",
      "로맨스",
      "코미디"
    ],
    "image": "./images/anime/21499.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 140
  },
  {
    "id": "21595",
    "title": "사카모토입니다만?",
    "year": 2016,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "코미디",
      "일상"
    ],
    "image": "./images/anime/21595.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 141
  },
  {
    "id": "21196",
    "title": "갑철성의 카바네리",
    "year": 2016,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "판타지",
      "공포",
      "드라마"
    ],
    "image": "./images/anime/21196.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 142
  },
  {
    "id": "21311",
    "title": "문호 스트레이독스",
    "year": 2016,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "미스터리",
      "코미디"
    ],
    "image": "./images/anime/21311.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 143
  },
  {
    "id": "21450",
    "title": "죠죠의 기묘한 모험: 다이아몬드는 부서지지 않는다",
    "year": 2016,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "미스터리",
      "드라마",
      "모험"
    ],
    "image": "./images/anime/21450.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 144
  },
  {
    "id": "21355",
    "title": "Re: 제로부터 시작하는 이세계 생활",
    "year": 2016,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "판타지",
      "심리",
      "스릴러"
    ],
    "image": "./images/anime/21355.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 145
  },
  {
    "id": "21459",
    "title": "나의 히어로 아카데미아",
    "year": 2016,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "코미디",
      "모험"
    ],
    "image": "./images/anime/21459.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 146
  },
  {
    "id": "20972",
    "title": "쇼와 겐로쿠 라쿠고 심중",
    "year": 2016,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "드라마"
    ],
    "image": "./images/anime/20972.jpg",
    "favorite": true,
    "favoriteRank": 12,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 147
  },
  {
    "id": "21365",
    "title": "다가시카시",
    "year": 2016,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "코미디",
      "일상"
    ],
    "image": "./images/anime/21365.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 148
  },
  {
    "id": "21428",
    "title": "재와 환상의 그림갈",
    "year": 2016,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "액션",
      "판타지",
      "드라마",
      "모험"
    ],
    "image": "./images/anime/21428.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 149
  },
  {
    "id": "21202",
    "title": "이 멋진 세계에 축복을!",
    "year": 2016,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "판타지",
      "코미디",
      "모험"
    ],
    "image": "./images/anime/21202.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 150
  },
  {
    "id": "21234",
    "title": "나만이 없는 거리",
    "year": 2016,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "미스터리",
      "심리",
      "스릴러",
      "드라마"
    ],
    "image": "./images/anime/21234.jpg",
    "favorite": true,
    "favoriteRank": 2,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 151
  },
  {
    "id": "21265",
    "title": "유희왕 더 다크 사이드 오브 디멘션즈",
    "year": 2016,
    "quarter": -1,
    "quarterLabel": "극장판",
    "genres": [
      "액션",
      "SF",
      "모험"
    ],
    "image": "./images/anime/21265.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 152
  },
  {
    "id": "9260",
    "title": "키즈모노가타리 I 철혈편",
    "year": 2016,
    "quarter": -1,
    "quarterLabel": "극장판",
    "genres": [
      "액션",
      "미스터리",
      "심리",
      "드라마"
    ],
    "image": "./images/anime/9260.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 153
  },
  {
    "id": "21519",
    "title": "너의 이름은.",
    "year": 2016,
    "quarter": -1,
    "quarterLabel": "극장판",
    "genres": [
      "로맨스",
      "드라마"
    ],
    "image": "./images/anime/21519.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 154
  },
  {
    "id": "20954",
    "title": "목소리의 형태",
    "year": 2016,
    "quarter": -1,
    "quarterLabel": "극장판",
    "genres": [
      "로맨스",
      "드라마",
      "일상"
    ],
    "image": "./images/anime/20954.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 155
  },
  {
    "id": "21399",
    "title": "키즈모노가타리 II 열혈편",
    "year": 2016,
    "quarter": -1,
    "quarterLabel": "극장판",
    "genres": [
      "액션",
      "미스터리",
      "심리",
      "드라마"
    ],
    "image": "./images/anime/21399.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 156
  },
  {
    "id": "20881",
    "title": "헤비 오브젝트",
    "year": 2015,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "메카",
      "SF",
      "코미디"
    ],
    "image": "./images/anime/20881.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 157
  },
  {
    "id": "21356",
    "title": "포켓몬스터 XY&Z",
    "year": 2015,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "코미디",
      "모험"
    ],
    "image": "./images/anime/21356.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 158
  },
  {
    "id": "20704",
    "title": "대 마도학원 35시험소대",
    "year": 2015,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "로맨스"
    ],
    "image": "./images/anime/20704.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 159
  },
  {
    "id": "21262",
    "title": "오와리모노가타리",
    "year": 2015,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "미스터리",
      "심리",
      "드라마"
    ],
    "image": "./images/anime/21262.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 160
  },
  {
    "id": "21131",
    "title": "학전도시 애스터리스크",
    "year": 2015,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "SF",
      "로맨스"
    ],
    "image": "./images/anime/21131.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 161
  },
  {
    "id": "21092",
    "title": "낙제 기사의 영웅담",
    "year": 2015,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "로맨스"
    ],
    "image": "./images/anime/21092.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 162
  },
  {
    "id": "21128",
    "title": "노라가미 ARAGOTO",
    "year": 2015,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "코미디",
      "모험"
    ],
    "image": "./images/anime/21128.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 163
  },
  {
    "id": "21087",
    "title": "원펀맨",
    "year": 2015,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "SF",
      "코미디"
    ],
    "image": "./images/anime/21087.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 164
  },
  {
    "id": "21038",
    "title": "요괴소년 호야",
    "year": 2015,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "액션",
      "코미디",
      "드라마",
      "모험"
    ],
    "image": "./images/anime/21038.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 165
  },
  {
    "id": "20754",
    "title": "학교생활!",
    "year": 2015,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "공포",
      "미스터리",
      "심리",
      "일상"
    ],
    "image": "./images/anime/20754.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 166
  },
  {
    "id": "20849",
    "title": "갓 이터",
    "year": 2015,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "액션",
      "SF"
    ],
    "image": "./images/anime/20849.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 167
  },
  {
    "id": "20987",
    "title": "건어물 여동생! 우마루짱",
    "year": 2015,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "코미디",
      "일상"
    ],
    "image": "./images/anime/20987.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 168
  },
  {
    "id": "20807",
    "title": "감옥학원",
    "year": 2015,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "코미디"
    ],
    "image": "./images/anime/20807.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 169
  },
  {
    "id": "20832",
    "title": "오버로드",
    "year": 2015,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "액션",
      "판타지",
      "모험"
    ],
    "image": "./images/anime/20832.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 170
  },
  {
    "id": "20997",
    "title": "샤를로트",
    "year": 2015,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "SF",
      "로맨스",
      "코미디",
      "드라마"
    ],
    "image": "./images/anime/20997.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 171
  },
  {
    "id": "20876",
    "title": "니세코이:",
    "year": 2015,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "로맨스",
      "코미디",
      "일상"
    ],
    "image": "./images/anime/20876.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 172
  },
  {
    "id": "20727",
    "title": "혈계전선",
    "year": 2015,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "코미디"
    ],
    "image": "./images/anime/20727.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 173
  },
  {
    "id": "20872",
    "title": "플라스틱 메모리즈",
    "year": 2015,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "SF",
      "로맨스",
      "드라마",
      "일상"
    ],
    "image": "./images/anime/20872.jpg",
    "favorite": true,
    "favoriteRank": 10,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 174
  },
  {
    "id": "20829",
    "title": "종말의 세라프",
    "year": 2015,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "판타지",
      "미스터리",
      "드라마"
    ],
    "image": "./images/anime/20829.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 175
  },
  {
    "id": "20698",
    "title": "역시 내 청춘의 러브 코미디는 잘못됐다. 속",
    "year": 2015,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "로맨스",
      "코미디",
      "드라마",
      "일상"
    ],
    "image": "./images/anime/20698.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 176
  },
  {
    "id": "20920",
    "title": "던전에서 만남을 추구하면 안 되는 걸까",
    "year": 2015,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "판타지",
      "로맨스",
      "코미디"
    ],
    "image": "./images/anime/20920.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 177
  },
  {
    "id": "20923",
    "title": "식극의 소마",
    "year": 2015,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "코미디"
    ],
    "image": "./images/anime/20923.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 178
  },
  {
    "id": "20652",
    "title": "듀라라라!!×2",
    "year": 2015,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "액션",
      "미스터리"
    ],
    "image": "./images/anime/20652.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 179
  },
  {
    "id": "20657",
    "title": "시원찮은 그녀를 위한 육성방법",
    "year": 2015,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "로맨스",
      "코미디",
      "일상"
    ],
    "image": "./images/anime/20657.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 180
  },
  {
    "id": "20850",
    "title": "도쿄 구울 √A",
    "year": 2015,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "액션",
      "공포",
      "미스터리",
      "심리"
    ],
    "image": "./images/anime/20850.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 181
  },
  {
    "id": "20931",
    "title": "데스 퍼레이드",
    "year": 2015,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "미스터리",
      "심리",
      "스릴러",
      "드라마"
    ],
    "image": "./images/anime/20931.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 182
  },
  {
    "id": "20755",
    "title": "암살교실",
    "year": 2015,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "액션",
      "코미디",
      "드라마"
    ],
    "image": "./images/anime/20755.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 183
  },
  {
    "id": "20918",
    "title": "츠키모노가타리",
    "year": 2014,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "미스터리",
      "코미디"
    ],
    "image": "./images/anime/20918.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 184
  },
  {
    "id": "20602",
    "title": "아마기 브릴리언트 파크",
    "year": 2014,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "판타지",
      "코미디"
    ],
    "image": "./images/anime/20602.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 185
  },
  {
    "id": "19603",
    "title": "페이트/스테이 나이트 UBW",
    "year": 2014,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지"
    ],
    "image": "./images/anime/19603.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 186
  },
  {
    "id": "20623",
    "title": "기생수",
    "year": 2014,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "공포",
      "SF",
      "심리"
    ],
    "image": "./images/anime/20623.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 187
  },
  {
    "id": "20789",
    "title": "일곱 개의 대죄",
    "year": 2014,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "코미디",
      "모험"
    ],
    "image": "./images/anime/20789.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 188
  },
  {
    "id": "20575",
    "title": "하나야마타",
    "year": 2014,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "코미디",
      "일상"
    ],
    "image": "./images/anime/20575.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 189
  },
  {
    "id": "20593",
    "title": "하나모노가타리",
    "year": 2014,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "미스터리",
      "심리",
      "드라마"
    ],
    "image": "./images/anime/20593.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 190
  },
  {
    "id": "20668",
    "title": "월간순정 노자키 군",
    "year": 2014,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "로맨스",
      "코미디",
      "일상"
    ],
    "image": "./images/anime/20668.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 191
  },
  {
    "id": "20594",
    "title": "소드 아트 온라인 Ⅱ",
    "year": 2014,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "액션",
      "판타지",
      "SF",
      "모험"
    ],
    "image": "./images/anime/20594.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 192
  },
  {
    "id": "20613",
    "title": "아카메가 벤다!",
    "year": 2014,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "액션",
      "판타지",
      "공포",
      "심리"
    ],
    "image": "./images/anime/20613.jpg",
    "favorite": true,
    "favoriteRank": 7,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 193
  },
  {
    "id": "20605",
    "title": "도쿄 구울",
    "year": 2014,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "액션",
      "공포",
      "미스터리",
      "심리"
    ],
    "image": "./images/anime/20605.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 194
  },
  {
    "id": "20547",
    "title": "소울 이터 NOT!",
    "year": 2014,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "판타지",
      "코미디"
    ],
    "image": "./images/anime/20547.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 195
  },
  {
    "id": "20556",
    "title": "류가죠 나나나의 매장금",
    "year": 2014,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "미스터리",
      "코미디"
    ],
    "image": "./images/anime/20556.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 196
  },
  {
    "id": "19111",
    "title": "러브 라이브! 2기",
    "year": 2014,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "음악",
      "일상"
    ],
    "image": "./images/anime/19111.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 197
  },
  {
    "id": "20541",
    "title": "메카쿠시티 액터즈",
    "year": 2014,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "SF",
      "로맨스",
      "코미디"
    ],
    "image": "./images/anime/20541.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 198
  },
  {
    "id": "20534",
    "title": "극흑의 브륜힐데",
    "year": 2014,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "판타지",
      "SF",
      "미스터리",
      "드라마"
    ],
    "image": "./images/anime/20534.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 199
  },
  {
    "id": "20457",
    "title": "블랙 불릿",
    "year": 2014,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "SF",
      "미스터리",
      "드라마"
    ],
    "image": "./images/anime/20457.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 200
  },
  {
    "id": "20474",
    "title": "죠죠의 기묘한 모험: 스타더스트 크루세이더즈",
    "year": 2014,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "모험"
    ],
    "image": "./images/anime/20474.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 201
  },
  {
    "id": "20458",
    "title": "마법과고교의 열등생",
    "year": 2014,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "SF",
      "로맨스"
    ],
    "image": "./images/anime/20458.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 202
  },
  {
    "id": "19815",
    "title": "노 게임 노 라이프",
    "year": 2014,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "판타지",
      "코미디",
      "모험"
    ],
    "image": "./images/anime/19815.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 203
  },
  {
    "id": "20031",
    "title": "디플래그!",
    "year": 2014,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "코미디"
    ],
    "image": "./images/anime/20031.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 204
  },
  {
    "id": "20483",
    "title": "미확인으로 진행형",
    "year": 2014,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "로맨스",
      "코미디",
      "일상"
    ],
    "image": "./images/anime/20483.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 205
  },
  {
    "id": "18897",
    "title": "니세코이",
    "year": 2014,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "로맨스",
      "코미디",
      "일상"
    ],
    "image": "./images/anime/18897.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 206
  },
  {
    "id": "20447",
    "title": "노라가미",
    "year": 2014,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "액션",
      "코미디",
      "모험"
    ],
    "image": "./images/anime/20447.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 207
  },
  {
    "id": "17247",
    "title": "기교소녀는 상처받지 않아",
    "year": 2013,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지"
    ],
    "image": "./images/anime/17247.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 208
  },
  {
    "id": "19369",
    "title": "아웃브레이크 컴퍼니",
    "year": 2013,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "판타지",
      "코미디"
    ],
    "image": "./images/anime/19369.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 209
  },
  {
    "id": "18277",
    "title": "스트라이크 더 블러드",
    "year": 2013,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지"
    ],
    "image": "./images/anime/18277.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 210
  },
  {
    "id": "18115",
    "title": "마기: 마그노슈타트 편",
    "year": 2013,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "모험"
    ],
    "image": "./images/anime/18115.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 211
  },
  {
    "id": "17265",
    "title": "로그 호라이즌",
    "year": 2013,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "모험"
    ],
    "image": "./images/anime/17265.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 212
  },
  {
    "id": "18679",
    "title": "킬라킬",
    "year": 2013,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "코미디"
    ],
    "image": "./images/anime/18679.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 213
  },
  {
    "id": "16706",
    "title": "신만이 아는 세계 여신편",
    "year": 2013,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "로맨스",
      "코미디"
    ],
    "image": "./images/anime/16706.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 214
  },
  {
    "id": "16742",
    "title": "내가 인기 없는 건 아무리 생각해도 너희들 탓이야!",
    "year": 2013,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "코미디",
      "일상"
    ],
    "image": "./images/anime/16742.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 215
  },
  {
    "id": "17074",
    "title": "모노가타리 시리즈 세컨드 시즌",
    "year": 2013,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "미스터리",
      "심리",
      "로맨스",
      "코미디"
    ],
    "image": "./images/anime/17074.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 216
  },
  {
    "id": "16592",
    "title": "단간론파 -희망의 학원과 절망의 고교생-",
    "year": 2013,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "공포",
      "SF",
      "미스터리",
      "심리"
    ],
    "image": "./images/anime/16592.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 217
  },
  {
    "id": "15699",
    "title": "기어와라! 냐루코 양 W",
    "year": 2013,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "SF",
      "로맨스",
      "코미디"
    ],
    "image": "./images/anime/15699.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 218
  },
  {
    "id": "16049",
    "title": "어떤 과학의 초전자포 S",
    "year": 2013,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "판타지",
      "SF"
    ],
    "image": "./images/anime/16049.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 219
  },
  {
    "id": "14813",
    "title": "역시 내 청춘의 러브 코미디는 잘못됐다.",
    "year": 2013,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "로맨스",
      "코미디",
      "드라마",
      "일상"
    ],
    "image": "./images/anime/14813.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 220
  },
  {
    "id": "15583",
    "title": "데이트 어 라이브",
    "year": 2013,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "메카",
      "판타지",
      "SF"
    ],
    "image": "./images/anime/15583.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 221
  },
  {
    "id": "15809",
    "title": "알바 뛰는 마왕님!",
    "year": 2013,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "판타지",
      "로맨스",
      "코미디",
      "일상"
    ],
    "image": "./images/anime/15809.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 222
  },
  {
    "id": "16498",
    "title": "진격의 거인",
    "year": 2013,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "판타지",
      "미스터리",
      "드라마"
    ],
    "image": "./images/anime/16498.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 223
  },
  {
    "id": "14833",
    "title": "마오유우 마왕용사",
    "year": 2013,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "판타지",
      "로맨스",
      "모험"
    ],
    "image": "./images/anime/14833.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 224
  },
  {
    "id": "14967",
    "title": "나는 친구가 적다 NEXT",
    "year": 2013,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "로맨스",
      "코미디",
      "일상"
    ],
    "image": "./images/anime/14967.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 225
  },
  {
    "id": "15051",
    "title": "러브 라이브!",
    "year": 2013,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "음악",
      "일상"
    ],
    "image": "./images/anime/15051.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 226
  },
  {
    "id": "15315",
    "title": "문제아들이 다른 세계에서 온다는 모양인데요?",
    "year": 2013,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "액션",
      "판타지",
      "코미디"
    ],
    "image": "./images/anime/15315.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 227
  },
  {
    "id": "11743",
    "title": "어떤 마술의 금서목록 : 엔디미온의 기적",
    "year": 2013,
    "quarter": -1,
    "quarterLabel": "극장판",
    "genres": [
      "액션",
      "SF",
      "음악"
    ],
    "image": "./images/anime/11743.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 228
  },
  {
    "id": "11577",
    "title": "슈타인즈 게이트: 부하영역의 데자뷰",
    "year": 2013,
    "quarter": -1,
    "quarterLabel": "극장판",
    "genres": [
      "SF",
      "스릴러",
      "로맨스",
      "드라마"
    ],
    "image": "./images/anime/11577.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 229
  },
  {
    "id": "13599",
    "title": "로보틱스 노츠",
    "year": 2012,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "메카",
      "SF",
      "드라마"
    ],
    "image": "./images/anime/13599.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 230
  },
  {
    "id": "14075",
    "title": "절원의 템페스트",
    "year": 2012,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "미스터리",
      "로맨스"
    ],
    "image": "./images/anime/14075.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 231
  },
  {
    "id": "15689",
    "title": "네코모노가타리 (흑)",
    "year": 2012,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "미스터리",
      "심리",
      "로맨스",
      "드라마"
    ],
    "image": "./images/anime/15689.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 232
  },
  {
    "id": "14345",
    "title": "BTOOOM!",
    "year": 2012,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "SF",
      "심리"
    ],
    "image": "./images/anime/14345.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 233
  },
  {
    "id": "14467",
    "title": "K",
    "year": 2012,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "미스터리"
    ],
    "image": "./images/anime/14467.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 234
  },
  {
    "id": "14513",
    "title": "마기",
    "year": 2012,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "모험"
    ],
    "image": "./images/anime/14513.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 235
  },
  {
    "id": "14741",
    "title": "중2병이라도 사랑이 하고 싶어!",
    "year": 2012,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "로맨스",
      "코미디",
      "드라마",
      "일상"
    ],
    "image": "./images/anime/14741.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 236
  },
  {
    "id": "13601",
    "title": "PSYCHO-PASS",
    "year": 2012,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "SF",
      "심리",
      "스릴러"
    ],
    "image": "./images/anime/13601.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 237
  },
  {
    "id": "14719",
    "title": "죠죠의 기묘한 모험",
    "year": 2012,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "모험"
    ],
    "image": "./images/anime/14719.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 238
  },
  {
    "id": "12175",
    "title": "사랑과 선거와 초콜릿",
    "year": 2012,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "로맨스",
      "드라마"
    ],
    "image": "./images/anime/12175.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 239
  },
  {
    "id": "11757",
    "title": "소드 아트 온라인",
    "year": 2012,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "액션",
      "판타지",
      "로맨스",
      "모험"
    ],
    "image": "./images/anime/11757.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 240
  },
  {
    "id": "10790",
    "title": "이것은 좀비입니까? 오브 더 데드",
    "year": 2012,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "코미디"
    ],
    "image": "./images/anime/10790.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 241
  },
  {
    "id": "11785",
    "title": "기어와라! 냐루코 양",
    "year": 2012,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "SF",
      "로맨스",
      "코미디"
    ],
    "image": "./images/anime/11785.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 242
  },
  {
    "id": "11499",
    "title": "산카레아",
    "year": 2012,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "공포",
      "로맨스",
      "코미디"
    ],
    "image": "./images/anime/11499.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 243
  },
  {
    "id": "11759",
    "title": "액셀 월드",
    "year": 2012,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "SF",
      "로맨스"
    ],
    "image": "./images/anime/11759.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 244
  },
  {
    "id": "12189",
    "title": "빙과",
    "year": 2012,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "미스터리",
      "로맨스",
      "일상"
    ],
    "image": "./images/anime/12189.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 245
  },
  {
    "id": "12651",
    "title": "골판지 전사 W",
    "year": 2012,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "액션",
      "메카"
    ],
    "image": "./images/anime/12651.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 246
  },
  {
    "id": "11285",
    "title": "블랙★록 슈터",
    "year": 2012,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "액션",
      "판타지",
      "심리",
      "드라마"
    ],
    "image": "./images/anime/11285.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 247
  },
  {
    "id": "11597",
    "title": "니세모노가타리",
    "year": 2012,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "미스터리",
      "심리",
      "코미디",
      "드라마"
    ],
    "image": "./images/anime/11597.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 248
  },
  {
    "id": "11111",
    "title": "어나더",
    "year": 2012,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "공포",
      "미스터리",
      "심리",
      "스릴러"
    ],
    "image": "./images/anime/11111.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 249
  },
  {
    "id": "6773",
    "title": "작안의 샤나 Ⅲ-FINAL-",
    "year": 2011,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "로맨스"
    ],
    "image": "./images/anime/6773.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 250
  },
  {
    "id": "10396",
    "title": "도시락 전쟁",
    "year": 2011,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "코미디"
    ],
    "image": "./images/anime/10396.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 251
  },
  {
    "id": "10719",
    "title": "나는 친구가 적다",
    "year": 2011,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "로맨스",
      "코미디",
      "일상"
    ],
    "image": "./images/anime/10719.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 252
  },
  {
    "id": "10800",
    "title": "치하야후루",
    "year": 2011,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "스포츠",
      "로맨스",
      "드라마",
      "일상"
    ],
    "image": "./images/anime/10800.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 253
  },
  {
    "id": "10087",
    "title": "페이트 제로",
    "year": 2011,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "드라마"
    ],
    "image": "./images/anime/10087.png",
    "favorite": true,
    "favoriteRank": 6,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 254
  },
  {
    "id": "10793",
    "title": "길티 크라운",
    "year": 2011,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "메카",
      "SF",
      "심리"
    ],
    "image": "./images/anime/10793.jpg",
    "favorite": true,
    "favoriteRank": 3,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 255
  },
  {
    "id": "10620",
    "title": "미래일기",
    "year": 2011,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "공포",
      "미스터리",
      "심리"
    ],
    "image": "./images/anime/10620.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 256
  },
  {
    "id": "11061",
    "title": "헌터×헌터",
    "year": 2011,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "모험"
    ],
    "image": "./images/anime/11061.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 257
  },
  {
    "id": "10278",
    "title": "아이돌 마스터",
    "year": 2011,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "코미디",
      "드라마",
      "음악",
      "일상"
    ],
    "image": "./images/anime/10278.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 258
  },
  {
    "id": "8516",
    "title": "바보와 시험과 소환수 이!",
    "year": 2011,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "로맨스",
      "코미디",
      "일상"
    ],
    "image": "./images/anime/8516.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 259
  },
  {
    "id": "10110",
    "title": "마요치키!",
    "year": 2011,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "로맨스",
      "코미디"
    ],
    "image": "./images/anime/10110.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 260
  },
  {
    "id": "7081",
    "title": "골판지 전사",
    "year": 2011,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "메카",
      "SF",
      "코미디"
    ],
    "image": "./images/anime/7081.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 261
  },
  {
    "id": "9863",
    "title": "스켓 댄스",
    "year": 2011,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "코미디",
      "드라마",
      "일상"
    ],
    "image": "./images/anime/9863.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 262
  },
  {
    "id": "10271",
    "title": "역경무뢰 카이지 파계록편",
    "year": 2011,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "심리",
      "스릴러"
    ],
    "image": "./images/anime/10271.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 263
  },
  {
    "id": "10163",
    "title": "C",
    "year": 2011,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "미스터리",
      "스릴러"
    ],
    "image": "./images/anime/10163.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 264
  },
  {
    "id": "8630",
    "title": "비탄의 아리아",
    "year": 2011,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "로맨스",
      "코미디"
    ],
    "image": "./images/anime/8630.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 265
  },
  {
    "id": "10080",
    "title": "신만이 아는 세계 Ⅱ",
    "year": 2011,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "로맨스",
      "코미디"
    ],
    "image": "./images/anime/10080.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 266
  },
  {
    "id": "9289",
    "title": "꽃이 피는 첫걸음",
    "year": 2011,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "드라마",
      "일상"
    ],
    "image": "./images/anime/9289.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 267
  },
  {
    "id": "9989",
    "title": "그날 본 꽃의 이름을 우리는 아직 모른다",
    "year": 2011,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "로맨스",
      "드라마",
      "일상"
    ],
    "image": "./images/anime/9989.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 268
  },
  {
    "id": "9253",
    "title": "슈타인즈 게이트",
    "year": 2011,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "SF",
      "심리",
      "스릴러",
      "드라마"
    ],
    "image": "./images/anime/9253.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 269
  },
  {
    "id": "9919",
    "title": "청의 엑소시스트",
    "year": 2011,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "판타지"
    ],
    "image": "./images/anime/9919.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 270
  },
  {
    "id": "8841",
    "title": "이것은 좀비입니까?",
    "year": 2011,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "액션",
      "코미디"
    ],
    "image": "./images/anime/8841.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 271
  },
  {
    "id": "9513",
    "title": "벨제바브",
    "year": 2011,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "액션",
      "코미디"
    ],
    "image": "./images/anime/9513.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 272
  },
  {
    "id": "9756",
    "title": "마법소녀 마도카☆마기카",
    "year": 2011,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "액션",
      "판타지",
      "심리",
      "스릴러"
    ],
    "image": "./images/anime/9756.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 273
  },
  {
    "id": "9107",
    "title": "포켓몬스터 베스트위시",
    "year": 2010,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "코미디",
      "모험"
    ],
    "image": "./images/anime/9107.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 274
  },
  {
    "id": "8937",
    "title": "어떤 마술의 금서목록 Ⅱ",
    "year": 2010,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "SF"
    ],
    "image": "./images/anime/8937.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 275
  },
  {
    "id": "8795",
    "title": "팬티 & 스타킹 with 가터벨트",
    "year": 2010,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "코미디"
    ],
    "image": "./images/anime/8795.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 276
  },
  {
    "id": "8769",
    "title": "내 여동생이 이렇게 귀여울 리가 없어",
    "year": 2010,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "코미디",
      "일상"
    ],
    "image": "./images/anime/8769.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 277
  },
  {
    "id": "8525",
    "title": "신만이 아는 세계",
    "year": 2010,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "로맨스",
      "코미디"
    ],
    "image": "./images/anime/8525.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 278
  },
  {
    "id": "7769",
    "title": "오오카미 씨와 7명의 동료들",
    "year": 2010,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "로맨스",
      "코미디"
    ],
    "image": "./images/anime/7769.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 279
  },
  {
    "id": "6956",
    "title": "워킹!!",
    "year": 2010,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "코미디",
      "일상"
    ],
    "image": "./images/anime/6956.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 280
  },
  {
    "id": "7791",
    "title": "케이온!!",
    "year": 2010,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "코미디",
      "음악",
      "일상"
    ],
    "image": "./images/anime/7791.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 281
  },
  {
    "id": "6547",
    "title": "엔젤 비트!",
    "year": 2010,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "코미디",
      "드라마"
    ],
    "image": "./images/anime/6547.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 282
  },
  {
    "id": "6347",
    "title": "바보와 시험과 소환수",
    "year": 2010,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "로맨스",
      "코미디"
    ],
    "image": "./images/anime/6347.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 283
  },
  {
    "id": "6594",
    "title": "카타나가타리",
    "year": 2010,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "액션",
      "로맨스",
      "모험"
    ],
    "image": "./images/anime/6594.png",
    "favorite": true,
    "favoriteRank": 5,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 284
  },
  {
    "id": "6746",
    "title": "듀라라라!!",
    "year": 2010,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "액션",
      "미스터리"
    ],
    "image": "./images/anime/6746.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 285
  },
  {
    "id": "6573",
    "title": "DTB -유성의 제미니-",
    "year": 2009,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "SF",
      "미스터리",
      "심리"
    ],
    "image": "./images/anime/6573.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 286
  },
  {
    "id": "6213",
    "title": "어떤 과학의 초전자포",
    "year": 2009,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "SF"
    ],
    "image": "./images/anime/6213.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 287
  },
  {
    "id": "6702",
    "title": "페어리 테일",
    "year": 2009,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "코미디",
      "모험"
    ],
    "image": "./images/anime/6702.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 288
  },
  {
    "id": "5081",
    "title": "바케모노가타리",
    "year": 2009,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "미스터리",
      "심리",
      "로맨스",
      "코미디"
    ],
    "image": "./images/anime/5081.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 289
  },
  {
    "id": "5680",
    "title": "케이온!",
    "year": 2009,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "코미디",
      "음악",
      "일상"
    ],
    "image": "./images/anime/5680.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 290
  },
  {
    "id": "5114",
    "title": "강철의 연금술사 BROTHERHOOD",
    "year": 2009,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "판타지",
      "드라마",
      "모험"
    ],
    "image": "./images/anime/5114.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 291
  },
  {
    "id": "5231",
    "title": "썬더 일레븐",
    "year": 2008,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "스포츠"
    ],
    "image": "./images/anime/5231.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 292
  },
  {
    "id": "4181",
    "title": "클라나드 애프터 스토리",
    "year": 2008,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "로맨스",
      "드라마",
      "일상"
    ],
    "image": "./images/anime/4181.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 293
  },
  {
    "id": "4654",
    "title": "어떤 마술의 금서목록",
    "year": 2008,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "SF"
    ],
    "image": "./images/anime/4654.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 294
  },
  {
    "id": "4224",
    "title": "토라도라!",
    "year": 2008,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "로맨스",
      "코미디",
      "드라마",
      "일상"
    ],
    "image": "./images/anime/4224.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 295
  },
  {
    "id": "3972",
    "title": "유희왕 5D's",
    "year": 2008,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "SF"
    ],
    "image": "./images/anime/3972.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 296
  },
  {
    "id": "3455",
    "title": "투 러브 트러블",
    "year": 2008,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "SF",
      "로맨스",
      "코미디"
    ],
    "image": "./images/anime/3455.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 297
  },
  {
    "id": "3588",
    "title": "소울 이터",
    "year": 2008,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "판타지",
      "코미디",
      "모험"
    ],
    "image": "./images/anime/3588.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 298
  },
  {
    "id": "2904",
    "title": "코드 기아스 반역의 를르슈 R2",
    "year": 2008,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "메카",
      "SF",
      "스릴러"
    ],
    "image": "./images/anime/2904.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 299
  },
  {
    "id": "2787",
    "title": "작안의 샤나 Ⅱ",
    "year": 2007,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "로맨스",
      "코미디"
    ],
    "image": "./images/anime/2787.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 300
  },
  {
    "id": "3002",
    "title": "역경무뢰 카이지",
    "year": 2007,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "심리",
      "스릴러"
    ],
    "image": "./images/anime/3002.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 301
  },
  {
    "id": "2167",
    "title": "클라나드",
    "year": 2007,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "로맨스",
      "코미디",
      "드라마",
      "일상"
    ],
    "image": "./images/anime/2167.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 302
  },
  {
    "id": "1889",
    "title": "쓰르라미 울 적에 해",
    "year": 2007,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "공포",
      "미스터리",
      "심리",
      "스릴러"
    ],
    "image": "./images/anime/1889.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 303
  },
  {
    "id": "1818",
    "title": "클레이모어",
    "year": 2007,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "판타지",
      "공포",
      "모험"
    ],
    "image": "./images/anime/1818.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 304
  },
  {
    "id": "2025",
    "title": "DTB -흑의 계약자-",
    "year": 2007,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "SF",
      "미스터리"
    ],
    "image": "./images/anime/2025.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 305
  },
  {
    "id": "2001",
    "title": "천원돌파 그렌라간",
    "year": 2007,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "메카",
      "SF",
      "로맨스"
    ],
    "image": "./images/anime/2001.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 306
  },
  {
    "id": "1735",
    "title": "나루토 질풍전",
    "year": 2007,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "액션",
      "판타지",
      "코미디",
      "드라마"
    ],
    "image": "./images/anime/1735.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 307
  },
  {
    "id": "1536",
    "title": "무장연금",
    "year": 2006,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "코미디"
    ],
    "image": "./images/anime/1536.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 308
  },
  {
    "id": "1565",
    "title": "포켓몬스터 DP",
    "year": 2006,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "코미디",
      "모험"
    ],
    "image": "./images/anime/1565.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 309
  },
  {
    "id": "1559",
    "title": "사상최강의 제자 켄이치",
    "year": 2006,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "코미디"
    ],
    "image": "./images/anime/1559.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 310
  },
  {
    "id": "1604",
    "title": "가정교사 히트맨 리본!",
    "year": 2006,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "SF",
      "코미디",
      "일상"
    ],
    "image": "./images/anime/1604.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 311
  },
  {
    "id": "1482",
    "title": "디 그레이맨",
    "year": 2006,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "드라마",
      "모험"
    ],
    "image": "./images/anime/1482.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 312
  },
  {
    "id": "1535",
    "title": "데스노트",
    "year": 2006,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "미스터리",
      "심리",
      "스릴러"
    ],
    "image": "./images/anime/1535.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 313
  },
  {
    "id": "1575",
    "title": "코드 기아스 반역의 를르슈",
    "year": 2006,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "메카",
      "SF",
      "스릴러"
    ],
    "image": "./images/anime/1575.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 314
  },
  {
    "id": "2786",
    "title": "격부술사 요역문",
    "year": 2006,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "판타지",
      "코미디",
      "모험"
    ],
    "image": "./images/anime/2786.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 315
  },
  {
    "id": "934",
    "title": "쓰르라미 울 적에",
    "year": 2006,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "공포",
      "미스터리",
      "심리",
      "스릴러"
    ],
    "image": "./images/anime/934.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 316
  },
  {
    "id": "849",
    "title": "스즈미야 하루히의 우울",
    "year": 2006,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "SF",
      "미스터리",
      "코미디",
      "일상"
    ],
    "image": "./images/anime/849.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 317
  },
  {
    "id": "889",
    "title": "블랙 라군",
    "year": 2006,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "스릴러",
      "드라마",
      "모험"
    ],
    "image": "./images/anime/889.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 318
  },
  {
    "id": "918",
    "title": "은혼",
    "year": 2006,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "SF",
      "코미디",
      "드라마"
    ],
    "image": "./images/anime/918.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 319
  },
  {
    "id": "356",
    "title": "페이트/스테이 나이트",
    "year": 2006,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "액션",
      "판타지",
      "로맨스"
    ],
    "image": "./images/anime/356.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 320
  },
  {
    "id": "355",
    "title": "작안의 샤나",
    "year": 2005,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "로맨스",
      "코미디"
    ],
    "image": "./images/anime/355.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 321
  },
  {
    "id": "73",
    "title": "풀 메탈 패닉! The Second Raid",
    "year": 2005,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "액션",
      "메카",
      "SF"
    ],
    "image": "./images/anime/73.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 322
  },
  {
    "id": "79",
    "title": "셔플!",
    "year": 2005,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "판타지",
      "로맨스",
      "코미디",
      "드라마"
    ],
    "image": "./images/anime/79.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 323
  },
  {
    "id": "8687",
    "title": "신 도라에몽",
    "year": 2005,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "SF",
      "코미디",
      "모험"
    ],
    "image": "./images/anime/8687.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 324
  },
  {
    "id": "479",
    "title": "우에키의 법칙",
    "year": 2005,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "코미디",
      "드라마",
      "모험"
    ],
    "image": "./images/anime/479.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 325
  },
  {
    "id": "237",
    "title": "교향시편 유레카 세븐",
    "year": 2005,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "메카",
      "SF",
      "로맨스"
    ],
    "image": "./images/anime/237.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 326
  },
  {
    "id": "1196",
    "title": "개그만화 보기 좋은 날",
    "year": 2005,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "코미디"
    ],
    "image": "./images/anime/1196.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 327
  },
  {
    "id": "157",
    "title": "마법선생 네기마!",
    "year": 2005,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "판타지",
      "로맨스",
      "코미디"
    ],
    "image": "./images/anime/157.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 328
  },
  {
    "id": "28",
    "title": "따끈따끈 베이커리",
    "year": 2004,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "코미디"
    ],
    "image": "./images/anime/28.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 329
  },
  {
    "id": "482",
    "title": "유희왕 듀얼몬스터즈 GX",
    "year": 2004,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "코미디"
    ],
    "image": "./images/anime/482.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 330
  },
  {
    "id": "269",
    "title": "블리치",
    "year": 2004,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "모험"
    ],
    "image": "./images/anime/269.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 331
  },
  {
    "id": "516",
    "title": "개구리 중사 케로로",
    "year": 2004,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "SF",
      "코미디"
    ],
    "image": "./images/anime/516.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 332
  },
  {
    "id": "384",
    "title": "간츠",
    "year": 2004,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "공포",
      "SF",
      "심리"
    ],
    "image": "./images/anime/384.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 333
  },
  {
    "id": "205",
    "title": "사무라이 참프루",
    "year": 2004,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "코미디",
      "모험"
    ],
    "image": "./images/anime/205.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 334
  },
  {
    "id": "2789",
    "title": "구슬대전 배틀비드맨",
    "year": 2004,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "판타지",
      "모험"
    ],
    "image": "./images/anime/2789.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 335
  },
  {
    "id": "1050",
    "title": "무적코털 보보보",
    "year": 2003,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "SF",
      "코미디",
      "모험"
    ],
    "image": "./images/anime/1050.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 336
  },
  {
    "id": "169",
    "title": "진월담 월희",
    "year": 2003,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "공포",
      "미스터리",
      "로맨스"
    ],
    "image": "./images/anime/169.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 337
  },
  {
    "id": "121",
    "title": "강철의 연금술사",
    "year": 2003,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "드라마",
      "모험"
    ],
    "image": "./images/anime/121.png",
    "favorite": true,
    "favoriteRank": 0,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 338
  },
  {
    "id": "72",
    "title": "풀 메탈 패닉? 후못후",
    "year": 2003,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "액션",
      "로맨스",
      "코미디"
    ],
    "image": "./images/anime/72.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 339
  },
  {
    "id": "2735",
    "title": "포트리스",
    "year": 2003,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "메카",
      "SF"
    ],
    "image": "./images/anime/2735.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 340
  },
  {
    "id": "250",
    "title": "금색의 갓슈벨!!",
    "year": 2003,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "코미디",
      "모험"
    ],
    "image": "./images/anime/250.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 341
  },
  {
    "id": "18447",
    "title": "스피어즈",
    "year": 2003,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "액션",
      "판타지"
    ],
    "image": "./images/anime/18447.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 342
  },
  {
    "id": "1668",
    "title": "팽이대전 G블레이드",
    "year": 2003,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "액션",
      "SF",
      "스포츠",
      "코미디"
    ],
    "image": "./images/anime/1668.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 343
  },
  {
    "id": "1564",
    "title": "포켓몬스터 AG",
    "year": 2002,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "코미디",
      "모험"
    ],
    "image": "./images/anime/1564.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 344
  },
  {
    "id": "20",
    "title": "나루토",
    "year": 2002,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "코미디",
      "드라마"
    ],
    "image": "./images/anime/20.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 345
  },
  {
    "id": "8956",
    "title": "마하특급 델타트레인",
    "year": 2002,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "모험"
    ],
    "image": "./images/anime/8956.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 346
  },
  {
    "id": "3271",
    "title": "미래전사 그레이트 건더",
    "year": 2002,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "메카",
      "SF",
      "모험"
    ],
    "image": "./images/anime/3271.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 347
  },
  {
    "id": "3006",
    "title": "아따맘마",
    "year": 2002,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "코미디"
    ],
    "image": "./images/anime/3006.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 348
  },
  {
    "id": "1132",
    "title": "디지몬 프론티어",
    "year": 2002,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "판타지",
      "SF",
      "드라마"
    ],
    "image": "./images/anime/1132.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 349
  },
  {
    "id": "66",
    "title": "아즈망가 대왕",
    "year": 2002,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "코미디",
      "일상"
    ],
    "image": "./images/anime/66.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 350
  },
  {
    "id": "1707",
    "title": "쾌걸 근육맨 2세",
    "year": 2002,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "액션",
      "SF",
      "스포츠",
      "코미디"
    ],
    "image": "./images/anime/1707.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 351
  },
  {
    "id": "1669",
    "title": "탑블레이드 V",
    "year": 2002,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "액션",
      "SF",
      "스포츠",
      "코미디"
    ],
    "image": "./images/anime/1669.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 352
  },
  {
    "id": "71",
    "title": "풀 메탈 패닉!",
    "year": 2002,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "액션",
      "메카",
      "SF",
      "코미디"
    ],
    "image": "./images/anime/71.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 353
  },
  {
    "id": "2287",
    "title": "요리킹 조리킹",
    "year": 2001,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "판타지",
      "코미디",
      "모험"
    ],
    "image": "./images/anime/2287.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 354
  },
  {
    "id": "2390",
    "title": "별의 커비",
    "year": 2001,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "코미디",
      "일상"
    ],
    "image": "./images/anime/2390.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 355
  },
  {
    "id": "135",
    "title": "고스트 바둑왕",
    "year": 2001,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "스포츠",
      "코미디"
    ],
    "image": "./images/anime/135.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 356
  },
  {
    "id": "270",
    "title": "헬싱",
    "year": 2001,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "공포"
    ],
    "image": "./images/anime/270.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 357
  },
  {
    "id": "154",
    "title": "샤먼 킹",
    "year": 2001,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "액션",
      "코미디",
      "드라마",
      "모험"
    ],
    "image": "./images/anime/154.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 358
  },
  {
    "id": "874",
    "title": "디지몬 테이머즈",
    "year": 2001,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "판타지",
      "SF",
      "드라마"
    ],
    "image": "./images/anime/874.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 359
  },
  {
    "id": "288",
    "title": "탑블레이드",
    "year": 2001,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "액션",
      "SF",
      "스포츠",
      "코미디"
    ],
    "image": "./images/anime/288.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 360
  },
  {
    "id": "1281",
    "title": "학교괴담",
    "year": 2000,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "공포",
      "미스터리"
    ],
    "image": "./images/anime/1281.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 361
  },
  {
    "id": "249",
    "title": "이누야샤",
    "year": 2000,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "로맨스",
      "코미디"
    ],
    "image": "./images/anime/249.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 362
  },
  {
    "id": "508",
    "title": "방가방가 햄토리",
    "year": 2000,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "코미디",
      "일상",
      "모험"
    ],
    "image": "./images/anime/508.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 363
  },
  {
    "id": "2566",
    "title": "우주인 타로",
    "year": 2000,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "코미디"
    ],
    "image": "./images/anime/2566.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 364
  },
  {
    "id": "233",
    "title": "다!다!다!",
    "year": 2000,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "SF",
      "코미디"
    ],
    "image": "./images/anime/233.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 365
  },
  {
    "id": "1313",
    "title": "파워 디지몬",
    "year": 2000,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "판타지",
      "SF",
      "코미디"
    ],
    "image": "./images/anime/1313.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 366
  },
  {
    "id": "481",
    "title": "유희왕 듀얼몬스터즈",
    "year": 2000,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "판타지",
      "모험"
    ],
    "image": "./images/anime/481.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 367
  },
  {
    "id": "21",
    "title": "원피스",
    "year": 1999,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "판타지",
      "코미디",
      "드라마"
    ],
    "image": "./images/anime/21.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 368
  },
  {
    "id": "1469",
    "title": "몬스터팜",
    "year": 1999,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "판타지",
      "코미디",
      "모험"
    ],
    "image": "./images/anime/1469.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 369
  },
  {
    "id": "552",
    "title": "디지몬 어드벤처",
    "year": 1999,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "판타지",
      "SF",
      "코미디"
    ],
    "image": "./images/anime/552.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 370
  },
  {
    "id": "350",
    "title": "꼬마마법사 레미",
    "year": 1999,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "판타지",
      "코미디",
      "드라마",
      "일상"
    ],
    "image": "./images/anime/350.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 371
  },
  {
    "id": "2716",
    "title": "괴짜가족",
    "year": 1998,
    "quarter": 3,
    "quarterLabel": "3분기",
    "genres": [
      "코미디"
    ],
    "image": "./images/anime/2716.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 372
  },
  {
    "id": "232",
    "title": "카드캡터 체리",
    "year": 1998,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "판타지",
      "로맨스",
      "코미디",
      "드라마"
    ],
    "image": "./images/anime/232.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 373
  },
  {
    "id": "1",
    "title": "카우보이 비밥",
    "year": 1998,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "SF",
      "드라마",
      "모험"
    ],
    "image": "./images/anime/1.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 374
  },
  {
    "id": "110",
    "title": "요리왕 비룡",
    "year": 1997,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "드라마",
      "모험"
    ],
    "image": "./images/anime/110.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 375
  },
  {
    "id": "1172",
    "title": "슬레이어즈 TRY",
    "year": 1997,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "판타지",
      "코미디",
      "모험"
    ],
    "image": "./images/anime/1172.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 376
  },
  {
    "id": "527",
    "title": "포켓몬스터",
    "year": 1997,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "액션",
      "판타지",
      "코미디",
      "모험"
    ],
    "image": "./images/anime/527.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 377
  },
  {
    "id": "2075",
    "title": "미소의 세상",
    "year": 1996,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "코미디",
      "일상",
      "모험"
    ],
    "image": "./images/anime/2075.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 378
  },
  {
    "id": "535",
    "title": "슬레이어즈 NEXT",
    "year": 1996,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "판타지",
      "코미디",
      "모험"
    ],
    "image": "./images/anime/535.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 379
  },
  {
    "id": "3505",
    "title": "로봇용사 다그온",
    "year": 1996,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "액션",
      "메카",
      "모험"
    ],
    "image": "./images/anime/3505.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 380
  },
  {
    "id": "235",
    "title": "명탐정 코난",
    "year": 1996,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "미스터리",
      "심리",
      "코미디",
      "모험"
    ],
    "image": "./images/anime/235.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 381
  },
  {
    "id": "45",
    "title": "바람의 검심",
    "year": 1996,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "액션",
      "로맨스",
      "코미디",
      "드라마"
    ],
    "image": "./images/anime/45.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 382
  },
  {
    "id": "225",
    "title": "드래곤볼",
    "year": 1996,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "액션",
      "SF",
      "코미디",
      "모험"
    ],
    "image": "./images/anime/225.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 383
  },
  {
    "id": "30",
    "title": "신세기 에반게리온",
    "year": 1995,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "메카",
      "SF",
      "미스터리"
    ],
    "image": "./images/anime/30.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 384
  },
  {
    "id": "4286",
    "title": "보노보노",
    "year": 1995,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "코미디"
    ],
    "image": "./images/anime/4286.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 385
  },
  {
    "id": "534",
    "title": "슬레이어즈",
    "year": 1995,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "판타지",
      "코미디",
      "모험"
    ],
    "image": "./images/anime/534.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 386
  },
  {
    "id": "5440",
    "title": "황금용자 골드란",
    "year": 1995,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "액션",
      "메카",
      "판타지",
      "SF"
    ],
    "image": "./images/anime/5440.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 387
  },
  {
    "id": "5075",
    "title": "용자경찰 제이데커",
    "year": 1994,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "액션",
      "메카",
      "SF",
      "모험"
    ],
    "image": "./images/anime/5075.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 388
  },
  {
    "id": "170",
    "title": "슬램덩크",
    "year": 1993,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "스포츠",
      "코미디",
      "드라마",
      "일상"
    ],
    "image": "./images/anime/170.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 389
  },
  {
    "id": "392",
    "title": "유유백서",
    "year": 1992,
    "quarter": 4,
    "quarterLabel": "4분기",
    "genres": [
      "액션",
      "코미디",
      "모험"
    ],
    "image": "./images/anime/392.png",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 390
  },
  {
    "id": "966",
    "title": "짱구는 못말려",
    "year": 1992,
    "quarter": 2,
    "quarterLabel": "2분기",
    "genres": [
      "코미디",
      "일상"
    ],
    "image": "./images/anime/966.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 391
  },
  {
    "id": "951",
    "title": "마루코는 아홉살",
    "year": 1990,
    "quarter": 1,
    "quarterLabel": "1분기",
    "genres": [
      "코미디",
      "일상"
    ],
    "image": "./images/anime/951.jpg",
    "favorite": false,
    "favoriteRank": null,
    "featured": false,
    "featuredRank": null,
    "originalIndex": 392
  }
];

export const FEATURED_ANIME = ANIME_ITEMS
  .filter((item) => item.featured)
  .sort((a, b) => (a.featuredRank ?? 999) - (b.featuredRank ?? 999));

export const FAVORITE_ANIME = ANIME_ITEMS
  .filter((item) => item.favorite && item.favoriteRank !== null)
  .sort((a, b) => (a.favoriteRank ?? 999) - (b.favoriteRank ?? 999));
