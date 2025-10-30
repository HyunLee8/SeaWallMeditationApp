'use client'

import { useState } from 'react'
import { supabase} from '@/lib/supabaseClient'
import Login from './Login'
import SignUp from './SignUp'

export default function AuthScreen() {
  const [mode, setMode] = useState<'login' | 'signup'>('login')


  return (
    <div className="w-100">
      {mode === 'login' ? (
        <>
          <Login />
          <div className='flex justify-center gap-4 text-sm'>
            <p>Don't have an account?</p>
            <button onClick={() => setMode('signup')}
              className=""
            >
              SignUp
            </button>
          </div>
        </>
      ) : (
        <>
          <SignUp />
          <div className='flex justify-center gap-4 text-sm'>
            <p>Don't have an account?</p>
            <button onClick={() => setMode('login')}
              className=""
            >
              Login
            </button>
          </div>
        </>
      )}
    </div>
  )
}