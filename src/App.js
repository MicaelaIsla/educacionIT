import { Route, Routes } from "react-router-dom";
import Cart from "./views/Cart/Cart";
import Details from "./views/Details/Details";
import Index from "./views/Index/Index";
// import User from "./components/User/User";
// import UserList from "./components/User/UserList";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="cart" element={<Cart />} />
      <Route path="details/:id" element={<Details />} />
      {/* <Route path="users" element={<UserList />} />
      <Route path="users/:id" element={<User />} /> */}
    </Routes>
  );
}

export default App;
