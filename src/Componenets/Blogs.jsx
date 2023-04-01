import React from "react";
import {Link} from "react-router-dom"

    const Blogs= () => {
        return(
        <div>
            <ul>
                <li><Link to ="/First">Blog:1</Link></li>
            </ul>

            <ul>
                <li><Link to ="/Second">Blog:2</Link></li>
            </ul>

            <ul>
                <li><Link to ="/Third">Blog:3</Link></li>
            </ul>

            <ul>
                <li><Link to ="/Fourth">Blog:4</Link></li>
            </ul>
        </div>

        )
    }

export default Blogs