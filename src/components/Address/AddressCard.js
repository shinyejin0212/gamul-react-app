import { fontSize } from "@mui/system";
import React from "react";
import pin_icon from "../../assets/icons/pin_icon.png";

function AddressCard({ title, address, latitude, lontitude }) {
  return (
    // <div style={{display:"flex", flexDirection:"row" }}>
    <>
      <div
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
          onClick={() => (window.location.href = "/")}
          style={{
            width: "14px",
            height: "16px",
            lineHeight: "38px",
          }}
        />

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
