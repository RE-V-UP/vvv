'use client'

import { useState } from 'react'
import GenderPage from '@/components/personal/GenderPage'
import MBTIPage from '@/components/personal/MBTIPage'
import ResultPage from '@/components/personal/ResultPage'
const PersonalMusicPage = () => {
  const [pageCount, setPageCount] = useState<string>('pageOne')
  return (
    <>
      <div className='flex justify-center'>
        {pageCount === 'pageOne' ? (
          <GenderPage setPageCount={setPageCount} />
        ) : pageCount === 'pageTwo' ? (
          <MBTIPage setPageCount={setPageCount} />
        ) : pageCount === 'pageThree' ? (
          <ResultPage setPageCount={setPageCount} />
        ) : (
          <div>Error</div>
        )}
      </div>
    </>
  )
}

export default PersonalMusicPage
