import { useSelector } from 'react-redux';
import CartItemList from '../components/CartItemList';
import OrderSummary from '../components/OrderSummary';
import { selectItemsInCart } from '../redux-store/CartSlice';
import { BsCart4 } from "react-icons/bs";

const CartPage = () => {
  const cartItems = useSelector(selectItemsInCart);

  return (
    <div className='container-max mt-8 md:mt-20 md:max-w-[1200px] md:mx-auto  py-8 pb-16'>
      <h1 className='text-2xl ml-8 md:ml-0 md:text-4xl my-4 font-semibold'>
        Cart <BsCart4 className=' inline mb-2'/>
       </h1>

      {/* cart details */}
      <div className=' mx-2 min-h-[60vh] pb-8 md:flex gap-8'>
        {/* cart items */}
        <CartItemList />
        {/* order summary */}
        {cartItems && cartItems.length !== 0 && <OrderSummary />}
      </div>
    </div>
  );
};

export default CartPage;