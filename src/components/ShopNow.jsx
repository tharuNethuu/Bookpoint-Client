import React, { useEffect, useState } from 'react';
import { Card, Button } from "flowbite-react";
import { HiMenu, HiShoppingCart } from "react-icons/hi";
import Sidebarr from '../shop/Sidebarr';
//import Sidebar from './Sidebar'; // Ensure the path is correct

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("https://bookpoint-api.vercel.app/all-books").then(res => res.json()).then(data => setBooks(data));
  }, []);

  const addItemToWishList = (bookId) => {
    if (!wishList.includes(bookId)) {
      setWishList([...wishList, bookId]);
    }
  };

  const removeItemFromWishList = (bookId) => {
    setWishList(wishList.filter(id => id !== bookId));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.style.overflow = isSidebarOpen ? 'auto' : 'hidden';
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isSidebarOpen]);

  return (
    <div>
<div className=' mt-20 py-20 '>
<img src='https://i.imgur.com/sewbDZ2.jpeg'/>
      </div>
    <div className='mt-10 px-4 lg:px-24'>
      
      <h2 className='text-5xl text-yellow-800 text-center font-bold font-sans'>Explore All Books Here</h2>
      <div className='py-10 grid gap-10 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {
          books.map(book => (
            <Card key={book._id} className="max-w-sm bg-white px-5 py-5 rounded-2xl">
              <img src={book.imageUrl} alt="" className='h-25' />
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white py-2">
                <p>{book.bookTitle}</p>
              </h5>
              <p className="text-gray-700 text-xs dark:text-gray-400">
                {book.bookDescription}
              </p>
              <p className="py-2 text-yellow-800 font-semibold">
                {book.Price}
              </p>
              <p className="text-yellow-600 font-medium py-2">
                {book.availability}
              </p>
              <Button onClick={() => addItemToWishList(book._id)} className="inline-block text-white font-semibold bg-yellow-700 rounded-full hover:bg-yellow-500 transition-all duration-300">
                <HiShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
              </Button>
            </Card>
          ))
        }
      </div>

      <button onClick={toggleSidebar} className="fixed bottom-10 right-10 bg-yellow-700 text-white p-3 rounded-full shadow-lg">
        <HiShoppingCart className="h-6 w-6" />
      </button>

      <Sidebarr
        wishList={wishList}
        books={books}
        removeItemFromWishList={removeItemFromWishList}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
    </div>
    </div>
  );
}

export default Shop;
