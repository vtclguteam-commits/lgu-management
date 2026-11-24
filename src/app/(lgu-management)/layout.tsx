import * as React from "react";

<<<<<<< Updated upstream:src/app/(lgu-management)/layout.tsx
import { AppSidebar } from "@/app/(lgu-management)/lgu/_components/app-sidebar";
=======
import { AppSidebar } from "@/app/(lgu-management)/fm/_components/app-sidebar";
>>>>>>> Stashed changes:src/app/(financial-management)/layout.tsx
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SidebarProvider>
            <AppSidebar />

            {/* ✅ RIGHT column should be part of the body (NOT floating/inset card) */}
            <SidebarInset className="min-w-0 flex h-[100dvh] flex-col overflow-hidden bg-background p-0 m-0 rounded-none border-0 shadow-none">
                {children}
            </SidebarInset>
        </SidebarProvider>
    );
}
