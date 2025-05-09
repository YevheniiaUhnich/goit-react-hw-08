import { useDispatch, useSelector } from "react-redux";
import s from "./UserMenu.module.css";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";

export const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <p className={s.titleUser}>Welcome, {user?.name || "Guest"}</p>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};
