import React, { useState, useEffect } from 'react';
import { Language } from '../types';

interface HeroProps {
  language: Language;
  onOpenQuote: () => void;
  onOpenLocations: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onOpenQuote, onOpenLocations }) => {
  // Dynamic subtle telemetry simulation
  const [telemetry, setTelemetry] = useState({
    activeLorries: 84,
    pressureBar: 16.4,
    purityPct: 99.9998,
    activePercentage: 94,
    statusText: '정상 운영',
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTelemetry((prev) => ({
        ...prev,
        pressureBar: +(16.3 + Math.random() * 0.3).toFixed(1),
        activeLorries: 82 + Math.floor(Math.random() * 5),
        activePercentage: 92 + Math.floor(Math.random() * 6),
      }));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const t = {
    ko: {
      badge50th: 'SINCE 1974 • 50TH ANNIVERSARY',
      badgeCarbon: '탄소중립 유공 표창 기업',
      badgeGrid: '전국 실시간 가스 관제망 가동 중',
      preTitle: 'TOTAL CRYO & GAS ENGINEERING INFRASTRUCTURE',
      title1: '가스 설계부터 공급, 유지까지',
      titleHighlight: '전 공정을 아우르는',
      title2: '원스톱 토탈 솔루션',
      desc: '보이지 않는 에너지를 통해 사람들의 삶과 산업을 따뜻하고 안전하게 연결합니다. 1974년부터 대한민국 첨단 제조 및 에너지 산업의 든든한 동반자로 함께해 온 (주)MS가스입니다.',
      btnProducts: '제품 라인업 보기',
      btnQuote: '온라인 견적 및 기술상담',
      btnPhone: '051-831-6100 (긴급/대표)',
      telemetryTitle: 'MS-TELEMETRY™ 24/7',
      telemetryStatus: '정상 운영',
      telemetrySub: '실시간 전국 배차 및 가스 운송 모니터링',
      lorryStat: `초저온 탱크로리: ${telemetry.activeLorries}대 가동`,
      reliabilityStat: '공급 안정성: 99.98%',
      item1: '초저온 압력용기 안전센서 IoT 원격 연동',
      item2: '다성분 혼합가스(Multi-Component) 초정밀 조제',
      item3: '위험성평가(HAZOP) 표준 준수 공급설비',
      stations: '기지국 : 녹산본사 · 충남 · 울산 · 포항',
      stat1Label: '창립 및 업력',
      stat1Val: '1974',
      stat1Unit: '년',
      stat1Desc: '50여 년간 축적된 가스 엔지니어링',
      stat2Label: '전국 거점망',
      stat2Val: '8',
      stat2Unit: '개 지역',
      stat2Desc: '동남권/중부권 아우르는 물류 허브',
      stat3Label: '직영 공급 네트워크',
      stat3Val: '17',
      stat3Unit: '개 영업소',
      stat3Desc: '빈틈없는 24시간 현장 지원망',
      stat4Label: '연간 실적 규모',
      stat4Val: '935',
      stat4Unit: '억 원',
      stat4Desc: '2024 GAAP 기준 연간 매출 달성',
    },
    en: {
      badge50th: 'SINCE 1974 • 50TH ANNIVERSARY',
      badgeCarbon: 'Carbon Neutrality Commended Enterprise',
      badgeGrid: 'Nationwide Realtime Gas Telemetry Live',
      preTitle: 'TOTAL CRYO & GAS ENGINEERING INFRASTRUCTURE',
      title1: 'From Gas Engineering to Logistics',
      titleHighlight: 'All-Encompassing One-Stop',
      title2: 'Total Energy Solutions',
      desc: 'Connecting people, lives, and high-tech industries safely and warmly through invisible energy. Trusted partner for Korea advanced manufacturing and energy since 1974.',
      btnProducts: 'Explore Product Lineup',
      btnQuote: 'Online Quote & Engineering',
      btnPhone: '+82-51-831-6100 (24h Hotline)',
      telemetryTitle: 'MS-TELEMETRY™ 24/7',
      telemetryStatus: 'NORMAL OPERATIONAL',
      telemetrySub: 'Nationwide Fleet & Vessel Realtime Dispatch',
      lorryStat: `Cryogenic Tankers: ${telemetry.activeLorries} Active`,
      reliabilityStat: 'Supply Reliability: 99.98%',
      item1: 'IoT Cryogenic Pressure Vessel Sensor Linkage',
      item2: 'Multi-Component Ultra-Precision Gravimetric Blending',
      item3: 'HAZOP Standard Compliance Infrastructure',
      stations: 'Hubs: Noksan HQ · Chungnam · Ulsan · Pohang',
      stat1Label: 'Established & History',
      stat1Val: '1974',
      stat1Unit: 'Year',
      stat1Desc: 'Over 50 years of cryo gas engineering',
      stat2Label: 'Nationwide Hubs',
      stat2Val: '8',
      stat2Unit: 'Regions',
      stat2Desc: 'Central & Southern logistics infrastructure',
      stat3Label: 'Direct Branch Network',
      stat3Val: '17',
      stat3Unit: 'Depots',
      stat3Desc: 'Seamless 24-hour on-site rapid dispatch',
      stat4Label: 'Annual Revenue',
      stat4Val: '93.5',
      stat4Unit: 'Billion KRW',
      stat4Desc: 'Solid 2024 GAAP financial performance',
    },
  }[language];

  return (
    <section className="relative w-full overflow-hidden bg-[#01284b] text-white">
      {/* Ambient Energy Grid Glow & Vector Cryogenic Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#04a8ff] blur-[128px]"></div>
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-[#004B6E] blur-[160px] opacity-70"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-[#26dcdd]/20 blur-[140px]"></div>
        <svg className="w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern height="60" id="hero-grid" patternUnits="userSpaceOnUse" width="60">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#56f9f9" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect fill="url(#hero-grid)" height="100%" width="100%" />
        </svg>
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 py-12 lg:py-20 flex flex-col justify-between">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d6e3fe]/20 backdrop-blur-md text-[#56f9f9] text-xs font-bold font-tech tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#56f9f9] animate-ping"></span>
            {t.badge50th}
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#d6e3fe]/15 text-[#aac9f4] text-xs font-medium">
            <span className="material-symbols-outlined text-[14px] text-[#04a8ff]">verified</span>
            {t.badgeCarbon}
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#d6e3fe]/15 text-[#cde5ff] text-xs font-medium">
            <span className="material-symbols-outlined text-[14px] text-[#26dcdd]">sensors</span>
            {t.badgeGrid}
          </span>
        </div>

        {/* Hero Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Title & Action Content */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <p className="text-xs sm:text-sm font-tech text-[#04a8ff] tracking-wider font-semibold">
              {t.preTitle}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.2] text-white">
              {t.title1}
              <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#04a8ff] via-[#56f9f9] to-[#ffffff] ml-1 sm:ml-0">
                {t.titleHighlight}
              </span>{' '}
              {t.title2}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#aac9f4] max-w-2xl leading-relaxed mt-1">
              {t.desc}
            </p>

            {/* CTA Controls */}
            <div className="flex flex-wrap items-center gap-3 pt-2 mt-2">
              <a
                href="#products-showcase"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#04a8ff] text-white font-bold text-sm shadow-lg shadow-[#04a8ff]/25 hover:shadow-xl hover:shadow-[#006399]/40 hover:-translate-y-0.5 transition-all"
              >
                <span>{t.btnProducts}</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>

              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#1e3e62] text-white hover:bg-[#1e3e62]/80 font-bold text-sm shadow-md hover:-translate-y-0.5 transition-all cursor-pointer border border-[#8ba9d3]/20"
              >
                <span className="material-symbols-outlined text-[18px] text-[#04a8ff]">support_agent</span>
                <span>{t.btnQuote}</span>
              </button>

              <a
                href="tel:051-831-6100"
                className="inline-flex items-center gap-2 px-4 py-3 text-[#aac9f4] hover:text-white font-semibold text-xs sm:text-sm transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">phone_in_talk</span>
                <span>{t.btnPhone}</span>
              </a>
            </div>
          </div>

          {/* Telemetry Live Glass Panel */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="relative p-6 rounded-2xl bg-[#d6e3fe]/10 backdrop-blur-xl border border-white/10 shadow-2xl">
              {/* Header Status */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#04a8ff] animate-pulse"></span>
                  <span className="font-tech text-xs text-white font-bold uppercase tracking-wider">
                    {t.telemetryTitle}
                  </span>
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#004444] text-[#56f9f9] border border-[#56f9f9]/30">
                  {t.telemetryStatus}
                </span>
              </div>

              {/* Visual Flow Micrographic */}
              <div className="mt-4 p-4 rounded-xl bg-[#1e3e62]/60 border border-white/5 flex flex-col gap-2">
                <div className="flex justify-between items-center text-[#aac9f4] text-xs font-medium">
                  <span>{t.telemetrySub}</span>
                  <span className="text-[#26dcdd] font-bold font-tech">
                    ACTIVE {telemetry.activePercentage}%
                  </span>
                </div>
                <div className="w-full bg-[#01284b] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#04a8ff] to-[#26dcdd] h-full rounded-full transition-all duration-1000"
                    style={{ width: `${telemetry.activePercentage}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-[#aac9f4] pt-1 font-tech">
                  <span>{t.lorryStat}</span>
                  <span className="text-[#56f9f9]">{t.reliabilityStat}</span>
                </div>
              </div>

              {/* Live Metric Tickers */}
              <div className="grid grid-cols-2 gap-2 mt-3 text-xs">
                <div className="p-2.5 rounded-lg bg-[#01284b]/80 border border-white/5 flex flex-col">
                  <span className="text-[10px] text-[#8ba9d3]">탱크 기준 압력</span>
                  <span className="text-base font-bold text-white font-tech">
                    {telemetry.pressureBar} <span className="text-xs text-[#56f9f9]">bar</span>
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#01284b]/80 border border-white/5 flex flex-col">
                  <span className="text-[10px] text-[#8ba9d3]">가스 순도 제어</span>
                  <span className="text-base font-bold text-white font-tech">
                    99.9998<span className="text-xs text-[#56f9f9]">%</span>
                  </span>
                </div>
              </div>

              {/* Bullet Attributes */}
              <div className="mt-4 flex flex-col gap-2 text-xs text-[#aac9f4]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#04a8ff] text-[18px]">
                    check_circle
                  </span>
                  <span>{t.item1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#04a8ff] text-[18px]">
                    check_circle
                  </span>
                  <span>{t.item2}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#04a8ff] text-[18px]">
                    check_circle
                  </span>
                  <span>{t.item3}</span>
                </div>
              </div>

              {/* Clickable Station link */}
              <button
                onClick={onOpenLocations}
                className="w-full mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#cde5ff] hover:text-[#56f9f9] transition-colors cursor-pointer"
              >
                <span>{t.stations}</span>
                <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Hero Bottom Stats Bar */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <span className="font-tech text-xs text-[#04a8ff] tracking-wider uppercase">
              {t.stat1Label}
            </span>
            <span className="font-stat-counter text-3xl sm:text-4xl text-white font-bold my-0.5">
              {t.stat1Val}
              <span className="text-[#56f9f9] text-lg ml-1 font-normal">{t.stat1Unit}</span>
            </span>
            <span className="text-xs text-[#aac9f4]">{t.stat1Desc}</span>
          </div>

          <div className="flex flex-col">
            <span className="font-tech text-xs text-[#04a8ff] tracking-wider uppercase">
              {t.stat2Label}
            </span>
            <span className="font-stat-counter text-3xl sm:text-4xl text-white font-bold my-0.5">
              {t.stat2Val}
              <span className="text-[#56f9f9] text-lg ml-1 font-normal">{t.stat2Unit}</span>
            </span>
            <span className="text-xs text-[#aac9f4]">{t.stat2Desc}</span>
          </div>

          <div className="flex flex-col">
            <span className="font-tech text-xs text-[#04a8ff] tracking-wider uppercase">
              {t.stat3Label}
            </span>
            <span className="font-stat-counter text-3xl sm:text-4xl text-white font-bold my-0.5">
              {t.stat3Val}
              <span className="text-[#56f9f9] text-lg ml-1 font-normal">{t.stat3Unit}</span>
            </span>
            <span className="text-xs text-[#aac9f4]">{t.stat3Desc}</span>
          </div>

          <div className="flex flex-col">
            <span className="font-tech text-xs text-[#04a8ff] tracking-wider uppercase">
              {t.stat4Label}
            </span>
            <span className="font-stat-counter text-3xl sm:text-4xl text-white font-bold my-0.5">
              {t.stat4Val}
              <span className="text-[#56f9f9] text-lg ml-1 font-normal">{t.stat4Unit}</span>
            </span>
            <span className="text-xs text-[#aac9f4]">{t.stat4Desc}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
