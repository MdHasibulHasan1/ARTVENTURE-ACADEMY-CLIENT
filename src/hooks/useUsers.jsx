import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
  const {
    data: users = [],
    isLoading: isUserLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://summer-camp-server-hasib7143-gmailcom.vercel.app/users"
      );
      return res.json();
    },
  });

  return [users, isUserLoading, refetch];
};

export default useUsers;
