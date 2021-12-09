import react from "react";
import { Link } from "react-router-dom";

import UpperTool from "../components/UpperTool";

const MemoriesHome = ()=>{
    return(
        <section className='pages'>
            <UpperTool/>
            <section className="midmain" id="second">
                <h3>Where do you want to get started?</h3>
                <Link to='/sorter'><button className="link">Sort Through Photos</button><br/></Link>
                <Link to='/select'><button className="link">View Phone Now</button></Link>
            </section>

        </section>
    )
}

export default MemoriesHome;
