import React from 'react';
import { LOGO_URL } from '../data/mockData';
import { GasProduct, Language } from '../types';

interface FooterProps {
  language: Language;
  onOpenQuote: () => void;
  onOpenMsds: () => void;
  onOpenCatalog: () => void;
  onOpenCompany: () => void;
  onOpenLocations: () => void;
  onOpenQuality: () => void;
  onOpenRecruit: () => void;
  onSelectCategory: (cat: GasProduct['category']) => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onOpenQuote,
  onOpenMsds,
  onOpenCatalog,
  onOpenCompany,
  onOpenLocations,
  onOpenQuality,
  onOpenRecruit,
  onSelectCategory,
}) => {
  return (
    <footer className="w-full bg-[#01284b] text-white pt-12 pb-14 border-t border-[#1e3e62]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-10 border-b border-white/10">
          {/* Brand info (Col 2) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-lg inline-flex">
                <img
                  alt="MS Gas Logo"
                  className="h-7 w-auto object-contain"
                  src={LOGO_URL}
                />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                (주)MS가스
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#aac9f4] leading-relaxed max-w-md">
              1974년 창립 이래 반세기 동안 축적된 극저온 엔지니어링 및 고순도 가스 정제 기술로 대한민국 산업 발전의 기틀을 다져온 초격차 산업 가스 인프라 리더입니다.
            </p>

            <div className="flex flex-wrap gap-2 pt-1 font-tech">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#1e3e62] text-[#cde5ff] text-xs">
                전국 8개 지역 권역망
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#1e3e62] text-[#cde5ff] text-xs">
                17개 직영 영업소 네트워크
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#1e3e62] text-[#56f9f9] text-xs">
                ISO 9001 / ISO 14001 인증
              </span>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-tech text-xs text-[#95ccff] mb-4 uppercase font-bold tracking-wider">
              제품소개
            </h4>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-[#aac9f4]">
              <li>
                <button
                  onClick={() => onSelectCategory('industrial')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  산업용가스 (O₂, N₂, Ar, CO₂)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('specialty')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  초고순도 특수가스 (6N UHP)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('medical')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  의료용가스 &amp; 헬스케어
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('fuel')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  연료용가스 (LPG/프라멕스)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('standard')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  교정/분석용 표준가스
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('standard')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  초저온 가스설비 및 장비
                </button>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="font-tech text-xs text-[#95ccff] mb-4 uppercase font-bold tracking-wider">
              고객지원 &amp; 자료
            </h4>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-[#aac9f4]">
              <li>
                <button
                  onClick={onOpenQuote}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  온라인 견적 문의
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenMsds}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  물질안전보건자료 (MSDS)
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCatalog}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  기술 규격서 및 카탈로그
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenQuality}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  품질인증 현황조회
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenRecruit}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  인재채용
                </button>
              </li>
              <li>
                <a
                  href="tel:051-831-6100"
                  className="hover:text-white transition-colors text-left flex items-center gap-1 text-[#56f9f9]"
                >
                  <span className="material-symbols-outlined text-[14px]">emergency</span>
                  <span>24시 안전대응센터</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Family Sites & Call Center */}
          <div>
            <h4 className="font-tech text-xs text-[#95ccff] mb-4 uppercase font-bold tracking-wider">
              Family Sites &amp; Hub
            </h4>
            <div className="flex flex-col gap-1.5 text-xs text-[#aac9f4]">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenCompany();
                }}
                className="flex items-center justify-between p-2 rounded-lg bg-[#1e3e62]/60 hover:bg-[#1e3e62] hover:text-white transition-colors"
              >
                <span>MS그룹 소개</span>
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>

              <button
                onClick={onOpenMsds}
                className="flex items-center justify-between p-2 rounded-lg bg-[#1e3e62]/60 hover:bg-[#1e3e62] hover:text-white transition-colors text-left cursor-pointer"
              >
                <span>MSDS 통합검색센터</span>
                <span className="material-symbols-outlined text-[14px]">search</span>
              </button>

              <button
                onClick={onOpenQuality}
                className="flex items-center justify-between p-2 rounded-lg bg-[#1e3e62]/60 hover:bg-[#1e3e62] hover:text-white transition-colors text-left cursor-pointer"
              >
                <span>품질인증 현황조회</span>
                <span className="material-symbols-outlined text-[14px]">verified</span>
              </button>
            </div>

            <div className="mt-4 p-3 rounded-xl bg-[#1e3e62]/50 border border-white/5">
              <p className="text-[11px] font-tech text-[#cde5ff]">전국 대표 고객 콜센터</p>
              <a
                href="tel:051-831-6100"
                className="text-base sm:text-lg text-white font-bold font-tech mt-0.5 block hover:text-[#56f9f9] transition-colors"
              >
                051-831-6100
              </a>
              <p className="text-[10px] text-[#aac9f4] mt-0.5">
                평일 08:30 ~ 17:30 (주말/공휴일 휴무)
              </p>
            </div>
          </div>
        </div>

        {/* Corporate Legal & Registration */}
        <div className="pt-6 mt-6 bg-[#1e3e62]/30 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border border-white/5">
          <div className="flex flex-col gap-1 text-xs text-[#aac9f4]">
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <span>
                <strong>(주)MS가스</strong>
              </span>
              <span>대표이사 : 전청민</span>
              <span>설립년도 : 1974년</span>
              <span>사업자등록번호 : 606-81-06798</span>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <span>본사/공장 : 부산광역시 강서구 녹산산단 261로 14번길 5 (송정동)</span>
              <span>이메일 : msgas@msgas.co.kr</span>
            </div>
            <p className="text-[11px] text-[#8ba9d3] mt-1 font-tech">
              Copyright © 2025 (주)MS가스 MS Gas Corporation. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs shrink-0 font-medium">
            <button
              onClick={() => alert('개인정보처리방침: (주)MS가스는 고객의 개인정보를 소중히 보호합니다.')}
              className="text-[#cde5ff] hover:text-white transition-colors cursor-pointer"
            >
              개인정보처리방침
            </button>
            <button
              onClick={() => alert('이용약관: 웹사이트 및 견적 시스템 이용에 관한 제반 규정입니다.')}
              className="text-[#aac9f4] hover:text-white transition-colors cursor-pointer"
            >
              이용약관
            </button>
            <button
              onClick={onOpenQuality}
              className="text-[#aac9f4] hover:text-white transition-colors cursor-pointer"
            >
              안전보건경영방침
            </button>
            <button
              onClick={onOpenLocations}
              className="text-[#aac9f4] hover:text-white transition-colors cursor-pointer"
            >
              오시는 길
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
