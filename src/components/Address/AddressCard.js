import React from "react";
import pin_icon from "../../assets/icons/pin_icon.png";
import { useDispatch } from "react-redux";
import { selectMarket } from "../../actions/action";

function AddressCard({ title }) {
  const dispatch = useDispatch();

  const clickBookmark = (title) => {
    console.log("addresslist 클릭됨", title);
    dispatch(selectMarket(title));
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

        <a style={{ lineHeight: "38px" }}> {title}</a>
      </div>
      {/* <div style={{ color: "gray", fontSize: 13, textIndent: 22 }}>
        {address}
      </div> */}
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
