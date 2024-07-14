import { useEffect } from "react";
import { useState } from "react";
import CardDetails from "./CardDetails";


const Card = () => {


    const [card, setCard] = useState([])


    useEffect( () =>{

       fetch('build.json')
       .then(res => res.json())
       .then( data => setCard(data))


    } , [])


    return (
        <div className=" mr-5 ml-5">    
                 <div className=" text-center">
                    <h1 className=" text-6xl font-serif bg-slate-100 p-4">Business Information</h1>
                 </div>


            <div className=" flex justify-center bg-slate-100 p-5">
               
            
                <div className=" grid  md:grid-cols-3 gap-5">

                  {
                    card.map( card =>  <CardDetails  card={card} ></CardDetails> )


                  }



                </div>
            </div>
            
        </div>
    );
};

export default Card;