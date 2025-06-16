import { ArrowLeft, ArrowRight, Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom";

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
 
  return (
    <Sidebar collapsible="icon" className="p-4" >
      <SidebarContent className="bg-white ">
        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="text-lg font-medium my-2">
            Admin
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className="rounded-xl hover:bg-primary transition-all px-3  duration-300"
                    asChild
                    tooltip={item.title}
                  >
                    <Link className="font-medium flex items-center gap-3" to={item.url}>
                      <item.icon className="h-5 w-5 shrink-0" />
                      <span className="truncate">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="bg-white">
        <SidebarTrigger className="justify-start cursor-pointer text-black w-full font-semibold hover:bg-primary bg-white shadow-none px-2 rounded-xl"/>
      </SidebarFooter>
    </Sidebar>
  )
}