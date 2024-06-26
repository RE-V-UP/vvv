'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import {
  recommendMusic,
  getRecommendMusic,
  insertPersonalMusic,
  getCurrentMusics,
  getPersonaledUser,
  updatePersonalMusic,
  insertPersonalResult,
  updatePersonalResult,
} from '@/shared/personal/personalApi'
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { SentenceMatch } from '@/util/personal/util'
import ButtonPrimary from '../../util/ButtonPrimary'

import type { PersonalRecommendProps } from '@/types/personal/type'

const PersonalRecommend: React.FC<PersonalRecommendProps> = ({ userChar }) => {
  const [checkedList, setCheckedList] = useState<string[]>([])
  const queryClient = useQueryClient()
  const mbtiStatus = userChar.mbti
  const router = useRouter()

  const { data: musicPreferenceData } = useQuery({
    queryFn: () => recommendMusic(mbtiStatus),
    queryKey: ['personal'],
  })

  const {
    data: recommend,
    isLoading,
    isError,
  } = useQuery({
    queryFn: () => getRecommendMusic(musicPreferenceData as number[]),
    queryKey: ['recommendMusic'],
  })

  const resultMusic = recommend?.map((music) => music.musicId) as string[]

  const onChangeCheckMusicHandler = (checked: boolean, id: string) => {
    if (checked) {
      setCheckedList((prev) => [...prev, id])
    } else {
      const checkList = checkedList.filter((el) => el !== id)
      setCheckedList(checkList)
    }
  }

  const { data: personalUser } = useQuery({
    queryFn: () => getPersonaledUser(),
    queryKey: ['personalReuslt'],
  })

  const addPersonalResultMutation = useMutation({
    mutationFn: insertPersonalMusic,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['personalReuslt'] })
      setCheckedList([])
      refetchCurrent()
    },
  })

  const updatePersonalResultMutation = useMutation({
    mutationFn: updatePersonalMusic,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['personalReuslt'] })
      setCheckedList([])
      refetchCurrent()
    },
  })

  const updateCurrentMusicMutation = useMutation({
    mutationFn: updatePersonalResult,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['personalReuslt'] })
      setCheckedList([])
      refetchCurrent()
    },
  })

  const insertCurrentMusicMutation = useMutation({
    mutationFn: insertPersonalResult,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['personalReuslt'] })
      setCheckedList([])
      refetchCurrent()
    },
  })

  const { data: current, refetch: refetchCurrent } = useQuery({
    queryFn: () => getCurrentMusics(userChar.uid),
    queryKey: ['currentMusic'],
  })

  const currentList =
    current?.length === 0
      ? []
      : current?.[0]?.currentMusicIds || ([] as string[])

  const onSubmitCurrentMusic = () => {
    if (checkedList.length === 0) {
      alert('선택된 곡이 없습니다.')
      return
    }

    const filterMusic = checkedList.filter((musicId) =>
      currentList.includes(musicId),
    )

    if (filterMusic.length > 0) {
      alert('이미 현재 재생목록에 있는 곡입니다.')
      setCheckedList([])
      return
    }

    if (!current || current.length === 0) {
      const musicList = [...checkedList] as string[]
      insertCurrentMusicMutation.mutate({ userId: userChar.uid, musicList })
    } else {
      const musicList = [...currentList, ...checkedList] as string[]
      updateCurrentMusicMutation.mutate({ userId: userChar.uid, musicList })
    }
    onSubmitPersonalResult()
  }

  const onSubmitPersonalResult = () => {
    const personalMusicData = {
      userChar,
      resultMusic: resultMusic,
    }

    if (personalUser?.find((user) => user.userId === userChar.uid)) {
      alert('진단 결과 업데이트 및 곡 추가가 완료됐습니다.')
      updatePersonalResultMutation.mutate(personalMusicData)
    } else {
      alert('곡 추가가 완료됐습니다.')
      addPersonalResultMutation.mutate(personalMusicData)
    }
  }
  const onGoToHomeHandler = () => {
    const personalMusicData = {
      userChar,
      resultMusic: resultMusic,
    }
    updatePersonalResultMutation.mutate(personalMusicData)
    router.push('/')
  }

  if (isLoading) {
    return <div className='text-center'> 열심히 곡을 고르는 중입니다.</div>
  }

  if (isError) {
    return (
      <div className='text-center'>
        에러가 발생했습니다. 잠시 후 다시 시도해주세요
      </div>
    )
  }

  return (
    <div>
      <div className='pt-[16px] text-center text-sm font-medium text-white text-opacity-70'>
        <p className='px-[20px]'>{SentenceMatch(userChar.mbti)}</p>
      </div>
      <div className='pt-[24px] text-center text-white'>
        <p className='text-sm font-medium'>
          당신의 취향에 맞는 음악을 추천 해드릴게요 &#x1F642;
        </p>
      </div>
      <div className='flex justify-center gap-5 pt-[16px] text-white text-opacity-50'>
        {recommend?.map((item) => (
          <label htmlFor={item.musicId} key={item.musicId}>
            <input
              type='checkbox'
              id={item.musicId}
              checked={checkedList.includes(item.musicId)}
              onChange={(e) =>
                onChangeCheckMusicHandler(e.target.checked, item.musicId)
              }
              className='peer hidden'
            />
            <div className='flex w-[130px] justify-center'>
              <Image
                src={item.thumbnail}
                width={80}
                height={80}
                alt={`${item.musicTitle} 앨범 썸네일`}
                className='rounded-full ring-4 ring-transparent peer-checked:ring-white'
              />
            </div>
            <div className='w-[100px]  peer-checked:text-white'>
              <p className='w-[130px] text-center text-lg font-bold'>
                {item.musicTitle}
              </p>
            </div>
            <div className='text-center text-sm font-medium peer-checked:text-white '>
              <p> {item.artist}</p>
            </div>
            <div>
              <p className='text-center text-sm'>
                {currentList.includes(item.musicId) ? '현재 재생중' : ''}
              </p>
            </div>
          </label>
        ))}
      </div>
      <div className='flex justify-center gap-4 pt-[22px]'>
        <ButtonPrimary onClick={onSubmitCurrentMusic}>
          재생목록에 담기
        </ButtonPrimary>
        <ButtonPrimary onClick={onGoToHomeHandler}>메인으로 가기</ButtonPrimary>{' '}
      </div>
    </div>
  )
}

export default PersonalRecommend
