import { useSelector } from 'react-redux';
import {
  selectItemsInCart,
  selectTotalPrice,
} from '../redux-store/CartSlice';
import toast from 'react-hot-toast';

const OrderSummary = () => {
  const cartItems = useSelector(selectItemsInCart);
    // console.log("cartItems from Order sum" , cartItems)
  const totalPrice = useSelector(selectTotalPrice);
    // console.log("total Price -- " ,totalPrice)
  const discount = (totalPrice * 0.1) / 100;
  const deliveryCharges = (totalPrice * 0.05) / 100;
  const totalAmt = totalPrice / 100 + deliveryCharges - discount;

  // const cartttt = useSelector(Cartcart)
  // console.log("cartcart" , cartttt)
    //  This will give the global state of Redux
  
    const totalQuantity = cartItems.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
    // console.log( "totalquantity ", totalQuantity)

 
  return (
    <div className='basis-5/12 h-fit sticky top-40 p-4 md:p-8 rounded-md border shadow-md  md:m-0'>
      <h2 className='text-2xl font-bold border-b  md:pb-4'>Order Summary</h2>

      {/* order details */}
      <div className='py-4 text-lg space-y-4 border-b'>
        <div className='flex justify-between items-center font-semibold'>
          <p className='font-normal'>Price ({totalQuantity} items)</p>
          <p>₹ {totalPrice / 100}</p>
        </div>
        <div className='flex justify-between items-center font-semibold'>
          <p className='font-normal'>Discount (10%)</p>
          <p> - ₹ {parseFloat(discount).toFixed(2)}</p>
        </div>
        <div className='flex justify-between items-center font-semibold'>
          <p className='font-normal'>Delivery charges (5%)</p>
          <p>+ ₹ {parseFloat(deliveryCharges).toFixed(2)}</p>
        </div>

        <p className='text-sm my-2'>
          You'll save ₹{parseFloat(discount).toFixed(2)} on this order 🎉
        </p>
      </div>

      <div className='py-4 border-b'>
        <div className='md:flex justify-between items-center font-bold text-lg md:text-2xl'>
          <h1>Total Amount</h1>
          <h1 className='text-orange-500'>
            ₹ {parseFloat(totalAmt).toFixed(2)}
          </h1>
        </div>
      </div>

      <button  
       onClick={() => toast.success("ORDER PLACED")}
       className='w-full block mt-4 uppercase font-bold text-lg bg-orange-600 text-white text-center p-4 rounded-md'>
        Place order
      </button>

      {/* <button class="btn">
        Watch Or Soch
      </button> */}

    </div>
  );
};

export default OrderSummary;


 