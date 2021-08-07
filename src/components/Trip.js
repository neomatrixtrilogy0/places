import React, { useState } from "react";

const Trip = ({ id, image, info, price, name, removeTrip }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-trip">
      <img src={image} alt={name} />
      <footer>
        <div className="trip-info">
          <h4>{name}</h4>
          <h4 className="trip-price">{price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>{readMore ? "show less" : "read more"}</button>
        </p>
        <button className="delete-btn" onClick={() => removeTrip(id)}>Non Interested</button>
      </footer>
    </article>
  );
};

export default Trip;
