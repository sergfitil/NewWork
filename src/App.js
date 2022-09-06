import { useState, useEffect } from "react";
import CardList from "./components/CardList/CardList";
import Form from "./components/Form/Form";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [list, setlist] = useState([]);
  const [image, setImage] = useState(" LoLOLO");
  const [text, setText] = useState(" LaLala");
  const [isAlive, setIsAlive] = useState(true);
  useEffect(() => {
     fetch("http://localhost:3001/api")
     .then((res)=>res.json())
     .then((data)=>setlist(data))
  }, []);
  function example(event) {
    setText(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const post = {
      image,
      text,
      id: uuidv4(),
    };
    fetch("http://localhost:3001/api",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(post)
    })
    .then((res)=>res.json())
    .then((data)=>{
    setlist((prev) => [...prev, data]);
    setImage("");
    setText("");
    })

  }

  return (
    <>
      <header>
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-primary px-5 mt-5"
            onClick={() => setIsAlive((prev) => !prev)}
          >
            Kill
          </button>
        </div>
      </header>
      <main className="container my-5">
        <Form
          handleSubmit={handleSubmit}
          image={image}
          text={text}
          example={example}
          setImage={setImage}
        />
        {isAlive && (
          <>
            <CardList posts={list} setlist={setlist} />
          </>
        )}
      </main>
      <footer></footer>
    </>
  );
}

export default App;
