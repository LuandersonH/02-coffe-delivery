import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Checkout } from "./pages/Checkout/Checkout";
import { Delivery } from "./pages/Delivery/Delivery";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home/>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/delivery" element={<Delivery />} />
      </Route>
    </Routes>
  )
}
