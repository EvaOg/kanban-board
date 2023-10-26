import styles from "../Components.module.css";

function Header({ headerName }) {
  return <p className={styles.pHeader}>{headerName}</p>;
}
export default Header;
