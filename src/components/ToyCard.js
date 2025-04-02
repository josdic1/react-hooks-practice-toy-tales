import React from "react";

function ToyCard({toy, onLike, onDelete}) {
  const handleLikeClick = () => onLike(toy);
  const handleDeleteClick = () => onDelete(toy.id);


  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button onClick={handleLikeClick} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDeleteClick} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
