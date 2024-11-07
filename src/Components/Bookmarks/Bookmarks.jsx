
import PropTypes from "prop-types";
import Bookmark from "./Bookmark/Bookmark";
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-4">
            <h2 className="text-xl m-3 text-blue-600">Spent time on read:{readingTime} </h2>
             <h1 className="text-4xl ml-5">Bookmarks: {bookmarks.length}</h1>
            {
               bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

// Bookmarks.propTypes = {
//     bookmarks: PropTypes.array
// };
export default Bookmarks;