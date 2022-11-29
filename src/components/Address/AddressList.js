import React from "react";
import dummy from "../../api/LikeAddress.json";
import AddressCard from "./AddressCard";
import { useSelector } from "react-redux";

export default function AddressList() {
  const bookmarks = useSelector((state) => state.getBookMarkReducer);
  console.log("addresslist", bookmarks);

  return (
    <div>
      {bookmarks &&
        bookmarks.map((bookmark, idx) => (
          <AddressCard
            // onClick={(e) => {
            //   console.log("좀");
            //   clickBookmark(bookmark);
            // }}
            key={idx}
            title={bookmark.name}
            address={bookmark.region}

            //   title={LikeAddress.title}
            //   address={LikeAddress.address}
            //   latitude={LikeAddress.latitude}
            //   lontitude={LikeAddress.lontitude}
          />
        ))}
    </div>
  );
}
