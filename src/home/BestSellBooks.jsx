import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';


const BestSellerBooks =() =>{
    const [books, setBooks] = useState([]);

    useEffect(() =>{
fetch ("https://bookpoint-client.vercel.app/all-books"). then(res => res.json()).
then(data => setBooks (data.slice(0,6)))

    }, [])
  return (
    <div>
<BookCards books ={books} headline = "Our Best Picks" />    
    </div>
  )
}

export default BestSellerBooks
