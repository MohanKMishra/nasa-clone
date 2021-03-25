import React, { useState } from "react";
import { Pagination } from "antd";
import "antd/dist/antd.css";

const Home = ({ imgdata, search, handlePage }) => {
  return (
    <>
      <h2 className="second_header">Related Searches</h2>
      <h3>
        earth,sky,jupiter,planet,Mercury,venus,saturn,Uranus,Neptune,Pluto,Planet
        Nine
      </h3>
      <h2 className="second_header">NASA Media Search</h2>
      <h2 className="search_title">Search Results for {search}</h2>
      <div className="image_section">
        {imgdata.items &&
          imgdata.items.map((e) => {
            return (
              <div>
                {" "}
                {e.links &&
                  e.links.map((i) => {
                    return (
                      <div className="img_card">
                        <div className="search_img">
                          <img src={i.href} alt="not found" />
                        </div>
                        {e.data.map((data) => {
                          return (
                            <div className="details">
                              <div className="card_title">{data.title}</div>
                              <div className="card_title">
                                {data.date_created}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
              </div>
            );
          })}
      </div>
      <div className="pagination">
        <Pagination
          defaultCurrent={1}
          defaultPageSize={1}
          onChange={handlePage}
          total={100}
        />
      </div>
    </>
  );
};
export default Home;
