import {
  ContractPartyItemType,
  PartyPermission,
} from "@/@types/contract-party";
import { ContractDetail } from "@/@types/contracts";
import { getContract } from "@/requests/contract";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import useUser from "./useUser";
import { useCallback, useMemo } from "react";

type UseUserContractReturnType = {
  isLoading: boolean;
  contract?: ContractDetail | null;
  party?: ContractPartyItemType | null;
  isCreator: boolean | null;
  hasPermission: (permission: PartyPermission) => boolean;
};

const useUserContract = (props?: {
  contractId?: string;
}): UseUserContractReturnType => {
  const params = useParams();
  const user = useUser();

  const contractId = props?.contractId || (params.contractId as string);

  const { data: contract, isLoading } = useQuery({
    queryKey: ["get-contract", { contractId }],
    queryFn: () => getContract({ contractId }),
  });

  const { data: parties } = useQuery({
    queryKey: ["get-contract-parties", { contractId }],
    queryFn: () => getContractPartiesRequest({ contractId }),
  });

  const isCreator = useMemo(() => {
    if (contract && !user.loading) {
      return contract?.data?.creator?.phoneNumber === user.data.phoneNumber;
    }
    return false;
  }, [user, contract]);

  const party = useMemo(() => {
    if (!user.loading) {
      return (parties?.data || []).find(
        (p) => p.user.phoneNumber === user.data.phoneNumber
      );
    }
    return null;
  }, [parties?.data, user]);

  const hasPermission = useCallback(
    (permission: PartyPermission) => {
      return (party?.role.permissions || []).includes(permission) || isCreator;
    },
    [party?.role.permissions, isCreator]
  );

  if (!contractId) {
    return {
      isLoading: false,
      contract: null,
      party: null,
      isCreator: null,
      hasPermission,
    };
  }

  return {
    isLoading,
    contract: contract?.data,
    party,
    isCreator,
    hasPermission,
  };
};

export default useUserContract;
