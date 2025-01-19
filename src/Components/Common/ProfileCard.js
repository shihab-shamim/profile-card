import {  RichText } from '@wordpress/block-editor';


const ProfileCard = ({view,attributes,setAttributes}) => {
    const {profile,isShow}=attributes;
    return (
        <div className="container">
        {/* Premium Profile Card */}
        <div className="profile-card">
          <div className="card-content">
            {/* Avatar Circle */}
            <div className="avatar-wrapper">
              
                 <img className="avatar" src={profile.image} alt="Profile Pic" />
              </div>
          
  
            {/* Profile Info */}
            <div className="profile-info">
            {view?<h2 className="name">{profile?.name}</h2>:
            <RichText
            className="name"
            onChange={(newName) => 
                setAttributes({
                  profile: {
                    ...profile, 
                    name: newName, 
                  },
                })
              }
               
            tagName="h2" 
            value={profile?.name}
             
            placeholder={ ( 'Your Name...' ) } 
        />
              }
              
              {
                view?<p className="title">{profile?.designation}</p>:<RichText
                className="title"
                onChange={(newDesignation) => 
                    setAttributes({
                      profile: {
                        ...profile, 
                        designation: newDesignation, 
                      },
                    })
                  }
                tagName="p" 
                value={profile?.designation}
                 
                placeholder={ ( 'Your designation...' ) } 
            />
              }
  
              <div className="stats">
                <div className="stat">
                  {
                    view?<span className="stat-value">{profile?.projects}</span>:
                    <RichText
                className="stat-value"
                onChange={(newProjects) => 
                    setAttributes({
                      profile: {
                        ...profile, 
                        projects: newProjects, 
                      },
                    })
                  }
                tagName="span" 
                value={profile?.projects}
                 
                placeholder={ ( 'projects...' ) } 
            />
                  }
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat">
                  {
                    view?<span className="stat-value">{profile?.followers}</span>:<RichText
                    className="stat-value"
                       
                    tagName="span" 
                    value={profile?.followers}
                    onChange={(newfollowers) => 
                        setAttributes({
                          profile: {
                            ...profile, 
                            followers: newfollowers, 
                          },
                        })
                      }
                     
                    placeholder={ ( 'followers...' ) } 
                />
                  }
                  <span className="stat-label">Followers</span>
                </div>
                <div className="stat">
                  {view?<span className="stat-value">{profile?.following}</span>:<RichText
                    className="stat-value"
                       
                    tagName="span" 
                    value={profile?.following}
                    onChange={(newfollowing) => 
                        setAttributes({
                          profile: {
                            ...profile, 
                            following: newfollowing, 
                          },
                        })
                      }
                    placeholder={ ( 'followers...' ) } 
                />}
                  <span className="stat-label">following</span>
                </div>
              </div>
  
             {view? <div className="bio">
                {profile?.description}
              </div>:<RichText
                    className="bio"
                       
                    tagName="div" 
                    value={profile?.description}
                    onChange={(newdescription) => 
                        setAttributes({
                          profile: {
                            ...profile, 
                            description: newdescription, 
                          },
                        })
                      }
                    placeholder={ ( 'description...' ) } 
                />
              }
  
              <div className="skills">
                {
                view && profile?.skills?.map((skill, index) => (
                    <span key={index} className="skill">{skill}</span>
                    ))
                }
                 {
                view || profile?.skills?.map((skill, index) => (
                    <RichText
                    className="skill"
                       key={index}
                    tagName="div" 
                    value={skill}
                    onChange={(newSkill) =>
                        setAttributes({
                          profile: {
                            ...profile,
                            skills: profile.skills.map((s, i) =>
                              i === index ? newSkill : s 
                            ),
                          },
                        })
                      }
                     
                    placeholder={ ( 'skill...' ) } 
                />
                    ))
                }
                
              </div>
  
              {
  isShow && (
    <div className="actions">
      {/* Follow Button */}
      <button className="action-btn primary">
        {view ? (
          <span>{profile?.button?.follow}</span>
        ) : (
          <RichText
            tagName="span"
            value={profile?.button?.follow}
            placeholder="Enter button text..."
            onChange={(newFollowText) =>
              setAttributes({
                profile: {
                  ...profile,
                  button: {
                    ...profile.button,
                    follow: newFollowText, // Update the 'follow' text
                  },
                },
              })
            }
          />
        )}
        <div className="btn-effect"></div>
      </button>

      {/* Message Button */}
      <button className="action-btn secondary">
        {view ? (
          <span>{profile?.button?.message}</span>
        ) : (
          <RichText
            tagName="span"
            value={profile?.button?.message}
            placeholder="Enter button text..."
            onChange={(newMessageText) =>
              setAttributes({
                profile: {
                  ...profile,
                  button: {
                    ...profile.button,
                    message: newMessageText, 
                  },
                },
              })
            }
          />
        )}
        <div className="btn-effect"></div>
      </button>
    </div>
  )
}

            </div>
          </div>
  
          {/* Card Effects */}
          <div className="card-shine"></div>
          <div className="card-border"></div>
          <div className="card-glow"></div>
        </div>
      </div>
    );
};

export default ProfileCard;