import React, { useState } from 'react';
import { GAS_PRODUCTS } from '../../data/mockData';
import { Language } from '../../types';

interface CatalogModalProps {
  language: Language;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const CatalogModal: React.FC<CatalogModalProps> = ({
  language,
  onClose,
  onOpenQuote,
}) => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      // Create a text download representing the catalog summary
      const catalogText = `(주)MS가스 종합 제품 카탈로그 (MS Gas Corporation 2025 Edition)
============================================================
설립: 1974년 | 대표이사: 전청민 | 대표전화: 051-831-6100
본사: 부산광역시 강서구 녹산산단 261로 14번길 5 (송정동)
홈페이지: msgas@msgas.co.kr

[주요 제품군 요약]
1. 산업용 가스 (Industrial Gases)
   - 액화산소(O2) 99.5%~99.999%: 제철, 화학, 레이저절단
   - 액화질소(N2) 99.999%: 불활성 퍼지, 극저온 동결, 반도체
   - 아르곤(Ar) 99.999%: TIG 용접, 특수강 제련
   - 탄산가스(CO2) 99.9%: 용접, 중화, 드라이아이스
   - 고압수소(H2) 99.999%: 환원열처리, 수소 충전소

2. 연료용 가스 (Fuel Gases)
   - 산업용 프로판 (LPG Bulk): 보일러, 열처리, 알루미늄 용해
   - 프라멕스 (Pramax): 조선 후판 고속 절단 전용 가스

3. 특수가스 & 초고순도 가스 (Specialty Gases)
   - 초고순도 질소 6N (99.9999%): 반도체/2차전지/OLED
   - 다성분 정밀 혼합가스 (Multi-Component): 레이저 발진, TMS 교정

4. 의료용 가스 (Medical Gases - KGMP 인증)
   - 의료용 산소 (O2) 99.5%+: 중환자실 호흡 치료
   - 의료용 아산화질소 (N2O): 수술실 흡입 마취

5. 초저온 가스 설비
   - 대기식 기화기 (Vaporizer), CE 저장탱크, 고압 매니폴드, 턴키 시공
============================================================`;
      const blob = new Blob([catalogText], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'MS_Gas_Product_Catalog_2025.txt';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#01284b]/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl relative border border-[#e2e8f0] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-4 bg-[#01284b] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#04a8ff]">menu_book</span>
            <div>
              <h3 className="text-lg font-bold">MS가스 전체 제품 카탈로그 PDF 뷰어</h3>
              <p className="text-xs text-[#aac9f4]">
                2025-2026 Edition | 고압가스·초저온 종합 편람
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

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="bg-[#F8FAFC] border border-[#e2e8f0] p-4 rounded-xl flex items-center justify-between">
            <div>
              <h4 className="text-sm font-bold text-[#01284b]">
                (주)MS가스 종합 제품 카탈로그 e-Book
              </h4>
              <p className="text-xs text-[#73777f]">
                총 64페이지 | 산업용, 연료용, 특수가스, 의료용 가스 및 초저온 저장설비
              </p>
            </div>
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="px-4 py-2.5 rounded-lg bg-[#04a8ff] hover:bg-[#006399] text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all cursor-pointer disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-[16px]">
                {downloading ? 'sync' : 'download'}
              </span>
              <span>{downloading ? '다운로드 중...' : '카탈로그 다운로드'}</span>
            </button>
          </div>

          <div>
            <h5 className="text-xs font-bold text-[#01284b] font-tech uppercase mb-3">
              카탈로그 목차 및 주요 수록 품목
            </h5>
            <div className="divide-y divide-[#e2e8f0] border border-[#e2e8f0] rounded-xl overflow-hidden text-xs">
              <div className="p-3.5 bg-white flex justify-between items-center hover:bg-[#F8FAFC]">
                <span className="font-semibold text-[#01284b]">
                  Section 01. 회사소개 및 전국 8대 거점망 (p.04~12)
                </span>
                <span className="text-[#73777f] font-tech">녹산본사, 울산, 충남 기지</span>
              </div>
              <div className="p-3.5 bg-white flex justify-between items-center hover:bg-[#F8FAFC]">
                <span className="font-semibold text-[#01284b]">
                  Section 02. 산업용 액화가스 (O₂, N₂, Ar, CO₂, H₂) (p.13~28)
                </span>
                <span className="text-[#73777f] font-tech">탱크로리 벌크 &amp; 실린더</span>
              </div>
              <div className="p-3.5 bg-white flex justify-between items-center hover:bg-[#F8FAFC]">
                <span className="font-semibold text-[#01284b]">
                  Section 03. 초고순도 특수가스 6N &amp; 정밀혼합가스 (p.29~42)
                </span>
                <span className="text-[#73777f] font-tech">반도체, 배터리, 분석용 CRM</span>
              </div>
              <div className="p-3.5 bg-white flex justify-between items-center hover:bg-[#F8FAFC]">
                <span className="font-semibold text-[#01284b]">
                  Section 04. 의료용 가스 (KGMP 의약품 제조허가) (p.43~52)
                </span>
                <span className="text-[#73777f] font-tech">의료용 산소 &amp; 아산화질소</span>
              </div>
              <div className="p-3.5 bg-white flex justify-between items-center hover:bg-[#F8FAFC]">
                <span className="font-semibold text-[#01284b]">
                  Section 05. 초저온 기화기 및 저장탱크 엔지니어링 (p.53~64)
                </span>
                <span className="text-[#73777f] font-tech">배관 시공, HAZOP 감리</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#cde5ff]/30 border border-[#cde5ff] flex items-center justify-between text-xs text-[#01284b]">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#006399]">info</span>
              <span>특정 공정에 맞춤형 혼합비율이나 대형 저장탱크 설계가 필요하신가요?</span>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenQuote();
              }}
              className="text-[#006399] font-bold hover:underline shrink-0"
            >
              엔지니어 상담 요청 →
            </button>
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
