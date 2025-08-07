import { useAuthStore } from "@/store/useAuthStore";
import { Loader} from "lucide-react";
import { useEffect } from "react";

const HomePage = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore() as {
    authUser: any;
    isCheckingAuth: any;
    checkAuth: () => void;
  };
  useEffect(() => {
    checkAuth();
  }, [authUser]);

  if (isCheckingAuth && !authUser) {
    return <Loader className="animate-spin size-10" />;
  }

  return <div>home page</div>;
};

export default HomePage;
