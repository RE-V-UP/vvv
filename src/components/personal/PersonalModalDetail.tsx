'use client'

import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

type PersonalModal = {
  isOpen: boolean
  onClose: () => void
}

const PersonalModalDetail = ({ isOpen, onClose }: PersonalModal) => {
  const router = useRouter()

  const { data: userSessionInfo } = useSession()
  const uid = userSessionInfo?.user?.uid as string

  if (!isOpen) return null

  const onPersonalTestHandler = () => {
    if (!uid) {
      router.push('/login')
    } else {
      router.push('/personal-music')
      onCloseModalHandler()
    }
  }
  const onCloseModalHandler = () => {
    let expires = new Date()
    expires.setHours(expires.getHours() + 24)
    localStorage.setItem('homeVisited', expires.getTime().toString())
    // 현재 시간의 24시간 뒤의 시간을 homeVisited에 저장
    onClose()
  }
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div className='fixed inset-0 bg-black opacity-50'></div>
      <div className='fixed z-10 h-72 rounded-lg bg-white p-8'>
        <div>
          {/* 테스트용 닫기버튼 */}
          <button className='absolute right-0 top-0 m-2' onClick={onClose}>
            <svg
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              ></path>
            </svg>
          </button>
        </div>
        <div>
          <span>퍼스널 뮤직 진단</span>
          <p>당신의 음악 성향을 알아보고</p>
          <p>맞춤형 음악을 추천해드립니다!</p>
        </div>
        <div className='flex justify-between'>
          <div>
            <button
              onClick={onPersonalTestHandler}
              className='rounded-full border border-rose-600'
            >
              검사하기
            </button>
          </div>
          <div>
            <button
              onClick={onCloseModalHandler}
              className='rounded-full border border-rose-600'
            >
              오늘은 그만보기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalModalDetail