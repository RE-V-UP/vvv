'use client'

import { getSession, signOut } from 'next-auth/react'
import { supabase } from '@/shared/supabase/supabase'
import Logout from '@/../public/images/logout.svg'
import Image from 'next/image'
import { OPEN_ANOTHER_SHADOW } from '../login/loginCss'

const LogOutButton = () => {
  const onLogOutHandler = async () => {
    const loginStatus = await getSession()
    await supabase.auth.signOut()

    await signOut({ redirect: true, callbackUrl: '/' })

    if (loginStatus === null) {
      alert('로그아웃 되셨습니다.')
    }
  }

  return (
    <div>
      <button
        onClick={onLogOutHandler}
        className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white bg-opacity-10 ${OPEN_ANOTHER_SHADOW}`}
      >
        <Image src={Logout} alt='로그아웃' width={22} height={20} />
      </button>
    </div>
  )
}

export default LogOutButton
