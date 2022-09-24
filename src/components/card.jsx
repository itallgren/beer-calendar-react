const Card = ({ beer }) => {
  const { name, category, rating, comment, imageUrl } = beer;
  return (
    <div className="card">
      <div className="upper-card">
        <button className="category card-category">{category}</button>
        <img src={imageUrl} alt={name} />
      </div>
      <div className="lower-card">
        <h3 className="name">{name}</h3>
        <div className="info">
          <h4 className="rating">{rating}</h4>
          <p className="comment">"{comment}"</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
