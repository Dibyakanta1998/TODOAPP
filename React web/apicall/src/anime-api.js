import axios from "axios";
import { useState, useEffect } from "react";
const imgId = "./loader.gif";
const Anime = () => {
  const [list, setList] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 4000);

    axios
      .get("https://api.publicapis.org/entries")
      .then((response) => {
        // console.log("!!!!!resilt", response.data);
        const data = response?.data?.entries;
        // console.log("!!!!!resilt", data);

        setList(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <h2>Your fetched data are !!!!!!</h2>

      <div style={{ flex: 1, display: "flex" }}>
        {loader ? (
          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={imgId} />
          </div>
        ) : (
          <ul>  
            {list.map((item) => (
              <li>{item?.Description}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
export default Anime;
