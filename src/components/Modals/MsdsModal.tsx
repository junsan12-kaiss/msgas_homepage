import React, { useState } from 'react';
import { MSDS_ITEMS } from '../../data/mockData';
import { Language } from '../../types';

interface MsdsModalProps {
  language: Language;
  onClose: () => void;
}

export const MsdsModal: React.FC<MsdsModalProps> = ({ language, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const filteredItems = MSDS_ITEMS.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.cas.includes(searchQuery) ||
      item.un.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.hazard.includes(searchQuery)
  );

  const handleDownload = (item: typeof MSDS_ITEMS[0]) => {
    const msdsContent = `============================================================
MSDS (Material Safety Data Sheet) 물질안전보건자료
(주)MS가스 | MS Gas Corporation 안전환경본부
============================================================
화학물질명: ${item.name}
순도/규격: ${item.purity}
CAS 번호: ${item.cas}
UN 번호: ${item.un}
유해·위험성 분류: ${item.hazard}
제조 및 공급원: (주)MS가스 녹산본사 (부산 강서구 녹산산단 261로 14번길 5)
24시 비상연락망: 051-831-6100

[응급조치요령]
1. 흡입 시: 즉시 신선한 공기가 있는 곳으로 이동시키고 안정을 취할 것.
2. 피부 접촉 시: 동상 위험 시 미온수로 세척하고 오염된 의복을 벗길 것.
3. 누출 시 대처방법: 점화원을 제거하고 환기 설비를 가동할 것.
4. 소화방법: 적합한 소화약제(분말, 탄산가스, 물분무)를 사용할 것.
5. 저장 및 취급: 직사광선을 피하고 40℃ 이하의 통풍이 잘되는 냉암소에 보관할 것.
============================================================`;
    const blob = new Blob([msdsContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = item.file.replace('.pdf', '.txt');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(item.name);
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#01284b]/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl relative border border-[#e2e8f0] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-4 bg-[#01284b] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#04a8ff]">description</span>
            <div>
              <h3 className="text-lg font-bold">MSDS 통합 검색 및 다운로드 센터</h3>
              <p className="text-xs text-[#aac9f4]">
                산업안전보건법 제110조 준수 | 물질안전보건자료 공인 DB
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

        {/* Search Bar */}
        <div className="p-6 bg-[#F8FAFC] border-b border-[#e2e8f0]">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="가스명 (산소, 질소, 암모니아 등), CAS 번호, UN 번호 또는 위험분류 검색..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-[#c3c6cf] text-xs sm:text-sm focus:outline-none focus:border-[#04a8ff] focus:ring-2 focus:ring-[#04a8ff]/20 shadow-sm"
            />
            <span className="material-symbols-outlined absolute left-3 top-3 text-[#73777f]">
              search
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 mt-3 text-xs text-[#43474e]">
            <span className="font-bold text-[#01284b]">빠른 태그:</span>
            {['산소', '질소', '아르곤', '수소', '프로판', '의료용', '암모니아'].map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className="px-2.5 py-0.5 rounded-full bg-white border border-[#c3c6cf] hover:bg-[#e7eeff] cursor-pointer"
              >
                {tag}
              </button>
            ))}
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-red-500 font-semibold ml-2 hover:underline cursor-pointer"
              >
                초기화
              </button>
            )}
          </div>

          {downloadSuccess && (
            <div className="mt-3 p-2.5 rounded-lg bg-emerald-50 text-emerald-700 text-xs flex items-center gap-1.5 border border-emerald-200">
              <span className="material-symbols-outlined text-[16px]">check_circle</span>
              <span>[{downloadSuccess}] MSDS 파일이 성공적으로 다운로드되었습니다.</span>
            </div>
          )}
        </div>

        {/* Table Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="border border-[#e2e8f0] rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#e7eeff]/60 border-b border-[#dee8ff] text-[#01284b] font-tech uppercase">
                  <th className="py-3 px-4 font-bold">물질명 (화학명)</th>
                  <th className="py-3 px-4 font-bold">순도/규격</th>
                  <th className="py-3 px-4 font-bold">CAS No.</th>
                  <th className="py-3 px-4 font-bold">UN No.</th>
                  <th className="py-3 px-4 font-bold">위험성 분류</th>
                  <th className="py-3 px-4 font-bold text-center">다운로드</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2e8f0]">
                {filteredItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#F8FAFC] transition-colors">
                    <td className="py-3 px-4 font-bold text-[#01284b]">
                      {item.name}
                    </td>
                    <td className="py-3 px-4 text-[#43474e] font-tech">{item.purity}</td>
                    <td className="py-3 px-4 text-[#73777f] font-tech">{item.cas}</td>
                    <td className="py-3 px-4 text-[#73777f] font-tech">{item.un}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                          item.hazard.includes('인화성')
                            ? 'bg-amber-100 text-amber-800'
                            : item.hazard.includes('산화성')
                            ? 'bg-blue-100 text-blue-800'
                            : item.hazard.includes('독성')
                            ? 'bg-red-100 text-red-800'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {item.hazard}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button
                        onClick={() => handleDownload(item)}
                        className="px-3 py-1 rounded bg-[#04a8ff] hover:bg-[#006399] text-white text-[11px] font-bold transition-all shadow-sm cursor-pointer inline-flex items-center gap-1"
                      >
                        <span className="material-symbols-outlined text-[14px]">download</span>
                        <span>PDF</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-[#F8FAFC] border-t border-[#e2e8f0] flex justify-between items-center text-xs text-[#73777f]">
          <span>조회 결과: {filteredItems.length}건 | 고압가스안전관리법 준수</span>
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
