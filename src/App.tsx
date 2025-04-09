import { Routes, Route, BrowserRouter as Router } from "react-router";
import { InventoryTable } from "./pages/Inventory/InventoryTable";
import { SellersTable } from "./pages/Sellers/SellersTable";
import { SignupForm } from "@/pages/Signup/Signup";


import { SigninForm } from "@/pages/Login/SigninForm";
import Layout from "./Layout";
import { ProductsTable } from "./pages/Products/ProductsTable";
import { WarehouseTable } from "./pages/Warehouse/WarehouseTable";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<SigninForm />}></Route>
        <Route path="/inventory" element={<Layout><InventoryTable/></Layout>}></Route>
        <Route path="/sellers" element={<Layout><SellersTable/></Layout>}></Route>
        <Route path="/products" element={<Layout><ProductsTable/></Layout>} />
        <Route path="/" element={<Layout><WarehouseTable/></Layout>}></Route>
        <Route path="/signup" element={<SignupForm />}></Route>
      </Routes>
    </Router>
  );
}
