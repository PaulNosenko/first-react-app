import Hero from "../Hero/Hero";
import ListForm from "../ListForm/ListForm";
import Lists from '../Lists/Lists';

const Home = () => {
    return (
        <div>
            <Hero />
            <Lists />
            <ListForm /> 
        </div>
    );
};

export default Home;