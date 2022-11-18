import React from "react";

function AddressCard({ title, address, latitude, lontitude }) {
  return (
    <>
      <div> {title}</div>
      <div> {address}</div>
      <hr></hr>
    </>
  );
}

export default AddressCard;
