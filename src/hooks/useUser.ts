import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "nextjs-toploader/app";
import toast from "react-hot-toast";
import { UserInfo } from "@/@types/auth";
import { TOKEN_STORE } from "@/constants";
import { getUserProfileRequest, logoutRequest } from "@/requests/auth";

type UseUserReturnType = {
  loading: boolean;
  data?: UserInfo;
  signOut: () => void;
};
export default function useUser(): UseUserReturnType {
  const router = useRouter();

  const getUserProfileQuery = useQuery({
    queryFn: getUserProfileRequest,
    queryKey: ["user-profile"],
  });

  const logoutRequestMutation = useMutation({
    mutationFn: logoutRequest,
    onSuccess: async (data) => {
      if (data.data?.action) {
        localStorage.removeItem(TOKEN_STORE);
        toast.success("درحال انتقال به صفحه ورود...");
        router.replace("/auth");
      } else {
        toast.error("خطا! لطفا مجددا تلاش کنید");
      }
    },
  });

  const signOut = () => {
    logoutRequestMutation.mutate();
  };

  return {
    loading: getUserProfileQuery.isLoading,
    data: getUserProfileQuery.data?.data,
    signOut,
  };
}
