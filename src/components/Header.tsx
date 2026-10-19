import React, { useState } from 'react';
import { LOGO_URL } from '../data/mockData';
import { Language } from '../types';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onOpenQuote: () => void;
  onOpenMsds: () => void;
  onOpenCatalog: () => void;
  onOpenCompany: () => void;
  onOpenLocations: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  setLanguage,
  onOpenQuote,
  onOpenMsds,
  onOpenCatalog,
  onOpenCompany,
  onOpenLocations,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = {
    ko: {
      companyName: '(주)MS가스',
      companySub: 'MS Gas Corporation',
      company: '회사소개',
      products: '제품소개',
      services: '서비스',
      facilities: '생산설비',
      esg: 'ESG 경영',
      support: '고객지원',
      quoteBtn: '온라인 견적/상담',
      msdsBtn: 'MSDS 검색',
      locationsBtn: '사업장 위치',
    },
    en: {
      companyName: 'MS Gas Corp.',
      companySub: 'MS Gas Corporation',
      company: 'About Us',
      products: 'Products',
      services: 'Services',
      facilities: 'Facilities',
      esg: 'ESG Management',
      support: 'Customer Support',
      quoteBtn: 'Online Inquiry / Quote',
      msdsBtn: 'MSDS Center',
      locationsBtn: 'Locations',
    },
  }[language];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#ffffff]/95 backdrop-blur-xl border-b border-[#e7eeff] shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[1280px] mx-auto px-6 flex items-center justify-between gap-6">
        {/* Brand Logo */}
        <div className="flex items-center gap-4 shrink-0">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group"
          >
            <img
              alt="MS Gas Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              src={LOGO_URL}
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl text-[#01284b] tracking-tight group-hover:text-[#006399] transition-colors">
                {t.companyName}
              </span>
              <span className="text-[10px] text-[#73777f] font-semibold tracking-wider uppercase hidden sm:inline-block font-tech">
                {t.companySub}
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 p-1 bg-transparent rounded-xl">
          <button
            onClick={onOpenCompany}
            className="px-3.5 py-1.5 rounded-lg text-sm font-semibold text-[#43474e] hover:bg-[#e7eeff] hover:text-[#01284b] transition-all cursor-pointer"
          >
            {t.company}
          </button>
          <button
            onClick={() => scrollTo('products-showcase')}
            className="px-3.5 py-1.5 rounded-lg text-sm font-semibold text-[#43474e] hover:bg-[#e7eeff] hover:text-[#01284b] transition-all cursor-pointer"
          >
            {t.products}
          </button>
          <button
            onClick={() => scrollTo('services-section')}
            className="px-3.5 py-1.5 rounded-lg text-sm font-semibold text-[#43474e] hover:bg-[#e7eeff] hover:text-[#01284b] transition-all cursor-pointer"
          >
            {t.services}
          </button>
          <button
            onClick={onOpenLocations}
            className="px-3.5 py-1.5 rounded-lg text-sm font-semibold text-[#43474e] hover:bg-[#e7eeff] hover:text-[#01284b] transition-all cursor-pointer"
          >
            {t.facilities}
          </button>
          <button
            onClick={() => scrollTo('news-section')}
            className="px-3.5 py-1.5 rounded-lg text-sm font-semibold text-[#43474e] hover:bg-[#e7eeff] hover:text-[#01284b] transition-all cursor-pointer"
          >
            {t.esg}
          </button>
          <button
            onClick={onOpenMsds}
            className="px-3.5 py-1.5 rounded-lg text-sm font-semibold text-[#43474e] hover:bg-[#e7eeff] hover:text-[#01284b] transition-all cursor-pointer"
          >
            {t.support}
          </button>
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Switcher */}
          <div className="flex items-center bg-[#f0f3ff] rounded-full p-1 text-xs font-semibold">
            <button
              onClick={() => setLanguage('ko')}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                language === 'ko'
                  ? 'bg-white text-[#01284b] font-bold shadow-[0_1px_4px_rgba(0,0,0,0.08)]'
                  : 'text-[#43474e] hover:text-[#01284b]'
              }`}
            >
              KOR
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-white text-[#01284b] font-bold shadow-[0_1px_4px_rgba(0,0,0,0.08)]'
                  : 'text-[#43474e] hover:text-[#01284b]'
              }`}
            >
              ENG
            </button>
          </div>

          {/* Quick Inquiry CTA */}
          <button
            onClick={onOpenQuote}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-[#04a8ff] hover:bg-[#006399] text-white font-semibold text-sm transition-all shadow-[0_4px_16px_rgba(4,168,255,0.25)] hover:shadow-[0_6px_20px_rgba(0,99,153,0.35)] cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px] mr-1.5">support_agent</span>
            {t.quoteBtn}
          </button>

          {/* Direct Phone / Contact Hotline Icon */}
          <a
            href="tel:051-831-6100"
            title="대표전화 연결 (051-831-6100)"
            className="w-9 h-9 rounded-full bg-[#01284b] hover:bg-[#006399] flex items-center justify-center text-white transition-all shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">phone_in_talk</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-[#01284b] hover:bg-[#e7eeff] cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[26px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#dee8ff] px-6 py-4 shadow-xl">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCompany();
              }}
              className="text-left px-3 py-2.5 rounded-lg text-base font-semibold text-[#01284b] hover:bg-[#f0f3ff]"
            >
              {t.company} (CEO 인사말 / 역사)
            </button>
            <button
              onClick={() => scrollTo('products-showcase')}
              className="text-left px-3 py-2.5 rounded-lg text-base font-semibold text-[#01284b] hover:bg-[#f0f3ff]"
            >
              {t.products} (산업·특수·의료가스)
            </button>
            <button
              onClick={() => scrollTo('services-section')}
              className="text-left px-3 py-2.5 rounded-lg text-base font-semibold text-[#01284b] hover:bg-[#f0f3ff]"
            >
              {t.services} (4대 엔지니어링 토탈 서비스)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLocations();
              }}
              className="text-left px-3 py-2.5 rounded-lg text-base font-semibold text-[#01284b] hover:bg-[#f0f3ff]"
            >
              {t.facilities} (전국 8대 거점망 및 기지)
            </button>
            <button
              onClick={() => scrollTo('news-section')}
              className="text-left px-3 py-2.5 rounded-lg text-base font-semibold text-[#01284b] hover:bg-[#f0f3ff]"
            >
              {t.esg} (은탑산업훈장 / R&D 입찰공고)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMsds();
              }}
              className="text-left px-3 py-2.5 rounded-lg text-base font-semibold text-[#01284b] hover:bg-[#f0f3ff]"
            >
              {t.support} (MSDS 검색 및 기술자료)
            </button>

            <div className="pt-3 border-t border-[#dee8ff] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 rounded-lg bg-[#04a8ff] text-white font-bold text-center flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">support_agent</span>
                {t.quoteBtn}
              </button>
              <div className="flex justify-between items-center px-1 text-sm text-[#73777f]">
                <span>24시 비상안전대응</span>
                <a href="tel:051-831-6100" className="font-bold text-[#01284b]">
                  051-831-6100
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
