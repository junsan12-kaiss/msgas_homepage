import React from 'react';
import { Language } from '../../types';

interface RecruitModalProps {
  language: Language;
  onClose: () => void;
}

export const RecruitModal: React.FC<RecruitModalProps> = ({ language, onClose }) => {
  const jobs = [
    {
      title: '초저온 가스 플랜트 설비 엔지니어 (경력/신입)',
      dept: '기술본부 설비시공팀',
      location: '부산 녹산본사 / 전국 현장',
      type: '정규직',
      req: '기계/화학공학 전공 또는 가스기사, 위험물산업기사 자격 소지자 우대',
    },
    {
      title: '고순도 특수가스 정밀 분석 연구원 (석·박사/경력)',
      dept: 'MS가스 중앙기술연구소',
      location: '울산 R&D 센터',
      type: '정규직',
      req: '가스크로마토그래피(GC), 미량 수분/산소 분석기 운용 경험자',
    },
    {
      title: '초저온 액화가스 탱크로리 안전운송 기사',
      dept: '물류운영본부 배차팀',
      location: '부산/울산/충남 당진 기지',
      type: '정규직',
      req: '1종 대형면허 및 위험물운송자/고압가스운반자 법정 교육 이수자',
    },
    {
      title: '산업가스 B2B 기술영업 전문가',
      dept: '영업총괄본부',
      location: '서울/수도권 및 영남권 영업소',
      type: '정규직',
      req: '제조업/화학/반도체 대상 산업자재 기술영업 경력자 우대',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-[#01284b]/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl relative border border-[#e2e8f0] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-4 bg-[#01284b] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#04a8ff]">badge</span>
            <div>
              <h3 className="text-lg font-bold">인재채용 안내 (Careers at MS Gas)</h3>
              <p className="text-xs text-[#aac9f4]">
                대한민국 에너지 인프라의 미래를 함께 만들어갈 전문가를 모십니다
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
          <div className="p-4 rounded-xl bg-[#cde5ff]/30 border border-[#cde5ff] text-xs text-[#01284b] leading-relaxed">
            <strong>MS가스의 복리후생:</strong> 주 5일제, 4대보험, 종합건강검진 지원, 자녀 학자금 지원,
            우수사원 포상, 기숙사/사택 지원, 안전장려금 지급 및 유류비 지원.
          </div>

          <h4 className="text-xs font-bold text-[#01284b] font-tech uppercase">
            현재 진행 중인 채용 공고
          </h4>

          <div className="space-y-3">
            {jobs.map((job, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-[#e2e8f0] bg-white hover:bg-[#F8FAFC] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-[#e7eeff] text-[#01284b] text-[10px] font-bold font-tech">
                      {job.type}
                    </span>
                    <span className="text-xs text-[#73777f] font-tech">{job.dept}</span>
                  </div>
                  <h5 className="text-sm font-bold text-[#01284b] mt-1">{job.title}</h5>
                  <p className="text-xs text-[#43474e] mt-0.5">근무지: {job.location}</p>
                  <p className="text-[11px] text-[#73777f] mt-1">자격요건: {job.req}</p>
                </div>
                <button
                  onClick={() => alert(`[${job.title}] 입사 지원 접수: 채용 담당자 이메일(recruit@msgas.co.kr)로 이력서와 자기소개서를 송부해 주시기 바랍니다.`)}
                  className="px-4 py-2 rounded-lg bg-[#04a8ff] hover:bg-[#006399] text-white text-xs font-bold transition-all shrink-0 cursor-pointer shadow-sm"
                >
                  입사 지원하기
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-[#F8FAFC] border-t border-[#e2e8f0] flex justify-between items-center text-xs text-[#73777f]">
          <span>채용 문의: recruit@msgas.co.kr / 051-831-6100 (인사팀)</span>
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
