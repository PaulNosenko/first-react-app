import { useState } from "react";
import { addList } from "../../redux/store";
import { useDispatch } from "react-redux";
import styles from './ListForm.module.scss';
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

const ListForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description }));
        setTitle('');
        setDescription('');
    }

    return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <fieldset className={styles.fieldset}>
                <label className={styles.label}>Title: </label>
                <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
            </fieldset>
            <fieldset className={styles.fieldset}>
                <label className={styles.label}>Description: </label>
                <TextInput value={description} onChange={(e) => setDescription(e.target.value)} />
            </fieldset>
            <Button>Add list</Button>
        </form>
    );
};

export default ListForm;