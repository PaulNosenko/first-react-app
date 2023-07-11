import Container from "../Container/Container";
import styles from './NavBar.module.scss';

const NavBar = () => {
    return (
        <nav>
            <Container>
                <div className={styles.navContainer}>
                    <div className={styles.navIcon}>
                        <a href="/"><i className={'fa fa-tasks'}></i></a>
                    </div>
                    <ul className={styles.navLinks}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/favorite">Favorite</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
}

export default NavBar; 