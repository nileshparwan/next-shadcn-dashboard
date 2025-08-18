import { Calendar, ChevronDown, ChevronUp, Home, Plus, Projector, Search, Settings, User2 } from "lucide-react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarSeparator } from "./ui/sidebar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import Image from "next/image"
import React from "react"
import AppSidebarSkeleton from "./AppSidebarSkeleton"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"

const items = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "Inbox",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    }
]

export default function AppSidebar() {
    return (
        <Sidebar collapsible="icon" side="left" variant="sidebar">
            <SidebarHeader className="py-3">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href="/">
                                <Image src="/globe.svg" alt="Logo" width={20} height={20} />
                                <span>Admin</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarSeparator />

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <React.Suspense fallback={<AppSidebarSkeleton />}>
                                {
                                    items.map((item, index) => (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton asChild>
                                                <Link href={item.url}>
                                                    <item.icon />
                                                    <span>{item.title}</span>
                                                </Link>
                                            </SidebarMenuButton>

                                            {
                                                item.title === "Inbox" && (
                                                    <SidebarMenuBadge>
                                                        24
                                                    </SidebarMenuBadge>
                                                )
                                            }
                                        </SidebarMenuItem>
                                    ))
                                }
                            </React.Suspense>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Projects</SidebarGroupLabel>

                    <SidebarGroupAction>
                        <Plus />
                        <span className="sr-only">Add project</span>
                    </SidebarGroupAction>

                    <SidebarGroupContent>
                        <React.Suspense fallback={<AppSidebarSkeleton />}>
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild>
                                        <Link href="/">
                                            <Projector />
                                            See All Projects
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>

                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild>
                                        <Link href="/">
                                            <Plus />
                                            Add Project
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </React.Suspense>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* ui Collapsible */}
                <Collapsible defaultOpen className="group/collapsible">
                    <SidebarGroup>
                        <SidebarGroupLabel asChild>
                            <CollapsibleTrigger>
                                Help
                                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                            </CollapsibleTrigger>
                        </SidebarGroupLabel>

                        <CollapsibleContent>
                            <React.Suspense fallback={<AppSidebarSkeleton />}>
                                <SidebarGroupContent>
                                    <SidebarMenu>
                                        <SidebarMenuItem>
                                            <SidebarMenuButton asChild>
                                                <Link href="/">
                                                    <Projector />
                                                    See All Projects
                                                </Link>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>

                                        <SidebarMenuItem>
                                            <SidebarMenuButton asChild>
                                                <Link href="/">
                                                    <Plus />
                                                    Add Project
                                                </Link>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </React.Suspense>
                        </CollapsibleContent>
                    </SidebarGroup>
                </Collapsible>

                {/* nested */}
                <SidebarGroup>
                    <SidebarGroupLabel>Nested Items</SidebarGroupLabel>

                    <SidebarGroupContent>
                        <React.Suspense fallback={<AppSidebarSkeleton />}>
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild>
                                        <Link href="/">
                                            <Projector />
                                            See All Projects
                                        </Link>
                                    </SidebarMenuButton>

                                    <SidebarMenuSub>
                                        <SidebarMenuSubItem>
                                            <SidebarMenuSubButton asChild>
                                                <Link href="/">
                                                    <Plus />
                                                    Add Project
                                                </Link>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>

                                        <SidebarMenuSubItem>
                                            <SidebarMenuSubButton asChild>
                                                <Link href="/">
                                                    <Plus />
                                                    Add Category
                                                </Link>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                    </SidebarMenuSub>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </React.Suspense>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <User2 />
                                    John Doe
                                    <ChevronUp className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align="end" className="w-[200px]">
                                <DropdownMenuItem>Account</DropdownMenuItem>
                                <DropdownMenuItem>Billing</DropdownMenuItem>
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuItem>Sign out</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}