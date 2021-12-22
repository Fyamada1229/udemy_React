import styled from "styled-components";
import { SeconderyButon } from "../atoms/button/SeconderyButton";
import { SearchInput } from "../molecules/searchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `山田-${val}`,
    image: "https://source.unsplash.com/CM1oVEUzsNM",
    email: "yamadag@mail.com",
    phone: "090900000",
    company: {
      name: "株式会社 山田商会",
    },
    website: "https://www.yamada/com",
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>Users一覧です</h2>
      <SearchInput />
      <br />
      <SeconderyButon>切り替え</SeconderyButon>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
