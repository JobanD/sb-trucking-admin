"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from "react";

type SidebarContextType = {
  showSidebarState: [boolean, Dispatch<SetStateAction<boolean>>];
  showSidebarMdState: [boolean, Dispatch<SetStateAction<boolean>>];
  narrowSidebarState: [boolean, Dispatch<SetStateAction<boolean>>];
};

export const SidebarContext = createContext<SidebarContextType>({
  showSidebarState: [false, () => {}],
  showSidebarMdState: [false, () => {}],
  narrowSidebarState: [false, () => {}],
});

export default function SidebarProvider({ children }: { children: ReactNode }) {
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  const [isShowSidebarMd, setIsShowSidebarMd] = useState(true);
  const [isNarrow, setIsNarrow] = useState(false);

  const value = useMemo(
    () => ({
      showSidebarState: [isShowSidebar, setIsShowSidebar],
      showSidebarMdState: [isShowSidebarMd, setIsShowSidebarMd],
      narrowSidebarState: [isNarrow, setIsNarrow],
    }),
    [isShowSidebar, isShowSidebarMd, isNarrow]
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
