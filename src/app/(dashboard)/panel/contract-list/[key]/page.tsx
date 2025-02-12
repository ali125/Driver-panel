"use client";
import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { Input, Pagination, PaginationProps } from "antd";
import ContractListTable from "@/components/dashboard/ContractList/ContractListTable";
import { getContractList } from "@/requests/contract";
import { useQuery } from "@tanstack/react-query";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import useDebounce from "@/hooks/useDebounce";

const ContractListPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchText, setSearchText] = useState<string>("");
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  // const queryClient = useQueryClient();

  const key =
    params.key === "person_pickup" ? "person_pickup" : "person_return";

  const debouncedSearchValue = useDebounce(searchText, 500);

  const queryKey = useMemo(
    () => [
      "get-contracts",
      { page: currentPage, key, title: debouncedSearchValue },
    ],
    [currentPage, key, debouncedSearchValue]
  );

  // useEffect(() => {
  //   return () => {
  //     queryClient.cancelQueries({
  //       queryKey,
  //     });
  //   };
  // }, [queryClient, queryKey]);

  useEffect(() => {
    const urlPage = searchParams.get("page") || 1;
    setCurrentPage(+urlPage);
  }, [searchParams]);

  const getContractsQuery = useQuery({
    queryKey,
    queryFn: ({ signal }) =>
      getContractList({
        page: currentPage,
        relation: key,
        title: debouncedSearchValue || undefined,
        options: { signal },
      }),
  });

  const onChangePage: PaginationProps["onChange"] = (p) => {
    router.push(`${pathname}?page=${p}`);
  };

  return (
    <div className="rounded-xl bg-white px-4 py-4 md:px-8">
      <div className="mr-auto w-56">
        <Input
          className="w-full rounded-xl border-gray-400 bg-transparent text-lg font-semibold"
          placeholder="جستجو قرارداد"
          id="searchText"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      {getContractsQuery.isLoading ? (
        <div className="flex min-h-52 w-full items-center justify-center">
          <LoadingOutlined />
        </div>
      ) : (
        <>
          <ContractListTable data={getContractsQuery.data?.data.data || []} />
          {!!getContractsQuery.data?.data.total && (
            <Pagination
              className="p-4"
              current={currentPage}
              pageSize={getContractsQuery.data?.data.per_page}
              // pageSizeOptions={[10, 15, 30, 50]}
              showSizeChanger={false}
              onChange={onChangePage}
              total={getContractsQuery.data?.data.total}
              itemRender={(page, type) =>
                type === "page" ? (
                  <span>{page}</span>
                ) : type === "next" ? (
                  <span className="flex items-center gap-2">
                    صفحه بعد
                    <ArrowLeftOutlined />
                  </span>
                ) : type === "prev" ? (
                  <span className="flex items-center gap-2">
                    <ArrowRightOutlined />
                    صفحه قبل
                  </span>
                ) : null
              }
            />
          )}
        </>
      )}
    </div>
  );
};

export default ContractListPage;
