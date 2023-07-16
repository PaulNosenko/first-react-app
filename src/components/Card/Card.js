import { useDispatch } from 'react-redux';
import styles from './Card.module.scss';
import { clsx } from 'clsx';
import { removeCard, toggleCardFavorite } from '../../redux/cardsReducer';

const Card = props => {
    const dispatch = useDispatch();
    const handleFavoriteBtnClick = () => {
        dispatch(toggleCardFavorite(props.id))
    }
    const handleRemoveBtnClick = () => {
        dispatch(removeCard(props.id))
    }

    return (
        <li className={styles.card}>
            {props.title}
            <div className={styles.cardIcons}>
                <span onClick={handleFavoriteBtnClick} className={clsx(styles.cardIcon, { "fa fa-star": props.isFavorite }, { "fa fa-star-o": !props.isFavorite })} />
                <span onClick={handleRemoveBtnClick} className={clsx(styles.cardIcon, "fa fa-trash")} />
            </div>
        </li>
    );
};

export default Card;