import React from 'react'
import { Route } from "react-router-dom";
import ProtectedRoute from "../auth/ProtectedRoute.jsx";
import Dashboard from '../admin/dashboard.jsx';
import ListProduct from '../admin/ListProduct.jsx';
import NewProduct from '../admin/NewProduct.jsx';
import UpdateProduct from '../admin/UpdateProduct.jsx';
import UploadImages from '../admin/UploadImages.jsx';
import ListOrders from '../admin/ListOrders.jsx';
import ProcessOrder from '../admin/ProcessOrder.jsx';

const adminRoutes = () => {
  return (
    <>
     <Route
        path="/admin/dashboard" 
        element={
          <ProtectedRoute admin={true}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
     <Route
        path="/admin/products"
        element={
          <ProtectedRoute admin={true}>
            <ListProduct />
          </ProtectedRoute>
        }
      />
     <Route
        path="/admin/product/new"
        element={
          <ProtectedRoute admin={true}>
            <NewProduct />
          </ProtectedRoute>
        }
      />
     <Route
        path="/admin/products/:id"
        element={
          <ProtectedRoute admin={true}>
            <UpdateProduct />
          </ProtectedRoute>
        }
      />
     <Route
        path="/admin/products/:id/upload_images"
        element={
          <ProtectedRoute admin={true}>
            <UploadImages />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/orders"
        element={
          <ProtectedRoute admin={true}>
            <ListOrders />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/orders/:id"
        element={
          <ProtectedRoute admin={true}>
            <ProcessOrder />
          </ProtectedRoute>
        }
      />
    </>
  )
}

export default adminRoutes