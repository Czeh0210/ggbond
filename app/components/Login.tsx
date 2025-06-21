'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Mail, Lock, User } from 'lucide-react'
import { FaFacebook, FaGoogle, FaApple } from 'react-icons/fa'

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false)
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/map');
  };

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen pixel-font bg-cover bg-center p-5 text-center bg-[url('/KL%20ls.png')]">
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div className="relative z-20 text-white w-full max-w-md">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold uppercase tracking-wider">Malaysia</h1>
          <h1 className="text-4xl sm:text-5xl font-bold uppercase tracking-wider">Virtual Visit</h1>
          <p className="text-gray-300 max-w-sm mx-auto mt-5 leading-relaxed text-sm">
            The best of tradition and modern technology can deliver satisfaction to your participants beyond the highest expectations.
          </p>
        </div>

        <div className="flex justify-center mb-8 border-2 border-[#bfa46a] overflow-hidden max-w-xs mx-auto">
          <button
            onClick={() => setIsSignUp(false)}
            className={`py-3 px-5 text-sm flex-1 transition-colors uppercase ${!isSignUp ? 'bg-[#a86c3c]' : 'bg-transparent hover:bg-[#7c5a3a]/50'}`}
          >
            Login
          </button>
          <button
            onClick={() => setIsSignUp(true)}
            className={`py-3 px-5 text-sm flex-1 transition-colors uppercase ${isSignUp ? 'bg-[#a86c3c]' : 'bg-transparent hover:bg-[#7c5a3a]/50'}`}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="relative mb-5">
              <User size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Name" className="w-full py-4 pl-14 pr-4 bg-[#7c5a3a]/50 border-2 border-[#bfa46a] placeholder-gray-300" />
            </div>
          )}
          <div className="relative mb-5">
            <Mail size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="email" placeholder="Email" className="w-full py-4 pl-14 pr-4 bg-[#7c5a3a]/50 border-2 border-[#bfa46a] placeholder-gray-300" />
          </div>
          <div className="relative mb-5">
            <Lock size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="password" placeholder="Password" className="w-full py-4 pl-14 pr-4 bg-[#7c5a3a]/50 border-2 border-[#bfa46a] placeholder-gray-300" />
          </div>
          <button type="submit" className="w-full py-4 bg-[#a86c3c] text-white text-lg font-bold mt-2.5 border-2 border-[#7c5a3a] !shadow-[4px_4px_0px_0px_#5a3a1e] hover:bg-[#c4884a] transition-colors uppercase">
            {isSignUp ? 'SIGN UP' : 'LOGIN'}
          </button>
        </form>

        <p className="text-xs text-gray-400 my-8 uppercase">
          PLEASE NOTE THE ENCLOSED INSTRUCTIONS?
        </p>

        <div>
          <p className="mb-4 text-gray-300 font-medium uppercase">Connect with</p>
          <div className="flex justify-center gap-4">
            <button className="flex justify-center items-center w-14 h-14 bg-[#7c5a3a]/50 border-2 border-[#bfa46a] text-2xl hover:bg-[#bfa46a]/50 transition-colors"><FaFacebook /></button>
            <button className="flex justify-center items-center w-14 h-14 bg-[#7c5a3a]/50 border-2 border-[#bfa46a] text-2xl hover:bg-[#bfa46a]/50 transition-colors"><FaGoogle /></button>
            <button className="flex justify-center items-center w-14 h-14 bg-[#7c5a3a]/50 border-2 border-[#bfa46a] text-2xl hover:bg-[#bfa46a]/50 transition-colors"><FaApple /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
