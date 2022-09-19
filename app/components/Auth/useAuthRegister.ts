import { useAppSelector } from "./../../../hooks/useAppSelector";
import { useEffect } from "react";
import { useRouter } from "next/router";

const useAuthRegister = () => {
  const { user } = useAppSelector((state) => state.users);
  const { query, push } = useRouter();
  const redirect = query.redirect ? String(query.redirect) : "/";

  useEffect(() => {
    if (user) push(redirect);
  }, [user, query, redirect]);
};

export default useAuthRegister;
