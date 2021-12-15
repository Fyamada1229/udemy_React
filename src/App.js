import { PrmaryButon } from "./components/atoms/button/PrimaryButton";
import { SeconderyButon } from "./components/atoms/button/SeconderyButton";
import "./App.css";
import { SearchInput } from "./components/molecules/searchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnly } from "./components/template/HeaderOnly";
import { BrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./components/template/DefaultLayout";
import { Router } from "./router/Router";

export default function App() {
  return <Router />;
}
