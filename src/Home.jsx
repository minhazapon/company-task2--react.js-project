import Card from "./API files/Card";
import Build from "./Home componets/Build";
import Company from "./Home componets/Company";
import Construc from "./Home componets/Construc";
import Headline from "./Home componets/Headline";
import Park from "./Home componets/Park";
import Portfolio from "./Home componets/Portfolio";
import World from "./Home componets/World";


const Home = () => {
    return (
        <div>

           <Headline></Headline>
           <Park></Park>
           <Construc></Construc>
           <Card></Card>
           <Company></Company>
           <Build></Build>
           <Portfolio></Portfolio>
           <World></World>
            
        </div>
    );
};

export default Home;