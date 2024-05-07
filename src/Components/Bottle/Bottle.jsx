
import './Bottle.css'

const Bottle = ({ bottle, handlePurchasedBottle }) => {

      return (
            <div className="bottle">
                  <img src={bottle?.img} alt="" />
                  <h3>{bottle?.name}</h3>
                  <button onClick={() => handlePurchasedBottle(bottle)}>Purchase</button>
            </div>
      );
};

export default Bottle;