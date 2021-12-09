import react from "react";
import UpperTool from "../components/UpperTool";
import { Link } from "react-router-dom";
const LoginPage = ()=>{
    return(
        <section className='pages'>
            <UpperTool/>
            <section className="midmain">
                <h1>Welcome Back!</h1>
                <h3>Where do you want to begin?</h3>
                
                <Link to='/view-memories'><button className="link">View My Memories</button><br/></Link>
                <button className="link">Games For Kids</button>

            </section>
        </section>
    )
}

export default LoginPage;