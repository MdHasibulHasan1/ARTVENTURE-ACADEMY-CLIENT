import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
  const {
    data: users = [],
    isLoading: isUserLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      return res.json();
    },
  });

  return [users, isUserLoading, refetch];
};

export default useUsers;
