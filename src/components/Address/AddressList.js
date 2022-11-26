import React from "react";
import dummy from "../../api/LikeAddress.json";
import AddressCard from "./AddressCard";
import { useSelector, useDispatch } from "react-redux";
import { selectMarket } from "../../actions/action";
export default function AddressList() {
  const bookmarks = useSelector((state) => state.getBookMarkReducer);
  console.log("addresslist", bookmarks);
  const dispatch = useDispatch();

  return (
    <div>
      {bookmarks.map((bookmark, index) => (
        <AddressCard
          // onClick={(e) => {
          //   console.log("좀");
          //   clickBookmark(bookmark);
          // }}
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
