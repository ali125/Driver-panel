"use client";
import React, { useMemo } from "react";
import { Badge, Button, Dropdown, MenuProps, Space } from "antd";
import {
  DownOutlined,
  SettingOutlined,
  ArrowLeftOutlined,
  BellOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import LogoImg from "@/public/images/logo.webp";
import useUser from "@/hooks/useUser";
import { useRouter } from "nextjs-toploader/app";
import { useQueryClient } from "@tanstack/react-query";

type Props = {
  onSidebarToggle: () => void;
};

const DashboardHeader: React.FC<Props> = ({ onSidebarToggle }) => {
  const router = useRouter();
  const user = useUser();

  const queryClient = useQueryClient();

  // const { data } = useQuery({
  //   queryKey: ["get-contract-alerts", { page: "1" }],
  //   queryFn: () => getUserContractAlertListRequest({ page: 1 }),
  // });

  const notificationItems = useMemo(() => {
    // const items: MenuProps["items"] = (data?.data || []).map((item) => ({
    const items: MenuProps["items"] = [].map((item: any) => ({
      label: (
        <span className="flex flex-col">
          <span className="text-lg font-bold">{item.title}</span>
          <span>{item.contract.title}</span>
        </span>
      ),
      key: item.id,
      icon: <BellOutlined className="!text-lg" />,
      className: "!p-3 min-w-[12rem] max-w-[16rem]",
      onClick: () => router.push(`/panel/contract-list/${item.contract.id}`),
    }));

    items.push({
      label: (
        <span className="block w-full text-center">مشاهده همه یادآورها</span>
      ),
      key: "all-reminders",
      onClick: () => router.push(`/panel/alert-list`),
    });

    return items;
    // }, [data?.data, router]);
  }, [router]);

  const name = useMemo(() => {
    if (user.data) {
      const { first_name, last_name, username } = user.data;

      if (first_name && last_name) return `${first_name} ${last_name}`;
      return username;
    }
    return "";
  }, [user]);

  const userItems: MenuProps["items"] = [
    {
      label: "تنظیمات حساب کاربری",
      key: "profile",
      icon: <SettingOutlined className="!text-lg" />,
      className: "!p-3 !font-bold !text-lg",
      onClick: () => router.push("/panel/setting"),
    },
    {
      label: "خروج از حساب کاربری",
      key: "logout",
      className: "!p-3 !font-bold !text-lg",
      icon: <ArrowLeftOutlined className="!text-lg" />,
      danger: true,
      onClick: () => {
        queryClient.removeQueries();
        user.signOut();
      },
    },
  ];

  return (
    <header className="grid grid-cols-[repeat(3,1fr)_50px] items-center gap-5 px-4 md:px-0">
      <div
        className="order-1 flex cursor-pointer items-center justify-center gap-3 md:hidden"
        onClick={onSidebarToggle}
      >
        <Image
          src={LogoImg}
          alt="Logo"
          width={120}
          height={120}
          className="h-12 w-12"
        />
        <h4 className="text-nowrap text-lg font-black">پنل کاربری</h4>
      </div>
      <Dropdown
        className="order-2 col-span-1 -col-end-2 place-self-end md:col-end-2 md:place-self-start"
        menu={{ items: userItems }}
        trigger={["click"]}
      >
        <Button className="!hover:bg-secondary h-12 w-20 border-0 !bg-secondary text-lg font-bold text-gray-800 md:w-auto">
          <Space>
            <UserOutlined />
            <span className="hidden md:block">{name}</span>
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>

      {/* <Input
        size="large"
        className="order-4 col-span-full h-12 place-self-end border-0 !bg-secondary text-gray-500 sm:col-span-full lg:order-3 lg:col-span-2 lg:-col-end-2 lg:w-[20rem]"
        placeholder="جستجو..."
        prefix={<SearchOutlined />}
      /> */}

      <Dropdown
        className="order-3 -col-end-1 place-self-end lg:order-4"
        menu={{ items: notificationItems }}
      >
        <Button className="h-12 w-12 border-0 bg-secondary">
          <Badge count={0}>
            {/* <Badge count={data?.totalCount || 0}> */}
            <BellOutlined className="text-2xl" />
          </Badge>
        </Button>
      </Dropdown>
    </header>
  );
};

export default DashboardHeader;
