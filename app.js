/**
 * 중소벤처기업부 소개 인터랙티브 웹 앱 로직
 */

// 1. 핵심 업무 데이터
const missionData = [
  {
    title: "1. 소상공인·자영업자 활력 회복 및 안전망 구축",
    desc: "골목상권을 지키고 영세 소상공인의 경영 위기 극복 및 스마트 전환을 돕습니다.",
    points: [
      {
        head: "소상공인 금융 3종 세트 & 전환보증",
        body: "3.2조원 규모의 전환보증, 상환연장 요건 완화 및 저금리 대환대출을 통해 금융비용 부담을 대폭 경감합니다."
      },
      {
        head: "온누리상품권 5.5조원 및 동행축제",
        body: "역대 최대 규모의 온누리상품권 발행과 정례 동행축제를 통해 지역 골목상권과 전통시장의 소비를 촉진합니다."
      },
      {
        head: "스마트상점 및 디지털 전환",
        body: "키오스크, 테이블오더, AI 서빙로봇 등 최신 스마트 기술을 보급하여 소상공인의 생산성을 향상시킵니다."
      },
      {
        head: "희망리턴패키지 (재기 및 폐업 안전망)",
        body: "경영 위기 시 사업정리 컨설팅부터 철거비 지원, 재취업 및 업종 전환 재창업 교육까지 전 주기를 지원합니다."
      }
    ]
  },
  {
    title: "2. 벤처·스타트업 혁신 생태계 조성 & 글로벌 진출",
    desc: "아이디어 하나로 유니콘 기업까지 성장할 수 있도록 모험자본과 보육 인프라를 연결합니다.",
    points: [
      {
        head: "민간 주도형 기술창업지원 TIPS (팁스)",
        body: "민간 액셀러레이터·VC가 유망 기술창업팀을 발굴해 선투자하면, 정부가 R&D 자금 최대 5~10억원을 매칭 지원합니다."
      },
      {
        head: "모태펀드 조기 출자 및 벤처투자 촉진",
        body: "1조원 이상의 정책 벤처펀드를 조기 결성하여 딥테크, AI, 친환경 에너지 등 신산업 분야 스타트업에 실질적 투자를 집행합니다."
      },
      {
        head: "K-Startup 글로벌 펀드 및 해외 거점",
        body: "미국 실리콘밸리, 프랑스 스테이션F, 싱가포르 등 글로벌 창업 허브에 K-스타트업 센터(KSC)를 두고 해외 진출을 직통 지원합니다."
      },
      {
        head: "초격차 스타트업 1000+ 프로젝트",
        body: "시스템반도체, 바이오, 모빌리티 등 미래를 바꿀 10대 신산업 분야 유망 스타트업을 집중 육성합니다."
      }
    ]
  },
  {
    title: "3. 중소기업 경쟁력 강화 및 스마트·스케일업",
    desc: "중소기업이 국가 경제의 든든한 허리(중견기업)로 성장할 수 있도록 돕는 사다리 정책을 펼칩니다.",
    points: [
      {
        head: "스마트공장 고도화 및 자율형 공장",
        body: "단순 설비 도입을 넘어 AI·빅데이터 기반 자율제조 시스템을 중소 제조현장에 구축해 불량률을 줄이고 원가경쟁력을 극대화합니다."
      },
      {
        head: "중소기업 수출바우처 및 글로벌 진출",
        body: "해외 마케팅, 인증 획득, 통번역, 국제 물류까지 기업이 원하는 서비스를 바우처 형태로 자유롭게 선택해 지원받을 수 있습니다."
      },
      {
        head: "중소벤처24 통합 행정서비스",
        body: "분산되어 있던 64개 지원 시스템을 하나로 통합하여 단 한 번의 로그인으로 증명서 21종 발급 및 맞춤 지원사업 매칭을 제공합니다."
      },
      {
        head: "중소기업 정책자금 융자 지원",
        body: "성장잠재력이 높은 중소기업을 대상으로 중진공을 통해 설비투자, 운영자금 등을 시중보다 우대된 금리와 장기 조건으로 융자합니다."
      }
    ]
  },
  {
    title: "4. 대·중소 상생협력 생태계 및 규제자유특구",
    desc: "공정한 거래 환경을 정착시키고 신기술 실증을 가로막는 규제를 혁파합니다.",
    points: [
      {
        head: "납품대금 연동제 법제화 및 안착",
        body: "원자재 및 에너지 가격 폭등 시 중소 수탁기업이 손실을 떠안지 않도록 납품대금에 의무 반영하여 공정한 상생 생태계를 구축합니다."
      },
      {
        head: "기술탈취 방지 및 중소기업 권익 보호",
        body: "대기업 및 거래처의 부당한 아이디어·기술 탈취를 감시하고 법률 자문, 비밀유지계약(NDA) 체결 및 손해배상 입증을 적극 지원합니다."
      },
      {
        head: "비수도권 규제자유특구 운영",
        body: "지역별로 미래 먹거리 신산업(자율주행, 수소선박, 배터리 리사이클링 등) 규제를 면제·완화해 지역 경제 혁신 클러스터를 구축합니다."
      },
      {
        head: "동반성장 및 상생 결제시스템",
        body: "협력기업들이 어음 대신 안전하게 대금을 회수할 수 있는 상생결제 제도를 확산시켜 연쇄 부도 위험을 차단합니다."
      }
    ]
  }
];

// 1.5. 진단 마법사(설문/체크리스트) 데이터 정의
const diagnosisQuestions = {
  soho: {
    roleName: "소상공인 · 자영업자",
    options: [
      { id: "loan", icon: "💳", text: "고금리 대출 상환 부담 완화 및 저금리 대환대출이 절실해요.", desc: "소상공인 3대 금융 안전망, 전환보증 3.2조 지원" },
      { id: "smart", icon: "🤖", text: "매장에 키오스크, 무인결제기, 로봇 등 스마트 시스템을 들이고 싶어요.", desc: "스마트상점 기술보급 사업 (최대 70% 국비 지원)" },
      { id: "sales", icon: "🎟️", text: "가게 손님을 늘리고 온누리상품권 가맹점 등록을 하고 싶어요.", desc: "온누리상품권 가맹점 지정 및 동행축제 판촉전 연계" },
      { id: "exit", icon: "🛡️", text: "경영 악화로 폐업을 고민 중이거나, 원상복구 철거비 및 재도전이 필요해요.", desc: "희망리턴패키지 (원스톱 철거비 최대 250만원 및 재창업 교육)" }
    ],
    results: {
      loan: {
        title: "소상공인 정책자금 및 금융 3종 세트 (전환보증)",
        tag: "금융 긴급지원",
        body: "기존 고금리 대출을 저금리로 전환하거나, 대출 만기 연장 및 거치기간을 부여받아 당장의 원리금 상환 부담을 최대 50% 이상 줄일 수 있습니다.",
        guide: "신청처: 소상공인정책자금 누리집(ols.semas.or.kr) 또는 전국 30개 채무조정센터 방문"
      },
      smart: {
        title: "스마트상점 기술보급 국비 지원사업",
        tag: "디지털 전환",
        body: "키오스크, 테이블 오더, 서빙로봇, 무인판매기 도입 비용의 50~70%를 정부에서 직접 보조해 구인난과 인건비 부담을 덜어드립니다.",
        guide: "신청처: 소상공인시장진흥공단 스마트상점 사이트(sbiz.or.kr)"
      },
      sales: {
        title: "온누리상품권 가맹 및 골목형 상점가 등록",
        tag: "매출 증대",
        body: "소비자들이 10% 할인받아 충전하는 모바일·카드형 온누리상품권을 우리 가게에서도 결제받을 수 있도록 가맹 등록을 지원합니다.",
        guide: "신청처: 전통시장통통 누리집 또는 관할 시·군·구청 일자리경제과"
      },
      exit: {
        title: "희망리턴패키지 (점포철거비 및 재기 지원)",
        tag: "안전망 재도전",
        body: "어쩔 수 없는 폐업 시 평당 철거비용(최대 250만원)을 실비 지원하며, 폐업 후 취업 교육 수당 및 재창업 멘토링까지 1:1로 밀착 케어합니다.",
        guide: "신청처: 희망리턴패키지 포털(hope.sbiz.or.kr)"
      }
    },
    portal: {
      name: "소상공인시장진흥공단 (소상공인마당)",
      url: "https://www.sbiz.or.kr",
      desc: "소상공인 대출, 점포지원, 온누리상품권 원스톱 포털"
    }
  },
  startup: {
    roleName: "예비창업자 · 초기 스타트업",
    options: [
      { id: "ideation", icon: "🌱", text: "사업 아이디어는 있지만 초기 시제품 제작비와 사업화 자금이 부족해요.", desc: "예비창업패키지 (최대 1억원 사업화 자금 바우처)" },
      { id: "tips", icon: "🚀", text: "딥테크/IT 기술을 보유하고 있으며, VC 투자와 정부 R&D 매칭을 원해요.", desc: "TIPS (민간투자주도형 기술창업지원 R&D 5억+)" },
      { id: "space", icon: "🏢", text: "사무실 임대료 부담 없이 입주 공간과 전문가 멘토링을 받고 싶어요.", desc: "청년창업사관학교 & K-Startup 창업보육센터" },
      { id: "global", icon: "🌐", text: "국내를 넘어 미국, 동남아, 유럽 등 해외 시장으로 진출하고 싶어요.", desc: "글로벌 엑셀러레이팅 및 K-스타트업 센터(KSC)" }
    ],
    results: {
      ideation: {
        title: "예비·초기창업패키지 사업화 바우처",
        tag: "창업 자금",
        body: "시제품 제작, 지식재산권(특허) 출원, 마케팅 등에 사용 가능한 무상 사업화 지원금(최대 1억원)을 지분 희석 없이 지원합니다.",
        guide: "신청처: K-Startup 창업지원포털(k-startup.go.kr) 매년 초 정기공고 확인"
      },
      tips: {
        title: "TIPS (민간투자주도형 기술창업지원)",
        tag: "초격차 R&D",
        body: "중기부가 지정한 운영사(민간 액셀러레이터·벤처캐피털)로부터 1~2억원 이상 선투자를 유치하면, 정부가 5억원의 R&D 자금을 무상 매칭합니다.",
        guide: "신청처: TIPS 공식 포털(jointips.or.kr) 협력 운영사 풀 확인"
      },
      space: {
        title: "청년창업사관학교 입교 및 무상 보육공간",
        tag: "인프라 코칭",
        body: "우수한 청년 창업가를 선발하여 1년간 창업 인프라(사무공간, 회의실, 시제품 제작장비)와 총 사업비의 70% 이내 개발비를 집중 제공합니다.",
        guide: "신청처: 중소벤처기업진흥공단 청년창업사관학교 누리집(start.kosmes.or.kr)"
      },
      global: {
        title: "K-Startup 글로벌 챌린지 및 현지 실증(PoC)",
        tag: "해외 진출",
        body: "해외 유명 전시회(CES, 슬러시 등) 한국관 참가 지원, 미국·프랑스·싱가포르 등 현지 액셀러레이터 매칭 및 글로벌 CVC 투자를 연결합니다.",
        guide: "신청처: 창업진흥원 글로벌사업부 공고 확인"
      }
    },
    portal: {
      name: "K-Startup 창업마당",
      url: "https://www.k-startup.go.kr",
      desc: "대한민국 모든 정부 창업지원사업 통합 공고 및 온라인 신청"
    }
  },
  sme: {
    roleName: "중소기업 대표 · 실무자",
    options: [
      { id: "factory", icon: "🏭", text: "공장 생산라인을 자동화하고 스마트공장(AI/IoT)을 구축하고 싶어요.", desc: "스마트공장 구축 및 고도화 지원 (최대 2억원 국비 매칭)" },
      { id: "export", icon: "🚢", text: "해외 바이어 발굴, 전시회 참가, 해외 인증 획득 비용이 필요해요.", desc: "중소기업 수출바우처 사업 (최대 1억원 오픈 바우처)" },
      { id: "fund", icon: "💰", text: "공장 증축, 시설 투자, 원자재 구매를 위한 정책자금 융자가 필요해요.", desc: "중진공 정책자금 (신성장기반자금, 개발기술사업화자금)" },
      { id: "fair", icon: "⚖️", text: "원자재·전기료 폭등 손실을 납품단가에 반영하고 기술침해를 보호받고 싶어요.", desc: "납품대금 연동제 컨설팅 및 불공정거래 분쟁조정" }
    ],
    results: {
      factory: {
        title: "스마트제조혁신 (스마트공장 구축 및 고도화 지원)",
        tag: "공정 지능화",
        body: "제조 현장의 불량률 감소와 생산성 향상을 위해 MES, ERP, 센서 기반 데이터 수집 장비 도입 비용을 기업당 5천만~2억원까지 국비 지원합니다.",
        guide: "신청처: 스마트공장 사업관리시스템(smart-factory.kr)"
      },
      export: {
        title: "중소기업 수출바우처 프로그램",
        tag: "해외 판로",
        body: "기업이 원하는 해외 마케팅 서비스를 자유롭게 고를 수 있는 바우처를 지급합니다. (전시회 부스비, 통번역, FDA·CE 해외규격인증 등)",
        guide: "신청처: 수출지원기반활용사업 누리집(exportvoucher.com)"
      },
      fund: {
        title: "중소벤처기업진흥공단 정책자금 융자",
        tag: "시설·운전 금융",
        body: "시중 은행보다 유리한 장기 저리 조건으로 기계 설비 구입, 공장 신축, 고용 창출 운영자금을 기업 신용도 및 미래성장가치 평가를 통해 대출합니다.",
        guide: "신청처: 중진공 정책자금 온라인신청 누리집(kosmes.or.kr)"
      },
      fair: {
        title: "납품대금 연동제 컨설팅 & 불공정거래 피해 구제",
        tag: "공정 거래",
        body: "원자재 및 에너지 가격 인상분을 납품대금에 반영하도록 표준계약서 작성을 무료 지원하며, 대기업의 기술탈취 의심 시 법률자문 및 비밀유지협약을 전액 지원합니다.",
        guide: "신청처: 대·중소기업·농어업협력재단 상생누리(win-win.or.kr)"
      }
    },
    portal: {
      name: "중소벤처24 (One-Stop 통합포털)",
      url: "https://www.smes.go.kr",
      desc: "중소기업 확인서, 21종 온라인 서류발급 및 64개 지원사업 신청"
    }
  },
  citizen: {
    roleName: "일반 국민 · 청년 구직자 · 소비자",
    options: [
      { id: "dc", icon: "🛒", text: "전통시장과 골목상가에서 장볼 때 최대 할인 혜택을 받고 싶어요.", desc: "온누리상품권 10% 상시할인 & 동행축제 할인전" },
      { id: "job", icon: "💼", text: "유망 중소·스타트업에 취업하고 청년 목돈 마련 혜택을 받고 싶어요.", desc: "청년내일채움공제 및 중소기업 취업자 소득세 감면" },
      { id: "start", icon: "🎒", text: "창업에 관심이 생겨 기초 교육과 정부 지원사업 강의를 무료로 듣고 싶어요.", desc: "창업에듀 온라인 무료 강좌 및 실전 창업 패키지" },
      { id: "whistle", icon: "📢", text: "중소기업 기술탈취나 하도급 갑질 등 불공정 행위를 신고·제보하고 싶어요.", desc: "중소벤처기업부 불공정거래 익명제보센터" }
    ],
    results: {
      dc: {
        title: "온누리상품권 10% 특별할인 충전 & 소득공제 40%",
        tag: "생활 장바구니",
        body: "모바일 온누리앱에서 충전 시 10% 즉시 할인(월 최대 200만원 한도)을 받으며, 연말정산 시 전통시장 소득공제 40% 혜택까지 누릴 수 있습니다.",
        guide: "신청방법: 스마트폰 앱스토어에서 '온누리상품권' 앱 다운로드"
      },
      job: {
        title: "중소기업 취업 청년 소득세 90% 감면 & 청년내일채움",
        tag: "청년 혜택",
        body: "중소기업에 취업한 만 15~34세 청년은 5년간 소득세의 90%(연 최대 200만원)를 감면받으며, 적립형 목돈 형성 프로그램을 통해 자산 형성을 지원합니다.",
        guide: "신청방법: 국세청 홈택스 또는 재직 중인 회사 경영지원팀에 신청서 제출"
      },
      jobEdu: {
        title: "창업에듀(Startup Edu) 대국민 무료 창업교육",
        tag: "무료 교육",
        body: "비즈니스 모델 수립, 정부지원사업 사업계획서 작성법, 지식재산권, 마케팅 실무 등 700여 개의 프리미엄 강좌를 국민 누구나 무료로 수강할 수 있습니다.",
        guide: "이용처: 창업에듀 온라인 플랫폼(k-startup.go.kr/edu)"
      },
      whistle: {
        title: "중소기업 기술침해 및 불공정거래 익명 제보센터",
        tag: "공익 신고",
        body: "신원 노출 걱정 없는 IP 추적방지 익명제보시스템을 통해 대기업의 납품단가 후려치기나 기술 베끼기 등 불공정 거래 행위를 제보하고 법적 보호를 받습니다.",
        guide: "이용처: 중소벤처기업부 공식 누리집 민원마당(mss.go.kr)"
      }
    },
    portal: {
      name: "대한민국 정책브리핑 (중기부 뉴스)",
      url: "https://www.korea.kr",
      desc: "정부 공식 정책 정보, 지원금 신청 캘린더 및 브리핑"
    }
  }
};

// 진단 마법사 상태 변수
let currentDiagRole = null;
let selectedInterests = [];

// 진단 마법사 제어 함수들
function selectRole(role) {
  currentDiagRole = role;
}

function nextStep(step) {
  if (step === 1) {
    const selectedRadio = document.querySelector('input[name="diag-role"]:checked');
    if (!selectedRadio) {
      alert("현재 상황(기업 형태)을 하나 선택해 주세요!");
      return;
    }
    currentDiagRole = selectedRadio.value;
    loadStep2Options(currentDiagRole);

    // 스텝 전환
    document.getElementById("step-pane-1").classList.remove("active");
    document.getElementById("step-pane-2").classList.add("active");

    // 프로그레스바 갱신
    document.getElementById("prog-step-1").classList.add("completed");
    document.getElementById("prog-line-1").classList.add("filled");
    document.getElementById("prog-step-2").classList.add("active");
  } else if (step === 2) {
    const checkedBoxes = document.querySelectorAll('input[name="diag-interest"]:checked');
    if (checkedBoxes.length === 0) {
      alert("최소 1개 이상의 관심 또는 필요한 도움 항목을 체크해 주세요!");
      return;
    }
    selectedInterests = Array.from(checkedBoxes).map((cb) => cb.value);
    buildResultReport(currentDiagRole, selectedInterests);

    // 스텝 전환
    document.getElementById("step-pane-2").classList.remove("active");
    document.getElementById("step-pane-3").classList.add("active");

    // 프로그레스바 갱신
    document.getElementById("prog-step-2").classList.add("completed");
    document.getElementById("prog-line-2").classList.add("filled");
    document.getElementById("prog-step-3").classList.add("active");
  }
}

function prevStep(step) {
  if (step === 2) {
    document.getElementById("step-pane-2").classList.remove("active");
    document.getElementById("step-pane-1").classList.add("active");

    document.getElementById("prog-step-2").classList.remove("active");
    document.getElementById("prog-line-1").classList.remove("filled");
  }
}

function restartDiagnosis() {
  currentDiagRole = null;
  selectedInterests = [];

  // 입력 초기화
  const radios = document.querySelectorAll('input[name="diag-role"]');
  radios.forEach((r) => (r.checked = false));
  document.querySelectorAll(".radio-card").forEach((c) => c.classList.remove("selected"));

  // 스텝 초기화
  document.getElementById("step-pane-3").classList.remove("active");
  document.getElementById("step-pane-2").classList.remove("active");
  document.getElementById("step-pane-1").classList.add("active");

  // 프로그레스바 초기화
  document.getElementById("prog-step-1").className = "progress-step active";
  document.getElementById("prog-step-2").className = "progress-step";
  document.getElementById("prog-step-3").className = "progress-step";
  document.getElementById("prog-line-1").className = "progress-line";
  document.getElementById("prog-line-2").className = "progress-line";
}

function loadStep2Options(role) {
  const container = document.getElementById("step-2-options");
  const data = diagnosisQuestions[role];

  container.innerHTML = data.options
    .map(
      (opt) => `
    <label class="radio-card check-card">
      <input type="checkbox" name="diag-interest" value="${opt.id}" onchange="toggleCardSelect(this)">
      <div class="radio-card-content">
        <div class="card-icon">${opt.icon}</div>
        <h4>${opt.text}</h4>
        <p>${opt.desc}</p>
      </div>
    </label>
  `
    )
    .join("");
}

function toggleCardSelect(inputElem) {
  const card = inputElem.closest(".radio-card");
  if (inputElem.checked) {
    card.classList.add("selected");
  } else {
    card.classList.remove("selected");
  }
}

function buildResultReport(role, interests) {
  const roleData = diagnosisQuestions[role];
  const checklistContainer = document.getElementById("checklist-results");
  const portalBox = document.getElementById("result-portal-box");

  document.getElementById("res-title").innerText = `[${roleData.roleName}] 맞춤형 지원사업 진단 리포트`;
  document.getElementById("res-desc").innerText = `귀하께서 체크하신 ${interests.length}가지 핵심 필요사항에 따라 선별된 정부 공공 지원 패키지입니다.`;

  // 체크리스트 항목 생성
  let html = "";
  interests.forEach((id) => {
    const res = roleData.results[id] || (id === "start" ? roleData.results.jobEdu : null);
    if (res) {
      html += `
        <div class="check-result-item">
          <div class="check-header">
            <span class="check-title">✅ ${res.title}</span>
            <span class="check-tag">${res.tag}</span>
          </div>
          <p class="check-body">${res.body}</p>
          <div class="check-guide">💡 <strong>신청 방법 & 팁:</strong> ${res.guide}</div>
        </div>
      `;
    }
  });

  checklistContainer.innerHTML = html;

  // 하단 전용 포털 안내
  portalBox.innerHTML = `
    <h5>👉 지금 가장 추천하는 공식 창구: <strong>${roleData.portal.name}</strong></h5>
    <p>${roleData.portal.desc}</p>
    <a href="${roleData.portal.url}" target="_blank" class="btn-portal-action">해당 사이트에서 공고 및 신청 바로가기 ↗</a>
  `;
}

// 2. 맞춤형 수혜자 데이터
const beneficiaryData = {
  "small-biz": {
    badge: "소상공인 & 자영업자 대상",
    title: "골목상권 사장님을 위한 핵심 지원",
    summary: "급변하는 상권과 금융 비용으로 어려움을 겪는 대표님께 꼭 필요한 실질 금융·재기 지원 사업입니다.",
    list: [
      "💰 소상공인 정책자금 및 대환대출 (희망플러스 특례보증, 저금리 전환대출)",
      "📱 스마트상점 기술보급 (키오스크, 테이블오더, 무인 결제기 도입 비용 최대 70% 지원)",
      "🔄 희망리턴패키지 (원스톱 폐업지원금 철거비 최대 250만원 및 재도전 창업지원)",
      "🎟️ 온누리상품권 가맹점 등록 (모바일·카드형 가맹을 통한 고객 유입 증대)"
    ],
    portalTitle: "소상공인마당 바로가기",
    portalUrl: "https://www.sbiz.or.kr"
  },
  "startup": {
    badge: "예비창업자 & 스타트업 대상",
    title: "창의적인 혁신 창업가를 위한 성장 사다리",
    summary: "아이디어 검증부터 법인 설립, 시드 투자 및 R&D 스케일업까지 성장 단계별 맞춤형 지원을 제공합니다.",
    list: [
      "🚀 예비·초기·도약 패키지 (창업 0년~7년차 사업화 자금 최대 1~3억원 지원)",
      "💡 TIPS (민간투자주도형 기술창업지원: 운영사 투자 시 정부 R&D 최대 5억원 연계)",
      "🏢 K-Startup 창업공간 및 청년창업사관학교 (사업공간 무상 제공 및 집중 코칭)",
      "🌐 글로벌 진출 챌린지 및 K-스타트업 센터(KSC) 해외 지사 지원"
    ],
    portalTitle: "K-Startup 창업마당 바로가기",
    portalUrl: "https://www.k-startup.go.kr"
  },
  "sme": {
    badge: "중소 & 벤처 제조·IT 기업 대상",
    title: "글로벌 강소기업으로 도약하는 기업 스케일업",
    summary: "기술력과 수출 경쟁력을 갖춘 기업이 유니콘·중견기업으로 점프할 수 있도록 다방면으로 지원합니다.",
    list: [
      "🏭 스마트공장 구축 및 고도화 (제조 공정 AI·자동화 비용 매칭 지원)",
      "🚢 중소기업 수출바우처 (해외전시회, 해외규격인증, 글로벌 온라인몰 입점)",
      "📑 중소벤처24 원스톱 행정 (기업확인서, 실적증명서 원클릭 무료 발급)",
      "⚖️ 납품대금 연동제 컨설팅 및 표준약정서 보급 지원"
    ],
    portalTitle: "중소벤처24 통합포털 바로가기",
    portalUrl: "https://www.smes.go.kr"
  },
  "citizen": {
    badge: "일반 국민 & 현명한 소비자 대상",
    title: "국민 모두가 누리는 일상 속 상생 혜택",
    summary: "중소기업·소상공인 지원은 결국 우리 경제를 살리고 국민의 실생활 장바구니 부담을 덜어줍니다.",
    list: [
      "🛍️ 온누리상품권 10% 할인 혜택 (전통시장 및 골목상점가 충전식 카드 결제)",
      "🎉 대한민국 동행축제 (봄·가을·겨울 전 국민 할인 프로모션 및 특가전)",
      "💼 중소기업 취업 청년 소득세 감면 및 청년내일채움공제 혜택",
      "🛡️ 불공정 하도급 및 기술침해 국민 공익신고 센터 운영"
    ],
    portalTitle: "대한민국 정책브리핑 바로가기",
    portalUrl: "https://www.korea.kr"
  }
};

// 3. 최신 뉴스 및 정책 보도 기사 데이터 (실제 확인된 공식 URL)
const newsData = [
  {
    category: "policy",
    badge: "핵심 정책",
    date: "2025.01",
    title: "중소벤처기업부 2025년 업무계획 발표: '경제 리스크 관리 및 민생 활력'",
    desc: "복합위기 대응을 위한 소상공인 3대 경영충격 완화와 15.2조원 규모 예산의 조기 집행을 통해 경기 진작에 나섭니다.",
    url: "https://www.mss.go.kr/site/smba/ex/bbs/View.do?cbIdx=86&bcIdx=1062088",
    source: "중기부 공식 보도자료"
  },
  {
    category: "soho",
    badge: "소상공인 금융",
    date: "2025.01",
    title: "소상공인 전환보증 3.2조 공급 및 채무조정센터 30개소 가동",
    desc: "고금리·고물가로 힘든 소상공인을 위해 상환기간 연장과 대환대출 거치기간을 부여하는 특단 지원책을 가동합니다.",
    url: "https://www.korea.kr/news/policyNewsView.do?newsId=148924619",
    source: "대한민국 정책브리핑"
  },
  {
    category: "policy",
    badge: "내수 진작",
    date: "2024.12",
    title: "온누리상품권 역대 최대 5.5조원 발행… 골목상권 활기 충전",
    desc: "모바일·카드형 온누리상품권의 골목형 상점가 사용처를 적극 늘려 서민 물가 안정과 전통시장 매출 증대를 동시에 견인합니다.",
    url: "https://www.mss.go.kr",
    source: "중기부 누리집"
  },
  {
    category: "tech",
    badge: "벤처·투자",
    date: "2025.02",
    title: "모태펀드 1조원 1분기 조기 출자… 딥테크·AI 유니콘 본격 육성",
    desc: "신규 벤처투자 회복을 위해 첨단 미래 신산업 및 해외 진출 K-스타트업 펀드 조성을 전폭적으로 뒷받침합니다.",
    url: "https://www.korea.kr/news/policyNewsView.do?newsId=148937920",
    source: "대한민국 정책브리핑"
  },
  {
    category: "policy",
    badge: "디지털 행정",
    date: "2024.11",
    title: "'중소벤처24' 하나로 64개 정부 지원시스템 원스톱 이용 개편",
    desc: "기업과 소상공인이 여러 사이트를 오가지 않고 단일 계정으로 지원사업 신청 및 21종의 공공 증명서를 발급받을 수 있습니다.",
    url: "https://www.smes.go.kr",
    source: "중소벤처24 공식"
  },
  {
    category: "policy",
    badge: "공정 경제",
    date: "2024.10",
    title: "납품대금 연동제 1주년 안착… 원자재에 이어 에너지 비용까지 확대 논의",
    desc: "유가 및 전기요금 등 원가 급등 요인을 납품단가에 합리적으로 반영하여 수탁 중소기업의 억울한 적자를 방지합니다.",
    url: "https://www.mss.go.kr",
    source: "중기부 공식 보도"
  }
];

// 4. 업무 탭 스위칭
function switchMission(index) {
  const buttons = document.querySelectorAll(".mission-tabs .tab-btn");
  buttons.forEach((btn, idx) => {
    btn.classList.toggle("active", idx === index);
  });

  const data = missionData[index];
  const container = document.getElementById("mission-box");

  let pointsHtml = data.points
    .map(
      (p) => `
    <div style="background: #F4FBF7; border-left: 4px solid #059669; padding: 1rem 1.25rem; border-radius: 4px; margin-bottom: 0.85rem;">
      <h4 style="font-size: 1.05rem; color: #0D3B2E; margin-bottom: 0.35rem; font-weight: 700;">${p.head}</h4>
      <p style="font-size: 0.92rem; color: #3D5A50; line-height: 1.6;">${p.body}</p>
    </div>
  `
    )
    .join("");

  container.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <h3 style="font-size: 1.45rem; color: #0D3B2E; margin-bottom: 0.5rem; font-weight: 800;">${data.title}</h3>
      <p style="font-size: 1.05rem; color: #3D5A50;">${data.desc}</p>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem;">
      ${pointsHtml}
    </div>
  `;
}

// 5. 맞춤 수혜자 가이드 렌더링
function renderBeneficiary(type) {
  const data = beneficiaryData[type];
  const container = document.getElementById("recommend-result");

  const listItems = data.list
    .map(
      (item) => `
    <li style="padding: 0.6rem 0; border-bottom: 1px dashed #D1E7DD; font-size: 0.98rem; color: #132A22;">
      ${item}
    </li>
  `
    )
    .join("");

  container.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.25rem;">
      <div>
        <span style="display: inline-block; background: #D1FAE5; color: #065F46; font-size: 0.85rem; font-weight: 700; padding: 0.25rem 0.75rem; border-radius: 999px; margin-bottom: 0.5rem;">${data.badge}</span>
        <h3 style="font-size: 1.4rem; color: #0D3B2E; font-weight: 800;">${data.title}</h3>
        <p style="color: #3D5A50; font-size: 1rem; margin-top: 0.25rem;">${data.summary}</p>
      </div>
      <div>
        <a href="${data.portalUrl}" target="_blank" style="background: #0D3B2E; color: #ffffff; padding: 0.7rem 1.2rem; border-radius: 8px; font-weight: 700; font-size: 0.9rem; text-decoration: none; display: inline-block;">${data.portalTitle} ↗</a>
      </div>
    </div>
    <ul style="list-style: none; margin-top: 1rem;">
      ${listItems}
    </ul>
  `;
}

// 6. 뉴스 카드 렌더링
function renderNews(filter = "all") {
  const container = document.getElementById("news-container");
  const filtered = filter === "all" ? newsData : newsData.filter((n) => n.category === filter);

  container.innerHTML = filtered
    .map(
      (item) => `
    <div class="news-card">
      <div>
        <div class="news-source-meta">
          <span class="news-badge">${item.badge}</span>
          <span class="news-date">${item.date}</span>
        </div>
        <h3 class="news-title">${item.title}</h3>
        <p class="news-desc">${item.desc}</p>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #f1f5f9; padding-top: 1rem;">
        <span style="font-size: 0.78rem; color: #64748b;">출처: ${item.source}</span>
        <a href="${item.url}" target="_blank" class="news-link-btn" rel="noopener noreferrer">기사 원문 보기 ↗</a>
      </div>
    </div>
  `
    )
    .join("");
}

// 초기화
document.addEventListener("DOMContentLoaded", () => {
  // 진단 라디오 카드 클릭 하이라이트 이벤트 바인딩
  const roleRadios = document.querySelectorAll('input[name="diag-role"]');
  roleRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
      document.querySelectorAll('#step-pane-1 .radio-card').forEach((c) => c.classList.remove("selected"));
      if (radio.checked) {
        radio.closest(".radio-card").classList.add("selected");
      }
    });
  });

  // 1. 업무 초기 탭
  switchMission(0);

  // 2. 수혜자 선택 이벤트
  const userBtns = document.querySelectorAll(".user-btn");
  userBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      userBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderBeneficiary(btn.dataset.type);
    });
  });
  renderBeneficiary("small-biz");

  // 3. 뉴스 필터 이벤트
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderNews(btn.dataset.category);
    });
  });
  renderNews("all");
});
