import { useState, useEffect } from "react";
import reactDom from "react-dom";
const x = 400;
var count = 1;
const Readmore = ({ children }) => {
  const [temporaryText, setTemporaryText] = useState("");
  const text = children;

  useEffect(() => {
    {
      setTemporaryText(text.slice(0, x));
    }
  }, []);
  const showText = () => {
    count++;
    console.log(count);
    setTemporaryText(text.slice(0, count * x));
  };

  return (
    <>
      <p>
        {temporaryText}
        {temporaryText.length < text.length && (
          <span onClick={showText} style={{ color: "whitesmoke" }}>
            Read more...
          </span>
        )}
      </p>
    </>
  );
};

const Content = () => {
  return (
    <>
      <div className="main-container">
        <div className="inner-container">
          <div className="header"></div>
          <div className="chat-container">
            {/* <div className="chat-hider"></div> */}
            <Readmore id="read">
              I learn coding.I learn coding.I learn coding.I learn coding.I
              learn coding.I learn coding.I learn coding.I learn coding.I learn
              coding.I learn coding.I learn coding.I learn coding.I learn
              coding.I learn coding.I learn coding.I learn coding.I learn
              coding.I learn coding.I learn coding.I learn coding.I learn
              coding.I learn coding.I learn coding.I learn coding.I learn
              coding.I learn coding.I learn coding.I learn coding.I learn
              coding.I learn coding.I learn coding.I learn coding.I learn
              coding.I learn coding.I learn coding.I learn coding.I learn
              coding.I learn coding.I learn coding.I learn coding.I learn
              coding.I learn coding.I learn coding.I learn coding.I learn
              coding.I learn coding.I learn coding.I learn coding.I learn
              coding.I learn coding.I learn coding.I learn coding.I learn
              coding.I learn coding.I learn coding.I learn coding.I learn
              coding.I learn coding.I learn coding.I learn coding.I learn
              coding.I learn coding.I learn coding.I learn coding.I learn
              coding.I learn coding.I learn coding.I learn coding.I learn
              coding.I learn coding.I learn coding.I learn coding.I learn
              coding.I learn coding.I learn coding.I learn coding.I learn
              coding.I learn coding.I learn coding.I learn coding.I learn
              coding.I learn coding.I learn coding.I learn coding.I learn
              coding.I learn coding.I learn coding.I learn coding.I learn
              coding.I learn coding.I learn coding.I learn coding.I learn
              coding.I learn coding.I learn coding.I learn coding.I learn
              coding.I learn coding.I learn coding.I learn coding.I learn
              coding.I learn coding.I learn coding.I learn coding.I learn
              coding.I learn coding.I learn coding.I learn coding.I learn
              coding.I learn coding.I learn coding.I learn coding.I learn
              coding.I learn coding.I learn coding.I learn coding.I learn
              coding.I learn coding.I learn coding.I learn coding.I learn
              coding.I learn coding.I learn coding.I learn coding.I learn
              coding.I learn coding.
            </Readmore>
          </div>
        </div>
      </div>
    </>
  );
};
export default Content;
