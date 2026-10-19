import { GoogleGenAI } from '@google/genai';

const MS_GAS_SYSTEM_PROMPT = `당신은 대한민국 대표 초격차 초저온 및 산업가스 인프라 기업인 "(주)MS가스(MS Gas Corporation)"의 공식 AI 기술상담 수석 엔지니어 "MS-Bot"입니다.
고객(기업 구매담당자, 공장 설비 엔지니어, 연구원, 의료기관 관계자 등)의 문의에 전문적이고 친절하며 신뢰감 있는 어조로 답변하십시오.

[회사 기본 정보]
- 회사명: (주)MS가스 (MS Gas Corporation)
- 창립: 1974년 (50년 이상의 가스 엔지니어링 업력)
- 대표이사: 전청민 (2025 은탑산업훈장 수훈 및 충남도지사 탄소중립 유공자 표창)
- 대표전화: 051-831-6100 (24시간 비상 안전 긴급 대응)
- 팩스: 051-831-6109 / 이메일: msgas@msgas.co.kr
- 본사/공장: 부산광역시 강서구 녹산산단 261로 14번길 5 (송정동)
- 전국 인프라: 전국 8대 권역 물류 허브(부산 녹산본사, 울산 복합단지, 충남 당진/서산, 경북 포항, 전남 여수, 경기 평택, 충북 청주, 전남 광양), 직영 영업소 17개소
- 운용 자산: 초저온 저장탱크 12,500m³, 특수 탱크로리 및 운송차량 350+ 대, 연간 매출 935억 원(2024 GAAP 기준), 납기준수율 99.9%

[취급 제품군]
1. 산업용 가스:
   - 액화산소(O₂): 제철, 화학 산화, 레이저 절단, 수처리
   - 액화질소(N₂): 불활성 분위기, 반도체 퍼지, 냉각/급속동결 (-196℃)
   - 아르곤(Ar): TIG/MIG 특수용접 보호가스, 특수강 제련
   - 탄산가스(CO₂): 용접 차폐, 폐수 pH 중화, 식품 및 드라이아이스
   - 고압 수소(H₂): 환원 열처리, 반도체 에피택셜, 수소 충전소
2. 연료용 가스:
   - 산업용 프로판(LPG Bulk): 보일러, 알루미늄 용해로, 도장 건조
   - 프라멕스(Pramax): 조선·중공업 후판 고속 절단 전용 고열량 가스
   - 에탄, 부탄/이소부탄
3. 초고순도 특수가스:
   - 6N 초고순도 질소 (99.9999%, 불순물 1ppm 미만): 반도체/2차전지/OLED
   - 다성분 정밀 혼합가스(Multi-Component): 레이저 발진, TMS 굴뚝연속측정 검교정
4. 의료용 가스 (식약처 KGMP 의약품 제조허가):
   - 의료용 산소 (O₂ 99.5%+): 중환자실 및 응급 호흡 치료
   - 의료용 아산화질소 (N₂O): 수술실 흡입 마취
5. 초저온 엔지니어링 설비:
   - 대기식 기화기(Ambient Vaporizer 100~5000 Nm³/h), CE 진공단열 저장탱크, 고압 레귤레이터, 배관 턴키 시공

[4대 토탈 서비스]
- SERVICE 01 가스분석 서비스: GC(가스크로마토그래피), 미량 수분/산소 분석, COA 성적서 발행
- SERVICE 02 가스퍼지 서비스: 화학플랜트/신규배관 고압 질소 안전 치환
- SERVICE 03 수출입 서비스: 글로벌 10개국 ISO 탱크 컨테이너 운송 및 통관
- SERVICE 04 안전관리 서비스: 정기 법정 안전진단, HAZOP 위험성평가, 24시 출동망

[답변 원칙]
1. 가스 명칭과 화학식(O₂, N₂, Ar, CO₂, H₂, N₂O 등), 순도 규격(99.5%, 99.999%, 6N 99.9999%)을 명확히 안내하세요.
2. 공급 방식(대용량 벌크로리, LGC 초저온용기 175L~200L, 실린더 47L 번들, 배관 턴키)에 대한 실질적인 조언을 제공하세요.
3. 견적이나 기술 미팅이 필요한 경우 웹사이트의 "간편 견적 신청" 또는 대표전화(051-831-6100)를 적극 안내하세요.
4. 한국어로 정중하고 간결하며 신뢰감 있게 답변하세요.`;

// Local fallback responder if GEMINI_API_KEY is not configured
function getFallbackResponse(prompt: string): string {
  const p = prompt.toLowerCase();

  if (p.includes('산소') || p.includes('o2') || p.includes('oxygen')) {
    return `(주)MS가스의 산업용 및 의료용 산소(O₂) 솔루션을 안내해 드립니다.

1. **산업용 액화/고압 산소 (O₂)**:
   - **순도**: 99.5% ~ 99.999%
   - **주요 용도**: 제철/제강 산화 연소, 조선소 후판 레이저 정밀 절단, 화학공정 산화촉매, 수처리
   - **공급 형태**: 초저온 탱크로리(Bulk 대용량), LGC 초저온용기(175L), 실린더(47L, 150bar) 및 번들(8구/16구)

2. **의료용 산소 (KGMP 인증)**:
   - 식품의약품안전처 의약품 제조허가를 획득한 고순도 호흡치료용 산소로 대학병원 및 종합병원에 직공급됩니다.

자세한 공급 견적이나 시험성적서(COA)가 필요하시면 대표전화(051-831-6100) 또는 페이지 하단 "간편 견적 상담"을 남겨주시면 24시간 내 배차 견적을 회신드립니다.`;
  }

  if (p.includes('질소') || p.includes('n2') || p.includes('nitrogen') || p.includes('6n')) {
    return `(주)MS가스의 고순도 및 초고순도 질소(N₂) 라인업입니다.

1. **초고순도 질소 6N (99.9999%)**:
   - **순도**: 99.9999% (수분, 산소 등 미세 불순물 1ppm 미만 제어)
   - **적용**: 반도체 팹 진공 챔버 퍼지, 2차전지 양극재 제조 글러브박스, OLED 유기물 증착 보호
   - **용기**: SUS 전해연마(EP) 실린더, 초고순도 Y-Cylinder

2. **일반 산업용 액화질소**:
   - **온도**: -196℃ 극저온 액화가스
   - **용도**: 화학공장 배관 안전 퍼징(치환), 식품 급속동결, 열처리 분위기가스
   - **공급**: 초저온 탱크로리(10~15톤) 및 CE 저장탱크 직충전

정밀 분석 COA 성적서 동봉 및 정기 공급 계약 상담은 기술영업팀(051-831-6100)으로 문의 바랍니다.`;
  }

  if (p.includes('견적') || p.includes('단가') || p.includes('가격') || p.includes('신청')) {
    return `가스 공급 견적은 **필요 가스 품목, 요구 순도, 월간 예상 사용량, 공급 형태(탱크로리 벌크/LGC용기/실린더)** 에 따라 최적의 맞춤 단가로 산출됩니다.

- **온라인 신청**: 메인 화면 하단의 **[간편 견적 상담 신청]** 폼에 기본 정보를 입력해 주시면, 고객사 관할 17개 직영 영업소의 전담 엔지니어가 24시간 이내에 직접 전화 또는 방문 상담을 제공합니다.
- **긴급 견적/배차 문의**: 본사 대표전화 **051-831-6100** (평일 08:30~17:30, 비상안전대응팀 24시간 연동)`;
  }

  if (p.includes('위치') || p.includes('영업소') || p.includes('공장') || p.includes('본사') || p.includes('거점')) {
    return `(주)MS가스는 전국 8개 권역 물류 허브와 17개 직영 영업소를 운영하고 있습니다.

- **본사 및 제1초저온 기지**: 부산광역시 강서구 녹산산단 261로 14번길 5 (저장능력 5,800m³)
- **울산 복합기지 & R&D 센터**: 울산광역시 남구 석유화학공단 내 (저장능력 3,200m³)
- **충남 당진·서산 중부권 허브**: 충청남도 당진시 송악읍 부곡공단로 (저장능력 2,100m³)
- **기타 주요 거점**: 포항 철강산단, 여수 석유화학, 평택 반도체라인, 청주·오창 바이오/배터리, 광양 제철소 사업소

전국 어느 산단이든 **60분 내 비상 안전 출동 및 24시간 내 직배송** 체계를 갖추고 있습니다.`;
  }

  if (p.includes('퍼지') || p.includes('purge') || p.includes('분석') || p.includes('hazop') || p.includes('서비스')) {
    return `(주)MS가스의 **4대 토탈 엔지니어링 서비스**를 소개합니다.

1. **가스분석 서비스**: GC(가스크로마토그래피), 미량 수분/산소 분석기를 통한 PPM/PPB 단위 초정밀 성분 분석 및 공인 COA 발급
2. **가스퍼지(Purging) 서비스**: 석유화학·정유 플랜트 신규 배관 준공 및 T/A 보수 시 고압 질소 급속 치환으로 폭발·독성 위험 완벽 제거
3. **글로벌 수출입 서비스**: 미국, 일본, 독일 등 10개국 글로벌 네트워크를 통한 고순도 원자재 및 ISO 탱크 컨테이너 복합 운송
4. **안전관리 & HAZOP 컨설팅**: KGS 법정 정기안전진단, 설비 위험성평가(HAZOP), 누출 감지 센서 검교정 및 24시 대응

기술 지원 신청은 상단 '서비스' 메뉴 또는 대표전화(051-831-6100)로 접수하실 수 있습니다.`;
  }

  return `안녕하십니까! (주)MS가스 AI 기술상담 수석 엔지니어 MS-Bot입니다.

1974년 창립 이래 50년간 축적된 극저온 가스 엔지니어링 역량을 바탕으로 고객사의 안전과 최적의 공정을 지원합니다.

다음과 같은 문의에 대해 즉시 답변해 드릴 수 있습니다:
- **산업용 가스 (O₂, N₂, Ar, CO₂, H₂)** 순도 규격 및 대용량 탱크로리 벌크 공급
- **초고순도 특수가스 6N (99.9999%)** 및 반도체·2차전지용 맞춤형 혼합가스
- **연료용 가스 (프로판 LPG, 프라멕스 절단가스)** 열효율 및 버너 최적화
- **의료용 가스 (KGMP 인증 산소 및 마취용 N₂O)**
- **초저온 대기식 기화기(Vaporizer) 및 CE 저장탱크 배관 턴키 시공**
- **가스분석(GC), 고압 질소 퍼지, HAZOP 위험성평가**

궁금하신 가스 품목이나 공정 요구사항을 자유롭게 말씀해 주십시오.`;
}

export async function handleChatMessage(message: string): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    // Return domain expert fallback
    return getFallbackResponse(message);
  }

  try {
    const ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: message,
      config: {
        systemInstruction: MS_GAS_SYSTEM_PROMPT,
        temperature: 0.6,
      },
    });

    const text = response.text;
    if (text && text.trim().length > 0) {
      return text;
    }
    return getFallbackResponse(message);
  } catch (error) {
    console.error('Gemini API Error in handleChatMessage:', error);
    return getFallbackResponse(message);
  }
}

// Vercel Serverless Function Handler
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { message } = req.body;
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    const reply = await handleChatMessage(message);
    return res.status(200).json({ reply });
  } catch (err: any) {
    return res.status(500).json({ error: err.message || 'Internal Server Error' });
  }
}
