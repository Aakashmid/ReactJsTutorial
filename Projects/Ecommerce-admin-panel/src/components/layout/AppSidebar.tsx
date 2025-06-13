import { ArrowLeft, ArrowRight, Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Button } from "../ui/button"
import { Link } from "react-router-dom";
import { useState } from "react";

// Menu items.
const items = [
  {
    title: "Overview",
    url: "/overview",
    icon: Home,
  },
  {
    title: "Products",
    url: "/products",
    icon: Inbox,
  },
  {
    title: "Orders",
    url: "/orders",
    icon: Calendar,
  },
  {
    title: "Customers",
    url: "/customers",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  const { isMobile } = useSidebar();
  const [isOpen, setIsOpen] = useState(isMobile ? false : true);

  return (
    <Sidebar
      className={`transition-all duration-500 ease-in-out p-4  ${isOpen ? "w-64" : "w-16"
        }`}
      style={{
        overflow: "hidden",
        transitionProperty: "width, background-color, box-shadow",
      }}
    >
      <SidebarContent className="bg-white overflow-hidden">
        <SidebarGroup className="p-0">
          {isOpen &&
            <SidebarGroupLabel className="text-lg font-medium my-2">Admin</SidebarGroupLabel>
          }
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton className="rounded-xl hover:bg-primary transition-all px-3 duration-300 " asChild>
                    <Link className="font-medium" to={item.url}>
                      <item.icon className="" />
                      {isOpen &&
                        <span  >{item.title}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <div className="bg-white w-full">
        <Button onClick={() => setIsOpen(!isOpen)
        }
          className=" justify-start cursor-pointer text-black   w-full font-semibold hover:bg-primary  bg-white shadow-none   rounded-xl"
        >
          {isOpen ?
            <>
              <ArrowLeft className={`h-7 w-auto `} />
              <span className="">
                Collapse
              </span>
            </>
            :
            <ArrowRight className={`h-7 w-auto `} />
          }
        </Button>
      </div>
    </Sidebar>
  )
}