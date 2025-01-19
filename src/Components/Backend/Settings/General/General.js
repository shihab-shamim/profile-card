import { __ } from '@wordpress/i18n';

import { PanelBody, SelectControl } from '@wordpress/components';
import { purposeTypeOptions } from '../../../../utils/options';
import { updateData } from '../../../../utils/functions';
import { TextControl } from '@wordpress/components';
import { TextareaControl } from '@wordpress/components';
import { Button } from '@wordpress/components';
import { FormTokenField } from '@wordpress/components';
import { FormToggle } from '@wordpress/components';
import { Flex } from '@wordpress/components';


const General = ({ attributes, setAttributes }) => {
  const { purposeType,profile,isShow} = attributes;
  // const {image}=profile

  

  return (
    <>
    <PanelBody className='bPlPanelBody' title={__('Profile Info', 'b-blocks')} initialOpen={false}>
     
     <TextControl
  label="Profile Image URL"
  value={attributes.profile.image || ""} // Access the nested value
  onChange={(newImage) => 
    setAttributes({
      profile: {
        ...profile, 
        image: newImage, 
      },
    })
  }

/>
<TextControl
  label="Profile Name"
  value={profile.name || ""} // Access the nested value
  onChange={(newName) => 
    setAttributes({
      profile: {
        ...profile, 
        name: newName, 
      },
    })
  }
  
/>
<TextControl
  label="Profile Designation"
  value={profile.designation || ""} // Access the nested value
  onChange={(newDesignation) => 
    setAttributes({
      profile: {
        ...profile, 
        designation: newDesignation, 
      },
    })
  }
  
/>
<TextControl
  label="Profile Projects"
  value={profile.projects || ""} // Access the nested value
  onChange={(newProjects) => 
    setAttributes({
      profile: {
        ...profile, 
        projects: newProjects, 
      },
    })
  }
  
/>
<TextControl
  label="Profile Followers"
  value={profile.followers || ""} // Access the nested value
  onChange={(newfollowers) => 
    setAttributes({
      profile: {
        ...profile, 
        followers: newfollowers, 
      },
    })
  }
  
/>
<TextControl
  label="Profile Following"
  value={profile.following || ""} // Access the nested value
  onChange={(newfollowing) => 
    setAttributes({
      profile: {
        ...profile, 
        following: newfollowing, 
      },
    })
  }
  
/>
<TextareaControl
	label="Profile Description"
	rows={4}
	value={ profile?.description }
	onChange={(newdescription) => 
    setAttributes({
      profile: {
        ...profile, 
        description: newdescription, 
      },
    })
  }
/>
          <label>Profile Skills</label>
          {profile?.skills.map((skill, index) => (
 <>
  <TextControl
    key={index}
    label={`Skill-${index + 1}`}
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
  />
  <Button isPrimary 
   onClick={() =>
    setAttributes({
      profile: {
        ...profile,
        skills: profile.skills.filter((_, i) => i !== index),
      },
    })
  }
  >Delete</Button>
 </>
))}

<FormTokenField
label='Add Skill'
  value={profile.skills} 
  suggestions={profile.skills} 
  onChange={(newSkills) =>
    setAttributes({
      profile: {
        ...profile,
        skills: newSkills, 
      },
    })
  }
/>




    </PanelBody>

    <Flex align="center" justify='center' gap={2}>
    <FormToggle
    
    checked={ isShow }
    onChange={ () => setAttributes({isShow:!isShow}) }
  />
  <label>Show Profile Button {isShow}</label>
    </Flex>
    </>
  )
}

export default General