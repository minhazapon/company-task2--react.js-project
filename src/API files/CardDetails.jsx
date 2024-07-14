


const CardDetails = ({card}) => {

     const {image, title, para, location, price} = card



    return (
        <div>

            <div>

            

            <div className="  pl-2 pr-2 card card-compact bg-base-100 w-96 shadow-xl">

            <div className=" flex justify-between p-5 ">
                <img  className=" h-[50px]" src="https://i.ibb.co/QrPD2VM/contribution.png" alt="" />
                <img className=" h-[50px]" src="https://i.ibb.co/y84LMxD/building.png" alt="" />
             </div> 

              <figure>
                <img className=" rounded-xl h-[200px] w-[350px] "
                  src= {image}
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title"> {title} </h2>
                <p className=""> {para} </p>
                <div className=" flex justify-between  gap-24 items-center">
                   <p className=" text-xl">location: {location}</p>
                   <p className=" text-xl">{price}</p>
                </div>
                <div className="card-actions justify-center">
                  <button className="btn  text-white bg-black w-[350px]">Add to cart</button>
                </div>
              </div>
            </div>











            </div>
            
        </div>
    );
};

export default CardDetails;