import { PrmaryButon } from "./components/atoms/button/PrimaryButton";
import { SeconderyButon } from "./components/atoms/button/SeconderyButton";
import "./App.css";
import { SearchInput } from "./components/molecules/searchInput";
import { UserCard } from "./components/organisms/user/UserCard";

const user = {
  name: "yamada",
  image: "https://source.unsplash.com/CM1oVEUzsNM",
  email: "yamadag@mail.com",
  phone: "090900000",
  company: {
    name: "テスト株式会社",
  },
  website: "https://www.yamada/com",
};

export default function App() {
  return (
    <div className="App">
      <PrmaryButon>テストです</PrmaryButon>
      <SeconderyButon>検索</SeconderyButon>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
