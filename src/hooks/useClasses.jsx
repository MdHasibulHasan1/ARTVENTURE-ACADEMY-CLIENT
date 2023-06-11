import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useClasses = () => {
  const { user, loading } = useAuth();

  const [axiosSecure] = useAxiosSecure();
  const { refetch: refetchClasses, data: classes = [] } = useQuery({
    queryKey: ["approvedClasses"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`approvedClasses`);
      //   console.log("res from axios", res);
      return res.data;
    },
  });

  return [classes, refetchClasses];
};
export default useClasses;
