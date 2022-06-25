import React from "react";

export default function WishLIst({ cartList, removeCart }) {
  return (
    <div className="wish_list">
      {cartList.map((select, index) => {
        return (
          <div>
            <div className="wish-button" onClick={() => removeCart(index)}>
              -
            </div>
            <img key={index} src={select.small_cover_image} alt="cover_image" />
          </div>
        );
      })}
    </div>
  );
}
