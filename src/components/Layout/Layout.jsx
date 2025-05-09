import s from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={s.wrapperLayout}>
      <header className={s.header}>
        <h1 className={s.title}>PHONEBOOK</h1>
        <main className={s.containerLayout}>{children}</main>
      </header>
    </div>
  );
}
