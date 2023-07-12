import { getAllColumns, getColumnsByList, getListById } from '../../redux/store';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import styles from './List.module.scss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

const List = () => {
    const { listId } = useParams();
    const columns = useSelector(state => getColumnsByList(state, listId));
    const listData = useSelector(state => getListById(state, listId));

    return (
        <div className={styles.list}>
          <header className={styles.header}>
            <h2 className={styles.title}>{listData.title}</h2>
          </header>
          <p className={styles.description}>{listData.description}</p>
          <section className={styles.columns}>
            {columns.map(column =>
              <Column
                key={column.id}
                {...column}  />
            )}
          </section>
          <ColumnForm />
        </div>
      );
}

export default List;