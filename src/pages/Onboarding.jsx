import React, { useState} from 'react'
// import { Link } from 'react-router-dom'
// import hulu from '/public/Media 1.png';
import { MEDIA_SOURCES } from '../components/data/data';
import MediaAccount from '../components/MediaAccount';
import { PopupModal } from '../components/PopupModal';


export const Onboarding = () => {
  const [openPopUp, setOpenPopUp] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);

  function handleDoneClick() {
    setOpenPopUp(true);
  }

  function handleMediaClick(accountName) {
    setSelectedAccount(accountName)
  }

  const afterPopupDisplay = {  //after displaying the popup, this handles the blurring of the other elements
    filter: openPopUp ? 'blur(5px)' : 'none',
    pointerEvents: openPopUp ? 'none' : null,
}

  return (
    <>
      <main className='mainStyle' style={afterPopupDisplay}>

        <header className='mediaLogoDiv'>
          <img src="/Media Hub Logo 2 1.png" alt="logo" />
        </header>

        <section className='onboarding'>
          <div className='mediah1pDiv'>
            <h1>Select your Media accounts</h1>
            <p>Kindly select the accounts you want to connect to Media hub</p>
          </div>

          <section className='mediaSection'>
            {/* <div>
              <Link><img src={hulu} alt="" /></Link>
              <Link><img src="/public/Media 2.png" alt="" /></Link>
              <Link><img src="/public/Media 3.png" alt="" /></Link>
            </div>

            <div>
              <Link><img src="/public/Media 4.png" alt="" /></Link>
              <Link><img src="/public/Media 5.png" alt="" /></Link>
              <Link><img src="/public/Media 6.png" alt="" /></Link>
            </div>

            <div>
              <Link><img src="/public/Media 7.png" alt="" /></Link>
              <Link><img src="/public/Media 8.png" alt="" /></Link>
              <Link><img src="/public/Media 9.png" alt="" /></Link>
            </div> */}
            <div className="media-options">
              {MEDIA_SOURCES.map((media, index) => (
                <MediaAccount
                  key={index} 
                  name={media.name}
                  src={media.image}
                  selected={selectedAccount === media.name} 
                  onSelect={handleMediaClick} 
                />
              ))}
            </div>
           
          </section>

          <div className='mediaButtonDiv'>
            <button>Skip</button>
            <button className='mediaDoneButton' onClick={handleDoneClick}>Done</button>
          </div>
        </section>

      </main>
    
      <PopupModal 
        open={openPopUp} close={() => setOpenPopUp(false)} 
        vector={"/Vector.png"} 
        h3Title={`Enter your ${selectedAccount} Details`} 
        inputs={[
        { type: 'email', placeholder: 'Email', names: 'email' },
        { type: 'password', placeholder: 'Password', names: 'password' },
    ]}
         value={"Sign in"}
            
        />
      
    </>
  )
}
