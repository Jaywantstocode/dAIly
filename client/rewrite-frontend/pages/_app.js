import styles from '../styles/globals.scss'
import { TopLevelAnimationWrapper } from '../components/transitions';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopLevelAnimationWrapper>
        <Component {...pageProps} />
      </TopLevelAnimationWrapper>
      <footer className={styles.footer}>
        Created for U of T Hacks 2023
      </footer>
    </>
  );
}

export default MyApp
