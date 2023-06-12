import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUser = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  console.log(user?.email);
  // use axios secure with react query
  const { data: isUser, isLoading: isUserLoading } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/user/${user?.email}`);
      console.log(res.data);
      return res.data.role;
    },
  });
  return [isUser, isUserLoading];
};
export default useUser;
