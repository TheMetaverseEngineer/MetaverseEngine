import { Routes, Route, Navigate } from "react-router-dom";
import Categories from "./pages/categories/Categories";
import Rooms from "./pages/rooms/Rooms";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="*"
          element={<Navigate to="/categories" />}
        />
        <Route path="/categories" element={<Categories />} />
        <Route path="/rooms" element={<Rooms/>}/>
      </Routes>
    </>
  );
}

export default App;
