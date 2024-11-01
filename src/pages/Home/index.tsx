import { Background } from "components/Background";
import { Dropdown } from "components/Dropdown";
import { Title } from "components/Title";

export const Home = () => {
  return (
    <Background>
      <main className="flex flex-col justify-center items-center h-screen">
        <Title />
        <Dropdown />
      </main>
    </Background>
  );
};
