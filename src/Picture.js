import React from "react";

const Picture=({photoData})=>{
    return(
        <div className="image">
        <img src={photoData.url} alt="not found"/>
      </div>
    )
}
export default Picture;