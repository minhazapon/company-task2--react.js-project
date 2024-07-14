



const Infodetails = ({info}) => {
   
    const {name, username, email, phone, website} = info

    return (
        <div>

            <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl transition duration-300 ease-in-out hover:scale-110 ">
              <figure>
                <img
                  src="https://img.freepik.com/free-vector/businessman-brainstorming-teamwork-character-coworking-space-office-interior_40876-2706.jpg?t=st=1720935798~exp=1720939398~hmac=04cbcfeb7676d7871c4bbdf3c6e1ee931b405a34f56628d50643bd032b44547a&w=740"
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Name: {name} </h2>
                <p> Name: {name}  </p>
                <p>username: {username}  </p>
                <p>Email: {email}  </p>
                <p>phone: {phone}  </p>
                <p>website: {website}  </p>
               
              </div>
            </div>



            </div>
            
        </div>
    );
};

export default Infodetails;