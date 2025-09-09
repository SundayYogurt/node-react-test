import React, { useState, useEffect } from "react";

import axios from "axios";
const App = () => {
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000/api/hello").then((res) => {
      setItems(res.data);
      setDataIsLoaded(true);
    });
  }, []);
  if (!dataIsLoaded) {
    return (
      <div>
        <h1>Please wait some time....</h1>
      </div>
    );
  }
  return (
    <div className="App">
      <h1 className="Hello API">"Hello API"</h1>
      <h3>Fetch data from an API in React</h3>
      <div className="container">{items}</div>
    </div>
  );
};
export default App;
