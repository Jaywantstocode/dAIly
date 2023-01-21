import styles from '../styles/globals.scss'
import { TopLevelAnimationWrapper } from '../components/transitions';
import Footer from '../components/Footer';
import Nav from '../components/Nav';



function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      
      <TopLevelAnimationWrapper>
        <Component {...pageProps} />
      </TopLevelAnimationWrapper>

      <Footer />
    </>
  );
}

export default MyApp
