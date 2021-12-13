import { Header } from "../atoms/layout/Header";
import { Footer } from "../atoms/layout/Footer";

export const DefaultLayout = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
