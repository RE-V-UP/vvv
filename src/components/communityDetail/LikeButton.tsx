'use client'

import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import {
  addLikedUser,
  getClickLikedUser,
  removeLikedUser,
} from '@/shared/communitydetail/detailApi'
import { Props } from '@/types/communityDetail/detailTypes'
import emptyHeart from '@/../public/images/heart-rounded-gray.svg'
import heart from '@/../public/images/likeFullHeart.svg'

const LikeButton = ({ boardId }: Props) => {
  const { data: userSessionInfo } = useSession()
  const uid = userSessionInfo?.user.uid
  const [like, setLike] = useState<boolean | null>(null)
  const [likeList, setLikeList] = useState<string[]>([])

  useEffect(() => {
    const likedStatus = async () => {
      const clickLikedUser = await getClickLikedUser(boardId)

      if (
        uid &&
        clickLikedUser &&
        clickLikedUser?.likeList &&
        clickLikedUser.likeList.includes(uid)
      ) {
        setLike(true)
      } else {
        setLike(false)
      }
      setLikeList(clickLikedUser?.likeList || [])
    }

    likedStatus()
  }, [uid, boardId])

  const onLikeToggleHandler = async () => {
    if (!uid) {
      alert('로그인 후 이용해 주세요.')
      return
    }

    if (like) {
      await removeLikedUser(likeList, boardId, uid)
      setLike(false)
      setLikeList((prevLikeList) => prevLikeList.filter((id) => id !== uid))
    } else {
      await addLikedUser(likeList, boardId, uid)
      setLike(true)
      setLikeList((prevLiketest) => [...prevLiketest, uid])
    }
    const updatedLikeList = like
      ? likeList.filter((id) => id !== uid)
      : [...likeList, uid]
    setLikeList(updatedLikeList)
    setLike(!like)
  }

  return (
    <div>
      <div className='flex gap-[7px]'>
        <figure onClick={onLikeToggleHandler} className='cursor-pointer'>
          {like ? (
            <Image src={heart} alt='꽉찬좋아요 아이콘' width={24} height={24} />
          ) : (
            <Image
              src={emptyHeart}
              alt='빈좋아요 아이콘'
              width={24}
              height={24}
            />
          )}
        </figure>

        <p className='ml-[5px] text-[rgba(255,255,255,0.5)]'>
          {likeList !== null ? likeList?.length + ' +' : 0}
        </p>
      </div>
    </div>
  )
}

export default LikeButton
