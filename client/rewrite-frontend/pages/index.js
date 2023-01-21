import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Rewrite</h1>
      <footer className={styles.footer}>
        Created for U of T Hacks 2023
      </footer>
    </div>
  )
}
