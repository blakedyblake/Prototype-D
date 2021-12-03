import react from "react";
import UpperTool from "../components/UpperTool";

const LoginPage = ()=>{
    return(
        <section className='pages'>
            <UpperTool/>
            <section className="midmain">
                <h1>Welcome Back!</h1>
                <h3>Where do you want to begin?</h3>
                <button className="link">View My Memories</button><br/>
                <button className="link">Games For Kids</button>

            </section>
        </section>
    )
}

export default LoginPage;