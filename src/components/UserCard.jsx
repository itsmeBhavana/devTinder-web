import React from "react";
import { DEFAULT_PHOTO_URL } from "../utils/constants";

const UserCard = ({ user }) => {
  const { firstName, lastName, gender, age, about, photoUrl } = user;
  console.log(user);
  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure>
        {photoUrl ? (
          <img src={photoUrl} alt="Shoes" />
        ) : (
          <img src={DEFAULT_PHOTO_URL} alt="Shoes" />
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + "," + gender}</p>}
        <p>{about}</p>
        <div className="card-actions justify-center my-4">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
