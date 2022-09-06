import { useEffect } from "react";

function Form({ handleSubmit, example, setImage, image, text }) {
  useEffect(() => {    
    return () => console.log("Im dead ");
  }, []);
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">
          Image:{image}
        </label>
        <input
          placeholder="Введите что-нибудь"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="text"
          className="form-control"
          id="image"
          aria-describedby="image"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="text" className="form-label">
          Text:{text}
        </label>
        <input
          value={text}
          onChange={example}
          type="text"
          className="form-control"
          id="text"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
export default Form;
