import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useMyEnrolledClasses = () => {
  const { user, loading } = useAuth();

  const [axiosSecure] = useAxiosSecure();
  const { refetch: refetchEnrolledClasses, data: enrolledClasses = [] } =
    useQuery({
      queryKey: ["myEnrolledClasses", user?.email],
      enabled: !loading,
      queryFn: async () => {
        const res = await axiosSecure(`/myEnrolledClasses/${user?.email}`);
        console.log("res from axios", res);
        return res.data;
      },
    });

  return [enrolledClasses, refetchEnrolledClasses];
};
export default useMyEnrolledClasses;
