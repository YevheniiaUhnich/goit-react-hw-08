import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import s from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${s.LinkNavigation} ${s.active}` : s.LinkNavigation
        }>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? `${s.LinkNavigation} ${s.active}` : s.LinkNavigation
          }>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
