import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequest, removeRequest } from "../utils/requestSlice";
import axios from "axios";
import { DEFAULT_PHOTO_URL } from "../utils/constants";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();
  const reviewRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(_id));
    } catch (err) {
      console.errror(err.response.data);
    }
  };

  const fetchRequests = async () => {
    try {
      if (requests) return;
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequest(res.data.data));
    } catch (err) {
      console.error(err.response.data);
    }
  };
  useEffect(() => {
    fetchRequests();
  });
  if (!requests) return;
  if (requests.length === 0)
    return <h1 className="flex justify-center my-10">No Requests found!</h1>;
  return (
    <div className="my-10 text-center">
      <h1 className="font-bold text-white text-3xl"> Requests </h1>
      {requests.map((request) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } =
          request.fromUserId;
        return (
          <div
            key={_id}
            className="flex justify-between items-center p-4 rounded-lg bg-base-300 w-2/3 mx-auto m-4"
          >
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
              <p>{about.length > 80 ? about.substring(0, 80) + "..." : about}</p>
            </div>
            <div>
              <button
                className="btn btn-primary mx-2"
                onClick={() => {
                  reviewRequest("rejected", request._id);
                }}
              >
                Reject
              </button>
              <button
                className="btn btn-secondary mx-2"
                onClick={() => {
                  reviewRequest("accepted", request._id);
                }}
              >
                Accept
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
