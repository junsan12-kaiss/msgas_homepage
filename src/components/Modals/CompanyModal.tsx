import React from 'react';
import { LOGO_URL } from '../../data/mockData';
import { Language } from '../../types';

interface CompanyModalProps {
  language: Language;
  onClose: () => void;
  onOpenLocations: () => void;
}

export const CompanyModal: React.FC<CompanyModalProps> = ({
  language,
  onClose,
  onOpenLocations,
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-[#01284b]/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl relative border border-[#e2e8f0] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-4 bg-[#01284b] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white p-1 rounded">
              <img alt="MS Gas Logo" className="h-6 w-auto" src={LOGO_URL} />
            </div>
            <div>
              <h3 className="text-lg font-bold">회사소개 및 CEO 인사말</h3>
              <p className="text-xs text-[#aac9f4]">
                SINCE 1974 • 대한민국 고압가스 산업의 50년 반석
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
        <div className="p-6 overflow-y-auto space-y-6">
          {/* CEO Greeting Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#01284b] to-[#1e3e62] text-white relative overflow-hidden">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-[#56f9f9] text-[#01284b] font-bold text-xs font-tech">
                은탑산업훈장 수훈 CEO
              </span>
              <span className="text-xs text-[#aac9f4]">대표이사 전청민</span>
            </div>

            <h4 className="text-xl sm:text-2xl font-bold leading-snug mb-3">
              "보이지 않는 가스 에너지 속에 대한민국 산업의 심장을 뛰게 합니다."
            </h4>

            <p className="text-xs sm:text-sm text-[#aac9f4] leading-relaxed space-y-2">
              (주)MS가스는 1974년 창업 이래 50년 동안 반도체, 조선, 철강, 석유화학 및 첨단 바이오 제조 현장에
              안전하고 정밀한 산업가스를 중단 없이 공급해 왔습니다.
              <br /><br />
              오늘날 우리는 단순한 가스 공급사를 넘어 전국 8대 권역망과 17개 직영 영업소, 12,500m³에 달하는 대용량
              초저온 저장 인프라를 바탕으로 무탄소 청정 에너지(친환경 암모니아·수소) 전환을 선도하고 있습니다.
              어떠한 순간에도 고객의 공정에 한 치의 오차도 없는 무결점 안전과 최적의 효율을 약속드립니다.
            </p>
          </div>

          {/* 50-Year Milestones */}
          <div>
            <h5 className="text-xs font-bold text-[#01284b] font-tech uppercase mb-4">
              주요 연혁 (1974 ~ 2025)
            </h5>

            <div className="relative pl-6 border-l-2 border-[#04a8ff] space-y-6 text-xs">
              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-3.5 h-3.5 rounded-full bg-[#04a8ff] border-2 border-white"></span>
                <strong className="text-sm text-[#01284b] font-tech font-bold block">
                  2025년 ~ 현재
                </strong>
                <p className="text-[#43474e] mt-1">
                  • 대표이사 전청민 은탑산업훈장 및 충남도지사 탄소중립 유공자 표창 동시 수훈<br />
                  • 울산 및 경남 규제자유특구 암모니아 실증R&D 및 TTS 벙커링 인프라 구축 주관
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-3.5 h-3.5 rounded-full bg-[#006399] border-2 border-white"></span>
                <strong className="text-sm text-[#01284b] font-tech font-bold block">
                  2020년 ~ 2024년
                </strong>
                <p className="text-[#43474e] mt-1">
                  • 연간 매출 935억 원 달성 (2024 GAAP 기준)<br />
                  • 전국 8개 거점 물류망 및 17개 직영 공급소 네트워크 완성<br />
                  • 초저온 탱크로리 및 운송차량 350+ 대 확충
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-3.5 h-3.5 rounded-full bg-[#1e3e62] border-2 border-white"></span>
                <strong className="text-sm text-[#01284b] font-tech font-bold block">
                  2010년 ~ 2019년
                </strong>
                <p className="text-[#43474e] mt-1">
                  • 부산 녹산국가산단 제1초저온 기지 및 첨단 분석 랩 신축 준공<br />
                  • 충남 당진 중부권 대형 물류 허브 가동<br />
                  • 식약처 의료용 가스(의료용 산소, 아산화질소) KGMP 의약품 제조허가 획득
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-3.5 h-3.5 rounded-full bg-[#73777f] border-2 border-white"></span>
                <strong className="text-sm text-[#01284b] font-tech font-bold block">
                  1974년 창립
                </strong>
                <p className="text-[#43474e] mt-1">
                  • MS가스 창립, 산업용 압축가스 제조 및 충전 사업 개시
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-[#F8FAFC] border-t border-[#e2e8f0] flex justify-between items-center text-xs">
          <button
            onClick={() => {
              onClose();
              onOpenLocations();
            }}
            className="text-[#006399] font-bold hover:underline"
          >
            전국 사업소 및 공장 위치 보기 →
          </button>
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
