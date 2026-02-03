import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import { PROTECTED_ROUTES, PUBLIC_ROUTES } from "../constants/menu";
import ProtectedRoute from "./ProtectedRoute";



export default function AppRoutes() {
  return (
    <Routes>
      {/* 부모 Route: MainLayout안에 Outlet에 자식 Route들이 렌더링 */}
      <Route element={<MainLayout />}>
        {PUBLIC_ROUTES.map((route) => {
          return <Route 
            key={route.id}
            path={route.path}
            element={route.element}
          />
        })}

        <Route element={<ProtectedRoute />}>
        {PROTECTED_ROUTES.map((route) => {
          return <Route 
          key={route.id}
          path={route.path}
          element={route.element}
          />
        })}
        </Route>
      </Route>

      {/* 404 처리 */}
      <Route path="*" element={<Navigate to="/" replace/>}/>

    </Routes>
  )
}
