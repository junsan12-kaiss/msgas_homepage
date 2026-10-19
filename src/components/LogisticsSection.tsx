import React, { useState } from 'react';
import { LOGISTICS_HUBS } from '../data/mockData';
import { Language, LogisticsHub } from '../types';

interface LogisticsSectionProps {
  language: Language;
  onOpenLocations: () => void;
}

export const LogisticsSection: React.FC<LogisticsSectionProps> = ({
  language,
  onOpenLocations,
}) => {
  const [selectedHub, setSelectedHub] = useState<LogisticsHub>(LOGISTICS_HUBS[0]);

  const t = {
    ko: {
      badge: 'NATIONWIDE GAS SUPPLY CHAIN INFRASTRUCTURE',
      title: '전국적인 가스 운송 능력과 안정적인 공급망',
      desc: '전국을 아우르는 고도화된 운송 인프라와 실시간 모니터링 시스템을 통해 언제 어디서나 안전하고 효율적인 가스 공급을 실현합니다.',
      locationBtn: '영업소 및 사업장 위치 안내',
      card1Val: '8',
      card1Unit: '개',
      card1Title: '지역 전국 거점',
      card1Desc: '부산, 울산, 충남, 경남 등 주요 산단 허브',
      card2Val: '17',
      card2Unit: '개',
      card2Title: '직영 영업소',
      card2Desc: '긴급 발주 대응 및 직배송 공급망',
      card3Val: '10',
      card3Unit: '개국',
      card3Title: '해외 글로벌 네트워크',
      card3Desc: '글로벌 고순도 원자재 수급 및 수출입',
      card4Val: '935',
      card4Unit: '억',
      card4Title: '연간 매출액',
      card4Desc: '2024 GAAP 기준 건실한 재무 기반',
      logisticsTitle: '전국 초저온 가스 로지스틱스 관제',
      gpsBadge: 'Realtime GPS Connected',
      statA_label: '초저온 저장탱크',
      statA_val: '12,500 m³',
      statA_sub: '녹산 및 전국 비축기지 저장량',
      statB_label: '탱크로리 및 실린더 운용',
      statB_val: '350+ 대',
      statB_sub: '위험물 안전운송 전용 특수 차량',
      statC_label: '납기 준수율',
      statC_val: '99.9%',
      statC_sub: '연중무휴 On-Time Delivery',
      feat1Title: '실시간 압력/순도 원격검침',
      feat1Desc: '고객사 내 가스 저장탱크 잔량을 원격 관제하여 사전 보충 자동 공급',
      feat2Title: '24시 비상안전대응팀 가동',
      feat2Desc: '전국 영업망 연계 가스 누출 및 설비 이상 시 60분 내 현장 출동',
      selectStation: '관제 거점 선택:',
      callCenter: '직통 관제실',
    },
    en: {
      badge: 'NATIONWIDE GAS SUPPLY CHAIN INFRASTRUCTURE',
      title: 'Nationwide Gas Logistics & Reliable Supply Chain',
      desc: 'Ensuring safe and efficient gas distribution anywhere and anytime through an advanced nationwide fleet and 24/7 telemetric monitoring.',
      locationBtn: 'View All Branches & Stations',
      card1Val: '8',
      card1Unit: 'Hubs',
      card1Title: 'Nationwide Key Hubs',
      card1Desc: 'Major complexes: Busan, Ulsan, Chungnam, etc.',
      card2Val: '17',
      card2Unit: 'Depots',
      card2Title: 'Direct Branch Depots',
      card2Desc: 'Emergency delivery and rapid replenishment',
      card3Val: '10',
      card3Unit: 'Nations',
      card3Title: 'Global Network',
      card3Desc: 'Import/export of ultra-pure raw materials',
      card4Val: '93.5',
      card4Unit: 'B KRW',
      card4Title: 'Annual Revenue',
      card4Desc: 'Robust 2024 GAAP financial standing',
      logisticsTitle: 'Nationwide Cryogenic Logistics Control',
      gpsBadge: 'Realtime GPS Connected',
      statA_label: 'Cryo Storage Tanks',
      statA_val: '12,500 m³',
      statA_sub: 'Noksan HQ & nationwide total capacity',
      statB_label: 'Fleet & Cylinders',
      statB_val: '350+ Units',
      statB_sub: 'Hazardous materials certified specialized transport',
      statC_label: 'On-Time Fulfillment',
      statC_val: '99.9%',
      statC_sub: 'Year-round 24/7 punctual delivery',
      feat1Title: 'Realtime Telemetric Pressure & Level',
      feat1Desc: 'Automatic proactive refills by monitoring client storage tank levels remotely.',
      feat2Title: '24/7 Emergency Safety Response',
      feat2Desc: 'Rapid on-site emergency dispatch within 60 minutes across all network hubs.',
      selectStation: 'Select Telemetry Station:',
      callCenter: 'Dispatch Center',
    },
  }[language];

  return (
    <section className="w-full bg-[#F1F5F9] py-14 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#cde5ff] text-[#01284b] font-tech text-xs font-bold mb-3">
              <span className="material-symbols-outlined text-[16px]">local_shipping</span>
              {t.badge}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#0e1c2f] font-extrabold tracking-tight">
              {t.title}
            </h2>
            <p className="text-sm sm:text-base text-[#43474e] mt-2 leading-relaxed">
              {t.desc}
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenLocations}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-white text-[#01284b] font-semibold text-xs sm:text-sm hover:bg-[#e7eeff] shadow-sm transition-all cursor-pointer border border-[#c3c6cf]/30"
            >
              <span>{t.locationBtn}</span>
              <span className="material-symbols-outlined text-[18px]">location_on</span>
            </button>
          </div>
        </div>

        {/* Bento Grid Metric Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* 4 Stat Highlight Cards (Col Span 5) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="p-5 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-[#e2e8f0]">
              <div className="w-10 h-10 rounded-lg bg-[#cde5ff]/60 flex items-center justify-center text-[#006399] mb-4">
                <span className="material-symbols-outlined text-[24px]">hub</span>
              </div>
              <div>
                <div className="font-stat-counter text-3xl sm:text-4xl text-[#01284b] font-bold">
                  {t.card1Val}
                  <span className="text-xl font-semibold text-[#006399] ml-1">
                    {t.card1Unit}
                  </span>
                </div>
                <div className="text-sm text-[#0e1c2f] font-bold mt-1 font-tech">
                  {t.card1Title}
                </div>
                <div className="text-xs text-[#73777f] mt-1 leading-snug">
                  {t.card1Desc}
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-5 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-[#e2e8f0]">
              <div className="w-10 h-10 rounded-lg bg-[#d6e3fe]/70 flex items-center justify-center text-[#01284b] mb-4">
                <span className="material-symbols-outlined text-[24px]">storefront</span>
              </div>
              <div>
                <div className="font-stat-counter text-3xl sm:text-4xl text-[#01284b] font-bold">
                  {t.card2Val}
                  <span className="text-xl font-semibold text-[#006399] ml-1">
                    {t.card2Unit}
                  </span>
                </div>
                <div className="text-sm text-[#0e1c2f] font-bold mt-1 font-tech">
                  {t.card2Title}
                </div>
                <div className="text-xs text-[#73777f] mt-1 leading-snug">
                  {t.card2Desc}
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-5 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-[#e2e8f0]">
              <div className="w-10 h-10 rounded-lg bg-[#004444]/20 flex items-center justify-center text-[#004444] mb-4">
                <span className="material-symbols-outlined text-[24px]">public</span>
              </div>
              <div>
                <div className="font-stat-counter text-3xl sm:text-4xl text-[#01284b] font-bold">
                  {t.card3Val}
                  <span className="text-xl font-semibold text-[#004444] ml-1">
                    {t.card3Unit}
                  </span>
                </div>
                <div className="text-sm text-[#0e1c2f] font-bold mt-1 font-tech">
                  {t.card3Title}
                </div>
                <div className="text-xs text-[#73777f] mt-1 leading-snug">
                  {t.card3Desc}
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-5 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-[#e2e8f0]">
              <div className="w-10 h-10 rounded-lg bg-[#04a8ff]/20 flex items-center justify-center text-[#006399] mb-4">
                <span className="material-symbols-outlined text-[24px]">trending_up</span>
              </div>
              <div>
                <div className="font-stat-counter text-3xl sm:text-4xl text-[#01284b] font-bold">
                  {t.card4Val}
                  <span className="text-xl font-semibold text-[#006399] ml-1">
                    {t.card4Unit}
                  </span>
                </div>
                <div className="text-sm text-[#0e1c2f] font-bold mt-1 font-tech">
                  {t.card4Title}
                </div>
                <div className="text-xs text-[#73777f] mt-1 leading-snug">
                  {t.card4Desc}
                </div>
              </div>
            </div>
          </div>

          {/* Logistics Map & Telemetry Dashboard Visual (Col Span 7) */}
          <div className="lg:col-span-7 rounded-2xl bg-white p-6 shadow-sm flex flex-col justify-between border border-[#e2e8f0]">
            <div>
              <div className="flex flex-wrap items-center justify-between pb-3 border-b border-[#e2e8f0] gap-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#006399]">explore</span>
                  <span className="text-lg sm:text-xl text-[#01284b] font-bold">
                    {t.logisticsTitle}
                  </span>
                </div>
                <span className="text-[11px] font-tech font-semibold px-2.5 py-1 rounded-full bg-[#f0f3ff] text-[#43474e] border border-[#d6e3fe]">
                  {t.gpsBadge}
                </span>
              </div>

              {/* 3 Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#e2e8f0] flex flex-col gap-1">
                  <span className="text-[11px] font-tech text-[#73777f] uppercase font-semibold">
                    {t.statA_label}
                  </span>
                  <span className="font-stat-counter text-xl sm:text-2xl text-[#01284b] font-bold">
                    {t.statA_val}
                  </span>
                  <span className="text-xs text-[#43474e]">{t.statA_sub}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#e2e8f0] flex flex-col gap-1">
                  <span className="text-[11px] font-tech text-[#73777f] uppercase font-semibold">
                    {t.statB_label}
                  </span>
                  <span className="font-stat-counter text-xl sm:text-2xl text-[#006399] font-bold">
                    {t.statB_val}
                  </span>
                  <span className="text-xs text-[#43474e]">{t.statB_sub}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#e2e8f0] flex flex-col gap-1">
                  <span className="text-[11px] font-tech text-[#73777f] uppercase font-semibold">
                    {t.statC_label}
                  </span>
                  <span className="font-stat-counter text-xl sm:text-2xl text-[#00898a] font-bold">
                    {t.statC_val}
                  </span>
                  <span className="text-xs text-[#43474e]">{t.statC_sub}</span>
                </div>
              </div>

              {/* Station Quick Selector */}
              <div className="mt-2 p-3 rounded-xl bg-[#f0f3ff]/60 border border-[#d6e3fe]/60">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-bold text-[#01284b]">{t.selectStation}</span>
                  <span className="text-[11px] text-[#006399] font-semibold">
                    실시간 상태: 정상 가동
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {LOGISTICS_HUBS.map((hub) => (
                    <button
                      key={hub.id}
                      onClick={() => setSelectedHub(hub)}
                      className={`px-2.5 py-1 rounded text-xs transition-all cursor-pointer ${
                        selectedHub.id === hub.id
                          ? 'bg-[#01284b] text-white font-bold shadow-sm'
                          : 'bg-white text-[#43474e] hover:bg-[#e7eeff] border border-[#c3c6cf]/30'
                      }`}
                    >
                      {hub.nameKo.split(' ')[0]}
                    </button>
                  ))}
                </div>

                {/* Selected Hub Telemetry Bar */}
                <div className="mt-3 pt-2 border-t border-[#dee8ff] flex flex-wrap items-center justify-between text-xs text-[#43474e] gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <strong className="text-[#01284b]">{selectedHub.nameKo}</strong>
                    <span>| 저장능력: {selectedHub.tankCapacity}</span>
                    <span>| 배차: {selectedHub.trucks}대</span>
                  </div>
                  <a
                    href={`tel:${selectedHub.phone}`}
                    className="inline-flex items-center gap-1 text-[#006399] font-bold hover:underline"
                  >
                    <span className="material-symbols-outlined text-[14px]">call</span>
                    <span>{selectedHub.phone}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Feature items horizontal */}
            <div className="pt-4 mt-2 border-t border-[#e2e8f0] flex flex-col sm:flex-row gap-4">
              <div className="flex items-start gap-3 flex-1">
                <div className="w-8 h-8 rounded-full bg-[#cde5ff] flex items-center justify-center text-[#006399] shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">verified_user</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0e1c2f] font-tech">
                    {t.feat1Title}
                  </h4>
                  <p className="text-xs text-[#73777f] mt-0.5 leading-relaxed">
                    {t.feat1Desc}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 flex-1">
                <div className="w-8 h-8 rounded-full bg-[#cde5ff] flex items-center justify-center text-[#006399] shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">emergency</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0e1c2f] font-tech">
                    {t.feat2Title}
                  </h4>
                  <p className="text-xs text-[#73777f] mt-0.5 leading-relaxed">
                    {t.feat2Desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
