import React, { useEffect } from "react";
import { BASE_URL, DEFAULT_PHOTO_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();
  const fetchConnections = async () => {
    try {
      if (!connections) return;
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      console.log(res.data.data);
      dispatch(addConnections(res?.data?.data));
    } catch (err) {
      console.error(err.response.data);
    }
  };
  useEffect(() => {
    fetchConnections();
  }, []);
  if (connections.length === 0) return <h1>No Connections found</h1>;
  return (
    <div className="my-10 text-center">
      <h1 className="font-bold text-white text-3xl"> Connections </h1>
      {connections.map((connection) => {
        const { firstName, lastName, photoUrl, age, gender, about } =
          connection;
        return (
          <div className="flex p-4 rounded-lg bg-base-300 w-1/2 mx-auto m-4">
            <div>
              <img
                alt="photo"
                src={photoUrl || DEFAULT_PHOTO_URL}
                className="w-20 h-20 rounded-full"
              />
            </div>
            <div className="text-left mx-4">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
