import { useEffect, useState } from "react";
import styles from "../styles/ProductPage.module.css";
import ProductGrid from "./ProductGrid";
import { NavLink } from "react-router-dom";

type Category = {
  id: number;
  name: string;
};

type Product = {
  id: number;
  title: string;
  price: number;
  images: string[];
};

const PRODUCTS_PER_PAGE = 4;

const ProductPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  // Fetch category list
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // Fetch products (with pagination)
  useEffect(() => {
    const offset = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const baseURL = selectedCategory
      ? `https://api.escuelajs.co/api/v1/categories/${selectedCategory}/products`
      : `https://api.escuelajs.co/api/v1/products`;

    fetch(baseURL)
      .then((res) => res.json())
      .then((data) => {
        setTotalProducts(data.length);
        const paginated = data.slice(offset, offset + PRODUCTS_PER_PAGE);
        setProducts(paginated);
      });
  }, [selectedCategory, currentPage]);

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <div className={styles.header}>
          <NavLink to="/" className={styles.header__link}>
            Home
          </NavLink>
          <span>&gt;</span>
          <NavLink to="/product" className={styles.header__link}>
            Product
          </NavLink>
        </div>
        <h1>Bộ lọc</h1>
        <div className={styles.filter__categories}>
          {categories.map((category) => (
            <div key={category.id} className={styles.filter__categories__item}>
              <input
                type="checkbox"
                checked={selectedCategory === category.id}
                onChange={() => {
                  setSelectedCategory(category.id);
                  setCurrentPage(1); // Reset to first page
                }}
              />
              <label>{category.name}</label>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.products__container}>
        <div className={styles.products__title}>
          <h1>Danh sách sản phẩm</h1>
        </div>

        <div className={styles.products}>
          {products.map((product) => (
            <ProductGrid key={product.id} product={product} />
          ))}
        </div>

        <div className={styles.pagination}>
          {Array.from(
            { length: Math.ceil(totalProducts / PRODUCTS_PER_PAGE) },
            (_, i) => (
              <button
                key={i}
                className={`${styles.pageBtn} ${
                  i + 1 === currentPage ? styles.active : ""
                }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
