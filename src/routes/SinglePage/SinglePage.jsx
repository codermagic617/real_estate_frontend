import React from "react";
import "./singlepage.scss";
import { singlePostData, userData } from "../../lib/dummydata";
import Slider from '../../components/Slider/Slider';
import Map from '../../components/Map/Map';

const SinglePage = () => {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">
              {singlePostData.description}
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/bill.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pets Policy</span>
                <p>Pets are allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/bill.png" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>80 sqft.</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>2 Beds</span>
            </div>
            <div className="size">
              <img src="/bathtub.png" alt="" />
              <span>1 Bathroom</span>
            </div>
          </p>
          <p className="title">Sizes</p>
          <div className="sizes"> </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal"></div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button>
              <img src="/save.png" alt="" />
              Save the Location
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SinglePage;
