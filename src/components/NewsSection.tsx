import React, { useState } from 'react';
import { NEWS_ITEMS } from '../data/mockData';
import { Language, NewsItem } from '../types';

interface NewsSectionProps {
  language: Language;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ language }) => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const t = {
    ko: {
      preTitle: 'INNOVATION & NOTICE',
      title: 'MS가스의 새로운 소식과 혁신 연구 성과',
      desc: '친환경 암모니아 실증 인프라 구축부터 국가 표창 및 주요 기술 입찰 소식을 신속하게 전해드립니다.',
      viewAll: '공지사항 전체보기',
      readMore: '상세 기사 읽기',
      close: '닫기',
    },
    en: {
      preTitle: 'INNOVATION & NOTICE',
      title: 'Latest Company News & Clean Tech R&D Milestones',
      desc: 'From eco-friendly ammonia bunkering infrastructure pilots to national industrial honors and major public engineering tenders.',
      viewAll: 'View All Notices',
      readMore: 'Read Full Press Release',
      close: 'Close',
    },
  }[language];

  const featured = NEWS_ITEMS[0];
  const listItems = NEWS_ITEMS.slice(1);

  return (
    <section className="w-full bg-[#f9f9ff] py-14 lg:py-20" id="news-section">
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
            <p className="text-sm sm:text-base text-[#43474e] mt-2 max-w-xl leading-relaxed">
              {t.desc}
            </p>
          </div>
          <button
            onClick={() => setSelectedNews(featured)}
            className="inline-flex items-center gap-1 font-tech text-xs sm:text-sm text-[#006399] font-bold hover:text-[#01284b] transition-colors cursor-pointer"
          >
            <span>{t.viewAll}</span>
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>
        </div>

        {/* News Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Featured Card (Honor & Leadership) Col 7 */}
          <div
            onClick={() => setSelectedNews(featured)}
            className="lg:col-span-7 rounded-2xl bg-gradient-to-br from-[#01284b] to-[#1e3e62] p-6 sm:p-8 text-white shadow-lg flex flex-col justify-between relative overflow-hidden cursor-pointer hover:shadow-2xl transition-all group"
          >
            <div className="absolute -right-10 -bottom-10 w-60 h-60 rounded-full bg-[#04a8ff]/20 blur-3xl pointer-events-none"></div>

            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#56f9f9] text-[#01284b] text-xs font-bold font-tech">
                  {featured.tag}
                </span>
                <span className="text-xs text-[#aac9f4] font-tech">{featured.category}</span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold leading-snug group-hover:text-[#56f9f9] transition-colors">
                {featured.titleKo}
              </h3>

              <p className="text-sm text-[#aac9f4] mt-4 leading-relaxed line-clamp-4">
                {featured.summaryKo}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#04a8ff]">
                  workspace_premium
                </span>
                <span className="text-xs text-[#cde5ff] font-tech">{featured.author}</span>
              </div>

              <span className="inline-flex items-center gap-1 text-white text-xs font-bold font-tech group-hover:translate-x-1 transition-transform">
                <span>{t.readMore}</span>
                <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
              </span>
            </div>
          </div>

          {/* News List (Col 5) */}
          <div className="lg:col-span-5 flex flex-col gap-3 justify-between">
            {listItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedNews(item)}
                className="p-5 rounded-xl bg-white hover:bg-[#e7eeff]/40 transition-colors shadow-sm flex flex-col gap-1 group cursor-pointer border border-[#e2e8f0]"
              >
                <div className="flex items-center justify-between text-xs font-tech">
                  <span
                    className={`px-2 py-0.5 rounded font-bold ${
                      item.tagType === 'notice'
                        ? 'bg-[#56f9f9]/30 text-[#004444]'
                        : 'bg-[#d6e3fe] text-[#01284b]'
                    }`}
                  >
                    {item.tag}
                  </span>
                  <span className="text-[#73777f]">{item.category}</span>
                </div>

                <h4 className="text-sm sm:text-base text-[#01284b] group-hover:text-[#006399] transition-colors font-bold mt-1.5 line-clamp-2 leading-snug">
                  {item.titleKo}
                </h4>

                <p className="text-xs text-[#43474e] line-clamp-1 mt-0.5">
                  {item.summaryKo}
                </p>

                <div className="flex items-center justify-between text-[11px] text-[#73777f] font-tech pt-2 mt-1 border-t border-[#f1f5f9]">
                  <span>{item.date}</span>
                  <span className="text-[#006399] font-semibold flex items-center gap-0.5">
                    공고문 보기 <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* News Article Reader Modal */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 bg-[#01284b]/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-[#e2e8f0] max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute top-5 right-5 text-[#73777f] hover:text-[#01284b] p-1.5 rounded-lg hover:bg-[#f1f5f9] cursor-pointer"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded bg-[#cde5ff] text-[#01284b] text-xs font-bold font-tech">
                {selectedNews.tag}
              </span>
              <span className="text-xs text-[#73777f] font-tech">{selectedNews.category}</span>
              <span className="text-xs text-[#73777f] font-tech">| {selectedNews.date}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#01284b] leading-snug">
              {selectedNews.titleKo}
            </h3>

            <div className="p-3.5 my-4 rounded-xl bg-[#F8FAFC] border-l-4 border-[#04a8ff] text-xs sm:text-sm text-[#01284b] font-medium leading-relaxed">
              {selectedNews.summaryKo}
            </div>

            <div className="space-y-3 text-sm text-[#43474e] leading-relaxed my-4">
              {selectedNews.contentKo.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-[#e2e8f0] flex flex-wrap items-center justify-between text-xs text-[#73777f] font-tech mt-6">
              <span>발행처: {selectedNews.author}</span>
              <button
                onClick={() => setSelectedNews(null)}
                className="px-4 py-2 rounded-lg bg-[#01284b] text-white font-semibold hover:bg-[#006399] transition-colors cursor-pointer"
              >
                {t.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
