import { useState } from 'react';
import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';

const ColumnForm = (props) => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon }));
        setTitle('');
        setIcon('');
    }

    return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <fieldset className={styles.fieldset}>
                <label className={styles.label}>Title: </label>
                <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
            </fieldset>
            <fieldset className={styles.fieldset}>
                <label className={styles.label}>Icon: </label>
                <TextInput value={icon} onChange={(e) => setIcon(e.target.value)} />
            </fieldset>
            <Button>Add column</Button>
        </form>
    );
};

export default ColumnForm;