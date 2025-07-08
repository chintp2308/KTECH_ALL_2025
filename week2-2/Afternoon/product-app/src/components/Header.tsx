import { NavLink } from "react-router-dom";
import styles from "../styles/Header.module.css";
import { IoMdCart } from "react-icons/io";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h1 className={styles.title}>Magazines</h1>
        <div className={styles.headerContent}>
          <div className={styles.linkContainer}>
            <NavLink
              to="/home"
              className={styles.link}
              style={({ isActive }: { isActive: boolean }) => ({
                color: isActive ? "black" : "white",
              })}
            >
              Home
            </NavLink>
            <NavLink
              to="/blog"
              className={styles.link}
              style={({ isActive }: { isActive: boolean }) => ({
                color: isActive ? "black" : "white",
              })}
            >
              Blog
            </NavLink>
            <NavLink
              to="/category"
              className={styles.link}
              style={({ isActive }: { isActive: boolean }) => ({
                color: isActive ? "black" : "white",
              })}
            >
              Category
            </NavLink>
            <NavLink
              to="/"
              className={styles.link}
              style={({ isActive }: { isActive: boolean }) => ({
                color: isActive ? "black" : "white",
              })}
            >
              Product
            </NavLink>
            <NavLink
              to="/login"
              className={styles.link}
              style={({ isActive }: { isActive: boolean }) => ({
                color: isActive ? "black" : "white",
              })}
            >
              Login
            </NavLink>
            <NavLink
              to="/customer"
              className={styles.link}
              style={({ isActive }: { isActive: boolean }) => ({
                color: isActive ? "black" : "white",
              })}
            >
              Customer
            </NavLink>
          </div>
          <div className={styles.cartIcon}>
            <IoMdCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
