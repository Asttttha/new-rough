import { useEffect, useState } from "react";
import About from "./component/About";
import Academics from "./component/Academics";
import Admission from "./component/Admission";
import Contact from "./component/Contact";
import Faculty from "./component/Faculty";
import Footer from "./component/Footer";
import Loader from "./component/Loader";
import Main from "./component/Main";
import Navbar from "./component/Navbar";
import Students from "./component/Students";
import Gallery from "./pages/Gallery";
import { Route, Routes } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    fetchData();
  }, []);


  return (
    <>
      {
        loading ? (
          <Loader />
        ) : (
          <div className="App">

            <Navbar />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/admissions" element={<Admission />} />
              <Route path="/faculty" element={<Faculty />} />
              <Route path="/students" element={<Students />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />

          </div>
        )
      }
    </>
  );

}


export default App;
