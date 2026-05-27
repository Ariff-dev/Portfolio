import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Landing } from "./landing/Landing";
import { PrimaryLayout } from "./layout/PrimaryLayout";
import { BlogRouter } from "./blog";

function App() {
  return (
    <BrowserRouter>
      <PrimaryLayout>
        <Navbar />
        <Routes>
          {/* ── Portfolio / Landing ── */}
          <Route path="/" element={<Landing />} />

          {/* ── Blog ── */}
          <Route path="/blog/*" element={<BlogRouter />} />
        </Routes>
      </PrimaryLayout>
    </BrowserRouter>
  );
}

export default App;
