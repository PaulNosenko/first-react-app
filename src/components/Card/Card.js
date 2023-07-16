import { useDispatch } from 'react-redux';
import styles from './Card.module.scss';
import { clsx } from 'clsx';
import { toggleCardFavorite } from '../../redux/cardsReducer';

const Card = props => {
    const dispatch = useDispatch();
    const handleFavoriteBtnClick = () => {
        dispatch(toggleCardFavorite(props.id))
    }

    return (
        <li className={styles.card}>
            {props.title}
            <span onClick={handleFavoriteBtnClick} className={clsx(styles.favorite, {"fa fa-star": props.isFavorite}, {"fa fa-star-o": !props.isFavorite})} />
        </li>
    );
};

export default Card;