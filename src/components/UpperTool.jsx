import react from "react";

const UpperTool = ()=>{
    return(
        <div className="toolbar" style={{backgroundColor:'black', color:'white',display:'flex',flexDirection:'row'}}>
            <div id='menu'> &#9776;</div>
            <div id='search'>&#x1F50D;</div>
            <img src="../icons/account.png" alt='Yo'style={{boxShadow:'10px 10px 10px white'}}/>
        </div>
    )
}

export default UpperTool;