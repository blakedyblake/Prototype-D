import react from "react";

import UpperTool from "../components/UpperTool";

const MemoriesHome = ()=>{
    return(
        <section className='pages'>
            <UpperTool/>
            <section className="midmain 2">
                <h3>Where do you want to get started?</h3>
                <button className="link">Sort Through Photos</button><br/>
                <button className="link">View Phone Now</button>
            </section>

        </section>
    )
}

export default MemoriesHome;
