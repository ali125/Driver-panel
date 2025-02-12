import React, { PropsWithChildren, useState } from "react";
import DashboardSidebar from "../DashboardSidebar";
import DashboardHeader from "../DashboardHeader";

const DashboardLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="xs:flex-col flex flex-col gap-5 sm:flex-col md:flex-row">
      <DashboardSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <div className="xs:w-full py-8 sm:w-full md:w-[calc(100%-20rem)] md:px-12 md:py-16 lg:px-28">
        <DashboardHeader onSidebarToggle={() => setIsOpen((prev) => !prev)} />
        <main className="px-4 py-10 md:px-0">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
