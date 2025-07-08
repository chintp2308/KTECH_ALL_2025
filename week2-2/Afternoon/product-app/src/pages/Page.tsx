import HomePage from "../components/HomePage";
import BlogPage from "../components/BlogPage";
import CategoryPage from "../components/CategoryPage";
import LoginPage from "../components/LoginPage";
import CustomerPage from "../components/CustomerPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import ProductPage from "../components/ProductPage";

const Page = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/category" element={<CategoryPage />} />
        {/* <Route path="/product" element={<ProductPage />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/customer" element={<CustomerPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Page;
