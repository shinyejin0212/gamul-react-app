import React from "react";
import dummy from "../../api/LikeAddress.json";
import AddressCard from "./AddressCard";
import { useSelector, useDispatch } from "react-redux";
import { selectMarket } from "../../actions/action";
export default function AddressList() {
  const bookmarks = useSelector((state) => state.getBookMarkReducer);
  console.log("addresslist", bookmarks.market);
  const dispatch = useDispatch();

  console.log("이거는", bookmarks.market);

  return (
    <div>
      {/* {bookmarks.market.forEach((bookmark, idx) => (
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
      ))} */}
    </div>
  );
}
