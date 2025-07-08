import styles from "../styles/ProductGrid.module.css";
type Product = {
  id: number;
  title: string;
  price: number;
  images: string[];
};
type Props = {
  product: Product;
};

const ProductGrid = ({ product }: Props) => {
  return (
    <div className={styles.product}>
      <img
        className={styles.image}
        src={product.images[0]}
        alt={product.title}
      />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductGrid;
