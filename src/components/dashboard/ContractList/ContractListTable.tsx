import React, { useMemo } from "react";
import { Collapse, Table, TableProps } from "antd";
import { ContractItem } from "@/@types/contracts";
import DetailButton from "./DetailButton";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

const columns: TableProps<ContractItem>["columns"] = [
  {
    title: "کد پیگیری",
    dataIndex: "id",
    className: "font-yekanBakhEn",
    key: "id",
  },
  {
    title: "شماره قرارداد",
    dataIndex: "contract_number",
    key: "contract_number",
    className: "font-medium text-base max-w-[130px] font-yekanBakhEn",
  },
  {
    title: "عنوان",
    dataIndex: "title",
    key: "title",
    className: "font-medium text-base",
    align: "center",
  },
  {
    title: "مشتری",
    dataIndex: "customer",
    key: "customer",
    className: "font-medium text-base",
    align: "center",
    render: (value) => value.full_name,
  },
  {
    title: "تاریخ شروع",
    dataIndex: "start_date_shamsi",
    key: "start_date_shamsi",
    className: "font-medium text-base dir-ltr",
    align: "center",
    // render: (value) => getFormatDateTime(value),
  },
  {
    title: "تاریخ پایان",
    dataIndex: "end_date_shamsi",
    key: "end_date_shamsi",
    className: "font-medium text-base dir-ltr",
    align: "center",
    // render: (value) => getFormatDateTime(value),
  },
  {
    key: "action",
    align: "center",
    // render: () => <Button className="font-bold">جزییات و دانلود</Button>,
    render: (_, record) => <DetailButton record={record} />,
  },
];

type Props = {
  data: ContractItem[];
};

const ContractListTable: React.FC<Props> = ({ data }) => {
  const mobileData = useMemo(() => {
    return data.map((item) => ({
      key: item.id,
      label: (
        <div className="flex items-center gap-4">
          <div className="w-full text-lg">{item.title}</div>
        </div>
      ),
      children: (
        <div className="flex flex-col gap-2">
          <div className="flex w-full items-center gap-2">
            <strong className="min-w-fit">کد پیگیری:</strong>
            <div className="flex w-full items-center gap-4 font-yekanBakhEn">
              <span>{item.id}</span>
            </div>
          </div>
          <div className="flex w-full items-center gap-2">
            <strong className="min-w-fit">شماره قرارداد:</strong>
            <div className="flex w-full items-center gap-4">
              <span>{item.contract_number}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <strong>مشتری:</strong>
            <span>{item.customer.full_name}</span>
          </div>
          <div className="flex items-center gap-2">
            <strong>تاریخ شروع:</strong>
            <span className="dir-ltr">{item.start_date_shamsi}</span>
          </div>
          <div className="flex items-center gap-2">
            <strong>تاریخ پایان:</strong>
            <span className="dir-ltr">{item.end_date_shamsi}</span>
          </div>
          <DetailButton record={item} />
        </div>
      ),
    }));
  }, [data]);

  return (
    <>
      <div className="hidden overflow-auto md:block">
        <Table dataSource={data} columns={columns} pagination={false} />
      </div>
      <div className="block md:hidden">
        <Collapse
          items={mobileData}
          expandIconPosition="end"
          expandIcon={({ isActive }) =>
            isActive ? <DownOutlined /> : <UpOutlined />
          }
          className="border-0 bg-transparent"
        />
      </div>
    </>
  );
};

export default ContractListTable;
