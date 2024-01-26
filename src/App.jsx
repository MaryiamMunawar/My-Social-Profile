import { useState } from 'react';
import image from '/profile.jpeg';
import './App.css';

function App() {
  return (
    <>
      <div className='bg-black min-h-screen flex items-center justify-center'>
        <div className='bg-slate-900 mb-16 mt-16 mx-4 rounded-xl text-center shadow-lg p-4  md:min-w-[280px] md:p-6 lg:min-w-[400px]'>
          <img
            src={image}
            alt="img"
            className="rounded-full w-20 h-20 object-cover mx-auto mb-4"
          />
          <h1 className='text-3xl text-white justify-center'>Maryam Munawar</h1>
          <div className='py-2 text-yellow-500 text-2xl'>Punjab, Pakistan</div>
          <p className='text-base py-4 text-white'>"Front-end developer and quick learner"</p>

          {/* Links */}
          <div className="mt-4 flex flex-col items-center space-y-2 md:space-y-4">
            <SocialButton
              icon="GitHub"
              link="https://github.com/MaryiamMunawar"
            />
            <SocialButton
              icon="Vercel"
              link="https://vercel.com/maryam-munawars-projects"
            />
            <SocialButton
              icon="Instagram"
              link="https://www.instagram.com/your-instagram-itx-maryam172/"
            />
          </div>
        </div>
      </div>
    </>
  );
}

// SocialButton component
function SocialButton({ icon, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-md w-full"
    >
      {icon === 'GitHub' && <i className="fab fa-github mr-2"></i>}
      {icon === 'Vercel' && <i className="fab fa-vercel mr-2"></i>}
      {icon === 'Instagram' && <i className="fab fa-instagram mr-2"></i>}
      {icon}
    </a>
  );
}

export default App;
