import { FileTextOutlined, SettingOutlined } from "@ant-design/icons";

type SidebarLink = {
  key: string;
  label: string;
  url: string;
  exact?: boolean;
  icon: React.ReactNode;
};

const sidebarLinks: SidebarLink[] = [
  {
    key: "contract-list",
    label: "لیست قراردادها",
    url: "/panel/contract-list",
    icon: <FileTextOutlined />,
  },
  {
    key: "setting",
    label: "تنظیمات حساب کاربری",
    url: "/panel/setting",
    icon: <SettingOutlined />,
    exact: true,
  },
];

export default sidebarLinks;
