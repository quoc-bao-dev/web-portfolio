import { create } from 'zustand';

type NavbarState = {
    selectedTab: string;
    setTab: (tab: string) => void;
};

export const navbarStore = create<NavbarState>((set) => ({
    selectedTab: '',
    setTab: (tab: string) => set(() => ({ selectedTab: tab })),
}));

export const useNavbar = navbarStore;
