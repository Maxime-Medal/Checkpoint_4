import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [pictures, setPictures] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5500/api/pictures")
      // .then((res) => res.data)
      .then((res) => res)
      .then((res) => setPictures(res.data))
      // .then(console.log(`pictures ${pictures}`))
      .catch((err) => console.log(err));
  }, []);
  console.log(`pictures end ${pictures} `);
  return (
    <div>
      <h1>Welcome boy!</h1>
      {/* <ul>
        {pictures.map((e) => {
          <li>{e.title} </li>;
        })}
      </ul> */}
    </div>
  );
};

export default Home;
