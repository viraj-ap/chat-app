import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";
import ThemeController from "./ThemeController";

const Navbar = () => {
  const { logout, authUser } = useAuthStore() as {
    logout: () => void;
    authUser: any;
  };

  return (
    <header className="fixed top-0 w-full z-40 backdrop-blur bg-base-100/80 border-b border-base-300 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 hover:opacity-90 transition-all group"
        >
          <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition">
            <MessageSquare className="w-5 h-5 text-primary" />
          </div>
          <h1 className="text-lg font-bold tracking-tight">Yap</h1>
        </Link>

        {/* Right Menu */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeController />

          {authUser && (
            <>
              <Link
                to="/profile"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-primary/10 transition-colors"
              >
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">Profile</span>
              </Link>

              <button
                onClick={logout}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-error/10 text-error transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
