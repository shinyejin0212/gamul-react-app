import React from "react";
import dummy from "../../api/LikeAddress.json";
import AddressCard from "./AddressCard";
import { useSelector } from "react-redux";

export default function AddressList() {
  const bookmarks = useSelector((state) => state.getBookMarkReducer);
  console.log("addresslist", bookmarks);
  return (
    <div>
      {bookmarks.map((bookmark, index) => (
        <AddressCard
          key={index}
          title={bookmark}

          //   title={LikeAddress.title}
          //   address={LikeAddress.address}
          //   latitude={LikeAddress.latitude}
          //   lontitude={LikeAddress.lontitude}
        />
      ))}
    </div>
  );
}
