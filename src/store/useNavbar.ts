import { NAV_ITEMS } from '@/constants/navbar';
import { create } from 'zustand';

type NavbarState = {
    selectedTab: string;
    setTab: (tab: string) => void;
};

export const navbarStore = create<NavbarState>((set) => ({
    selectedTab: NAV_ITEMS[0].label,
    setTab: (tab: string) => set(() => ({ selectedTab: tab })),
}));

export const useNavbar = navbarStore;
