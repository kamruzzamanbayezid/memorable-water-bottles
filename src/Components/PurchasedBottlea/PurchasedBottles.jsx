
import './PurchasedBottle.css'

const PurchasedBottles = ({ bottle, handleRemoveBottle }) => {

      return (
            <div className="purchasedBottle">
                  <img src={bottle?.img} alt="" />
                  <button onClick={() => handleRemoveBottle(bottle?.id)}>Remove</button>
            </div>
      );
};

export default PurchasedBottles;