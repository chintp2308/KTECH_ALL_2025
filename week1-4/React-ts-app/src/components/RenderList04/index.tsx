// tsrafc
import styles from "./RenderList04.module.css";
import RenderList04Item from "./RenderList04Item";

interface Props {
  id: number;
  title: string;
  thumbnail: string;
  money: string;
  oldPrice: string;
  sale?: string;
}

const RenderList04 = ({ data }: { data: Props[] }) => {
  return (
    <div className={styles.section_body_RenderList04}>
      {data.length > 0 &&
        data.map((data) => {
          return (
            <RenderList04Item
              key={data.id}
              title={data.title}
              thumbnail={data.thumbnail}
              money={data.money}
              oldPrice={data.oldPrice}
              sale={data.sale}
            />
          );
        })}
    </div>
  );
};
export default RenderList04;
