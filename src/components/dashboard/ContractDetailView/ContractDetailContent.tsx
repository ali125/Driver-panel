import React from "react";
import { ContractDetail } from "@/@types/contracts";
import { CheckOutlined } from "@ant-design/icons";

type Props = {
  contract: ContractDetail;
};

const ContractDetailContent: React.FC<Props> = ({ contract }) => {
  return (
    <>
      <section>
        <div className="relative">
          <h4 className="font-semibold text-lg mb-4 z-10 bg-white relative inline-block pl-4">
            اطلاعات مشتری
          </h4>
          <span className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-gray-400" />
        </div>
        <ul className="flex flex-col gap-2 justify-start">
          <li className="flex items-center gap-2">
            <span className="w-28 block">نام:</span>
            <strong>{contract.customer.full_name}</strong>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-28 block">تاریخ تولد:</span>
            <strong>{contract.customer.birthday_by_format || "-"}</strong>
          </li>
        </ul>
      </section>

      {(contract.contract_information || []).length > 0 && (
        <section>
          <div className="relative">
            <h4 className="font-semibold text-lg mb-4 z-10 bg-white relative inline-block pl-4">
              اطلاعات قرارداد
            </h4>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-gray-400" />
          </div>
          <ul className="flex flex-col gap-4 justify-start">
            {contract.contract_information.map((info) => (
              <li key={info.id} className="flex items-center gap-2">
                <CheckOutlined className="text-l" />
                <span className="flex flex-col">
                  <span>{info.title}</span>
                  {info.description && (
                    <span className="text-sm">{info.description}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section>
        <ul className="flex flex-col gap-2 justify-start">
          <li className="flex items-center gap-2">
            <span className="w-28 block">تاریخ شروع:</span>
            <strong className="dir-ltr">{contract.start_date_shamsi}</strong>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-28 block">تاریخ پایان:</span>
            <strong className="dir-ltr">{contract.end_date_shamsi}</strong>
          </li>
        </ul>
      </section>

      <section>
        <div className="relative">
          <h4 className="font-semibold text-lg mb-4 z-10 bg-white relative inline-block pl-4">
            اطلاعات سفارش
          </h4>
          <span className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-gray-400" />
        </div>
        <ul className="flex flex-col gap-4 justify-start">
          {contract.order_data.order_items.map((order) => (
            <li
              key={order.id}
              className="flex items-center gap-2 border-b px-4 py-2"
            >
              <span className="flex flex-col gap-2">
                <span>{order.name}</span>
                {order.options?.car_data && (
                  <>
                    {order.options?.car_data.license_plate && (
                      <span className="flex items-center gap-2">
                        <span className="w-28 block">پلاک:</span>
                        <span>{order.options?.car_data.license_plate}</span>
                      </span>
                    )}
                    {order.options?.car_data.color && (
                      <span className="flex items-center gap-2">
                        <span className="w-28 block">رنگ:</span>
                        <span>{order.options?.car_data.color}</span>
                      </span>
                    )}
                    {order.options?.car_data.make_year && (
                      <span className="flex items-center gap-2">
                        <span className="w-28 block">سال ساخت:</span>
                        <span>{order.options?.car_data.make_year}</span>
                      </span>
                    )}
                    {order.options?.car_data.vin && (
                      <span className="flex items-center gap-2">
                        <span className="w-28 block">شماره شاسی:</span>
                        <span>{order.options?.car_data.vin}</span>
                      </span>
                    )}
                    {order.options?.car_data.motor_number && (
                      <span className="flex items-center gap-2">
                        <span className="w-28 block">شماره موتور:</span>
                        <span>{order.options?.car_data.motor_number}</span>
                      </span>
                    )}
                  </>
                )}
                <span className="flex items-center gap-2">
                  <strong className="w-14 block">هزینه:</strong>
                  <strong dangerouslySetInnerHTML={{ __html: order.total }} />
                </span>
              </span>
            </li>
          ))}
        </ul>
        <div className="flex items-center text-xl gap-2 mt-10">
          <span className="w-28 block">مبلغ کل:</span>
          <strong
            dangerouslySetInnerHTML={{ __html: contract.order_data.total }}
          />
        </div>
      </section>
    </>
  );
};

export default ContractDetailContent;
