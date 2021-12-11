import { PrmaryButon } from "./components/atoms/button/PrimaryButton";
import { SeconderyButon } from "./components/atoms/button/SeconderyButton";
import "./App.css";
import { SearchInput } from "./components/molecules/searchInput";
import { UserCard } from "./components/organisms/user/UserCard";

export default function App() {
  return (
    <div className="App">
      <PrmaryButon>テストです</PrmaryButon>
      <SeconderyButon>検索</SeconderyButon>
      <br />
      <SearchInput />
      <UserCard />
    </div>
  );
}
