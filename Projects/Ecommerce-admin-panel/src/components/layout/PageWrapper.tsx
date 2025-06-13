// import React from 'react'

import { SidebarProvider, SidebarTrigger} from "../ui/sidebar";
import { AppSidebar } from "./AppSidebar"
import Navbar from "./Navbar"

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  
  return (
    <>
      <header className="relative z-50">
        <Navbar />
      </header>
      <SidebarProvider className="">
        <AppSidebar />
        {/* <AppSidebar /> */}
        <main className="w-full mt-14">
          <div className="main-content-wrapper p-5">
            {children}
          </div>
        </main>
      </SidebarProvider>
    </>
  );
};

export default PageWrapper