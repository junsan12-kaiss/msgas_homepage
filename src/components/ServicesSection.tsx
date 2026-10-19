import React, { useState } from 'react';
import { Language } from '../types';

interface ServicesSectionProps {
  language: Language;
  onOpenQuoteWithService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  language,
  onOpenQuoteWithService,
}) => {
  const [activeModalService, setActiveModalService] = useState<number | null>(null);

  const t = {
    ko: {
      preTitle: 'TOTAL VALUE-ADDED SERVICES',
      title: '가스 설계부터 유지관리까지, 4대 토탈 서비스',
      desc: '단순 가스 판매를 넘어, 기업 파트너의 현장 안전과 공정 효율을 극대화하는 고도화된 전문 엔지니어링 서비스를 제공합니다.',

      s1_code: 'SERVICE 01',
      s1_name: '가스분석 서비스',
      s1_desc: 'GC(가스크로마토그래피), 미량 수분/산소 분석기를 통한 PPM/PPB 단위 초정밀 순도 분석 및 품질 인증서(COA)를 발급합니다.',
      s1_link: '정밀 분석 프로세스',

      s2_code: 'SERVICE 02',
      s2_name: '가스퍼지 서비스',
      s2_desc: '화학공장, 정유플랜트, 신규 배관 준공 및 오버홀 정비 시 고압 질소 퍼징(Purging)을 통해 가연성·독성 가스를 완벽 치환·배출합니다.',
      s2_link: '퍼징 솔루션 신청',

      s3_code: 'SERVICE 03',
      s3_name: '수출입 서비스',
      s3_desc: '글로벌 10개국 해외 파트너십을 바탕으로 특수 화학물질 및 고압가스의 수출입 통관, ISO 탱크 컨테이너 운송을 원스톱 처리합니다.',
      s3_link: '해외 네트워크 조회',

      s4_code: 'SERVICE 04',
      s4_name: '안전관리 서비스',
      s4_desc: '정기 법정 안전진단, 설비 위험성평가(HAZOP), 누출 감지 센서 검교정 및 24시간 비상 안전 지원 체계를 지원합니다.',
      s4_link: '안전진단 컨설팅',
      inquireService: '본 서비스 기술상담 신청',
      close: '닫기',
    },
    en: {
      preTitle: 'TOTAL VALUE-ADDED SERVICES',
      title: 'Comprehensive Gas Engineering & 4 Total Services',
      desc: 'Beyond simple gas sales, delivering high-level specialized engineering services that maximize client safety and operational yield.',

      s1_code: 'SERVICE 01',
      s1_name: 'Gas Analytical Lab Services',
      s1_desc: 'Ultra-precision trace PPM/PPB purity testing and formal Certificate of Analysis (COA) issuance via Gas Chromatography (GC) and trace moisture/oxygen analyzers.',
      s1_link: 'Analytical Workflows',

      s2_code: 'SERVICE 02',
      s2_name: 'Gas Purging Services',
      s2_desc: 'High-pressure inert nitrogen purging for chemical plants, refineries, new pipe commissioning, and overhaul shutdowns to replace hazardous or toxic vapors completely.',
      s2_link: 'Request Purge Solution',

      s3_code: 'SERVICE 03',
      s3_name: 'Global Import/Export Logistics',
      s3_desc: 'One-stop customs clearance, ISO tank container multimodal freight, and cold-chain forwarding for specialty compressed gases across 10 global partners.',
      s3_link: 'Global Network Routes',

      s4_code: 'SERVICE 04',
      s4_name: 'Safety Management & HAZOP',
      s4_desc: 'Statutory plant safety audits, HAZOP qualitative risk assessments, sensor calibrations, and 24/7 emergency response protocols.',
      s4_link: 'Safety Consulting Audit',
      inquireService: 'Request Consultation for this Service',
      close: 'Close',
    },
  }[language];

  const serviceDetails = [
    {
      code: t.s1_code,
      name: t.s1_name,
      icon: 'biotech',
      desc: t.s1_desc,
      link: t.s1_link,
      features: [
        'GC (Gas Chromatography) FID / TCD / DID 다중 검출기 보유',
        '미량 수분 (Dew Point Analyzer -100℃), 미량 산소 (PPB 레벨) 정밀 측정',
        'KOLAS 소급성 공인 표준가스를 활용한 엄격한 검교정 시스템',
        '실시간 시험 성적서(COA) 원클릭 전자 열람 및 출력 제공',
      ],
    },
    {
      code: t.s2_code,
      name: t.s2_name,
      icon: 'air',
      desc: t.s2_desc,
      link: t.s2_link,
      features: [
        '대용량 초저온 질소 펌프카 및 모바일 증발 기화기 급파',
        '플랜트 정기보수(T/A) 기간 중 배관 가연성/독성 가스 급속 치환',
        '파이프라인 압력 기밀 시험(Pressure Proof Test) 병행 수행',
        '폭발 하한계(LEL) 및 산소 농도 실시간 측정 현장 확인서 발급',
      ],
    },
    {
      code: t.s3_code,
      name: t.s3_name,
      icon: 'flight_takeoff',
      desc: t.s3_desc,
      link: t.s3_link,
      features: [
        '글로벌 10개국(미국, 일본, 독일, 대만 등) 직수입 통관 루트',
        'T50 / T75 규격 공인 ISO 초저온 탱크 컨테이너 선단 운용',
        '전용 CY(Container Yard) 보세구역 및 위험물 적재 허가 완비',
        '통관부터 공장 인입 저장탱크 충전까지 턴키 일괄 서비스',
      ],
    },
    {
      code: t.s4_code,
      name: t.s4_name,
      icon: 'health_and_safety',
      desc: t.s4_desc,
      link: t.s4_link,
      features: [
        'KGS 고압가스안전관리법 및 산업안전보건법 공인 법정 진단',
        'HAZOP (위험과 운전원리 분석) 정성적 위험성평가 컨설팅',
        '가스누출 감지 경보기 및 긴급차단장치(ESDV) 분기 정기 점검',
        '24시간 비상출동 전담반 가동 (전국 60분 이내 도착 목표 체계)',
      ],
    },
  ];

  return (
    <section className="w-full bg-[#f0f3ff] py-14 lg:py-20" id="services-section">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-tech text-xs sm:text-sm text-[#006399] font-bold uppercase tracking-wider">
            {t.preTitle}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#0e1c2f] font-extrabold tracking-tight mt-1">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#43474e] mt-2 leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* 4 Core Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceDetails.map((service, idx) => (
            <div
              key={idx}
              onClick={() => setActiveModalService(idx)}
              className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between cursor-pointer border border-[#e2e8f0] group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#cde5ff]/60 flex items-center justify-center text-[#006399] mb-4 group-hover:bg-[#006399] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[28px]">
                    {service.icon}
                  </span>
                </div>
                <span className="text-[11px] font-tech text-[#006399] font-bold uppercase tracking-wider">
                  {service.code}
                </span>
                <h3 className="text-lg text-[#01284b] font-bold mt-1 group-hover:text-[#006399] transition-colors">
                  {service.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#43474e] mt-2 leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#f1f5f9] flex items-center justify-between text-[#006399] text-xs font-semibold font-tech">
                <span>{service.link}</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  chevron_right
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {activeModalService !== null && (
        <div className="fixed inset-0 z-50 bg-[#01284b]/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-[#e2e8f0] animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 text-[#73777f] hover:text-[#01284b] p-1.5 rounded-lg hover:bg-[#f1f5f9] cursor-pointer"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#cde5ff] flex items-center justify-center text-[#006399]">
                <span className="material-symbols-outlined text-[28px]">
                  {serviceDetails[activeModalService].icon}
                </span>
              </div>
              <div>
                <span className="text-xs font-tech text-[#006399] font-bold uppercase">
                  {serviceDetails[activeModalService].code}
                </span>
                <h3 className="text-xl font-bold text-[#01284b]">
                  {serviceDetails[activeModalService].name}
                </h3>
              </div>
            </div>

            <p className="text-sm text-[#43474e] leading-relaxed mb-4">
              {serviceDetails[activeModalService].desc}
            </p>

            <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#e2e8f0] mb-6">
              <h4 className="text-xs font-bold text-[#01284b] uppercase font-tech mb-2">
                핵심 엔지니어링 역량 &amp; 보증 기준
              </h4>
              <ul className="flex flex-col gap-2 text-xs text-[#43474e]">
                {serviceDetails[activeModalService].features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#04a8ff] text-[16px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3">
              <button
                onClick={() => setActiveModalService(null)}
                className="px-4 py-2.5 rounded-lg border border-[#c3c6cf] text-xs font-semibold text-[#43474e] hover:bg-[#f1f5f9] cursor-pointer"
              >
                {t.close}
              </button>
              <button
                onClick={() => {
                  const serviceName = serviceDetails[activeModalService].name;
                  setActiveModalService(null);
                  if (onOpenQuoteWithService) {
                    onOpenQuoteWithService(serviceName);
                  }
                }}
                className="px-5 py-2.5 rounded-lg bg-[#04a8ff] hover:bg-[#006399] text-white text-xs font-bold shadow-md cursor-pointer flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[16px]">support_agent</span>
                <span>{t.inquireService}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
