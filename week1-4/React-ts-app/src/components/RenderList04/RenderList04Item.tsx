import styles from "./RenderList04.module.css";

interface Props {
  thumbnail: string;
  title: string;
  money: string;
  oldPrice: string;
  sale?: string;
}
const RenderList04Item = ({
  thumbnail,
  title,
  money,
  oldPrice,
  sale,
}: Props) => {
  return (
    <div className={styles.article_item}>
      <div className={styles.article_thumbnail}>
        {sale && <span className={styles.article_sale}>{sale}</span>}
        <img src={thumbnail} alt="" />
      </div>
      <h3 className={styles.article_name}>{title}</h3>
      <div className={styles.article_extra}>
        <span className={styles.article_money}>{money}</span>

        <span className={styles.old_price}>{oldPrice}</span>
      </div>
    </div>
  );
};

export default RenderList04Item;
