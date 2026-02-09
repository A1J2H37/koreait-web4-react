import { useQuery } from "@tanstack/react-query"
import { getMeAPI } from "../../../apis/endpoints/user";

export const useMyInfo = () => {
  return useQuery({
    queryKey: ["getMyInfo"],
    queryFn: getMeAPI,
    staleTime: 5 * 60 * 1000 // 5분
  });
}