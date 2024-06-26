import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../contects/AuthProvider';
import CheckoutBtn from './CheckoutBtn';

const WishlistDetails = () => {
  const location = useLocation();
  const { wishListBooks, email } = location.state; // Assume email is passed in location.state
  const [copies, setCopies] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  
  const { user } = useContext(AuthContext);

  

  useEffect(() => {
    window.scrollTo(0, 20);
  }, []);

  useEffect(() => {
    // Initialize copies state with 1 copy for each book
    const initialCopies = {};
    wishListBooks.forEach(book => {
      initialCopies[book._id] = 1;
    });
    setCopies(initialCopies);
  }, [wishListBooks]);

  useEffect(() => {
    // Calculate the total price whenever copies change
    const newTotalPrice = wishListBooks.reduce((sum, book) => {
      const price = parseFloat(book.PriceValue); // Assuming PriceValue is the correct property for price
      const numCopies = copies[book._id] || 1;
      return sum + (isNaN(price) ? 0 : price * numCopies);
    }, 0);
    setTotalPrice(newTotalPrice);
  }, [copies, wishListBooks]);

  const handleCopiesChange = (bookId, value) => {
    setCopies({
      ...copies,
      [bookId]: value
    });
  };

 

      

  return (
    <div className='w-full   '>
<div className="absolute left-0">
        <img src="https://i.imgur.com/dU9CFVA.jpeg" alt="Advertisement" className="w-40 hidden md:block " />
      </div>
      <div className=' mt-40 py-5 px-4 lg:px-24 w-full'>

        <h2 className='text-4xl text-yellow-800 text-center font-bold font-sans '>Your Cart Details</h2>

        <div className='grid py-10 px-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 '>

          {wishListBooks.map((book, index) => (
            <div key={index} className='border p-4 rounded-2xl bg-yellow-200 shadow-xl shadow-gray-600'>
              <img src={book.imageUrl} alt={book.bookTitle} className='h-20 w-20 object-cover mb-4' />
              <h3 className='text-lg font-semibold'>{book.bookTitle}</h3>
              <p>{book.availability}</p>
              <p>{book.Price}</p>
              <div className="flex items-center mt-2">
                <label className="mr-2">Copies:</label>
                <input
                  type="number"
                  min="1"
                  value={copies[book._id]}
                  onChange={(e) => handleCopiesChange(book._id, parseInt(e.target.value))}
                  className="border rounded p-1 w-16"
                />
              </div>
            </div>
          ))}
        </div>
        <div className='py-2 text-xl font-bold text-center'>
          Total Price: Rs. {totalPrice.toFixed(2)}
        </div>
        <div className='text-center py-2'><CheckoutBtn wishListBooks={wishListBooks} copies={copies} totalPrice={totalPrice} /></div>

      </div>
      <img src="https://i.imgur.com/NUCgDOp.jpeg" alt="Advertisement" className="w-full block md:hidden" />

      </div>
      
      
   
  );
};

export default WishlistDetails;
