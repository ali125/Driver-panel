"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { LoadingOutlined } from "@ant-design/icons";
import Section from "@/components/common/Section";
import { getContract } from "@/requests/contract";
import ContractDetailView from "@/components/dashboard/ContractDetailView";

const ContractDetailPage: React.FC = () => {
  const params = useParams();

  const contractId = params.contractId as string;
  const key =
    params.key === "person_pickup" ? "person_pickup" : "person_return";

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
      {isLoading ? (
        <div className="flex min-h-52 w-full items-center justify-center">
          <LoadingOutlined />
        </div>
      ) : data?.data ? (
        <ContractDetailView contract={data?.data} />
      ) : null}
    </Section>
  );
};

export default ContractDetailPage;
