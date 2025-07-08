import styles from "./App.module.css";
import Rating from "./components/Rating";
import LikeButton from "./components/LikeButton";
import { SlLike } from "react-icons/sl";
import { AiFillLike } from "react-icons/ai";
import SlideWithThumb from "./components/Slide with Thumb";
import ButtonTabs from "./components/ButtonTabs";
import ButtonAccordtions from "./components/ButtonAccordtions";

const images = [
  {
    id: 1,
    src: "../public/images/MAYGIAT1.jpg",
    alt: "maygiat",
  },
  { id: 2, src: "../public/images/loa.jpg", alt: "loa" },
  {
    id: 3,
    src: "../public/images/camera.jpg",
    alt: "camera",
  },
  { id: 4, src: "../public/images/book.jpg", alt: "book" },
  {
    id: 5,
    src: "../public/images/headphone.jpg",
    alt: "headphone",
  },
];
const tabs = [
  {
    id: 1,
    label: "HISTORY",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
  },
  {
    id: 2,
    label: "AppRoach",
    content:
      "Contenido de tabNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
  },
  {
    id: 3,
    label: "Culture",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est.",
  },
  {
    id: 4,
    label: "Method",
    content:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
  },
];
const accordtionData = [
  {
    title: "HISTORY",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
  },
  {
    title: "APPROACH",
    content:
      "Contenido de tabNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
  },
  {
    title: "CULTURE",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est.",
  },
  {
    title: "METHOD",
    content:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
  },
];

function App() {
  return (
    <div className={styles.container}>
      <div></div>
      <h1 className={styles.title}>Homework Session 2</h1>
      <div className={styles.container_LikeButton}>
        <h1>Like Button</h1>
        <LikeButton icon={<SlLike />} active={<AiFillLike />} />
      </div>
      <div className={styles.container_Rating}>
        <h1>Rating</h1>
        <Rating />
      </div>
      <div className={styles.container_SlideWithThumb}>
        <h1>Slide With Thumb</h1>
        <SlideWithThumb images={images} />
      </div>
      <div className={styles.container_ButtonTabs}>
        <h1>Button Tabs</h1>
        <ButtonTabs tabs={tabs} />
      </div>

      <div className={styles.container_ButtonAccordtions}>
        <h1>Button Accordtions</h1>
        <ButtonAccordtions data={accordtionData} />
      </div>
    </div>
  );
}

export default App;
