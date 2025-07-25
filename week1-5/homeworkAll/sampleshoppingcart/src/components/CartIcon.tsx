import { useState } from "react";
import { useCart } from "../../context/CartContext";
import CartDropdown from "./CartDropdown";
import styles from "./CartIcon.module.css";
import { BsCart4 } from "react-icons/bs";

export default function CartIcon() {
  const [open, setOpen] = useState(false);
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div
      className={styles.cartWrapper}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className={styles.cartBtn}>
        <BsCart4 /> ({totalItems})
      </button>

      {open && <CartDropdown />}
    </div>
  );
}
