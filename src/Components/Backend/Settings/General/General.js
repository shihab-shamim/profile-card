import { __ } from '@wordpress/i18n';

import { PanelBody, SelectControl } from '@wordpress/components';
import { purposeTypeOptions } from '../../../../utils/options';
import { updateData } from '../../../../utils/functions';
import { TextControl } from '@wordpress/components';
import { TextareaControl } from '@wordpress/components';
import { Button } from '@wordpress/components';
import { FormTokenField } from '@wordpress/components';
import { FormToggle } from '@wordpress/components';
import { Flex,ButtonGroup } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';


const General = ({ attributes, setAttributes }) => {
  const { purposeType,profile,isShow,layout} = attributes;
  // const {image}=profile

  

  return (
    <>
      <PanelBody className='bPlPanelBody' title={__('Profile Cards', 'b-blocks')} initialOpen={false}>
      
       

      </PanelBody>

    {/* <PanelBody className='bPlPanelBody' title={__('Profile Info', 'b-blocks')} initialOpen={false}>
     
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
<MediaUploadCheck>
			<MediaUpload
          onSelect={(newImage) => 
            setAttributes({
              profile: {
                ...profile,
                image: newImage.url, // Save the image URL
              },
            })
          }
				allowedTypes={['image'] }
				value={profile.image || "" }
				render={ ( { open } ) => (
					<Button isPrimary onClick={ open }>Upload Image</Button>
				) }
			/>
		</MediaUploadCheck>
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
    </Flex> */}


    <PanelBody className='bPlPanelBody' title={__('Profile Cards LayOut', 'b-blocks')} initialOpen={false}>
    <ButtonGroup>
	<Button isPrimary={layout === 2} 
  isSecondary={layout !== 2} onClick={()=>{
    setAttributes({layout:2})

  }}>2Column</Button>
	<Button isPrimary={layout === 3} 
  isSecondary={layout !== 3} 
  onClick={()=>{
    setAttributes({layout:3})

  }}
  >3 Column</Button>
	
</ButtonGroup>

    </PanelBody>


    <Button 
  isPrimary 
  onClick={() => {
    const newProfileCard = {
      name: "Shihab Shamim",
      image: "https://i.ibb.co.com/4RBL613/1714662976645-2.jpg",
      designation: "Senior Product Designer",
      skills: ["UI/UXL", "Branding", "Motion"],
      description: "Creative designer with 5+ years of experience in digital product design and brand identity.",
      projects: "16.2k",
      followers: "86.5k",
      following: "46.5k",
      button: {
        follow: "Follow",
        message: "Message"
      }
    };

    // Ensure profile is treated as an array and add the new card
    setAttributes({
      profile: Array.isArray(profile) ? [...profile, newProfileCard] : [newProfileCard],
    });
  }}
>
  Add Card
</Button>

    </>
  )
}

export default General