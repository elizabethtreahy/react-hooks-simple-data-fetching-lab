// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((r) => r.json())
      .then(x => setData(x.message))
  }, [])

  if (!data) return <p>Loading...</p>;

  return <img src={data} alt="A Random Dog" />;
}
export default App

