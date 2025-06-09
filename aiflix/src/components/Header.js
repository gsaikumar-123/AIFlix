import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { auth } from '../utils/fireBase';
import { useNavigate } from 'react-router-dom';
import { LOGO_URL, USER_AVATAR } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
          navigate("/browse");
        } else {
          dispatch(removeUser());
          navigate("/");
        }
      });

      return () => unsubscribe();
    },[]);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(removeUser());
    }).catch((error) => {
      console.error("Sign out error:", error);
    });
  };

  const user = useSelector((store)=>store.user);
  return (
    <div className='flex justify-between items-center'>
      <div>
        <img className='absolute px-4 py-1 w-56 ml-36' src={LOGO_URL} alt="logo"></img>
      </div>

      {user && user.email && 
      <div className='flex items-center gap-2'>
        <img className="px-4 py-1 w-auto h-12 rounded-sm"src={USER_AVATAR} alt="user"></img>
        <button onClick={handleSignOut} className="bg-red-600 text-white p-2 rounded font-semibold hover:bg-red-700 transition">Sign Out</button>
      </div>}
    </div>
  )
}

export default Header;
