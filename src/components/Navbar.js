import { CartIcon } from '../icons'
import { useSelector } from 'react-redux'
// import { store } from '../store'

const Navbar = () => {
    const {amount} = useSelector((store) => store.cart)


  return (
    <nav>
        <div className='nav-center'>
            <h3>Mini Phone Shop</h3>
            <div className="nav-container">
                <CartIcon />
                <div className="amount-container">
                    <p className="total-amount">{amount}</p>
                </div>
            </div>
        </div>
    </nav>
  )
};

export default Navbar;
