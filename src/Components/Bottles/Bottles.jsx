import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import PurchasedBottles from "../PurchasedBottlea/PurchasedBottles";
import { addCartToLocalStorage, getStoredCartFromLocalStorage, removeCartFromLocalStorage } from "../Utils/localStorage";

const Bottles = () => {

      const [bottles, setBottles] = useState([]);
      const [purchasedBottle, setPurchasedBottle] = useState([]);

      useEffect(() => {
            fetch('bottles.json')
                  .then(res => res.json())
                  .then(data => setBottles(data))
      }, []);

      useEffect(() => {
            if (bottles?.length > 0) {

                  const storedCart = getStoredCartFromLocalStorage();

                  let find = [];
                  for (const id of storedCart) {
                        const findBottle = bottles?.find(bottle => bottle?.id === id);
                        find.push(findBottle)
                  }
                  setPurchasedBottle(find)
            }
      }, [bottles])


      const handlePurchasedBottle = (bottle) => {
            const newPurchasedBottles = [...purchasedBottle, bottle];
            setPurchasedBottle(newPurchasedBottles);

            addCartToLocalStorage(bottle?.id)
      }

      const handleRemoveBottle = (id) => {
            const remaining = purchasedBottle?.filter(bottle => bottle?.id !== id);
            setPurchasedBottle(remaining)

            removeCartFromLocalStorage(id);
      }

      return (
            <div>
                  <h2>Available Bottles: {bottles?.length}</h2>

                  {/* Purchased bottle */}
                  <h2>Purchased Bottles: {purchasedBottle?.length}</h2>
                  <div className="purchasedBottle-container">
                        {
                              purchasedBottle?.map((bottle, index) => <PurchasedBottles
                                    key={index}
                                    bottle={bottle}
                                    handleRemoveBottle={handleRemoveBottle}
                              ></PurchasedBottles>)
                        }
                  </div>

                  <div className="bottles-container">
                        {
                              bottles?.map(bottle => <Bottle
                                    key={bottle?.id}
                                    bottle={bottle}
                                    handlePurchasedBottle={handlePurchasedBottle}
                              ></Bottle>)
                        }
                  </div>
            </div>
      );
};

export default Bottles;