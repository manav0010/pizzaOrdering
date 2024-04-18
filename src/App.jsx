import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./pages/NotFound/NotFound";
import NotFoundRes from "./pages/NotFound/NotFoundRes";
import Loading from "./components/loading/Loading";
import { Suspense, useEffect } from "react";
import CreatePizza from "./pages/createPizza/CreatePizza";
import Checkout from "./pages/Payment/Payment";
import Thank from "./pages/thank/Thank";

function App() {
  return (
    <>
      <NotFoundRes />
      <div className="mainApp">
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/create-pizza" element={<CreatePizza />} />
            <Route path="/check-out" element={<Checkout />} />
            <Route path="/thank-you" element={<Thank />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
