import Container from "../Container/Container";
import styles from './NavBar.module.scss';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <Container>
                <div className={styles.navContainer}>
                    <div className={styles.navIcon}>
                        <a href="/"><i className={'fa fa-tasks'}></i></a>
                    </div>
                    <ul className={styles.navLinks}>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink>
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
}

export default NavBar; 