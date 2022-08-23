import { useEffect } from "react";
import CartContainer from "./Component/CartContainer";
import Modal from "./Component/Modal";
import Navbar from "./Component/Navbar";
import { useSelector, useDispatch} from 'react-redux';
import { calculateTotals, getCartItems } from './features/cart/cartSlice';

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

useEffect(()=>{
  dispatch(getCartItems());
}, []);

if(isLoading){
      return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
}

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;