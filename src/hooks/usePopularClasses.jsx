import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const usePopularClasses = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: classes = [] } = useQuery({
    queryKey: ["popularClasses"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/popularClasses`);
      console.log("res from axios", res);
      return res.data;
    },
  });

  return [classes, refetch];
};
export default usePopularClasses;
