"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Tabs } from "antd";
import { useRouter } from "nextjs-toploader/app";
import Section from "@/components/common/Section";
import Title from "@/components/common/Title";

enum TabKeys {
  PICKUP = "person_pickup",
  RETURN = "person_return",
}

const TABS = [
  {
    key: TabKeys.PICKUP,
    label: "ارسالی",
  },
  {
    key: TabKeys.RETURN,
    label: "ارجاعی",
  },
];

const ContractListLayout: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [currentTab, setCurrentTab] = useState<TabKeys>(TabKeys.PICKUP);
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    setCurrentTab(
      params.key === "person_return" ? TabKeys.RETURN : TabKeys.PICKUP
    );
  }, [params]);

  const onTabChange = (key: string) => {
    setCurrentTab(key === "person_return" ? TabKeys.RETURN : TabKeys.PICKUP);
    router.push(`/panel/contract-list/${key}`);
  };

  return (
    <Section>
      <div className="flex items-center justify-between">
        <Title>لیست قراردادها</Title>
      </div>
      <Tabs activeKey={currentTab} onChange={onTabChange}>
        {TABS.map((tab) => (
          <Tabs.TabPane tab={tab.label} key={tab.key}>
            {children}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </Section>
  );
};

export default ContractListLayout;
