import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, Settings, User } from "lucide-react";
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
            <img src="/chat-logo.png" alt="" />
          </div>
          <h1 className="text-lg font-bold tracking-tight">Ripple</h1>
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

              <Link
                to="/settings"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-primary/10 transition-colors"
              >
                <Settings className="w-4 h-4" />
                <span className="hidden sm:inline">Settings</span>
              </Link>

              <div className="relative">
                <button
                  onClick={() =>
                    (
                      document.getElementById(
                        "logout-dialog"
                      ) as HTMLDialogElement
                    )?.showModal()
                  }
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-error/10 text-error transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline">Logout</span>
                </button>

                <dialog
                  id="logout-dialog"
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Confirm Logout</h3>
                    <p className="py-4">Are you sure you want to logout?</p>
                    <div className="modal-action">
                      <form method="dialog" className="flex gap-2">
                        <button className="btn btn-outline">Cancel</button>
                        <button
                          className="btn btn-error"
                          onClick={() => logout()}
                        >
                          Logout
                        </button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
