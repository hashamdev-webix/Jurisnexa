import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ParalegalServices from "./pages/ParalegalServices";
import RecruitmentServices from "./pages/RecruitmentServices";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import ContactUs from "./pages/ContactUs";
import BookConsultation from "./pages/BookConsultation";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route
            path="our-services"
            element={<Navigate to="/paralegal-services" replace />}
          />
          <Route path="paralegal-services" element={<ParalegalServices />} />
          <Route path="recruitment-services" element={<RecruitmentServices />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:slug" element={<BlogDetail />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="book-a-consultation" element={<BookConsultation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
