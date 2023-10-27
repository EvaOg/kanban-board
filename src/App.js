import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Layouts/Home";

import NotFound from "./components/NotFound";
import MainLayout from "./components/Layouts/MainLayout";

import Task from "./components/task/Task";
// import CartContext from "./components/CartContext";
import { CartProvider } from "./components/CartContext";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CartProvider>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              {" "}
              <Route index element={<Home />} />
              <Route path="/:task" element={<Task />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </CartProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
