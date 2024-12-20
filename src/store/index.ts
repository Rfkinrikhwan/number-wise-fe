import { create } from "zustand";

// Handel Open Close SideBar
type SideBarType = {
    side: boolean;
    openSidebarFn: () => void;
};

export const sideBarStore = create<SideBarType>((set) => ({
    side: false,
    openSidebarFn: () => set((state) => ({ side: !state.side })),
}));

// Handel Change Theme
type ThemeTypeFn = {
    theme: string;
    changeThemeFn: () => void;
};

export const changeThemeStore = create<ThemeTypeFn>((set, get) => {
    // Ambil tema awal dari localStorage
    const storedTheme = localStorage.getItem("theme");
    const initialTheme = storedTheme ? storedTheme : "light";

    console.log("initialTheme", initialTheme);

    return {
        theme: initialTheme,
        changeThemeFn: () => {
            const currentTheme = get().theme; // Ambil nilai tema terkini dari store
            const newTheme = currentTheme === "light" ? "dark" : "light";
            localStorage.setItem("theme", newTheme); // Simpan tema baru di localStorage
            set({ theme: newTheme }); // Perbarui state dengan tema baru
        },
    };
});


