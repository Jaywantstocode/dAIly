// import classNames from 'classnames/bind';
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { PageTransition, variantsFadeInOut } from '../components/transitions'
import EntryEditor from '../components/EntryEditor'

export default function Home() {
  return (
    <>
    <Head>
      <title>Rewrite</title>
    </Head>
    <PageTransition variants={variantsFadeInOut} >
      <div className={styles.container}>
        <EntryEditor content='<p>Testing</p>'></EntryEditor>
      </div>
    </PageTransition>
    </>
  )
}
