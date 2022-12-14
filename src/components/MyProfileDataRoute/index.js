import {Component} from 'react'
import {BiCamera} from 'react-icons/bi'
import {BsGrid3X3} from 'react-icons/bs'
import ThemeContext from '../../context/ThemeContext'
import '../UsersRoute/index.css'
import './index.css'

class MyProfileDataRoute extends Component {
  render() {
    const {myProfileData} = this.props
    const {
      followingCount,
      followersCount,
      posts,
      postsCount,
      profilePic,
      stories,
      userBio,
      username,
      userId,
    } = myProfileData

    return (
      <ThemeContext>
        {value => {
          const {showTheme} = value

          const textColor = !showTheme ? 'textDark' : 'textLight'
          const iconColor = showTheme ? 'iconDark' : 'iconLight'

          return (
            <li className="user-profile-lists">
              <div className="user-heading-container">
                <div className="profile-img-container">
                  <h1
                    className={`user-profile-heading user-heading-sm ${textColor}`}
                  >
                    {username}
                  </h1>

                  <img
                    src={profilePic}
                    className="user-profile-img"
                    alt="my profile"
                  />
                </div>
                <div className="user-profile-content">
                  <h1
                    className={`user-profile-heading user-heading-lg ${textColor}`}
                  >
                    {username}
                  </h1>
                  <ul className="user-profile-follower-container">
                    <li className="user-text-container">
                      <span className={`user-profile-posts-text ${textColor}`}>
                        {postsCount}
                      </span>
                      <span className={`user-profile-text ${textColor}`}>
                        Posts
                      </span>
                    </li>
                    <li className="user-text-container">
                      <span className={`user-profile-posts-text ${textColor}`}>
                        {followersCount}
                      </span>
                      <span className={`user-profile-text ${textColor}`}>
                        followers
                      </span>
                    </li>
                    <li className="user-text-container">
                      <span className={`user-profile-posts-text ${textColor}`}>
                        {followingCount}
                      </span>
                      <span className={`user-profile-text ${textColor}`}>
                        following
                      </span>
                    </li>
                  </ul>
                  <div className="user-desc-lg">
                    <p className={`sub-username ${textColor}`}>{userId}</p>
                    <p className={`user-bio-text ${textColor} `}>{userBio}</p>
                  </div>
                </div>
              </div>
              <div className="user-desc-sm">
                <p className={`sub-username ${textColor}`}>{userId}</p>
                <p className={`user-bio-text ${textColor}`}>{userBio}</p>
              </div>
              {stories.length !== 0 && (
                <ul className="myprofile-stories-card">
                  {stories.map(userStories => (
                    <li key={userStories.id} className="stories-img-lists">
                      <img
                        src={userStories.image}
                        className="myprofile-stories-img"
                        alt="my story"
                      />
                    </li>
                  ))}
                </ul>
              )}

              <hr className="line profile-line" />
              <div className="user-posts-heading myprofile-head">
                <BsGrid3X3 className={`posts-icon ${textColor}`} />
                <h1 className={`posts-heading ${textColor}`}>Posts</h1>
              </div>
              <div className="user-posts-card my-profile-card">
                {posts.length !== 0 ? (
                  <ul className="user-card-items">
                    {posts.map(postImages => (
                      <li key={postImages.id} className="user-card-lists">
                        <img
                          src={postImages.image}
                          className="user-posts-img"
                          alt="my post"
                        />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="no-posts-container">
                    <div className="no-posts-icon-container">
                      <BiCamera className={`no-posts-icon ${iconColor}`} />
                    </div>
                    <h1 className={`no-posts-text ${textColor}`}>
                      No Posts Yet
                    </h1>
                  </div>
                )}
              </div>
            </li>
          )
        }}
      </ThemeContext>
    )
  }
}

export default MyProfileDataRoute
