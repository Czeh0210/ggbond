'use client'

import { useState } from 'react'
import { Mail, Lock, User } from 'lucide-react'
import { FaFacebook, FaGoogle, FaApple } from 'react-icons/fa'

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false)

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen font-['Poppins'] bg-cover bg-center p-5 text-center bg-[url('/KL%20ls.png')]">
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div className="relative z-20 text-white w-full max-w-md">
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl font-bold">Malaysia</h1>
          <h1 className="text-5xl sm:text-6xl font-bold">Virtual Visit</h1>
          <p className="text-gray-300 max-w-sm mx-auto mt-5 leading-relaxed">
            The best of tradition and modern technology can deliver satisfaction to your participants beyond the highest expectations.
          </p>
        </div>

        <div className="flex justify-center mb-8 bg-white/10 rounded-full overflow-hidden max-w-xs mx-auto">
          <button
            onClick={() => setIsSignUp(false)}
            className={`py-3 px-5 text-base flex-1 transition-colors ${!isSignUp ? 'bg-[#e83e8c] rounded-full' : 'bg-transparent'}`}
          >
            Login
          </button>
          <button
            onClick={() => setIsSignUp(true)}
            className={`py-3 px-5 text-base flex-1 transition-colors ${isSignUp ? 'bg-[#e83e8c] rounded-full' : 'bg-transparent'}`}
          >
            Sign Up
          </button>
        </div>

        <form>
          {isSignUp && (
            <div className="relative mb-5">
              <User size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Name" className="w-full py-4 pl-14 pr-4 bg-white/10 border border-white/20 rounded-xl placeholder-gray-400" />
            </div>
          )}
          <div className="relative mb-5">
            <Mail size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="email" placeholder="Email" className="w-full py-4 pl-14 pr-4 bg-white/10 border border-white/20 rounded-xl placeholder-gray-400" />
          </div>
          <div className="relative mb-5">
            <Lock size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="password" placeholder="Password" className="w-full py-4 pl-14 pr-4 bg-white/10 border border-white/20 rounded-xl placeholder-gray-400" />
          </div>
          <button type="submit" className="w-full py-4 bg-[#e83e8c] text-white rounded-xl text-lg font-semibold mt-2.5 hover:bg-[#d1307b] transition-colors">
            {isSignUp ? 'SIGN UP' : 'LOGIN'}
          </button>
        </form>

        <p className="text-xs text-gray-400 my-8">
          PLEASE NOTE THE ENCLOSED INSTRUCTIONS?
        </p>

        <div>
          <p className="mb-4 text-gray-300 font-medium">Connect with</p>
          <div className="flex justify-center gap-6">
            <button className="flex justify-center items-center w-14 h-14 bg-white/10 border border-white/20 rounded-full text-2xl hover:bg-white/20 transition-colors"><FaFacebook /></button>
            <button className="flex justify-center items-center w-14 h-14 bg-white/10 border border-white/20 rounded-full text-2xl hover:bg-white/20 transition-colors"><FaGoogle /></button>
            <button className="flex justify-center items-center w-14 h-14 bg-white/10 border border-white/20 rounded-full text-2xl hover:bg-white/20 transition-colors"><FaApple /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
