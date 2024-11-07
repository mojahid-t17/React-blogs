
import profile from '../../src/assets/images/profile.png';
const Header = () => {
    return (
        <div className='flex justify-between items-center my-4 p-2 '>
            <div>
                <h1 className="text-4xl font-bold">Knowledge Cafee</h1>
            </div>
            <div>
                <img src={profile} alt="" />
            </div>
        </div>
    );
};

export default Header;