import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import { useEffect, useState } from "react";

function App() {
  const [cakes, setCakes] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 720);
  useEffect(() => {
    async function fetchCakes() {
      try {
        const res1 = await fetch("https://cakedata-7ctk.onrender.com/cakes");
        const data1 = await res1.json();

        const res2 = await fetch("https://blogs-ih9s.onrender.com/blogs");
        const data2 = await res2.json();
        setCakes(data1);
        setBlogs(data2);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchCakes();
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 720);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path={"/"}
            element={
              <Landing cakes={cakes} blogs={blogs} isMobile={isMobile} />
            }
          />
        </Routes>
      </Router>
      {/* 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 */}
    </div>
  );
}

export default App;
