import React from "react";
import "./GitCard.scss";
import { Link } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import { useQuery } from "@tanstack/react-query";

function GitCard({ item }) {
  const { isLoading, error, data } = useQuery({
    queryKey: [item.userId],
    queryFn: () =>
      newRequest.get(`/users/${item.userId}`).then((res) => {
        return res.data;
       
      }),
  });
 
  console.log("item is",item)
  console.log("this is the data", data);

  return (
    <Link to={`/gig/${item._id}`} className="link">
      <div className="gitCard">
        <img src={item.cover} alt="" />
        <div className="info">
          {isLoading ? (
            "Loading"
          ) : error ? (
            "Something Went Wrong"
          ) : (
            <div className="user">
              <img src={data.img || "/images/noavatar.jpg"} alt="" />
              <span>{data.username}</span>
            </div>
          )}
          <p>{item.desc}</p>

          <div className="star">
            <img src="/images/star.png" alt="" />
            <span>{!isNaN(item.totalStars / item.starNumber) && Math.round(item.totalStars / item.starNumber)}</span>
          </div>
        </div>
        <hr />
        <div className="details">
          <img src="./images/heart.png" alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>$ {item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default GitCard;
