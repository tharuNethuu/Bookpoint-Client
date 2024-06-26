import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contects/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';
import Alert from '../components/Alert';


const Logout = () => {
    const {logOut} = useContext(AuthContext);
    const location = useLocation();
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('success');
  const [alertVisible, setAlertVisible] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);})
   const from = location.state?.from?.pathname || '/'
    const handleLogout = () => {
        logOut().then(() => {
         

            // Sign-out successful.
            setAlertMessage("You have been Logged Out Successfully!");
      setAlertVariant("warning");
      setAlertVisible(true);
      setTimeout(() => {
        setAlertVisible(false);
        navigate(from, { replace: true });
      }, 3000);
    }).catch((error) => {
            // An error happened.
          });
    }
  return (
<div className='py-10 mt-20 bg-black'>
{alertVisible && (
        <Alert message={alertMessage} variant={alertVariant} onClose={() => setAlertVisible(false)} />
      )}
  <img src='https://i.imgur.com/CNuuXaH.jpeg'/>
      {/* Your content here */}
      <div className=' py-5 text-center '>
      <button className='bg-yellow-700 px-10 py-2 text-white rounded-xl font-semibold' onClick={handleLogout}>LOG OUT</button>   

      </div>
    </div>
  )
}

export default Logout
