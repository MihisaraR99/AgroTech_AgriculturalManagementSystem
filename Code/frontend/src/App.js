import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import "./components/HealthCare/Health.css";
import Header from "./components/Header";
import Navigator from "./components/Navigator/Navigator";
import Footer from "./components/Footer";
import AllServices from "./components/AllServices";

// Store Components
import StoreHome from "./components/Store/StoreHome";
import StoreProducts from "./components/Store/StoreProducts";
import StoreProductsDetails from "./components/Store/StoreProductsDetails";
import StoreOrderForm from "./components/Store/StoreOrderForm";
import StoreAddProductForm from "./components/Store/StoreAddProductForm";

// Products Components
import AddProduct from "./components/Product/Product_Manager/AddProduct";
import AllProducts from "./components/Product/Product_Manager/AllProducts";
import CompanyRequest from "./components/Product/User_Company/CompanyRequests";

// Ads Components
import AdvertiserForm from "./components/Ads/AdvertiserForm";
import PropertyCatalog from "./components/Ads/PropertyCatalog";
import DisplayAd from "./components/Ads/DisplayAd";
import AdvertiserLogin from "./components/Ads/AdvertiserLogin";
import AdminViewAds from "./components/Ads/AdminViewAds";
import AdminUpdateAds from "./components/Ads/AdminUpdateAds";

// Appointments Components - Healthcare
import AddAppointments from "./components/HealthCare/AddAppointments";
import AllappointmentsVet from  "./components/HealthCare/AllappointmentsVet";
import AllappointmentsManager from "./components/HealthCare/AllappointmentsManager";
import UpdateAppointmentManager from "./components/HealthCare/UpdateAppointmentManager";



// Lab Components
import AddReport from "./components/AddReport";
import AllReports from "./components/AllReports";
import DeleteReport from "./components/DeleteReport";
import EditReport from "./components/EditReport";
import ReportDetails from "./components/ReportDetails";
import Login from "./components/Users/Login";
import Register from "./components/Users/Register";
import axios from "axios";

function App() {
  useEffect(() => {}, []);

  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Navigator />
      <Routes>
        <Route path="/rep" element={<AllReports />} />
        <Route path="/add" element={<AddReport />} />
        <Route path="/del" element={<DeleteReport />} />
        <Route path="/edit/:id" element={<EditReport />} />
        <Route path="/rep/:id" element={<ReportDetails />} />
        <Route path="/" element={<AllServices />} />

        <Route path="/adform" element={<AdvertiserForm />} />
        <Route path="/properties" element={<PropertyCatalog />} />

          {/* Health Care Appointments Routes */}
        <Route path="/Appointments" element= {<AddAppointments/>}/>
        <Route path="/HVet" element= {<AllappointmentsVet/>}/>
        <Route path="/HManager" element= {<AllappointmentsManager/>}/>
        <Route path="/HMUpdate" element= {<UpdateAppointmentManager/>}/>
        <Route path="/AllAppointment" element= {<AddAppointments/>}/>

        {/* Store Routes */}
        <Route path="/store" element={<StoreHome />} />
        <Route path="/store/products/:category" element={<StoreProducts />} />
        <Route
          path="/store/products/product/:id"
          element={<StoreProductsDetails />}
        />
        <Route
          path="/store/order/store-order-create"
          element={<StoreOrderForm />}
        />
        <Route
          path="/store/product/add-product"
          element={<StoreAddProductForm />}
        />

        <Route path="/Ads/add" element={<AddProduct />} />
        <Route path="/Ads/productSee" element={<AllProducts />} />
        <Route path="/Ads/company" element={<CompanyRequest />} />
          
        {/* Ads Routes */}
        <Route path="/Ads/adform" element={<AdvertiserForm />} />
        <Route path="/Ads/properties" element={<PropertyCatalog />} />
        <Route path="/Ads/DisplayAd" element={<DisplayAd />} />
        <Route path="/Ads/AdverLogin" element={<AdvertiserLogin />} />
        <Route path="/Ads/AdminView" element={<AdminViewAds />} />
        <Route path="/Ads/AdminUpdate" element={<AdminUpdateAds />} />

        {/* Users */}
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
>>>>>>> 9d3be67ca267bfcf2cc591025807a08c7e133b65
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
