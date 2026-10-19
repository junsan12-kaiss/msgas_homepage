import React from 'react';
import { PRODUCT_IMAGES } from '../data/mockData';
import { GasProduct, Language } from '../types';

interface ProductsSectionProps {
  language: Language;
  onSelectCategory: (category: GasProduct['category']) => void;
  onOpenCatalog: () => void;
  onOpenMsds: () => void;
  onOpenQuote: () => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  language,
  onSelectCategory,
  onOpenCatalog,
  onOpenMsds,
  onOpenQuote,
}) => {
  const t = {
    ko: {
      preTitle: 'MS GAS PRODUCT SOLUTIONS',
      title: '다양한 산업 분야를 아우르는 고부가가치형 가스 산업',
      desc: '반도체, 제철, 조선, 화학부터 친환경 신에너지 및 의료 현장까지, 최고 순도와 정밀 조제 기술로 제조 산업의 원천 동력을 공급합니다.',
      catalogBtn: '전체 제품 카탈로그 PDF',
      msdsBtn: 'MSDS 통합 검색센터',
      viewSpecs: '상세 규격 및 주문 안내',
      turnkeyQuote: '설비 엔지니어링 및 턴키 견적 요청',
      // Cards
      cat1Badge: '산업용 가스',
      cat1Sub: 'Industrial Core',
      cat1Title: '산업용 가스 (Industrial Gases)',
      cat1Desc: '산소, 질소, 아르곤, 탄산가스, 수소 등 첨단 반도체, 제철·제강, 정밀 화학, 레이저 절단 가공 공정에 필수적인 고순도 대용량 공급 시스템.',
      cat1Action: '초저온 탱크로리 / 실린더',

      cat2Badge: '연료용 가스',
      cat2Sub: 'High Efficiency Fuel',
      cat2Title: '연료용 가스 (Fuel Gases)',
      cat2Desc: '프로판, 프라멕스, 에탄, 부탄 및 이소부탄 등 산업용 보일러, 열처리, 절단용 연료로서 뛰어난 열효율과 안정적인 연소성을 보장합니다.',
      cat2Action: '대용량 벌크 공급 체계',

      cat3Badge: '특수 가스',
      cat3Sub: '99.9999% Ultra Pure',
      cat3Title: '특수 가스 (Specialty Gases)',
      cat3Desc: '전자 반도체 및 디스플레이, 첨단 2차전지, 바이오 산업을 위한 미세 불순물 제어 6N(99.9999%) 초고순도 가스 및 맞춤형 다성분 혼합가스.',
      cat3Action: '정밀 분석 성적서(COA) 동봉',

      cat4Badge: '의료용 가스',
      cat4Sub: 'GMP Grade Certified',
      cat4Title: '의료용 가스 (Medical Gases)',
      cat4Desc: '대학병원 및 전국 의료기관에 공급되는 환자 호흡 치료용 산소, 수술실 마취용 가스 등 KGMP 기준을 엄격히 준수한 무결점 생명 가스 솔루션.',
      cat4Action: '의약품 제조 및 품질관리기준 인증',

      cat5Badge: '표준 가스 & 기타장비',
      cat5Sub: 'Calibration & Cryo Hardware',
      cat5Title: '표준 가스 & 가스 공급 설비 시스템',
      cat5Desc: '국가표준원 공인 기준에 따른 연구소·환경분석용 교정 표준가스와 함께 초저온 저장탱크, 기화기(Vaporizer), 압력조정기(Regulator), 가스 배관 시공까지 가스 엔지니어링 전 분야 장비 구축을 지원합니다.',
      cat5Pill1: '표준가스 : 교정·분석용 기준가스',
      cat5Pill2: '초저온 용기 : LGC / Dewar',
      cat5Pill3: '주변 설비 : 기화기 및 매니폴드',
    },
    en: {
      preTitle: 'MS GAS PRODUCT SOLUTIONS',
      title: 'High Value-Added Gas Solutions for Advanced Industries',
      desc: 'From semiconductors and steelmaking to clean new energy and healthcare, delivering the core power of manufacturing with ultra-high purity and precision blending.',
      catalogBtn: 'Full Product Catalog (PDF)',
      msdsBtn: 'Integrated MSDS Database',
      viewSpecs: 'View Specifications & Ordering',
      turnkeyQuote: 'Request Turnkey Cryo Engineering Quote',
      // Cards
      cat1Badge: 'Industrial Gas',
      cat1Sub: 'Industrial Core',
      cat1Title: 'Industrial Gases (O2, N2, Ar, CO2, H2)',
      cat1Desc: 'High-purity, high-volume supply systems indispensable for semiconductors, steelmaking, petrochemical synthesis, and precision laser cutting.',
      cat1Action: 'Cryo Bulk Tankers / Cylinders',

      cat2Badge: 'Fuel Gas',
      cat2Sub: 'High Efficiency Fuel',
      cat2Title: 'Fuel Gases (Propane, Pramax, Ethane)',
      cat2Desc: 'Propane, Pramax, ethane, and butane ensuring high thermal efficiency and stable combustion for industrial boilers, heat treatments, and plate cutting.',
      cat2Action: 'Large Capacity Bulk Supply',

      cat3Badge: 'Specialty Gas',
      cat3Sub: '99.9999% Ultra Pure',
      cat3Title: 'Specialty Gases (6N UHP & Blends)',
      cat3Desc: '6N (99.9999%) ultra-pure gases with sub-ppm impurity control and tailored multi-component mixtures for semiconductors, secondary batteries, and bio-tech.',
      cat3Action: 'Certificate of Analysis (COA) Included',

      cat4Badge: 'Medical Gas',
      cat4Sub: 'GMP Grade Certified',
      cat4Title: 'Medical Gases (Oxygen, Nitrous Oxide)',
      cat4Desc: 'Zero-defect medical gas solutions strictly adhering to KGMP standards for ICU respiratory care and operating room surgical anesthesia.',
      cat4Action: 'KGMP Certified Pharmaceutical Grade',

      cat5Badge: 'Standard Gas & Equipment',
      cat5Sub: 'Calibration & Cryo Hardware',
      cat5Title: 'Calibration Standards & Cryogenic Supply Systems',
      cat5Desc: 'Comprehensive turnkey engineering encompassing certified CRM calibration standards, cryogenic storage tanks, ambient vaporizers, gas regulators, and safety piping.',
      cat5Pill1: 'Standard Gas: Certified CRM Reference',
      cat5Pill2: 'Cryo Containers: LGC / Dewar',
      cat5Pill3: 'Peripherals: Vaporizers & Manifolds',
    },
  }[language];

  return (
    <section className="w-full bg-[#f9f9ff] py-14 lg:py-20" id="products-showcase">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="font-tech text-xs sm:text-sm text-[#006399] font-bold uppercase tracking-wider">
              {t.preTitle}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#0e1c2f] font-extrabold tracking-tight mt-1">
              {t.title}
            </h2>
            <p className="text-sm sm:text-base text-[#43474e] mt-2 max-w-2xl leading-relaxed">
              {t.desc}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={onOpenCatalog}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#e7eeff] text-[#01284b] font-bold text-xs sm:text-sm hover:bg-[#d6e3fe] transition-colors cursor-pointer border border-[#c3c6cf]/30"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span>{t.catalogBtn}</span>
            </button>
            <button
              onClick={onOpenMsds}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1e3e62] text-white font-bold text-xs sm:text-sm hover:bg-[#01284b] transition-colors cursor-pointer shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">description</span>
              <span>{t.msdsBtn}</span>
            </button>
          </div>
        </div>

        {/* 5 Key Gas Categories Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 1. Industrial Gas */}
          <div
            onClick={() => onSelectCategory('industrial')}
            className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group cursor-pointer border border-[#e2e8f0]"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded bg-[#cde5ff]/60 text-[#006399] text-xs font-bold font-tech">
                  {t.cat1Badge}
                </span>
                <span className="text-xs text-[#73777f] font-tech">{t.cat1Sub}</span>
              </div>

              <div className="w-full h-44 rounded-xl overflow-hidden mb-4 relative bg-[#01284b]">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Industrial cryogenic storage and gas manifold"
                  src={PRODUCT_IMAGES.industrial}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#01284b]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
                  <span className="px-2 py-0.5 rounded bg-white/95 text-xs text-[#01284b] font-bold">
                    O₂
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/95 text-xs text-[#01284b] font-bold">
                    N₂
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/95 text-xs text-[#01284b] font-bold">
                    Ar
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/95 text-xs text-[#01284b] font-bold">
                    CO₂
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#04a8ff] text-white text-xs font-bold">
                    H₂ 수소
                  </span>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl text-[#01284b] font-bold group-hover:text-[#006399] transition-colors">
                {t.cat1Title}
              </h3>
              <p className="text-xs sm:text-sm text-[#43474e] mt-2 leading-relaxed">
                {t.cat1Desc}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#f1f5f9] flex items-center justify-between">
              <span className="text-xs text-[#006399] font-bold font-tech">
                {t.cat1Action}
              </span>
              <span className="material-symbols-outlined text-[#006399] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>

          {/* 2. Fuel Gas */}
          <div
            onClick={() => onSelectCategory('fuel')}
            className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group cursor-pointer border border-[#e2e8f0]"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded bg-[#F1BA28]/20 text-[#8A6400] text-xs font-bold font-tech">
                  {t.cat2Badge}
                </span>
                <span className="text-xs text-[#73777f] font-tech">{t.cat2Sub}</span>
              </div>

              <div className="w-full h-44 rounded-xl overflow-hidden mb-4 relative bg-[#01284b]">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Industrial burner firing with clean efficient propane"
                  src={PRODUCT_IMAGES.fuel}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#01284b]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
                  <span className="px-2 py-0.5 rounded bg-white/95 text-xs text-[#01284b] font-bold">
                    프로판
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/95 text-xs text-[#01284b] font-bold">
                    프라멕스
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/95 text-xs text-[#01284b] font-bold">
                    에탄
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/95 text-xs text-[#01284b] font-bold">
                    부탄/이소부탄
                  </span>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl text-[#01284b] font-bold group-hover:text-[#006399] transition-colors">
                {t.cat2Title}
              </h3>
              <p className="text-xs sm:text-sm text-[#43474e] mt-2 leading-relaxed">
                {t.cat2Desc}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#f1f5f9] flex items-center justify-between">
              <span className="text-xs text-[#006399] font-bold font-tech">
                {t.cat2Action}
              </span>
              <span className="material-symbols-outlined text-[#006399] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>

          {/* 3. Specialty Gas */}
          <div
            onClick={() => onSelectCategory('specialty')}
            className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group cursor-pointer border border-[#e2e8f0]"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded bg-[#56f9f9]/30 text-[#004444] text-xs font-bold font-tech">
                  {t.cat3Badge}
                </span>
                <span className="text-xs text-[#73777f] font-tech">{t.cat3Sub}</span>
              </div>

              <div className="w-full h-44 rounded-xl overflow-hidden mb-4 relative bg-[#01284b]">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Semiconductor cleanroom specialty gas system"
                  src={PRODUCT_IMAGES.specialty}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#01284b]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
                  <span className="px-2 py-0.5 rounded bg-white/95 text-xs text-[#01284b] font-bold">
                    초고순도 가스
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/95 text-xs text-[#01284b] font-bold">
                    정밀 혼합가스
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#26dcdd] text-[#002020] text-xs font-bold">
                    반도체·바이오
                  </span>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl text-[#01284b] font-bold group-hover:text-[#006399] transition-colors">
                {t.cat3Title}
              </h3>
              <p className="text-xs sm:text-sm text-[#43474e] mt-2 leading-relaxed">
                {t.cat3Desc}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#f1f5f9] flex items-center justify-between">
              <span className="text-xs text-[#006399] font-bold font-tech">
                {t.cat3Action}
              </span>
              <span className="material-symbols-outlined text-[#006399] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>

          {/* 4. Medical Gas */}
          <div
            onClick={() => onSelectCategory('medical')}
            className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group cursor-pointer border border-[#e2e8f0]"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded bg-[#cde5ff] text-[#006399] text-xs font-bold font-tech">
                  {t.cat4Badge}
                </span>
                <span className="text-xs text-[#73777f] font-tech">{t.cat4Sub}</span>
              </div>

              <div className="w-full h-44 rounded-xl overflow-hidden mb-4 relative bg-[#01284b]">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Modern hospital medical oxygen and anesthetic gas equipment"
                  src={PRODUCT_IMAGES.medical}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#01284b]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
                  <span className="px-2 py-0.5 rounded bg-white/95 text-xs text-[#01284b] font-bold">
                    의료용 산소
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/95 text-xs text-[#01284b] font-bold">
                    아산화질소
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/95 text-xs text-[#01284b] font-bold">
                    의료용 CO₂
                  </span>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl text-[#01284b] font-bold group-hover:text-[#006399] transition-colors">
                {t.cat4Title}
              </h3>
              <p className="text-xs sm:text-sm text-[#43474e] mt-2 leading-relaxed">
                {t.cat4Desc}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#f1f5f9] flex items-center justify-between">
              <span className="text-xs text-[#006399] font-bold font-tech">
                {t.cat4Action}
              </span>
              <span className="material-symbols-outlined text-[#006399] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>

          {/* 5. Standard Gas & Equipment (Col Span 2) */}
          <div
            onClick={() => onSelectCategory('standard')}
            className="md:col-span-2 lg:col-span-2 rounded-2xl bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col lg:flex-row justify-between gap-6 group cursor-pointer border border-[#e2e8f0]"
          >
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2.5 py-1 rounded bg-[#d6e3fe] text-[#01284b] text-xs font-bold font-tech">
                    {t.cat5Badge}
                  </span>
                  <span className="text-xs text-[#73777f] font-tech">{t.cat5Sub}</span>
                </div>

                <h3 className="text-lg sm:text-xl text-[#01284b] font-bold group-hover:text-[#006399] transition-colors">
                  {t.cat5Title}
                </h3>
                <p className="text-xs sm:text-sm text-[#43474e] mt-2 leading-relaxed max-w-xl">
                  {t.cat5Desc}
                </p>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div className="p-2.5 rounded bg-[#F8FAFC] text-xs text-[#01284b] border border-[#e2e8f0]">
                    <strong>표준가스 :</strong> 교정·분석용 기준가스
                  </div>
                  <div className="p-2.5 rounded bg-[#F8FAFC] text-xs text-[#01284b] border border-[#e2e8f0]">
                    <strong>초저온 용기 :</strong> LGC / Dewar
                  </div>
                  <div className="p-2.5 rounded bg-[#F8FAFC] text-xs text-[#01284b] border border-[#e2e8f0]">
                    <strong>주변 설비 :</strong> 기화기 및 매니폴드
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#f1f5f9] flex items-center gap-2 text-[#006399] text-xs sm:text-sm font-bold font-tech">
                <span>{t.turnkeyQuote}</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>

            <div className="w-full lg:w-72 h-48 lg:h-auto rounded-xl overflow-hidden relative shrink-0 bg-[#01284b]">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Gas calibration regulators and manifold"
                src={PRODUCT_IMAGES.equipment}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#01284b]/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
