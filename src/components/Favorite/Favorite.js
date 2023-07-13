import { useSelector } from "react-redux";
import PageTitle from "../PageTitle/PageTitle";
import styles from './Favorite.module.scss';
import { getFavoriteCards } from "../../redux/store";
import Card from "../Card/Card";

const Favorite = () => {
    const cards = useSelector(getFavoriteCards);

    return (
        <div>
            <PageTitle>Favorite</PageTitle>

            <div className={styles.columnContainer}>
                <article className={styles.column}>
                    {cards.map(card => <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite} />)}
                </article>
            </div>
        </div>
    );
};

export default Favorite;