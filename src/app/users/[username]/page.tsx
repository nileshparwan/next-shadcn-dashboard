import CardList from "@/components/CardList"
import { Badge } from "@/components/ui/badge"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Progress } from "@/components/ui/progress"
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react"
import {
    Sheet,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import EditUser from "@/components/EditUser"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AppLineChart } from "@/components/AppLineChart"

export default function SingleUserPage() {
    return (
        <div className="">

            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/users">Users</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>John Doe</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            {/* Container */}
            <div className="mt-4 flex flex-col xl:flex-row gap-8">
                {/* LEFT */}
                <div className="w-full xl:w-1/3 space-y-6">
                    {/* User badges container */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <h1 className="text-xl font-semibold">User badges</h1>

                        <div className="flex gap-4 mt-4">
                            <HoverCard>
                                <HoverCardTrigger>
                                    <BadgeCheck size={36} className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2" />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Verified User</h1>
                                    <p className="text-sm text-muted-foreground">This user has been verified by an admin.</p>
                                </HoverCardContent>
                            </HoverCard>

                            <HoverCard>
                                <HoverCardTrigger>
                                    <Shield size={36} className="rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2" />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Admin</h1>
                                    <p className="text-sm text-muted-foreground">
                                        Admin users have access to all features and can manage users.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>

                            <HoverCard>
                                <HoverCardTrigger>
                                    <Candy size={36} className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2" />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Awarded</h1>
                                    <p className="text-sm text-muted-foreground">
                                        This user has been awarded for their contributions.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>

                            <HoverCard>
                                <HoverCardTrigger>
                                    <Citrus size={36} className="rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2" />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Popular</h1>
                                    <p className="text-sm text-muted-foreground">
                                        This user has been popular in the community.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                    </div>

                    {/* information container */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                            <h1 className="text-xl font-semibold">User Information</h1>

                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button>
                                        Edit User
                                    </Button>
                                </SheetTrigger>

                                <EditUser />
                            </Sheet>
                        </div>

                        <div className="space-y-4 mt-4">
                            <div className="flex flex-col gap-2 mb-8 space-y-2">
                                <p className="text-sm text-muted-foreground">Profile completion</p>

                                <Progress value={66} />

                                <div className="flex items-center gap-2">
                                    <span className="font-bold">Username:</span>
                                    <span className="">john.doe</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="font-bold">Email:</span>
                                    <span className="">john.doe@gmail.com</span>
                                </div>


                                <div className="flex items-center gap-2">
                                    <span className="font-bold">Phone number:</span>
                                    <span className="">+23059646132</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="font-bold">Location:</span>
                                    <span className="">Port-Louis, Mauritius</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="font-bold">Role:</span>
                                    <Badge>Admin</Badge>
                                </div>

                                <p className="text-sm text-muted-foreground mt-4">Joined on 2025.01.01</p>
                            </div>
                        </div>
                    </div>

                    {/* card list */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <CardList title="Recent Transactions" />
                    </div>
                </div>

                {/* RIGHT */}
                <div className="w-full xl:w-2/3 space-y-6">
                    {/* User card container */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <div className="flex items-center gap-2">
                            <Avatar className="size-12">
                                <AvatarImage src="https://github.com/shadcn.png" alt="John Doe" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>

                            <h1 className="text-xl font-semibold">John Doe</h1>
                        </div>

                        <p className="text-sm text-muted-foreground mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est tempore atque possimus facilis labore expedita mollitia recusandae hic ab repudiandae esse maxime, aut unde harum similique at. Earum, cum nulla!</p>
                    </div>

                    {/* chart container */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <h1 className="text-xl font-semibold mb-6">User Activity</h1>
                        <AppLineChart />
                    </div>
                </div>
            </div>
        </div>
    )
}