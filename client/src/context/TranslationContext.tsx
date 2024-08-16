import React, { createContext, useContext, ReactNode } from "react";
import { TFunction } from "i18next";

interface TranslationProviderProps {
  t: TFunction;
  children: ReactNode;
}

const TranslationContext = createContext<TFunction | undefined>(undefined);

export const useTranslationContext = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error(
      "useTranslationContext must be used within a TranslationProvider"
    );
  }
  return context;
};

export const TranslationProvider: React.FC<TranslationProviderProps> = ({
  t,
  children,
}) => {
  return (
    <TranslationContext.Provider value={t}>
      {children}
    </TranslationContext.Provider>
  );
};
