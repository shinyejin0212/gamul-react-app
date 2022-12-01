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
            style={addressCardStyle}
            // onClick={(e) => {
            //   console.log("좀");
            //   clickBookmark(bookmark);
            // }}
            key={idx}
            title={bookmark.name}
            address={bookmark.region}
          />
        ))}
    </div>
  );
}

const addressCardStyle = {
  padding: "10px",
  marginTop: "10px",
  display: "flex",
};
