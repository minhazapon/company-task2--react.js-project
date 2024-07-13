import Build from "./Home componets/Build";
import Company from "./Home componets/Company";
import Construc from "./Home componets/Construc";
import Headline from "./Home componets/Headline";
import Park from "./Home componets/Park";


const Home = () => {
    return (
        <div>

           <Headline></Headline>
           <Park></Park>
           <Construc></Construc>
           <Company></Company>
           <Build></Build>
            
        </div>
    );
};

export default Home;