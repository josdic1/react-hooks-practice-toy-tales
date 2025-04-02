import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, handleLike, handleDelete}) {

  const onLike = (toy) => {
    const thisToyUpdated = {
      ...toy,
      likes: toy.likes+1
    }
    handleLike(thisToyUpdated)
  }

const onDelete = (id) => {
  handleDelete(id)
}

const toyData = toys.map(toy => (
  <ToyCard key={toy.id} toy={toy} onLike={onLike} onDelete={onDelete}/>
))

  return (
    <div id="toy-collection">
{toyData}
    </div>
  );
}


export default ToyContainer;
