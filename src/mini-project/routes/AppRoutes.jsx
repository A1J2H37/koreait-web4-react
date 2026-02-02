import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import { PUBLIC_ROUTES } from "../constants/menu";

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
      </Route>
    </Routes>
  )
}
