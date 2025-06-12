// import React from 'react'

import { SidebarProvider } from "../ui/sidebar";
import { AppSidebar } from "./AppSidebar"
import Navbar from "./Navbar"

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  
  return (
    <>
      <header className="relative z-50">
        <Navbar />
      </header>
      <SidebarProvider className="bg-green ">
        <AppSidebar />
        <main className="flex gap-10 items-start">

          {/* <SidebarTrigger /> */}
          <div className="main-content-wrapper">
            {children}
          </div>
        </main>
      </SidebarProvider>
    </>
  );
};

export default PageWrapper