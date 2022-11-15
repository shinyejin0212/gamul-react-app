import React from "react";
import dummy from "../../data/LikeAddress.json";
import AddressCard from "./AddressCard";
export default function AddressList() {
  console.log(dummy.LikeAddressList[0].title);
  return (
    <>
      {dummy.LikeAddressList.map((LikeAddress) => (
        <AddressCard
          key={LikeAddress.id}
          title={LikeAddress.title}
          address={LikeAddress.address}
          latitude={LikeAddress.latitude}
          lontitude={LikeAddress.lontitude}

          //   title={LikeAddress.title}
          //   address={LikeAddress.address}
          //   latitude={LikeAddress.latitude}
          //   lontitude={LikeAddress.lontitude}
        />
      ))}
    </>
  );
}
