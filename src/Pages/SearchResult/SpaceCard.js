import React, { Component } from "react";
import "./SpaceCard.scss";
import { Link } from "react-router-dom";

class SpaceCard extends Component {
  render() {
    const {
      img,
      paymentType,
      title,
      address,
      fee,
      capacity,
      review,
      like,
    } = this.props;
    return (
      <div className="SpaceCard">
        <div className="imageContainer">
          <Link to={`/detail/${this.props.key}`}>
            <img alt="previewImage" className="spaceImg" src={img} />
          </Link>

          <div
            className={
              paymentType === 1 ? "immediateContainer" : "acceptContainer"
            }
          >
            <span className={paymentType === 1 ? "isImmediate" : "isAccept"}>
              {paymentType === 1 ? "바로결제" : "승인결제"}
            </span>
          </div>
        </div>

        <div className="infoContainer">
          <span className="name">{title}</span>

          <div className="locationBox">
            <div className="locationWrapper">
              <div className="icon" />
              <span className="location">{address}</span>
              <div className="bar" />
            </div>
            <div className="tagWrapper">
              {this.props.tag.map((el) => (
                <span className="tag">#{el}</span>
              ))}
            </div>
          </div>

          <div className="priceNumberBox">
            <div className="priceWrapper">
              <span className="price">{fee}</span>
              <span className="unit">원/시간</span>
            </div>
            <div className="numberWrapper">
              <div className="maxUserBox">
                <div className="userIcon"></div>
                <span className="max">최대</span>
                <span className="max">{capacity}</span>
                <span className="user">인</span>
              </div>
              <div className="replyBox">
                <div className="replyIcon"></div>
                <span className="reply">{review}</span>
              </div>
              <div className="likesBox">
                <div className="likesIcon"></div>
                <span className="likes">{like}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SpaceCard;
