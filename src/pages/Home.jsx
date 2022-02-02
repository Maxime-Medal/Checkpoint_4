import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5010/api/pictures")
      .then((res) => {
        res.data;
      })
      .then((data) => setPictures(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Welcome boy!</h1>
      <ul>{pictures.map((p) => p[0].title)}</ul>
    </div>
  );
};

export default Home;
