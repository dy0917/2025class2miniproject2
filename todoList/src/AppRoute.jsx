import { Routes, Route } from "react-router-dom";
import { Index } from "./Pages/Index";

export default function AppRoute(props) {
  return (
    <Routes>
      <Route index Component={<Index></Index>} />
    </Routes>
  );
}
