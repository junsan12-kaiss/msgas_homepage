import React from 'react';
import { Language } from '../types';

interface QuickNavProps {
  language: Language;
  onOpenCompany: () => void;
  onOpenLocations: () => void;
  onOpenQuality: () => void;
  onOpenRecruit: () => void;
}

export const QuickNav: React.FC<QuickNavProps> = ({
  language,
  onOpenCompany,
  onOpenLocations,
  onOpenQuality,
  onOpenRecruit,
}) => {
  const t = {
    ko: {
      quickTitle: '바로가기 서비스:',
      ceo: '회사소개 CEO 인사말',
      quality: '품질 및 인증현황',
      esg: 'ESG 환경경영(E/S/G)',
      directions: '전국 지점 오시는 길',
      recruit: '채용정보 안내',
      phone: '본사 대표문의 : ',
      fax: '팩스 : ',
    },
    en: {
      quickTitle: 'Quick Links:',
      ceo: 'CEO Message & Profile',
      quality: 'Quality & ISO Standards',
      esg: 'ESG Sustainability',
      directions: 'Branch Locations & Map',
      recruit: 'Careers & Hiring',
      phone: 'Headquarters: ',
      fax: 'Fax: ',
    },
  }[language];

  return (
    <section className="w-full bg-white py-4 border-y border-[#dee8ff]">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
          <span className="text-[#43474e] font-bold">{t.quickTitle}</span>
          <button
            onClick={onOpenCompany}
            className="px-3 py-1 rounded-md bg-[#e7eeff] text-[#01284b] hover:bg-[#d6e3fe] transition-colors font-medium cursor-pointer"
          >
            {t.ceo}
          </button>
          <button
            onClick={onOpenQuality}
            className="px-3 py-1 rounded-md bg-[#e7eeff] text-[#01284b] hover:bg-[#d6e3fe] transition-colors font-medium cursor-pointer"
          >
            {t.quality}
          </button>
          <a
            href="#news-section"
            className="px-3 py-1 rounded-md bg-[#e7eeff] text-[#01284b] hover:bg-[#d6e3fe] transition-colors font-medium cursor-pointer"
          >
            {t.esg}
          </a>
          <button
            onClick={onOpenLocations}
            className="px-3 py-1 rounded-md bg-[#e7eeff] text-[#01284b] hover:bg-[#d6e3fe] transition-colors font-medium cursor-pointer"
          >
            {t.directions}
          </button>
          <button
            onClick={onOpenRecruit}
            className="px-3 py-1 rounded-md bg-[#cde5ff] text-[#01284b] font-bold hover:bg-[#95ccff] transition-colors cursor-pointer"
          >
            {t.recruit}
          </button>
        </div>

        <div className="flex items-center gap-4 text-xs font-tech text-[#43474e]">
          <span>
            {t.phone}
            <strong className="text-[#01284b]">051-831-6100</strong>
          </span>
          <span>
            {t.fax}
            <strong className="text-[#01284b]">051-831-6109</strong>
          </span>
        </div>
      </div>
    </section>
  );
};
