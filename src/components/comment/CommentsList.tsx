"use client";

import Image from "next/image";
import { useStore } from "@/shared/store";
import { useQuery } from "@tanstack/react-query";
import { onCommentHandler } from "@/util/comment/util";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getComments, deleteComment } from "@/shared/comment/commentApi";

const CommentsList = () => {
  const { userInfo } = useStore();
  const queryClient = useQueryClient();

  const { data: commentsData } = useQuery({
    queryFn: () => getComments(),
    queryKey: ["comments"],
  });

  const deleteCommentMutation = useMutation({
    mutationFn: deleteComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comment"] });
    },
  });

  const onDeleteCommentHandler = (commentId: string) => {
    deleteCommentMutation.mutate(commentId);
    alert("삭제 하시겠습니까?");
  };

  return (
    <div>
      {commentsData?.map((item) => (
        <div
          key={item.commentId}
          className="border border-solid border-black w-[750px] h-24 p-4"
        >
          <div className=" flex flex-row">
            <div className=" basis-1/2 flex flex-row">
              <p className="w-5 h-5 flex overflow-hidden rounded-full bg-slate-200">
                {item.userInfo?.userImage && (
                  <Image
                    src={item.userInfo.userImage}
                    alt=""
                    width={20}
                    height={20}
                  />
                )}
              </p>
              <p>{item.userInfo?.nickname}</p>
            </div>
            <div className="basis-1/2">
              {" "}
              {onCommentHandler(item.commentDate)}
            </div>
          </div>
          <div className="flex flex-row">
            <div className="basis-1/2"> {item.commentContent}</div>
            <div className="basis-1/2">
              {item.userInfo.userId === userInfo.uid ? (
                <>
                  <button
                    onClick={() => onDeleteCommentHandler(item.commentId)}
                  >
                    삭제
                  </button>
                  <button>수정</button>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;