import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const ProtectedRoute = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // 🔥 AUTO REDIRECT IF TOKEN REMOVED FROM BROWSER
  useEffect(() => {
    const handleStorageChange = () => {
      const newToken = localStorage.getItem("token");
      if (!newToken) {
        navigate("/login", { replace: true });
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, [navigate]);

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};
