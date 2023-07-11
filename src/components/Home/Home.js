import Hero from "../Hero/Hero";
import List from "../List/List";
import SearchForm from "../SearchForm/SearchForm";

const Home = (props) => {
    return (
        <div>
            <Hero />
            <SearchForm />
            <List />
        </div>
    );
};

export default Home;