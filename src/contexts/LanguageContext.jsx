import React, { createContext, useContext, useState } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => localStorage.getItem('portfolio-lang') || 'en');

  const handleSetLang = (newLang) => {
    localStorage.setItem('portfolio-lang', newLang);
    setLang(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const { lang, setLang } = useContext(LanguageContext);
  return { t: translations[lang], lang, setLang };
};
