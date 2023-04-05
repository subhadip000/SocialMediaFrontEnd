import React from 'react'
import { PostHeader } from './PostHeader/PostHeader'
import { ThreeDots } from './ThreeDots/ThreeDots'

export const PostTop = ({ myInfo, post, profileInfo, setIsEdit }) => {
  return (
    <div className="postTop">
          <PostHeader myInfo={myInfo} post={post} profileInfo={profileInfo} />
          {post?.author?.id === myInfo?.id ? (
            <ThreeDots postId={post?.id} setIsEdit={setIsEdit} />
          ) : null}
        </div>
  )
}
