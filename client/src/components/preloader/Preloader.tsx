import styles from "./Preloader.module.css";

export default function Preloader() {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black">
      <div className={styles.loader}></div>
    </div>
  );
}
