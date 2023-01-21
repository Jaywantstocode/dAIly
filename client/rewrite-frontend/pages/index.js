// import classNames from 'classnames/bind';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { PageTransition, variantsFadeInOut } from '../components/transitions'

export default function Home() {
  return (
    <>
    <Head>
      <title>Rewrite</title>
    </Head>
    <PageTransition variants={variantsFadeInOut} >
      <div className={styles.container}>
        <p>
          kajsbdjuashdjahsd
          askduyasduhadsuhad
          akhsdbasdhkashd
          kajsbdjuashdjahsd
          askduyasduhadsuhad
          akhsdbasdhkashdokajsbdjuashdjahsd
          askduyasduhadsuhad
          akhsdbasdhkashd
        </p>  
      </div>
    </PageTransition>
    </>
  )
}
