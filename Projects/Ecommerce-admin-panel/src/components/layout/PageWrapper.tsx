// import React from 'react'

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "../AppSidebar"
import Navbar from "../Navbar"

const PageWrapper = ({ children }: { children: React.ReactNode }) => {

  return (
    <>
      <SidebarProvider className="">
        <header className="relative z-50">
          <Navbar />
        </header>

        <AppSidebar />
        {/* <AppSidebar /> */}
        <main className="w-full max-w-[65rem] mx-auto mt-14">
          <div className="main-content-wrapper p-5">
            {children}
          </div>
        </main>

      </SidebarProvider>
    </>
  );
};

export default PageWrapper