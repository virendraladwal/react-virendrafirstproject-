// import React,{useState} from "react"  


// const Form =() => {
//    const[name,setName]=useState("")
//    const[description,setDescription]=useState("")
//    const[created,setCreated]=useState("")

//    const handleSubmit=(event)=>{
//       event?.preventDefault();
//     console.log("Name:${name}")
//    }
//     return(
       
//          <div>
//           <form onSubmit={handleSubmit}>
//           <label>Name:
//           <input type="text" value={name}  onChange={(event)=>setName(event.target.value)}/><br />
//           </label><br />

//           <label>Description</label><br />
//           <textarea name="" id="" cols="30" rows="10"></textarea><br />

//           <label>Created By</label><br />
//           <input type="text" /><br />

//           </form><button>submit</button>  

//          </div>

//     )
// }


// export default Form;


import React, { useState } from "react";
function Form() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [createdby, setCreatedby] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}`);
    console.log(`Description: ${description}`);
    console.log(`Createdby: ${createdby}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <br />
      <label>
        createdby
        <input
          type="text"
          value={createdby}
          onChange={(event) => setCreatedby(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
export default Form;