
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/header'


function App() {

   const [bookmarks,setbookmarks]=useState([]);
   const [readingTime,setReadingTime]=useState(0);

   const handleBookmarks=(blog)=>{
     const matching= bookmarks.find(filtered=>filtered.id==blog.id)
    //  console.log(matching)
     if(!matching){
      const newBookmarks=[...bookmarks,blog]
      setbookmarks(newBookmarks)
     }
   
   }
   const handleReadingTime=(time,id)=>{
    // console.log(time)
    setReadingTime(readingTime+time)
    const remainingBookmarks=bookmarks.filter(bookmark=>bookmark.id!==id);
    setbookmarks(remainingBookmarks)
     
   }
   
  
  return (
    <div className='max-w-screen-xl mx-auto'>
      
    
        <Header></Header>
        <hr />
        <main className='flex '>
        <Blogs handleBookmarks={handleBookmarks}
         handleReadingTime={handleReadingTime}
        ></Blogs>
        
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}>  
        </Bookmarks>
       
        </main>
    
    </div>
  )
}

export default App
