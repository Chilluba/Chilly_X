
import React, { createContext, useState, useContext, useCallback, useMemo } from 'react';

interface SnarkContextType {
  isSnarky: boolean;
  toggleSnarkMode: () => void;
}

const SnarkContext = createContext<SnarkContextType | undefined>(undefined);

export const SnarkProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSnarky, setIsSnarky] = useState(false);

  const toggleSnarkMode = useCallback(() => {
    setIsSnarky(prev => !prev);
  }, []);

  const value = useMemo(() => ({ isSnarky, toggleSnarkMode }), [isSnarky, toggleSnarkMode]);

  return (
    <SnarkContext.Provider value={value}>
      {children}
    </SnarkContext.Provider>
  );
};

export const useSnark = (): SnarkContextType => {
  const context = useContext(SnarkContext);
  if (context === undefined) {
    throw new Error('useSnark must be used within a SnarkProvider');
  }
  return context;
};
