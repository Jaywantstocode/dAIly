import styles from "../styles/globals.scss";
import { TopLevelAnimationWrapper } from "../components/transitions";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { ChakraProvider } from "@chakra-ui/provider";
import NiceNav from "../components/NiceNav";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <NiceNav />
      {/* <Nav /> */}
      <TopLevelAnimationWrapper>
        <Component {...pageProps} />
      </TopLevelAnimationWrapper>
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
