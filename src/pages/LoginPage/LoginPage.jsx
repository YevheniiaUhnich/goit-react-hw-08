import { useEffect } from "react";
import { LoginForm } from "../../components/LoginForm/LoginForm";

export default function LoginPage() {
  useEffect(() => {
    document.title = "Login";
  }, []);
  return <LoginForm />;
}
