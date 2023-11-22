import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Work from "./pages/Work/Work";

export default function App() {
  return (
    <>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/works" element={<Work />} />
          </Routes>
        </Layout>
      </div>
    </>
  );
}
