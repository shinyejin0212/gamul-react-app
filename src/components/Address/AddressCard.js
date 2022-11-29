import React from "react";
import pin_icon from "../../assets/icons/pin_icon.png";
import { useDispatch, useSelector } from "react-redux";
import { selectMarket, getBookmarks } from "../../actions/action";
import { pointColor } from "../../styles/GlobalStyles";
import axios from "../../api/axios";

function AddressCard({ title, address }) {
  const dispatch = useDispatch();
  console.log("addressCard", title, address);

  const clickBookmark = (title) => {
    console.log("addresslist 클릭됨", title);
    dispatch(selectMarket(title));
  };
  const token = useSelector((state) => state.authToken);

  const removeBookmark = async () => {
    await axios
      .delete(`/bookmark`, {
        data: {
          market: title,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.accessToken}`, //Bearer 꼭 붙여줘야함
        },
      })
      .then((response) => {
        console.log("fetchNearMarkets", response.data);
        fetchBookmarks();
      })
      .catch((e) => console.log(e));
  };
  const fetchBookmarks = async () => {
    await axios
      .get(`/bookmark`, {
        headers: {
          // "Content-Type": "application/json",
          Authorization: `Bearer ${token.accessToken}`, //Bearer 꼭 붙여줘야함
        },
      })
      .then((response) => {
        dispatch(getBookmarks(response.data.data.market));
      })
      .catch((error) => console.log("Network Error : ", error));
  };

  return (
    // <div style={{display:"flex", flexDirection:"row" }}>
    <>
      <div
        onClick={(e) => {
          clickBookmark(title);
        }}
        style={{
          fontWeight: 750,
          fontSize: 16,
          padding: 5,
          height: "38px",
        }}
      >
        <img
          alt="pin_icon"
          src={pin_icon}
          style={{
            width: "14px",
            height: "16px",
            lineHeight: "38px",
          }}
        />
        <div
          style={{
            fontWeight: "600",
            fontSize: "12px",
            // textAlign: "right",
            // fontStyle: "oblique",
            display: "flex",
            float: "right",
            color: pointColor,
          }}
          onClick={removeBookmark}
        >
          삭제
        </div>

        <a style={{ lineHeight: "38px" }}> {title}</a>
      </div>

      <div style={{ color: "gray", fontSize: 13, textIndent: 22 }}>
        {address}
      </div>
      <hr
        style={{
          borderStyle: "solid",
          borderWidth: "1px 0 0 0",
          color: "#E2E2E2",
        }}
      />
    </>
  );
}

export default AddressCard;
