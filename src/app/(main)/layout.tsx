import "../globals.css"; // Adjust the import path if necessary
import SidebarProvider from "@/components/new-sidebar/SidebarProvider";
import SidebarOverlay from "@/components/new-sidebar/Sidebar/SidebarOverlay";
import Sidebar from "@/components/new-sidebar/Sidebar/Sidebar";
import SidebarNav from "@/components/new-sidebar/Sidebar/SidebarNav";
import Header from "@/components/new-sidebar/Header/Header";
import Footer from "@/components/new-sidebar/Footer/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <SidebarProvider>
      <SidebarOverlay />
      <Sidebar>
        <SidebarNav />
      </Sidebar>

      <div className="flex flex-col flex-grow min-h-screen">
        <Header />
        <div className="flex-grow-1 px-2 md:px-6 mb-4">
          <div className="container mx-auto">{children}</div>
        </div>
        <Footer />
      </div>

      <SidebarOverlay />
    </SidebarProvider>
  );
}
