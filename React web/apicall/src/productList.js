import axios from "axios";
import { useState, useEffect } from "react";
const Productapi = () => {
  const [list, setList] = useState([]);
  const [image, setImage] = useState([]);
  useEffect(() => {
    axios
      .get("https://fortnite-api.theapinetwork.com/store/get")
      .then((response) => {
        const value = response?.data?.data;
        console.log(value);
        setList(value);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <div className="main-container">
        <div className="header-product"></div>
        {new Array(list.length).fill().map((_) =>
          list.map((itm) => (
            <div className="product-display">
              <img className="image" src={itm.item.images.icon}></img>
              <div className="description">{itm.item.description}</div>
              <div className="name">{itm.item.name}</div>
            </div>
          ))
        )}
      </div>
    </>
  );
};
export default Productapi;
{
  /* <ul>
        {list.map((itm) => (
          <li>{itm.item.images.icon}</li>
        ))}
      </ul> */
}
