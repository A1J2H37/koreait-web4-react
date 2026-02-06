import { useQuery } from "@tanstack/react-query"
import { getMeApi } from "../../../apis/endpoints/user";

export const useMyInfo = () => {
  return useQuery({
    queryKey: ["getMyInfo"],
    queryFn: getMeApi,
    staleTime: 5 * 60 * 1000 // 5분
  });
}