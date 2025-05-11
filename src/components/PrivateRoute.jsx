import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ element, redirectTo = "/login" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? element : <Navigate to={redirectTo} />;
};
