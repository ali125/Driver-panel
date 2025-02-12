import React, { useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeftOutlined } from "@ant-design/icons";
import classNames from "classnames";

import LogoImg from "@/public/images/logo-green.png";
import sidebarLinks from "./Links";
import useUser from "@/hooks/useUser";
import { useQueryClient } from "@tanstack/react-query";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const DashboardSidebar: React.FC<Props> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const user = useUser();

  const queryClient = useQueryClient();

  const handleSignOut = useCallback(() => {
    queryClient.removeQueries();
    if (!user.loading) user.signOut();
  }, [queryClient, user]);

  return (
    <aside
      className={classNames(
        "fixed right-0 top-[10rem] z-10 flex h-[calc(100vh-10rem)] w-full translate-x-full flex-col items-center bg-secondary p-8 transition-all md:sticky md:top-0 md:h-screen md:w-[20rem] md:translate-x-0",
        {
          "!translate-x-0": isOpen,
        }
      )}
    >
      <div className="my-12 hidden md:block">
        <Image
          src={LogoImg}
          alt="Logo"
          width={120}
          height={120}
          className="w-44"
        />
        <h4 className="mt-8 text-2xl font-black">پنل کاربری</h4>
      </div>

      <ul className="w-full">
        {sidebarLinks.map((link) => (
          <li key={link.key} className="mb-3 w-full">
            <Link
              onClick={onClose}
              href={link.url}
              className={classNames(
                "flex items-center gap-3 rounded-md px-4 py-2 text-lg font-bold text-gray-700 transition-all hover:bg-primary hover:text-white",
                {
                  "bg-primary text-white": link.exact
                    ? pathname === link.url
                    : pathname.includes(link.url),
                }
              )}
            >
              <span className="text-xl">{link.icon}</span>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div
        className="ml-auto mt-auto flex cursor-pointer items-center gap-3 px-4 py-2 text-lg font-bold text-red-400 transition-all hover:text-red-600 lg:ml-0"
        onClick={handleSignOut}
      >
        <span className="text-xl">
          <ArrowLeftOutlined className="!text-lg" />
        </span>
        خروج از حساب کاربری
      </div>
    </aside>
  );
};

export default DashboardSidebar;
