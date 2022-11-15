import React from "react";

function AddressCard({ key, title, address, latitude, lontitude }) {
  return (
    <>
      <div> {title}</div>
      <div> {address}</div>
      <hr></hr>
    </>
  );
}

export default AddressCard;
