import React from "react";
import "./gig.scss";
// import Slider from "react-slick";

import Slider from "react-slick";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useParams } from "react-router-dom";
import Reviews from "../../components/reviews/Reviews";

function Gig() {
  const settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 1, // Number of slides to show in one frame
    slidesToScroll: 1,
  };

  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["gig"],
    queryFn: () =>
      newRequest.get(`/gigs/single/${id}`).then((res) => {
        return res.data;
      }),
  });
  console.log("data", data);

  const userId = data?.userId

  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then((res) => {
        return res.data;
      }),

      // in this case if there is no userId its not gonna run
      enabled: !!userId,
  });
  console.log("data user is ", dataUser);
  return (
    <div className="gig">
      {isLoading ? (
        "loading"
      ) : error ? (
        "Something went wrong"
      ) : (
        <div className="container">
          <div className="left">
            <span className="breadcrumbs">
              / Graphics & Design / AI Artists / Image Generation
            </span>
            <h2>{data.title}</h2>

            {isLoadingUser ? (
              "Loading"
            ) : error ? (
              "Something went wrong!"
            ) : (
              <div className="user">
                <img
                src="/images/noavatar.jpg"
                  // src={dataUser.img || "/images/noavatar.jpg"}
                  className="pp"
                  alt=""
                />
                {/* <span>{dataUser.username}</span> */}
                {!isNaN(data.totalStars / data.starNumber) && (
                  <div className="stars">
                    {Array(Math.round(data.totalStars / data.starNumber))
                      .fill()
                      .map((item, i) => (
                        <img src="/images/star.png" alt="" key={i} />
                      ))}

                    <span>{Math.round(data.totalStars / data.starNumber)}</span>
                  </div>
                )}
              </div>
            )}
            <img className="slidee" src={data.image} alt="" />
            {/* <Slider {...settings} className="slide">
              {data.images.map((img)=>(
                 <img src={img} key={img} alt="" />
              ))}
             
            </Slider> */}

            <h4>About This Gig</h4>
            <p>{data.desc}</p>

            {isLoading ? (
              "Loading"
            ) : error ? (
              "Something went wrong!"
            ) : (
              <div className="seller">
                <h4>About the seller</h4>
                <div className="user">
                  <img
                  src="/images/noavatar.jpg"
                    // src={dataUser.img || "/images/noavatar.jpg"}
                    className="pp"
                    alt=""
                  />
                  <div className="info">
                    {/* <span>{dataUser.username}</span> */}
                    {!isNaN(data.totalStars / data.starNumber) && (
                      <div className="stars">
                        {Array(Math.round(data.totalStars / data.starNumber))
                          .fill()
                          .map((item, i) => (
                            <img src="/images/star.png" alt="" key={i} />
                          ))}

                        <span>
                          {Math.round(data.totalStars / data.starNumber)}
                        </span>
                      </div>
                    )}

                    <button>Contact Me</button>
                  </div>
                </div>
                <div className="box">
                  <div className="items">
                    <div className="item">
                      <span className="title">From</span>
                      {/* <span className="desc">{dataUser.country}</span> */}
                    </div>
                    <div className="item">
                      <span className="title">Avg. response time</span>
                      <span className="desc">2 hours</span>
                    </div>
                    <div className="item">
                      <span className="title">Languages</span>
                      <span className="desc">English, German</span>
                    </div>
                    <div className="item">
                      <span className="title">Member since</span>
                      <span className="desc">Sept 2017</span>
                    </div>
                    <div className="item">
                      <span className="title">Last delivery</span>
                      <span className="desc">about 10 hours</span>
                    </div>
                  </div>
                  <hr />
                  <p>
                    {/* Are you pouring hours into your content, but not seeing the
                    results you want? Hi there! I'm Diana and I'm here to help
                    you! */}
                    {/* {dataUser.desc} */}
                  </p>
                  <p>
                    As a certified social media marketer and graphic designer
                    with over 5 years of work experience, I know how to create
                    compelling content that drives results.
                  </p>
                </div>
              </div>
            )}

            {/* reviews comes from seperated file */}
            <Reviews gigId = {id}/>


          </div>
          <div className="right">
            <div className="price">
              <h5>{data.shortTitle}</h5>
              <h6>$ {data.price}</h6>
            </div>
            <p>{data.shortDesc}</p>
            <div className="details">
              <div className="item">
                <img src="/images/clock.png" alt="" />
                <span>{data.deliveryTime} Days Delivery</span>
              </div>

              <div className="item">
                <img src="/images/recycle.png" alt="" />
                <span>{data.revisionNumber} Revisions</span>
              </div>
            </div>

            <div className="features">
              {data.features.map((feature) => (
                <div className="item" key={feature}>
                  <img src="/images/greencheck.png" alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <button>Continue</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gig;
