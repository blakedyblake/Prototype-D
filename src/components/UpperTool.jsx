import react from "react";

const UpperTool = ()=>{
    return(
        <div className="toolbar" >
            <section className='scrunch'>
                <div className='icon' id='menu'> &#9776;</div>
                <div className='icon'id='search'>&#x1F50D;</div>
                <div className='icon'id="account">&#x13020;</div>
            </section>
        </div>
    )
}

export default UpperTool;