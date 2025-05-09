import s from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <h1>PHONEBOOK</h1>
        <main className={s.containerLayout}>{children}</main>
      </header>
    </div>
  );
}
