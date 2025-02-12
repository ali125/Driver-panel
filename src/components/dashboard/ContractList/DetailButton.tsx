import React, { useCallback } from "react";
import { Button } from "antd";
import { ContractItem } from "@/@types/contracts";
import { useRouter } from "nextjs-toploader/app";
import { useParams } from "next/navigation";

type Props = {
  record: ContractItem;
};

const DetailButton: React.FC<Props> = ({ record }) => {
  const router = useRouter();
  const params = useParams();

  const key =
    params.key === "person_pickup" ? "person_pickup" : "person_return";

  const handleRedirect = useCallback(() => {
    router.push(`/panel/contract/${key}/${record.id}`);
  }, [record.id, router, key]);

  return (
    <Button onClick={handleRedirect} className="font-bold">
      جزئیات
    </Button>
  );
};

export default DetailButton;
