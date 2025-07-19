import React, { createContext, useContext, useState, useMemo } from 'react';

// Hooks
import { useLocation } from 'react-router-dom';

// Types
import { Langs } from '../appTypes';
import { ContextTypes, GlobalDataProviderProps } from './hookTypes';

export const DataContext = createContext<ContextTypes>({
    lang: 'en',
    setLang: () => {},
});

export const GlobalDataProvider = ({ children }: GlobalDataProviderProps) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const paramLang = searchParams.get('lang');

    const [lang, setLang] = useState<Langs>(() => {
        const storedLang = paramLang ? paramLang : localStorage.getItem('lang');
        return storedLang === 'en' || storedLang === 'ru' || storedLang === 'tj'
            ? storedLang
            : 'en';
    });

    const value = useMemo<ContextTypes>(
        () => ({
            lang,
            setLang,
        }),
        [lang],
    );

    return (
        <DataContext.Provider value={value}>{children}</DataContext.Provider>
    );
};

export function useGlobalData() {
    return useContext(DataContext);
}
