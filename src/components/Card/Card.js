function Card({ image, text, id, delPost }) {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={text} />
      <div className="card-body">
        <h5 className="card-title">{text}</h5>
        <button onClick={() => delPost(id)} className="btn btn-primary px-5">
          Deleted
        </button>
      </div>
    </div>
  );
}
export default Card;
