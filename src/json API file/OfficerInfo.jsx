import { useEffect, useState } from "react";
import Infodetails from "./Infodetails";




const OfficerInfo = () => {

   const [info, setInfo] = useState([])

   useEffect( ()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then(data => setInfo(data))
   } ,[])



    return (
        <div className=" ml-5 mr-5 mt-10 mb-10 bg-slate-100 p-10">

            <div>
                <h1 className=" text-5xl font-serif text-center">Our officer Information</h1>
            </div>

            <div className=" flex justify-center mt-10">
                <div className=" grid  md:grid-cols-3 gap-5">
                 {
                    info.map( info => <Infodetails info={info} ></Infodetails> )
                 }
                </div>
            </div>
            
        </div>
    );
};

export default OfficerInfo;