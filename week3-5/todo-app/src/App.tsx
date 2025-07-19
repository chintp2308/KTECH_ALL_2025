import { Bounce, ToastContainer } from "react-toastify";
import TasksManagement from "./pages/TasksManagement";

function App() {
  return (
    <>
      <TasksManagement />

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;
