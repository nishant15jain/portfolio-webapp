'use client'
import { createContext, useContext, useState } from "react";
import { links } from "@/lib/data";
type SectionName = (typeof links)[number]['name'];
export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)
type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: (section: SectionName) => void;
    timeOfLastClick: number;
    setTimeOfLastClick: (time: number) => void;
}
export default function ActiveSectionContextProvider({children}: {children: React.ReactNode}) {
    const [activeSection, setActiveSection] = useState<SectionName>('Home');
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);
    return (
        <ActiveSectionContext.Provider value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}>
            {children}
        </ActiveSectionContext.Provider>
    )
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext)
    if (!context) {
        throw new Error('useActiveSectionContext must be used within an ActiveSectionContextProvider')
    }
    return context
}
