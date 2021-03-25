import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Picture from "./Picture";

const App = () => {
  const [photoData, setPhotoData] = useState({});
  const [search, setSearch] = useState("");
  const [imgdata, setImgData] = useState({});
  const [pageNumber, setPageNumber] = useState(1);

  // console.log(imgdata);

  const handlechange = (e) => {
    console.log(e.target.value);
    console.log(encodeURIComponent(e.target.value));
    // setSearch(encodeURIComponent(e.target.value));
    setSearch(e.target.value);
    // console.log(e);
  };
  const handlePage = async (e) => {
    console.log(e);
    setImgData({ items: [] });
    setPageNumber(e);
    await fetchImagesFromAPI();
  };
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_SECRET_KEY}`
      );
      const data = await res.json();
      setPhotoData(data);
    })();
  }, []);

  const fetchImagesFromAPI = async () => {
    const res = await fetch(
      `https://images-api.nasa.gov/search?q=${search}&page=${pageNumber}`
    );
    const img_data = await res.json();
    // console.log(img_data);
    setImgData(img_data.collection);
    console.log(imgdata);
  };

  const fetchImage = async (e) => {
    e.preventDefault();
    await fetchImagesFromAPI();
    console.log(search);
  };

  return (
    <div className="App">
      {imgdata.items? (
        <Home imgdata={imgdata} search={search} handlePage={handlePage} />
      ) : (
        <div>
          <Header
            photoData={photoData}
            handlechange={handlechange}
            fetchImage={fetchImage}
          />
          <Picture photoData={photoData} />
          <Footer photoData={photoData} />
        </div>
      )}
    </div>
  );
};
export default App;
