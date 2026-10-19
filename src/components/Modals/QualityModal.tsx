import React from 'react';
import { Language } from '../../types';

interface QualityModalProps {
  language: Language;
  onClose: () => void;
}

export const QualityModal: React.FC<QualityModalProps> = ({ language, onClose }) => {
  const certs = [
    {
      code: 'ISO 9001:2015',
      name: '품질경영시스템 인증',
      org: '한국표준협회(KSA)',
      scope: '초저온 및 고압가스 충전, 제조, 배관 엔지니어링 전 공정',
      badge: '국제 표준',
    },
    {
      code: 'ISO 14001:2015',
      name: '환경경영시스템 인증',
      org: '한국표준협회(KSA)',
      scope: '친환경 가스 관리 및 온실가스 저감 공정 관리',
      badge: 'ESG 실천',
    },
    {
      code: 'KGMP Certified',
      name: '의약품 제조 및 품질관리기준 적합판정',
      org: '식품의약품안전처 (MFDS)',
      scope: '의료용 산소, 의료용 아산화질소 등 전문의약품 등급 생산',
      badge: '의약품 인증',
    },
    {
      code: 'KGS License',
      name: '고압가스 일반제조 및 충전 허가',
      org: '한국가스안전공사',
      scope: '가연성, 독성, 조연성, 불활성 고압가스 저장 및 충전 허가',
      badge: '법정 인증',
    },
    {
      code: 'Order of Merit',
      name: '대한민국 은탑산업훈장 수훈',
      org: '대한민국 정부 / 산업통상자원부',
      scope: '국가 기간 가스 인프라 안정화 및 탄소중립 기자재 표준화 기여',
      badge: '국가 최고 영예',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-[#01284b]/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl relative border border-[#e2e8f0] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-4 bg-[#01284b] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#56f9f9]">verified</span>
            <div>
              <h3 className="text-lg font-bold">품질 및 안전 인증 현황</h3>
              <p className="text-xs text-[#aac9f4]">
                무결점 공정과 국제 인증 규격 준수 현황
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#aac9f4] hover:text-white p-1 rounded-lg hover:bg-white/10 cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4">
          <p className="text-xs sm:text-sm text-[#43474e] leading-relaxed bg-[#F8FAFC] p-4 rounded-xl border border-[#e2e8f0]">
            (주)MS가스는 원료 입고부터 정제, 충전, 로지스틱스 운송 및 고객사 플랜트 주입에 이르기까지
            엄격한 5단계 품질 검사(가스크로마토그래피 순도 분석, 미량 불순물 검출, 용기 내압 시험, 밸브 기밀 시험, 이력 추적제)를
            의무적으로 수행하고 있습니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {certs.map((c, i) => (
              <div key={i} className="p-4 rounded-xl border border-[#e2e8f0] bg-white flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-tech text-xs text-[#006399] font-bold">
                      {c.code}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#e7eeff] text-[#01284b] text-[10px] font-bold font-tech">
                      {c.badge}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-[#01284b]">{c.name}</h4>
                  <p className="text-xs text-[#73777f] mt-1">인증기관: {c.org}</p>
                  <p className="text-xs text-[#43474e] mt-1.5 leading-snug">{c.scope}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-[#F8FAFC] border-t border-[#e2e8f0] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#01284b] text-white text-xs font-semibold hover:bg-[#006399] transition-colors cursor-pointer"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
