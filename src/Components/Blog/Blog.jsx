
import PropTypes from 'prop-types';
import { BiBookmarks } from "react-icons/bi";

const Blog = ({blog,handleBookmarks,handleReadingTime}) => {
    const {cover,author_img ,author,posted_date,title,reading_time,hashtags,id}=blog
    
    return (
        <div className='space-y-4'>
                 
                <div className='mt-8'><img src={cover} alt="" /></div>
                <h1 className='text-4xl font-bold'>{title}</h1>
            <div className='flex justify-between items-center '>
                <div className='flex '>
                    <img className='h-14 w-14 ' src={author_img} alt="" />
                    <div className='ml-3'>
                        <h4>{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time}min Reads</span>
                    <button onClick={()=>handleBookmarks(blog)} className='ml-2 text-xl font-bold'> <BiBookmarks /></button>
                </div>
            </div>
            <div>
                {
                    hashtags.map((tag,idx)=><span key={idx} className='mx-1'><a href=''>{tag}</a></span>)
                }
                <br />
                <button className='text-xl underline text-purple-400'  onClick={()=>handleReadingTime(reading_time,id)}>
                Mark as Read
                     
                </button>
            </div>
        </div>
    );
};
Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func
}
export default Blog;