import React from "react";

      const Header=({photoData,handlechange,fetchImage})=>{
    return(
        <div className="home_page">
          <h3>NASA Media Search</h3>
          <div className="header">
            <div className="title">{photoData.title}</div>
            <form onSubmit={fetchImage}>
              <input type="text" className="input" onChange={handlechange}/>
              <button type="submit" className="button">Search</button>
            </form>
          </div>
        </div>
          )
}

export default Header;