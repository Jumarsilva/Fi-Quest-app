import { BrowserRouter, Route, Routes } from "react-router-dom";


function AppPageRouter() {
  return (
    <Routes>
      <Route path="/quiz" element={<Dashboard />}></Route>
    </Routes>
  );
}
export default AppRoutes;