import { useState } from "react";
import "./createpizza.css";

const CreatePizza = () => {
  const [base, setBase] = useState("thinCrust");
  const [topping, setTopping] = useState("pepperoni");
  const [varient, setVarient] = useState("small");
  const [extraCheese, setExtraCheese] = useState(false);
  const [extraMayo, setExtraMayo] = useState(false);
  const [extraPickle, setExtraPickle] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const pizza = {
            base,
            topping,
            varient,
            extraCheese,
            extraMayo,
            extraPickle
        }
        localStorage.setItem("selectedPizza", JSON.stringify(pizza));
        alert("Your selection of pizza has been saved, Please proceed to Check-Out.")
        location.pathname = "/check-out";
    }
  return (
    <div className="createPizza">
      <div className="cpTop">
        <h1>Create your own pizza</h1>
      </div>
      <div className="cpBot">
        <h2>Select a Pizza Base</h2>
        <div className="pizzaSec">
          <div className="pizzaIng">
            <label
              htmlFor="thinCrust"
              className={base === "thinCrust" && "active"}
            >
              Thin Crust
            </label>
            <input
              type="radio"
              name="thinCrust"
              id="thinCrust"
              checked={base === "thinCrust"}
              onChange={() => setBase("thinCrust")}
            />
          </div>
          <div className="pizzaIng">
            <label
              htmlFor="softCrust"
              className={base === "softCrust" && "active"}
            >
              Soft Crust
            </label>
            <input
              type="radio"
              name="softCrust"
              id="softCrust"
              checked={base === "softCrust"}
              onChange={() => setBase("softCrust")}
            />
          </div>
          <div className="pizzaIng">
            <label
              htmlFor="thickCrust"
              className={base === "thickCrust" && "active"}
            >
              Thick Crust
            </label>
            <input
              type="radio"
              name="thickCrust"
              id="thickCrust"
              checked={base === "thickCrust"}
              onChange={() => setBase("thickCrust")}
            />
          </div>
        </div>
      </div>
      <div className="cpBot">
        <h2>Select a Pizza topping</h2>
        <div className="pizzaSec">
          <div className="pizzaIng">
            <label
              htmlFor="pepperoni"
              className={topping === "pepperoni" && "active"}
            >
              Pepperoni
            </label>
            <input
              type="radio"
              name="pepperoni"
              id="pepperoni"
              checked={topping === "pepperoni"}
              onChange={() => setTopping("pepperoni")}
            />
          </div>
          <div className="pizzaIng">
            <label
              htmlFor="bbqchicken"
              className={topping === "bbqchicken" && "active"}
            >
              BBQ Chicken
            </label>
            <input
              type="radio"
              name="bbqchicken"
              id="bbqchicken"
              checked={topping === "bbqchicken"}
              onChange={() => setTopping("bbqchicken")}
            />
          </div>
          <div className="pizzaIng">
            <label htmlFor="ham" className={topping === "ham" && "active"}>
              Classic Ham
            </label>
            <input
              type="radio"
              name="ham"
              id="ham"
              checked={topping === "ham"}
              onChange={() => setTopping("ham")}
            />
          </div>
        </div>
      </div>
      <div className="cpBot">
        <h2>Select a Pizza varient</h2>
        <div className="pizzaSec">
          <div className="pizzaIng">
            <label htmlFor="small" className={varient === "small" && "active"}>
              Small Pizza
            </label>
            <input
              type="radio"
              name="small"
              id="small"
              checked={varient === "small"}
              onChange={() => setVarient("small")}
            />
          </div>
          <div className="pizzaIng">
            <label
              htmlFor="medium"
              className={varient === "medium" && "active"}
            >
              Medium Pizza
            </label>
            <input
              type="radio"
              name="medium"
              id="medium"
              checked={varient === "medium"}
              onChange={() => setVarient("medium")}
            />
          </div>
          <div className="pizzaIng">
            <label htmlFor="large" className={varient === "large" && "active"}>
              Large Pizza
            </label>
            <input
              type="radio"
              name="large"
              id="large"
              checked={varient === "large"}
              onChange={() => setVarient("large")}
            />
          </div>
        </div>
      </div>
      <div className="otherOptionsBox">
        <h2>Other Pizza Options</h2>
        <div className="otherOptn">
          <label htmlFor="extraCheese">Extra Cheese: </label>
          <input
            type="checkbox"
            name="extraCheese"
            id="extraCheese"
            onChange={(e) => setExtraCheese(e.target.checked)}
          />
        </div>
        <div className="otherOptn">
          <label htmlFor="extraMayo">Extra Mayonese: </label>
          <input
            type="checkbox"
            name="extraMayo"
            id="extraMayo"
            onChange={(e) => setExtraMayo(e.target.checked)}
          />
        </div>
        <div className="otherOptn">
          <label htmlFor="extraPickle">Extra Pickle: </label>
          <input
            type="checkbox"
            name="extraPickle"
            id="extraPickle"
            onChange={(e) => setExtraPickle(e.target.checked)}
          />
        </div>
          </div>
          <div className="finalBtn">
              <button type="button" className="primaryBotn" onClick={handleSubmit}>Order this Pizza</button>
          </div>
          <div className="fakeBox"></div>
    </div>
  );
};

export default CreatePizza;
