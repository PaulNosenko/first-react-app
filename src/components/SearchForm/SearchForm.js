import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './SearchForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';

const SearchForm = () => {
    const initialSeatchedCardPhrase = useSelector(state => state.searchedCardPhrase);

    const [searchedCardPhrase, setSearchedCardPhrase] = useState(initialSeatchedCardPhrase);

    const dispatch = useDispatch();

    const updateSearchedCardPhrase = (e) => {
        e.preventDefault();
        dispatch({ type: 'UPDATE_CARD_SEARCHED_PHRASE', payload: searchedCardPhrase })
    }

    return (
        <form className={styles.searchForm} onSubmit={updateSearchedCardPhrase}>
            <TextInput placeholder="Search…" value={searchedCardPhrase} onChange={e => setSearchedCardPhrase(e.target.value)} />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;