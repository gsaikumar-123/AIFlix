import React from 'react'
import { useSelector } from 'react-redux'
import { signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { auth } from '../utils/fireBase';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(removeUser());
      navigate("/")
    }).catch((error) => {
      console.error("Sign out error:", error);
    });
  };

  const user = useSelector((store)=>store.user);
  return (
    <div className='flex justify-between items-center'>
      <div>
        <img className='absolute px-4 py-1 w-56 ml-36' src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"></img>
      </div>

      {user && <div className='flex items-center'>
        <img className="px-4 py-1 w-14 h-14 rounded-sm"src={user.photoURL} alt="user"></img>
        <button onClick={handleSignOut} className="bg-red-600 text-white py-2 rounded font-semibold hover:bg-red-700 transition">Sign Out</button>
      </div>}
    </div>
  )
}

export default Header;
