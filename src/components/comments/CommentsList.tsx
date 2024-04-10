'use client'
import { useQuery } from '@tanstack/react-query'
import { getComments } from '@/shared/comments/commentsApi'
import Image from 'next/image'
import { onCommentHandler } from '@/util/util'

const CommentsList = () => {
  const { data: commentsData } = useQuery({
    queryFn: () => getComments(),
    queryKey: ['comments'],
  })

  return (
    <div>
      {commentsData?.map((item) => (
        <div>
          <span className='w-5 h-5 flex overflow-hidden rounded-full bg-slate-200'>
            {item.userInfo?.userImage && (
              <Image
                src={item.userInfo.userImage}
                alt=''
                width={20}
                height={20}
              />
            )}
          </span>
          닉네임 :{item.userInfo?.nickname}
          <br />
          {item.commentContent} <br />
          {onCommentHandler(item.commentDate)} <br />
        </div>
      ))}
    </div>
  )
}

export default CommentsList