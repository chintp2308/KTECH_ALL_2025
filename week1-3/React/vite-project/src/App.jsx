import Button from "./components/Button/index";
// import Continue_Apple from "./components/Continue_Apple/Continue_Apple";
// import GetStarted from "./components/GetStarted/GetStarted";
import {
  ArrowRight,
  Apple,
  Search,
  Phone,
  CircleEqual,
  Settings2,
  Gpu,
  Bell,
} from "lucide-react";
import Task2 from "./components/Task2/index";
import "./App.css";
import Task3 from "./components/Task3/index";
import Task4 from "./components/Task4/index";
import Task6 from "./components/Task6/index";
import Task5 from "./components/Task5/index";
import Task7 from "./components/Task7/index";
const places = [
  {
    img: "/images/Task7/tt1.png",
    title: "Landescape",
    subtitle: "423Km",
    bg: "#f9fddc",
    dots: true,
  },
  {
    img: "/images/Task7/montt3.png",
    title: "Falset Mountains",
    subtitle: "423Km, 3 Week",
    bg: "#fff",
    dots: false,
  },
];

const info = {
  icon: "/images/Task7/tt1.png",
  title: "Great day to schedule",
  subtitle: "Lorem ipsum dolor sitamet.",
  btn: <span>&#9654;</span>,
};

const weatherDays = [
  { icon: "/images/Task7/mon.png", day: "Mon" },
  { icon: "/images/Task7/tue.png", day: "Tue" },
  { icon: "/images/Task7/wed.png", day: "Wed", active: true },
  { icon: "/images/Task7/thu.png", day: "Thu" },
  { icon: "/images/Task7/fri.png", day: "Fri" },
];

const temperature = {
  city: "Seatle",
  weather: "Cloudy",
  temp: 32,
  icon: "/images/Task7/maytt2.png",
  gradient: "linear-gradient(90deg, #f857a6 0%, #ff5858 100%)",
};

const schedule = {
  title: "Great day to schedule",
  subtitle: "Your usual hours",
  days: [
    { icon: "/images/Task7/mon.png", day: "Mon", time: "02:27 PM" },
    {
      icon: "/images/Task7/tue.png",
      day: "Tue",
      time: "06:00 AM",
      active: true,
    },
    { icon: "/images/Task7/wed.png", day: "Wed", time: "07:30 PM" },
    { icon: "/images/Task7/thu.png", day: "Thu", time: "04:00 PM" },
    { icon: "/images/Task7/fri.png", day: "Fri", time: "04:00 PM" },
  ],
};

const dateTime = {
  date: { day: "Jun", num: 23 },
  day: "Wednesday",
  time: "08:00 PM - 18:30 PM",
};
function App() {
  return (
    <div className="mainContainer">
      <div className="boxContainer">
        <Button label="Get Started" rightIcon={<ArrowRight />} color="black" />
        <Button
          leftIcon={<Apple />}
          label="Continue with Apple"
          color="black"
        />
        <Button
          leftIcon={<Apple />}
          label="Continue with Google"
          color="white"
        />
        <Button
          leftIcon={<Apple />}
          label="Continue with Facebook"
          color="white"
        />
      </div>

      <div className="boxContainer">
        <Task2 label="" leftIcon={<Search />} />
        <Task2 label="Search" leftIcon={<Search />} />
        <Task2 label="Textfield" leftIcon={<Search />} isStatic={true} />
        <Task2
          label="Search in the web"
          leftIcon={<Search />}
          rightIcon={<CircleEqual />}
        />
        <Task2
          label="Search crypto"
          leftIcon={<Search />}
          rightIcon={<Settings2 />}
        />
        <Task2
          label="Phone number"
          rightIcon={<Phone />}
          rightIconBg="#ccffe5"
          rightIconShape="rounded"
        />
        <Task2
          label="Search in the web"
          leftIcon={<Search />}
          rightIcon={<CircleEqual />}
          rightIconBg="#ffe86e"
          rightIconShape="circle"
        />
      </div>
      <div className="boxContainer">
        <Task3
          score={{
            time: "7'",
            homeTeam: "Spain",
            homeFlag: "https://flagcdn.com/w40/es.png",
            awayTeam: "France",
            awayFlag: "https://flagcdn.com/w40/fr.png",
            result: "0 : 0",
          }}
          club={{
            name: "Manchester United",
            logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
          }}
          user={{
            name: "Wade Warren",
            image: "https://randomuser.me/api/portraits/men/75.jpg",
            cardNumber: "4293 3242 ••••",
          }}
          dashboard={{
            tags: ["Highlight", "Feeds"],
            title: "Dashboard",
            subtitle: "Business management service",
            progress: 80,
          }}
        />
      </div>
      <div className="boxContainer">
        <Task4
          name="Yolanda"
          icon={<Gpu />}
          fontname="18px"
          avatar="../public/images/avatar4_1.png"
          subtitle="Web Development"
        />
        <Task4
          name="María"
          icon={<Phone />}
          fontname="24px"
          avatar="../public/images/avatar4_2.png"
        />
      </div>
      <div className="boxContainer">
        <Task5
          backgroundColor="#19c6e6"
          avatars={["/images/avatar4_1.png"]}
          title="Miriam Jimenez"
          titleColor="#fff"
        />
        <Task5
          backgroundColor="#8d2be2"
          avatars={[
            "/images/image6_1.png",
            "/images/image6_2.png",
            "/images/Avatar4_2.png",
          ]}
          title="Teams"
          subtitle="Two currently"
          titleColor="#fff"
          subtitleColor="#fff"
        />
        <Task5
          backgroundColor="#fff900"
          avatars={["/images/avatar4_1.png", "/images/Avatar4_2.png"]}
          title="New Teams"
          titleColor="#000"
        />
      </div>
      <div className="boxContainer">
        <Task6
          name="Nike store"
          fontname="25px"
          avatar="../public/images/image6_1.png"
          subtitle="6 months of promotions"
          amount="-27.50"
          time="11:00AM"
        />
        <Task6
          name="All your notifications are well turned on"
          icon={<Bell />}
          fontname="14px"
          badge="3"
        />
      </div>
      <div className="boxContainer">
        <Task7
          places={places}
          info={info}
          weatherDays={weatherDays}
          temperature={temperature}
          schedule={schedule}
          dateTime={dateTime}
        />
      </div>
    </div>
  );
}

export default App;
