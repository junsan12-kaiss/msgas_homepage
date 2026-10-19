import React, { useState } from 'react';
import { Language } from '../types';

interface QuoteSectionProps {
  language: Language;
  preselectedGas?: string;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({
  language,
  preselectedGas,
}) => {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    phone: '',
    gasType: preselectedGas || '',
    deliveryMethod: 'bulk',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const t = {
    ko: {
      badge: '온라인 즉시 상담 & 견적 신청',
      title: '귀사의 공정에 최적화된 산업 가스 솔루션을 제안해 드립니다.',
      desc: '필요하신 가스 품목(산업용, 특수, 연료용, 의료용), 요구 순도 및 공급 방식(탱크로리, 실린더, 배관공사)을 남겨주시면 전국 17개 직영 영업소의 가스 엔지니어가 24시간 내 신속히 회신드립니다.',
      benefit1: '신속 맞춤형 견적 산출',
      benefit2: '인허가 및 안전진단 무료 자문',
      benefit3: '시험 분석 성적서(COA) 지원',

      widgetTitle: '간편 견적 상담 신청',
      widgetDesc: '기본 정보를 입력하시면 담당 엔지니어가 배정됩니다.',
      phCompany: '회사명 / 부서 (예: 포스코케미칼 생산기술팀)',
      phName: '담당자 성명 및 직책 (예: 홍길동 책임연구원)',
      phPhone: '연락처 (예: 010-1234-5678)',
      gasPrompt: '문의 대상 가스 선택',
      methodPrompt: '희망 공급 형태',

      optIndustrial: '산업용 가스 (O₂, N₂, Ar, CO₂, H₂)',
      optSpecialty: '특수가스 / 초고순도 / 혼합가스 (6N)',
      optFuel: '연료용 가스 (프로판 / 프라멕스 / 에탄)',
      optMedical: '의료용 가스 (KGMP 인증 산소 / N₂O)',
      optEquipment: '초저온 저장탱크 및 가스설비',
      optService: '가스분석 / 퍼징 / 위험성평가(HAZOP)',

      methodBulk: '초저온 탱크로리 벌크 공급 (대용량)',
      methodLgc: 'LGC 초저온 액체용기 (175L~200L)',
      methodCylinder: '고압가스 실린더 / 번들 매니폴드',
      methodTurnkey: '저장탱크 및 배관공사 턴키 시공',

      submitBtn: '무료 견적 & 기술상담 접수',
      subtext: '접수 즉시 전담 기술영업팀으로 자동 연결됩니다.',

      successTitle: '견적 상담 접수가 완료되었습니다!',
      successDesc: '담당 엔지니어가 접수 내용을 검토한 후 24시간 이내에 유선 또는 이메일로 연락드리겠습니다.',
      ticketLabel: '접수 번호',
      assignedCenter: '배정 관제소',
      centerName: 'MS가스 부울경/중부권 통합기술영업본부',
      resetBtn: '추가 문의하기',
    },
    en: {
      badge: 'Realtime Online Quote & Engineering Inquiry',
      title: 'Optimized Industrial Gas Solutions Tailored to Your Process',
      desc: 'Submit your required gas species, purity requirements, and delivery volume (tanker, cylinder, turnkey piping). Our specialized engineers across 17 regional depots will respond within 24 hours.',
      benefit1: 'Instant Customized Cost Estimation',
      benefit2: 'Complimentary Safety & Permit Advisory',
      benefit3: 'Accredited Certificate of Analysis (COA)',

      widgetTitle: 'Quick Quote & Consultation',
      widgetDesc: 'Fill in your requirements to be assigned a dedicated technical specialist.',
      phCompany: 'Company / Dept (e.g. Samsung E&A Plant Div)',
      phName: 'Contact Person & Title (e.g. John Doe, Senior Eng)',
      phPhone: 'Mobile / Phone Number',
      gasPrompt: 'Select Gas Category',
      methodPrompt: 'Preferred Delivery Mode',

      optIndustrial: 'Industrial Gases (O2, N2, Ar, CO2, H2)',
      optSpecialty: 'Specialty & High Purity (6N UHP / Blends)',
      optFuel: 'Fuel Gases (Propane / Pramax / Ethane)',
      optMedical: 'Medical Gases (KGMP Oxygen / N2O)',
      optEquipment: 'Cryogenic Tanks & Pipeline Hardware',
      optService: 'Analytical / Purging / HAZOP Services',

      methodBulk: 'Cryogenic Tanker Bulk Delivery (High Volume)',
      methodLgc: 'Liquid Gas Cylinder (LGC 175L-200L)',
      methodCylinder: 'High Pressure Cylinders / Bundles',
      methodTurnkey: 'Storage Tank & Piping Turnkey Installation',

      submitBtn: 'Submit Consultation Request',
      subtext: 'Directly linked to regional technical sales engineering team.',

      successTitle: 'Inquiry Successfully Submitted!',
      successDesc: 'A dedicated engineering manager will review your technical specifications and contact you within 24 hours.',
      ticketLabel: 'Ticket ID',
      assignedCenter: 'Assigned Center',
      centerName: 'MS Gas Integrated Engineering & Technical Sales Center',
      resetBtn: 'Submit Another Inquiry',
    },
  }[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg(language === 'ko' ? '성함과 연락처를 입력해 주세요.' : 'Please provide contact name and phone.');
      return;
    }
    setErrorMsg('');
    const randomTicket = 'MSG-' + Math.floor(100000 + Math.random() * 900000);
    setTicketId(randomTicket);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      company: '',
      name: '',
      phone: '',
      gasType: '',
      deliveryMethod: 'bulk',
      notes: '',
    });
  };

  return (
    <section className="w-full bg-[#F1F5F9] py-14 lg:py-20" id="online-contact">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="rounded-3xl bg-[#01284b] p-6 sm:p-10 lg:p-12 text-white shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Background Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#04a8ff]/20 blur-3xl pointer-events-none"></div>

          {/* Left Context */}
          <div className="flex-1 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#04a8ff] text-white font-tech text-xs font-bold mb-3 shadow-sm">
              <span className="material-symbols-outlined text-[16px]">headset_mic</span>
              {t.badge}
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold tracking-tight leading-tight">
              {t.title}
            </h2>

            <p className="text-sm sm:text-base text-[#aac9f4] mt-3 leading-relaxed">
              {t.desc}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs sm:text-sm font-tech text-[#aac9f4]">
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <span className="material-symbols-outlined text-[#56f9f9] text-[18px]">done</span>
                {t.benefit1}
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <span className="material-symbols-outlined text-[#56f9f9] text-[18px]">done</span>
                {t.benefit2}
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <span className="material-symbols-outlined text-[#56f9f9] text-[18px]">done</span>
                {t.benefit3}
              </span>
            </div>
          </div>

          {/* Right Lead Widget */}
          <div className="w-full lg:w-[420px] rounded-2xl bg-white p-6 sm:p-7 text-[#0e1c2f] shadow-2xl flex flex-col gap-3 border border-[#dee8ff]">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div>
                  <h3 className="text-lg sm:text-xl text-[#01284b] font-bold">
                    {t.widgetTitle}
                  </h3>
                  <p className="text-xs text-[#73777f] mt-0.5">
                    {t.widgetDesc}
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-2 rounded bg-red-50 text-red-600 text-xs border border-red-200">
                    {errorMsg}
                  </div>
                )}

                <div className="flex flex-col gap-2.5 mt-1">
                  <div>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder={t.phCompany}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8FAFC] border border-[#c3c6cf]/60 text-xs sm:text-sm focus:outline-none focus:border-[#04a8ff] focus:ring-2 focus:ring-[#04a8ff]/20 transition-all"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.phName}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8FAFC] border border-[#c3c6cf]/60 text-xs sm:text-sm focus:outline-none focus:border-[#04a8ff] focus:ring-2 focus:ring-[#04a8ff]/20 transition-all"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t.phPhone}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8FAFC] border border-[#c3c6cf]/60 text-xs sm:text-sm focus:outline-none focus:border-[#04a8ff] focus:ring-2 focus:ring-[#04a8ff]/20 transition-all font-tech"
                    />
                  </div>

                  <div>
                    <select
                      value={formData.gasType}
                      onChange={(e) => setFormData({ ...formData, gasType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8FAFC] border border-[#c3c6cf]/60 text-xs sm:text-sm text-[#43474e] focus:outline-none focus:border-[#04a8ff] focus:ring-2 focus:ring-[#04a8ff]/20 transition-all"
                    >
                      <option value="">{t.gasPrompt}</option>
                      <option value="industrial">{t.optIndustrial}</option>
                      <option value="specialty">{t.optSpecialty}</option>
                      <option value="fuel">{t.optFuel}</option>
                      <option value="medical">{t.optMedical}</option>
                      <option value="equipment">{t.optEquipment}</option>
                      <option value="service">{t.optService}</option>
                    </select>
                  </div>

                  <div>
                    <select
                      value={formData.deliveryMethod}
                      onChange={(e) => setFormData({ ...formData, deliveryMethod: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8FAFC] border border-[#c3c6cf]/60 text-xs sm:text-sm text-[#43474e] focus:outline-none focus:border-[#04a8ff] focus:ring-2 focus:ring-[#04a8ff]/20 transition-all"
                    >
                      <option value="bulk">{t.methodBulk}</option>
                      <option value="lgc">{t.methodLgc}</option>
                      <option value="cylinder">{t.methodCylinder}</option>
                      <option value="turnkey">{t.methodTurnkey}</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3 rounded-lg bg-[#04a8ff] hover:bg-[#006399] text-white font-tech text-sm font-bold transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  {t.submitBtn}
                </button>

                <span className="text-center text-[11px] text-[#73777f] font-tech">
                  {t.subtext}
                </span>
              </form>
            ) : (
              <div className="py-6 flex flex-col items-center text-center animate-in fade-in zoom-in-95">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[32px]">check_circle</span>
                </div>
                <h4 className="text-lg font-bold text-[#01284b] mb-1">
                  {t.successTitle}
                </h4>
                <p className="text-xs text-[#43474e] leading-relaxed mb-4">
                  {t.successDesc}
                </p>

                <div className="w-full p-3.5 rounded-xl bg-[#F8FAFC] border border-[#e2e8f0] text-xs font-tech space-y-1 mb-4 text-left">
                  <div className="flex justify-between">
                    <span className="text-[#73777f]">{t.ticketLabel}:</span>
                    <strong className="text-[#006399] font-bold">{ticketId}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#73777f]">신청인:</span>
                    <span className="font-semibold">{formData.name} ({formData.company || '일반'})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#73777f]">연락처:</span>
                    <span>{formData.phone}</span>
                  </div>
                  <div className="pt-1 border-t border-[#e2e8f0] text-[11px] text-[#73777f]">
                    <span>{t.assignedCenter}: </span>
                    <span className="text-[#01284b] font-medium">{t.centerName}</span>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="px-4 py-2 rounded-lg bg-[#01284b] text-white text-xs font-bold hover:bg-[#006399] transition-colors cursor-pointer"
                >
                  {t.resetBtn}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
