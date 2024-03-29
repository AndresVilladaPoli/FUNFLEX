import React from "react";
import useCart from "../../../../../../hooks/use-cart";

const CartTotal = () => {
  const { total } = useCart();
  return (
    <table className="cart-total-table">
      <tbody>
        <tr>
          <th>Subtotal</th>
          <td>${total.toFixed(2)}</td>
        </tr>

        <tr>
          <th>Total</th>
          <td>${total.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CartTotal;
