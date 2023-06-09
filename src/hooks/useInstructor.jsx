import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructor = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  console.log(user?.email);
  // use axios secure with react query
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["instructor", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
      console.log(res.data);
      return res.data.role;
    },
  });
  return [isInstructor, isInstructorLoading];
};
export default useInstructor;
