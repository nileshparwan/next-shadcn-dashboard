// src/store/useStore.ts
import { create } from "zustand";

type SidebarVariant = "sidebar" | "floating" | "inset";

interface StoreState {
    sidebarVariant: SidebarVariant;
    setSidebarVariant: (variant: SidebarVariant) => void;
}

const useAppStore = create<StoreState>((set) => ({
    sidebarVariant: "sidebar",
    setSidebarVariant: (variant) => set({ sidebarVariant: variant }),
}));

export default useAppStore;
