import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import AllRoutes from "./router/AllRoutes";
import ScrollToTop from "./components/elements/ScrollToTop";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
      <div className="h-100">
        <AllRoutes />
        <ScrollToTop />
        <ToastContainer />
      </div>
  );
}

export default App;
