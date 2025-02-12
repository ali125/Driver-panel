import React, { useState } from "react";
import Title from "@/components/common/Title";
import { ContractDetail } from "@/@types/contracts";
import { Button } from "antd";
import ContractDetailContent from "@/components/dashboard/ContractDetailView/ContractDetailContent";
import SignatureTrigger from "../Signature/SignatureTrigger";
import Image from "next/image";

type Props = {
  contract: ContractDetail;
};

const SignContractView: React.FC<Props> = ({ contract }) => {
  const [signature, setSignature] = useState<{ file: any; url: string } | null>(
    null
  );

  console.log("signature", signature);
  return (
    <>
      <div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <Title>{contract.title}</Title>
          <div className="flex items-center gap-2">
            <span>شماره قرارداد:</span>
            <strong className="font-yekanBakhEn">
              {contract.contract_number}
            </strong>
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-white px-4 py-4 md:px-8 mt-4">
        <div className="flex flex-col gap-8 py-8">
          <ContractDetailContent contract={contract} />

          <section>
            {signature?.url ? (
              <div className="h-60 w-60 bg-white border-2 p-4">
                <Image
                  src={signature?.url}
                  className="h-full w-full"
                  width={300}
                  height={300}
                  alt="امضا"
                />
              </div>
            ) : (
              <div className="h-60 w-60 bg-gray-100 border-2 p-4" />
            )}
          </section>

          <section className="flex flex-col md:flex-row gap-4 items-center">
            <SignatureTrigger isSigned={!!signature} onDone={setSignature} />
            <Button
              type="primary"
              shape="default"
              size="large"
              disabled={signature === null}
              className="w-full text-lg font-bold"
            >
              ثبت نهایی
            </Button>
          </section>
        </div>
      </div>
    </>
  );
};

export default SignContractView;
