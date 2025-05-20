"use client";

import { createContext, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("PT");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "PT" ? "EN" : "PT"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
