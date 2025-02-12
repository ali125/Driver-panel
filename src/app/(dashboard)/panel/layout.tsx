"use client";
import AuthGuard from "@/components/auth/AuthGuard";
import DashboardLayout from "@/components/layout/DashboardLayout";

const PanelLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <AuthGuard>
      <DashboardLayout>{children}</DashboardLayout>
    </AuthGuard>
  );
};

export default PanelLayout;
