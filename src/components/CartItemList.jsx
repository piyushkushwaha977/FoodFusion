import { useSelector, useDispatch } from 'react-redux';
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeFromCart,
  selectItemsInCart,
} from "../redux-store/CartSlice";
import { CDN_URL } from "../utils/constant";


const CartItemList = () => {
  const cartItems = useSelector(selectItemsInCart);
  //  console.log("CARTITEMS FOR CART--" , cartItems)
  const dispatch = useDispatch();

  const removeItem = (id) => dispatch(removeFromCart({ id }));
  const decreaseQuantity = (id) => dispatch(decreaseItemQuantity({ id }));
  const increaseQuantity = (id) => dispatch(increaseItemQuantity({ id }));

  // console.log('cart: ', cartItems);

  if (cartItems.length === 0) {
    return (
      <div className=' font-extrabold text-2xl flex grow min-h-[60vh] justify-center items-center'>
        <p>Your cart is empty!</p>
      </div>
    );
  }

  return (
  <div className=' px-3 bg-gray-300  max-h-[400px] md:max-h-[700px] overflow-y-scroll rounded-md'>  
    <ul className='basis-7/12  bg-slate-100'>
      {cartItems &&
        cartItems.map((item) => (
          <li
            key={item?.item?.card?.info?.id}
            className='flex gap-4 justify-between max-w-[600px] my-4'
          >
            <div className='basis-3/12'>
              <img
                className='w-full h-full md:h-auto object-cover block rounded-md aspect-square'
                src={CDN_URL + item?.item?.card?.info?.imageId}
                alt=''
              />
            </div>
            <div className='basis-9/12'>
              <p className=' text-sm md:text-lg font-semibold'>
                {item?.item?.card?.info?.name}
              </p>

              <p className='hidden md:block'>
                {item?.item?.card?.info?.description?.length > 50
                  ? item?.item?.card?.info?.description.slice(0, 50) + '...'
                  : item?.item?.card?.info?.description}
              </p>

              <p className='my-2 space-x-1'>
                <span className=' text-sm font-semibold md:text-lg md:font-bold'>
                  ₹
                  {parseFloat(
                    (
                      item?.quantity * parseFloat(item.item.card.info.price ? 
                      (item?.item?.card?.info?.price) /100
                              : 
                      (item?.item?.card?.info?.defaultPrice ) /100 )
                    ).toFixed(2)
                  )}
                </span>
                <span className='text-gray-800 text-xs md:font-normal'>
                  ({item.item.card.info.price ? 
                      (item?.item?.card?.info?.price) /100
                              : 
                      (item?.item?.card?.info?.defaultPrice ) /100} × {item?.quantity})
                </span>
              </p>

              {/* actions */}
              <div className='flex justify-between items-center mt-2 px-2'>
                <div className='flex items-center'>
                  <button
                    onClick={() => decreaseQuantity(item?.item?.card?.info?.id)}
                    disabled={item?.quantity === 1}
                    className={
                      'bg-orange-500 disabled:bg-orange-500/50 disabled:cursor-not-allowed text-white font-bold w-8 h-8 rounded-md'
                    }
                  >
                    -
                  </button>
                  <p className='font-bold w-8 h-8 flex justify-center items-center'>
                    {item?.quantity}
                  </p>
                  <button
                    onClick={() => increaseQuantity(item?.item?.card?.info?.id)}
                    className='bg-orange-500 text-white font-bold w-8 h-8 rounded-md'
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeItem(item?.item?.card?.info?.id) }
                  className='border bg-white border-orange-500 text-xs font-semibold text-orange-500 p-2 px-4 rounded-md'
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
    </ul>
</div>    
  );
};

export default CartItemList;
