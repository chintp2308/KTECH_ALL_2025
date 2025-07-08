import "./App.css";
import RenderList01 from "./components/RenderList01/index";
import RenderList04 from "./components/RenderList04";

const renderList04Data = [
  {
    id: 1,
    sale: "-25%",
    title: "Cáp chuyển đổi USB-C sang SD",
    thumbnail: "../public/images/Apple-USBC-To-SDCard-A.jpg",
    money: "1.290.00đ",
    oldPrice: "790.000đ",
  },
  {
    id: 2,
    title: "Adapter sạc Apple Type C 20W",
    thumbnail: "../public/images/type-c-20-w.png",
    money: "520.000đ",
    oldPrice: "",
  },
  {
    id: 3,
    title: "Cáp sạc Lightning 2m ",

    thumbnail: "../public/images/cap-lightning-to-usb-cable-md818zma-1.jpg",
    money: "840.000đ",
    oldPrice: "",
  },
  {
    id: 4,
    title: "AirPods 3",
    sale: "-20%",
    thumbnail: "../public/images/airpod-3.png",
    money: "890.000đ",
    oldPrice: "1.450.000đ",
  },
];
function App() {
  return (
    <main className="container">
      <section className="container_RenderList01">
        <div className="header">
          <h1>Tin mới</h1>
          <a href="#" className="buttonViewMore">
            Xem thêm
          </a>
        </div>
        <div className="RenderList01">
          <RenderList01
            logo="../public/images/samsung.jpg"
            title="Ấn tượng đầu tiên Samsung Galaxy A32 4G: Với hơn 6 triệu đã có màn hình Super AMOLED 90Hz"
            view="140 lượt xem"
          />
          <RenderList01
            logo="../public/images/pixel.jpg"
            title="Google Pixel 5a dự kiến sẽ được ra mắt cùng thời điểm với Android 12"
            view="127 lượt xem"
          />
          <RenderList01
            logo="../public/images/a52.jpg"
            title="Samsung Galaxy A52 4G lộ diện trên Google Play Console "
            view="55 lượt xem"
          />
          <RenderList01
            logo="../public/images/a82.jpg"
            title="Galaxy A82 5G chuẩn bị ra mắt với chip flagship và màn hình trượt độc đáo, Sầmns gom lúa đi là vừa"
            view="55 lượt xem"
          />
        </div>
      </section>
      <section className="container_RenderList04">
        <div className="section_header">
          <h2 className="section_title">Phụ kiện tương thích</h2>
        </div>
        <div>
          <RenderList04 data={renderList04Data} />
        </div>
      </section>
    </main>
  );
}

export default App;
