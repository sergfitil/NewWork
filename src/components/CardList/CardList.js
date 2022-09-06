import Card from "../Card/Card";
function CardList({ posts, setlist }) {
  function delPost(id) {
    setlist((prev) => prev.filter((el) => el.id !== id));
  }
  return (
    <div className="row my-5">
      {posts.map((post) => (
        <div key={post.id} className="col-4">
          <Card image={post.image} text={post.text} id={post.id} delPost={delPost} />
        </div>
      ))}
    </div>
  );
}
export default CardList