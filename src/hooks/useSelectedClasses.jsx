import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSelectedClasses = () => {
  const { user, loading } = useAuth();
  // const token = localStorage.getItem('access-token');
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: selectedClasses = [] } = useQuery({
    queryKey: ["mySelectedClasses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/mySelectedClasses/${user?.email}`);
      console.log("res from axios", res);
      return res.data;
    },
  });

  return [selectedClasses, refetch];
};
export default useSelectedClasses;
