import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './SearchForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { updatedSearchedCardPhrase } from '../../redux/store';

const SearchForm = () => {
    const initialSeatchedCardPhrase = useSelector(state => state.searchedCardPhrase);
    const [searchedCardPhrase, setSearchedCardPhrase] = useState(initialSeatchedCardPhrase);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(updatedSearchedCardPhrase(''));
        }
    }, []);

    const updateSearchedCardPhrase = (e) => {
        e.preventDefault();
        dispatch(updatedSearchedCardPhrase(searchedCardPhrase));
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