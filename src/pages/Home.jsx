import React from "react";

const Home = () => {
  return (
    <>
      <div className="galeria1">
        <img className="img" src="/img/3.jpg" alt="galeria" />
      </div>

      <div className="gridIma">
        <div>
          <img className="img" src="/img/1.jpg" alt="galeria" />
        </div>
        <div>
          <img className="img" src="/img/2.jpg" alt="galeria" />
        </div>
      </div>

      <div className="galeria1">
        <img className="img" src="/img/6.jpg" alt="galeria" />
      </div>

      <div className="galeria4">
        <div className = "marco">
          <img className="img" src="/img/4.jpg" alt="galeria" />
        </div>
        <div className = "marco">
          <img className="img" src="/img/8.jpg" alt="galeria" />
        </div>
        <div className = "marco">
          <img className="img" src="/img/7.jpg" alt="galeria" />
        </div>
        <div className = "marco">
          <img className="img" src="/img/2.jpg" alt="galeria" />
        </div>
      </div>
    </>
  );
};

export default Home;
