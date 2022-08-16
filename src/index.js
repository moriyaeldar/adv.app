import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.scss'
import { AppHeader } from "./cmps/app-header";
import { AboutPage } from "./pages/about-page";
import { HomePage } from "./pages/home-page";
import { Articals } from "./pages/articals";
import { ContactUs } from "./pages/contact-us";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <AppHeader></AppHeader>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
        <Route path="about" element={<AboutPage />}></Route>
        <Route path="articals" element={<Articals />}></Route>
        <Route path="contact" element={<ContactUs/>}></Route>
    </Routes>
  </BrowserRouter>
);