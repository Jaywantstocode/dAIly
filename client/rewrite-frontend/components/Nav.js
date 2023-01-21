import styles from '../styles/Nav.module.scss'
import Link from 'next/link';
import { useRouter } from 'next/router';

const pages = [
  { name: 'Calendar', route: '/calendar' },
  { name: 'Summaries', route: '/summaries' },
  { name: 'Memories', route: '/memories' },
]

const NavButton = ({ name, route, currentPath }) => {

  console.log()
  return (
    <div className={route === currentPath? styles.active : ""}>
      <Link href={route}>
        {name}
      </Link>
    </div>
  )
}

const Nav = (props) => {
  const router = useRouter();

  console.log(router.asPath);
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.buttonstrip}>
          {pages.map((page, i) => {
            console.log(`${page.route} vs ${router.asPath}. Equal? ${page.route === router.asPath}`);
            return <NavButton
              name={page.name}
              route={page.route} 
              currentPath={router.asPath} /> 
          })}
        </div>
      </nav>
    </>
  );
}

export default Nav;