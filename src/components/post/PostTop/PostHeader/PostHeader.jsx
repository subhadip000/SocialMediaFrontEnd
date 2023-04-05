import React from 'react'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

export const PostHeader = ({ profileInfo, post, myInfo }) => {
  return (
    <div className="postTopLeft">
            <Link
              to={
                profileInfo?.id === myInfo?.id
                  ? "/profile"
                  : `/user/${profileInfo?.id}`
              }
              className="Link"
            >
              <img
                src={profileInfo?.profilePhoto}
                alt=""
                className="postProfileImg"
              />
              <span className="postUsername">
                {profileInfo?.firstName} {profileInfo?.lastName}
              </span>
            </Link>

            <span className="postDate">
              <Moment fromNow ago>
                {post?.createdAt}
              </Moment>
            </span>
          </div>
  )
}
