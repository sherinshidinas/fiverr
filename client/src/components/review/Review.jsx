import React from "react";
import "./Review.scss";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

function Review({ review }) {
  const { isLoading, error, data } = useQuery({
    queryKey: [review.userId],
    queryFn: () =>
      newRequest.get(`/users/${review.userId}`).then((res) => {
        return res.data;
      }),
  });
 
  return (
    <div className="review">
      {isLoading ? (
        "Loading"
      ) : error ? (
        "Something went wrong"
      ) : (
        <div className="user">
          <img src={data.img || "/images/noavatar.jpg"} className="pp" alt="" />
          <div className="info">
            <span>{data.username}</span>
            <div className="country">
             
              <span>{data.country}</span>
            </div>
            <div className="stars">
              {Array(review.star)
                .fill()
                .map((item, i) => (
                  <img src="/images/star.png" alt="" key={i} />
                ))}

              <span>{review.star}</span>
            </div>
          </div>
        </div>
      )}

      <p>{review.desc}</p>
      <div className="helpful">
        <span>Helpful?</span>
        <img src="/images/like.png" alt="" />
        <span>Yes</span>
        <img src="/images/dislike.png" alt="" />
        <span>No</span>
      </div>
    </div>
  );
}

export default Review;
