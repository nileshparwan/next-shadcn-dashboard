import { SidebarMenu, SidebarMenuItem, SidebarMenuSkeleton } from "./ui/sidebar";

export default function AppSidebarSkeleton() {
    return (
      <SidebarMenu>
        {Array.from({ length: 5 }).map((_, index) => (
          <SidebarMenuItem key={index}>
            <SidebarMenuSkeleton showIcon />
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    )
  }