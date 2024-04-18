import { useState } from "react";
import "./payment.css";
import pepperoni from "../../assets/pepperoni.jpg";
import bbq from "../../assets/bbq.jpeg";
import ham from "../../assets/ham.jpg";

const Checkout = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [holderName, setHolderName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const token = window.localStorage.getItem("jwt");
  const currentPizza = JSON.parse(localStorage.getItem("selectedPizza"));
  const handleCheckOut = async (e) => {
    e.preventDefault();
    // if (cardNumber.length !== 16) {
    //   return alert("Invalid card number!");
    // }
    // if (holderName.length < 3) {
    //   return alert("Invalid Holder name!");
    // }
    // if (expiryDate.length < 1) {
    //   return alert("Invalid Expiry Date!");
    // }
    // if (cvv.length < 1) {
    //   return alert("Invalid CVV!");
    // }

    let orders = JSON.parse(localStorage.getItem("orders"));
    if (!orders || orders.length < 1) {
      orders = [currentPizza];
    } else {
      orders.push(currentPizza);
      console.log(orders);
    }
    localStorage.setItem("orders", JSON.stringify(orders));
    localStorage.removeItem("selectedPizza");

    alert("Your order has been placed");
    window.location.pathname = "/thank-You";
  };

  return (
    <div className="paymentPage">
      <div className="pizzaInfo">
        <div className="paymentInfo">
          <h3>
            Pizza Base: <span>{currentPizza.base}</span>
          </h3>
          <h3>
            Pizza Toppings: <span>{currentPizza.topping}</span>
          </h3>
          <h3>
            Pizza Varient: <span>{currentPizza.varient}</span>
          </h3>
        </div>
        <div className="pizzaImg">
          {currentPizza.topping === "pepperoni" && (
            <img src={pepperoni} alt="pepperoni" />
          )}
          {currentPizza.topping === "ham" && <img src={ham} alt="ham" />}
          {currentPizza.topping === "bbqchicken" && <img src={bbq} alt="bbq" />}
        </div>
      </div>
      <div className="paymentContainer">
        <h2>Confirm Your Order</h2>
        <form onSubmit={handleCheckOut}>
          <div className="inpField">
            <label htmlFor="card_number">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter Your Address"
              required
            ></input>
          </div>
          <div className="inpField">
            <label htmlFor="card_number">Card Number:</label>
            <input
              type="number"
              id="card_number"
              name="card_number"
              placeholder="Enter card number"
              required
              onChange={(e) => {
                setCardNumber(e.target.value);
              }}
            ></input>
          </div>
          <div className="inpField">
            <label htmlFor="card_holder_name">Card Holder Name:</label>
            <input
              type="text"
              id="card_holder_name"
              name="card_holder_name"
              placeholder="Enter card holder name"
              required
              onChange={(e) => {
                setHolderName(e.target.value);
              }}
            ></input>
          </div>
          <div className="inpField">
            <label htmlFor="expiry_date">Expiry Date:</label>
            <input
              type="text"
              id="expiry_date"
              name="expiry_date"
              placeholder="MM/YY"
              required
              onChange={(e) => {
                setExpiryDate(e.target.value);
              }}
            ></input>
          </div>
          <div className="inpField">
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              placeholder="Enter CVV"
              required
              onChange={(e) => {
                setCvv(e.target.value);
              }}
            ></input>
          </div>
          <button type="submit">Confirm Order</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
