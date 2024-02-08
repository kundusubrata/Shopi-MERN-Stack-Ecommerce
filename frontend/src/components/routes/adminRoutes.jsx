import React from 'react'
import { Route } from "react-router-dom";
import ProtectedRoute from "../auth/ProtectedRoute.jsx";
import Dashboard from '../admin/dashboard.jsx';
import ListProduct from '../admin/ListProduct.jsx';

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
    </>
  )
}

export default adminRoutes