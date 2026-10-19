import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LogisticsSection } from './components/LogisticsSection';
import { ProductsSection } from './components/ProductsSection';
import { ServicesSection } from './components/ServicesSection';
import { NewsSection } from './components/NewsSection';
import { QuoteSection } from './components/QuoteSection';
import { QuickNav } from './components/QuickNav';
import { Footer } from './components/Footer';

// Modals
import { ProductDetailModal } from './components/Modals/ProductDetailModal';
import { CatalogModal } from './components/Modals/CatalogModal';
import { MsdsModal } from './components/Modals/MsdsModal';
import { CompanyModal } from './components/Modals/CompanyModal';
import { LocationsModal } from './components/Modals/LocationsModal';
import { QualityModal } from './components/Modals/QualityModal';
import { RecruitModal } from './components/Modals/RecruitModal';
import { GasProduct, Language } from './types';

export default function App() {
  const [language, setLanguage] = useState<Language>('ko');

  // Modal states
  const [modalCategory, setModalCategory] = useState<GasProduct['category'] | null>(null);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isMsdsOpen, setIsMsdsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const [isQualityOpen, setIsQualityOpen] = useState(false);
  const [isRecruitOpen, setIsRecruitOpen] = useState(false);
  const [preselectedGas, setPreselectedGas] = useState<string>('');

  const handleOpenQuote = (gas?: string) => {
    if (gas) setPreselectedGas(gas);
    const element = document.getElementById('online-contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f9ff] text-[#0e1c2f] flex flex-col font-sans selection:bg-[#cde5ff] selection:text-[#001d32]">
      {/* Fixed Sticky Header */}
      <Header
        language={language}
        setLanguage={setLanguage}
        onOpenQuote={() => handleOpenQuote()}
        onOpenMsds={() => setIsMsdsOpen(true)}
        onOpenCatalog={() => setIsCatalogOpen(true)}
        onOpenCompany={() => setIsCompanyOpen(true)}
        onOpenLocations={() => setIsLocationsOpen(true)}
      />

      {/* Main Content Body */}
      <main className="w-full pt-20 bg-[#f9f9ff] flex-1">
        {/* 1. HERO SECTION */}
        <Hero
          language={language}
          onOpenQuote={() => handleOpenQuote()}
          onOpenLocations={() => setIsLocationsOpen(true)}
        />

        {/* 2. LOGISTICS INFRASTRUCTURE & BENTO METRICS */}
        <LogisticsSection
          language={language}
          onOpenLocations={() => setIsLocationsOpen(true)}
        />

        {/* 3. PRODUCT CATEGORIES SHOWCASE */}
        <ProductsSection
          language={language}
          onSelectCategory={(cat) => setModalCategory(cat)}
          onOpenCatalog={() => setIsCatalogOpen(true)}
          onOpenMsds={() => setIsMsdsOpen(true)}
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* 4. TOTAL VALUE-ADDED SERVICES */}
        <ServicesSection
          language={language}
          onOpenQuoteWithService={(svc) => handleOpenQuote(svc)}
        />

        {/* 5. INNOVATION & NOTICE (AWARD & TENDERS) */}
        <NewsSection language={language} />

        {/* 6. QUICK ACTION CONTACT & INQUIRY BANNER */}
        <QuoteSection language={language} preselectedGas={preselectedGas} />

        {/* 7. QUICK NAV PILLS */}
        <QuickNav
          language={language}
          onOpenCompany={() => setIsCompanyOpen(true)}
          onOpenLocations={() => setIsLocationsOpen(true)}
          onOpenQuality={() => setIsQualityOpen(true)}
          onOpenRecruit={() => setIsRecruitOpen(true)}
        />
      </main>

      {/* FOOTER */}
      <Footer
        language={language}
        onOpenQuote={() => handleOpenQuote()}
        onOpenMsds={() => setIsMsdsOpen(true)}
        onOpenCatalog={() => setIsCatalogOpen(true)}
        onOpenCompany={() => setIsCompanyOpen(true)}
        onOpenLocations={() => setIsLocationsOpen(true)}
        onOpenQuality={() => setIsQualityOpen(true)}
        onOpenRecruit={() => setIsRecruitOpen(true)}
        onSelectCategory={(cat) => setModalCategory(cat)}
      />

      {/* MODALS */}
      {modalCategory && (
        <ProductDetailModal
          initialCategory={modalCategory}
          language={language}
          onClose={() => setModalCategory(null)}
          onOpenQuoteWithGas={(gasName) => handleOpenQuote(gasName)}
        />
      )}

      {isCatalogOpen && (
        <CatalogModal
          language={language}
          onClose={() => setIsCatalogOpen(false)}
          onOpenQuote={() => {
            setIsCatalogOpen(false);
            handleOpenQuote();
          }}
        />
      )}

      {isMsdsOpen && (
        <MsdsModal
          language={language}
          onClose={() => setIsMsdsOpen(false)}
        />
      )}

      {isCompanyOpen && (
        <CompanyModal
          language={language}
          onClose={() => setIsCompanyOpen(false)}
          onOpenLocations={() => {
            setIsCompanyOpen(false);
            setIsLocationsOpen(true);
          }}
        />
      )}

      {isLocationsOpen && (
        <LocationsModal
          language={language}
          onClose={() => setIsLocationsOpen(false)}
        />
      )}

      {isQualityOpen && (
        <QualityModal
          language={language}
          onClose={() => setIsQualityOpen(false)}
        />
      )}

      {isRecruitOpen && (
        <RecruitModal
          language={language}
          onClose={() => setIsRecruitOpen(false)}
        />
      )}
    </div>
  );
}
