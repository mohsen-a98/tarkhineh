import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import Main from "./pages/Main";
import Branch from "./pages/Branch";
import Menu from "./pages/Menu";
import Franchise from "./pages/Franchise";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Faq from "./pages/Faq";
import Rules from "./pages/Rules";
import Privacy from "./pages/Privacy";
import ShoppingCart from "./pages/ShoppingCart";
import Applayout from "./ui/Applayout";

function App() {
  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<Applayout />}>
            <Route index element={<Main />} />
            <Route path="branch" element={<Branch />} />
            <Route path="menu" element={<Menu />} />
            <Route path="franchise" element={<Franchise />} />
            <Route path="aboutUs" element={<AboutUs />} />
            <Route path="contactUs" element={<ContactUs />} />
            <Route path="faq" element={<Faq />} />
            <Route path="rules" element={<Rules />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="shoppingCart" element={<ShoppingCart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
