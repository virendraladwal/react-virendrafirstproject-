import React from "react";
import {Link} from "react-router-dom"


const Home =()=>{
  return(
    <div>
      <ul>
        <li><Link to="/form">add new blog</Link></li>     
      </ul>

      <ul>
        <li><Link to="/blogs">show all blog</Link></li>     
      </ul>
      </div>


  )
}

export default Home