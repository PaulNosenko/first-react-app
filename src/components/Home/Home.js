import Hero from "../Hero/Hero";
import List from "../List/List";
import SearchForm from "../SearchForm/SearchForm";
import Lists from '../Lists/Lists';

const Home = () => {
    return (
        <div>
            <Hero />
            <SearchForm />
            <Lists />
        </div>
    );
};

export default Home;