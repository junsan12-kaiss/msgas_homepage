import React, { useState } from 'react';
import { LOGISTICS_HUBS } from '../../data/mockData';
import { Language, LogisticsHub } from '../../types';

interface LocationsModalProps {
  language: Language;
  onClose: () => void;
}

export const LocationsModal: React.FC<LocationsModalProps> = ({ language, onClose }) => {
  const [selectedHub, setSelectedHub] = useState<LogisticsHub>(LOGISTICS_HUBS[0]);

  return (
    <div className="fixed inset-0 z-50 bg-[#01284b]/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl relative border border-[#e2e8f0] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-4 bg-[#01284b] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#04a8ff]">location_on</span>
            <div>
              <h3 className="text-lg font-bold">전국 사업장 및 영업소 위치 안내</h3>
              <p className="text-xs text-[#aac9f4]">
                전국 8개 권역 핵심 거점 기지 &amp; 17개 직영 영업 네트워크
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
        <div className="grid grid-cols-1 md:grid-cols-12 flex-1 overflow-y-auto">
          {/* Hub list (Col 5) */}
          <div className="md:col-span-5 p-4 border-r border-[#e2e8f0] bg-[#F8FAFC] flex flex-col gap-2 overflow-y-auto max-h-[550px]">
            <span className="text-[11px] font-tech text-[#73777f] font-bold uppercase px-1">
              거점 기지 및 사업소 ({LOGISTICS_HUBS.length}개)
            </span>
            {LOGISTICS_HUBS.map((hub) => (
              <button
                key={hub.id}
                onClick={() => setSelectedHub(hub)}
                className={`p-3 rounded-xl text-left transition-all cursor-pointer ${
                  selectedHub.id === hub.id
                    ? 'bg-white text-[#01284b] font-bold shadow-sm border border-[#04a8ff]/40'
                    : 'text-[#43474e] hover:bg-white/70'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-bold">{hub.nameKo}</span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-tech font-bold ${
                      hub.type === 'headquarter'
                        ? 'bg-[#01284b] text-white'
                        : hub.type === 'hub'
                        ? 'bg-[#cde5ff] text-[#006399]'
                        : 'bg-[#e2e8f0] text-[#43474e]'
                    }`}
                  >
                    {hub.type === 'headquarter' ? '본사/기지' : hub.type === 'hub' ? '물류허브' : '직영영업소'}
                  </span>
                </div>
                <div className="text-[11px] text-[#73777f] mt-1 line-clamp-1">{hub.address}</div>
                <div className="text-[11px] text-[#006399] font-tech mt-0.5">
                  저장량: {hub.tankCapacity} | 배차: {hub.trucks}대
                </div>
              </button>
            ))}
          </div>

          {/* Details & Map View (Col 7) */}
          <div className="md:col-span-7 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#e2e8f0]">
                <div>
                  <span className="px-2.5 py-0.5 rounded bg-[#cde5ff] text-[#006399] text-xs font-tech font-bold">
                    {selectedHub.type === 'headquarter' ? 'HEADQUARTERS' : 'REGIONAL CENTER'}
                  </span>
                  <h4 className="text-xl font-bold text-[#01284b] mt-1">
                    {selectedHub.nameKo}
                  </h4>
                  <p className="text-xs text-[#73777f] font-tech">{selectedHub.nameEn}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs font-tech">
                  ON
                </div>
              </div>

              {/* Station Info Box */}
              <div className="mt-4 space-y-3 text-xs">
                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#e2e8f0] space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#006399] text-[18px] shrink-0 mt-0.5">
                      home_pin
                    </span>
                    <div>
                      <strong className="text-[#01284b] block">도로명 주소</strong>
                      <span className="text-[#43474e]">{selectedHub.address}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-[#e2e8f0]">
                    <span className="material-symbols-outlined text-[#006399] text-[18px] shrink-0">
                      call
                    </span>
                    <div>
                      <strong className="text-[#01284b] mr-2">직통 전화:</strong>
                      <a
                        href={`tel:${selectedHub.phone}`}
                        className="text-[#006399] font-bold font-tech hover:underline text-sm"
                      >
                        {selectedHub.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-[#e2e8f0]">
                    <span className="material-symbols-outlined text-[#006399] text-[18px] shrink-0">
                      person
                    </span>
                    <div>
                      <strong className="text-[#01284b] mr-2">현장 총괄책임:</strong>
                      <span className="text-[#43474e]">{selectedHub.manager}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg border border-[#e2e8f0] bg-white">
                    <span className="text-[11px] text-[#73777f] font-tech block">초저온 저장 탱크 용량</span>
                    <strong className="text-lg text-[#01284b] font-tech">
                      {selectedHub.tankCapacity}
                    </strong>
                  </div>
                  <div className="p-3 rounded-lg border border-[#e2e8f0] bg-white">
                    <span className="text-[11px] text-[#73777f] font-tech block">상시 배차 가능 특수차량</span>
                    <strong className="text-lg text-[#006399] font-tech">
                      {selectedHub.trucks} 대
                    </strong>
                  </div>
                </div>
              </div>

              {/* Graphic Radar Simulation */}
              <div className="mt-4 p-4 rounded-xl bg-[#01284b] text-white flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#56f9f9] animate-ping"></span>
                    <span className="text-xs font-bold font-tech text-[#56f9f9]">
                      24시 안전출동 반경: 60분 이내 현장 도착
                    </span>
                  </div>
                  <p className="text-[11px] text-[#aac9f4] mt-1">
                    인근 산단(화학, 제철, 조선, 반도체) 긴급 가스 누출 및 설비 이상 시 우선 지원
                  </p>
                </div>
                <a
                  href={`tel:${selectedHub.phone}`}
                  className="px-3.5 py-2 rounded-lg bg-[#04a8ff] text-white text-xs font-bold hover:bg-[#006399] transition-all shrink-0 inline-flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[14px]">call</span>
                  <span>긴급 통화</span>
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-[#e2e8f0] flex justify-end">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-[#01284b] text-white text-xs font-semibold hover:bg-[#006399] transition-colors cursor-pointer"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
