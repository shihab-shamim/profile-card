import { RichText } from '@wordpress/block-editor';

const ProfileCard = ({ view, attributes, setAttributes, pro, index }) => {
    const { profile, isShow } = attributes;

    // Helper function to update the profile at a specific index
    const updateProfileAtIndex = (key, value) => {
        const updatedProfiles = [...profile];
        updatedProfiles[index] = {
            ...updatedProfiles[index],
            [key]: value,
        };
        setAttributes({ profile: updatedProfiles });
    };

    const updateNestedProfileAtIndex = (parentKey, key, value) => {
        const updatedProfiles = [...profile];
        updatedProfiles[index] = {
            ...updatedProfiles[index],
            [parentKey]: {
                ...updatedProfiles[index][parentKey],
                [key]: value,
            },
        };
        setAttributes({ profile: updatedProfiles });
    };

    return (
        <div className="container">
            {/* Premium Profile Card */}
            <div className="profile-card">
                <div className="card-content">
                    {/* Avatar Circle */}
                    <div className="avatar-wrapper">
                        <img className="avatar" src={pro.image} alt="Profile Pic" />
                    </div>

                    {/* Profile Info */}
                    <div className="profile-info">
                        {view ? (
                            <h2 className="name">{pro?.name}</h2>
                        ) : (
                            <RichText
                                className="name"
                                tagName="h2"
                                value={pro?.name}
                                onChange={(newName) => updateProfileAtIndex('name', newName)}
                                placeholder="Your Name..."
                            />
                        )}

                        {view ? (
                            <p className="title">{pro?.designation}</p>
                        ) : (
                            <RichText
                                className="title"
                                tagName="p"
                                value={pro?.designation}
                                onChange={(newDesignation) => updateProfileAtIndex('designation', newDesignation)}
                                placeholder="Your designation..."
                            />
                        )}

                        <div className="stats">
                            <div className="stat">
                                {view ? (
                                    <span className="stat-value">{pro?.projects}</span>
                                ) : (
                                    <RichText
                                        className="stat-value"
                                        tagName="span"
                                        value={pro?.projects}
                                        onChange={(newProjects) => updateProfileAtIndex('projects', newProjects)}
                                        placeholder="projects..."
                                    />
                                )}
                                <span className="stat-label">Projects</span>
                            </div>
                            <div className="stat">
                                {view ? (
                                    <span className="stat-value">{pro?.followers}</span>
                                ) : (
                                    <RichText
                                        className="stat-value"
                                        tagName="span"
                                        value={pro?.followers}
                                        onChange={(newFollowers) => updateProfileAtIndex('followers', newFollowers)}
                                        placeholder="followers..."
                                    />
                                )}
                                <span className="stat-label">Followers</span>
                            </div>
                            <div className="stat">
                                {view ? (
                                    <span className="stat-value">{pro?.following}</span>
                                ) : (
                                    <RichText
                                        className="stat-value"
                                        tagName="span"
                                        value={pro?.following}
                                        onChange={(newFollowing) => updateProfileAtIndex('following', newFollowing)}
                                        placeholder="following..."
                                    />
                                )}
                                <span className="stat-label">Following</span>
                            </div>
                        </div>

                        {view ? (
                            <div className="bio">{pro?.description}</div>
                        ) : (
                            <RichText
                                className="bio"
                                tagName="div"
                                value={pro?.description}
                                onChange={(newDescription) => updateProfileAtIndex('description', newDescription)}
                                placeholder="description..."
                            />
                        )}

                        <div className="skills">
                            {view &&
                                pro?.skills?.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="skill">
                                        {skill}
                                    </span>
                                ))}
                            {!view &&
                                pro?.skills?.map((skill, skillIndex) => (
                                    <RichText
                                        className="skill"
                                        key={skillIndex}
                                        tagName="div"
                                        value={skill}
                                        onChange={(newSkill) => {
                                            const updatedSkills = [...pro.skills];
                                            updatedSkills[skillIndex] = newSkill;
                                            updateProfileAtIndex('skills', updatedSkills);
                                        }}
                                        placeholder="skill..."
                                    />
                                ))}
                        </div>

                        {pro?.isShow && (
                            <div className="actions">
                                {/* Follow Button */}
                                <button className="action-btn primary">
                                    {view ? (
                                        <span><a className='buttonLink' href={pro?.button?.follow} target='_blank' rel="noreferrer">{pro?.button?.follow}</a></span>
                                    ) : (
                                        <RichText
                                            tagName="span"
                                            value={pro?.button?.follow}
                                            placeholder="Enter button text..."
                                            onChange={(newFollowText) =>
                                                updateNestedProfileAtIndex('button', 'follow', newFollowText)
                                            }
                                        />
                                    )}
                                    <div className="btn-effect"></div>
                                </button>

                                {/* Message Button */}
                                <button className="action-btn secondary">
                                    {view ? (
                                        <span><a  className='buttonLink'  target="_blank" href={pro?.link?.message} rel="noreferrer">{pro?.button?.message}</a></span>
                                    ) : (
                                        <RichText
                                            tagName="span"
                                            value={pro?.button?.message}
                                            placeholder="Enter button text..."
                                            onChange={(newMessageText) =>
                                                updateNestedProfileAtIndex('button', 'message', newMessageText)
                                            }
                                        />
                                    )}
                                    <div className="btn-effect"></div>
                                </button>
                            </div>
                        )}
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
