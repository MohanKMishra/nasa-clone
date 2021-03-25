import React from "react";

const Footer=({photoData})=>{
    return(
        <>
        <div className="explanation">{photoData.explanation}</div>
        <div className="date">{photoData.date}</div>
        <h2 className="footer"> &copy; Image Copyright Information</h2>
        </>
    )
}
export default Footer;