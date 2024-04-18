import './thank.css';
import thank from '../../assets/confirmed.jpg';
import {Link} from 'react-router-dom';

const Thank = () => {
  return (
      <div className="thankPage">
          <img src={thank} alt="Thank You" />
          <span>Your Order for the pizza has been confirmed and will be delivered to the given address shortly.</span>
          <Link to="/">Click to go Home</Link>
    </div>
  )
}

export default Thank