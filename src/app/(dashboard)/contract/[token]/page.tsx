"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { LoadingOutlined } from "@ant-design/icons";
import Section from "@/components/common/Section";
import { getContract } from "@/requests/contract";
import SignContractView from "@/components/dashboard/SignContractView";

const ContractViewTokenPage: React.FC = () => {
  const params = useParams();

  const token = params.token as string;

  const contractId = "5593";
  const key = "person_pickup";

  const { data, isLoading } = useQuery({
    queryKey: ["get-contract", { contractId, key }],
    queryFn: () =>
      getContract({
        contractId,
        relation: key,
      }),
  });

  return (
    <Section>
      <div className="max-w-[1400px] w-full mx-auto">
        {isLoading ? (
          <div className="flex min-h-52 w-full items-center justify-center">
            <LoadingOutlined />
          </div>
        ) : data?.data ? (
          <SignContractView contract={data?.data} />
        ) : null}
      </div>
    </Section>
  );
};

export default ContractViewTokenPage;
