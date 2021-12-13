import { PrmaryButon } from "./components/atoms/button/PrimaryButton";
import { SeconderyButon } from "./components/atoms/button/SeconderyButton";
import "./App.css";
import { SearchInput } from "./components/molecules/searchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnly } from "./components/template/HeaderOnly";
import { BrowserRouter } from "react-router-dom";

const user = {
  name: "山田",
  image: "https://source.unsplash.com/CM1oVEUzsNM",
  email: "yamadag@mail.com",
  phone: "090900000",
  company: {
    name: "株式会社 山田商会",
  },
  website: "https://www.yamada/com",
};

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderOnly />
        <PrmaryButon>テストです</PrmaryButon>
        <SeconderyButon>検索</SeconderyButon>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </BrowserRouter>
    </div>
  );
}
