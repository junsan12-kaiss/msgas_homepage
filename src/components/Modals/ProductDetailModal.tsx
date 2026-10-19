import React, { useState } from 'react';
import { GAS_PRODUCTS } from '../../data/mockData';
import { GasProduct, Language } from '../../types';

interface ProductDetailModalProps {
  initialCategory: GasProduct['category'];
  language: Language;
  onClose: () => void;
  onOpenQuoteWithGas: (gasName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  initialCategory,
  language,
  onClose,
  onOpenQuoteWithGas,
}) => {
  const [activeCategory, setActiveCategory] = useState<GasProduct['category']>(initialCategory);
  const filteredProducts = GAS_PRODUCTS.filter((p) => p.category === activeCategory);
  const [selectedProduct, setSelectedProduct] = useState<GasProduct>(filteredProducts[0] || GAS_PRODUCTS[0]);

  const categories = [
    { key: 'industrial', labelKo: '산업용 가스', labelEn: 'Industrial' },
    { key: 'fuel', labelKo: '연료용 가스', labelEn: 'Fuel Gas' },
    { key: 'specialty', labelKo: '특수 가스', labelEn: 'Specialty Gas' },
    { key: 'medical', labelKo: '의료용 가스', labelEn: 'Medical Gas' },
    { key: 'standard', labelKo: '표준가스 & 설비', labelEn: 'Calibration & Equip' },
  ] as const;

  const handleCategorySwitch = (cat: GasProduct['category']) => {
    setActiveCategory(cat);
    const first = GAS_PRODUCTS.find((p) => p.category === cat);
    if (first) setSelectedProduct(first);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#01284b]/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl relative border border-[#e2e8f0] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-4 bg-[#01284b] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#04a8ff]">science</span>
            <div>
              <h3 className="text-lg font-bold">MS가스 제품 상세 규격서 및 라인업</h3>
              <p className="text-xs text-[#aac9f4]">
                초고순도 가스 정제 기술 및 안전 공급 솔루션
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

        {/* Category Tabs */}
        <div className="flex border-b border-[#e2e8f0] bg-[#F8FAFC] px-6 overflow-x-auto">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => handleCategorySwitch(c.key)}
              className={`px-4 py-3 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border-b-2 cursor-pointer ${
                activeCategory === c.key
                  ? 'border-[#04a8ff] text-[#01284b] font-bold bg-white'
                  : 'border-transparent text-[#73777f] hover:text-[#01284b]'
              }`}
            >
              {language === 'ko' ? c.labelKo : c.labelEn}
            </button>
          ))}
        </div>

        {/* Body Split */}
        <div className="grid grid-cols-1 md:grid-cols-12 flex-1 overflow-y-auto">
          {/* Sub-item selector (Col 4) */}
          <div className="md:col-span-4 border-r border-[#e2e8f0] p-4 bg-[#F8FAFC] flex flex-col gap-2">
            <span className="text-[11px] font-tech text-[#73777f] uppercase font-bold px-2">
              품목 선택 ({filteredProducts.length}개)
            </span>
            {filteredProducts.map((prod) => (
              <button
                key={prod.id}
                onClick={() => setSelectedProduct(prod)}
                className={`p-3 rounded-xl text-left transition-all cursor-pointer ${
                  selectedProduct.id === prod.id
                    ? 'bg-white text-[#01284b] font-bold shadow-sm border border-[#04a8ff]/40'
                    : 'text-[#43474e] hover:bg-white/60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-bold">{prod.nameKo}</span>
                  <span className="text-xs font-tech text-[#006399] font-semibold">
                    {prod.formula}
                  </span>
                </div>
                <div className="text-[11px] text-[#73777f] mt-0.5">{prod.purity}</div>
              </button>
            ))}
          </div>

          {/* Product Detail Spec Sheet (Col 8) */}
          <div className="md:col-span-8 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#e2e8f0]">
                <div>
                  <span className="px-2.5 py-0.5 rounded bg-[#cde5ff] text-[#006399] text-xs font-tech font-bold">
                    {selectedProduct.categoryLabel}
                  </span>
                  <h4 className="text-xl font-bold text-[#01284b] mt-1.5">
                    {selectedProduct.nameKo}
                  </h4>
                  <p className="text-xs text-[#73777f] font-tech">{selectedProduct.nameEn}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#73777f] font-tech">화학식</span>
                  <div className="text-2xl font-bold text-[#006399] font-tech">
                    {selectedProduct.formula}
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#43474e] mt-4 leading-relaxed bg-[#F8FAFC] p-3.5 rounded-xl border border-[#e2e8f0]">
                {selectedProduct.descriptionKo}
              </p>

              {/* Spec Grid */}
              <div className="grid grid-cols-2 gap-3 my-4 text-xs">
                <div className="p-3 rounded-lg border border-[#e2e8f0] bg-white">
                  <span className="text-[11px] text-[#73777f] font-tech block">순도 등급 (Purity)</span>
                  <strong className="text-sm text-[#01284b] font-tech">
                    {selectedProduct.purity}
                  </strong>
                </div>

                <div className="p-3 rounded-lg border border-[#e2e8f0] bg-white">
                  <span className="text-[11px] text-[#73777f] font-tech block">식별 번호 (UN/CAS)</span>
                  <span className="text-xs text-[#01284b] font-tech font-semibold">
                    CAS: {selectedProduct.casNo} | {selectedProduct.unNo}
                  </span>
                </div>
              </div>

              {/* Applications */}
              <div className="mb-4">
                <h5 className="text-xs font-bold text-[#01284b] font-tech uppercase mb-2">
                  주요 공정 및 적용 분야
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProduct.applications.map((app, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-[#e7eeff] text-[#01284b] text-xs font-medium"
                    >
                      ✓ {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Delivery Modes */}
              <div>
                <h5 className="text-xs font-bold text-[#01284b] font-tech uppercase mb-2">
                  공급 방식 및 용기 규격
                </h5>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.cylinderSizes.map((size, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg border border-[#c3c6cf] text-xs text-[#43474e] bg-white font-tech"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Modal Actions */}
            <div className="pt-6 mt-6 border-t border-[#e2e8f0] flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-[#73777f] font-tech">
                전국 17개 영업소 직배송 / 시험성적서(COA) 기본 발급
              </span>
              <button
                onClick={() => {
                  onClose();
                  onOpenQuoteWithGas(selectedProduct.nameKo);
                }}
                className="px-5 py-2.5 rounded-lg bg-[#04a8ff] hover:bg-[#006399] text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[16px]">support_agent</span>
                <span>이 제품 견적 문의하기</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
