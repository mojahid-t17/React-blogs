
import PropTypes from "prop-types";
const Bookmark = ({bookmark}) => {
    const {title}=bookmark;
    return (
        <div> 
           
            <div className="m-4 p-3 bg-slate-100" >
            <h1 className="text-3xl font-bold ">{title}</h1>
            </div>
        </div>
    );
};

Bookmark.propTypes={
    bookmark: PropTypes.object.isRequired
}
export default Bookmark;