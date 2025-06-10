import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/fireBase'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO_URL, USER_AVATAR } from '../utils/constants'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user
        dispatch(addUser({ uid, email, displayName, photoURL }))
        navigate('/browse')
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    })

    return () => unsubscribe()
  }, [])

  const handleSignOut = () => {
    signOut(auth)
      .then(() => dispatch(removeUser()))
      .catch((error) => console.error('Sign out error:', error))
  }

  const user = useSelector((store) => store.user)

  return (
    <header className="absolute top-0 left-0 w-full z-10 bg-gradient-to-b from-black/90 to-transparent px-6 md:px-12 py-4">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <img
          className="w-32 md:w-48"
          src={LOGO_URL}
          alt="Netflix Logo"
        />
        {user?.email && (
          <div className="flex items-center space-x-4">
            <img
              className="w-10 h-10 rounded-md object-cover"
              src={user.photoURL || USER_AVATAR}
              alt="User avatar"
            />
            <button
              onClick={handleSignOut}
              className="bg-red-600 text-white px-4 py-1.5 rounded hover:bg-red-700 transition"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
