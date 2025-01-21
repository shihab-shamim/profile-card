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
      
       {
        profile.map((pro,index)=><PanelBody key={index}className='bPlPanelBody' title={__(`Profile Card-${index+1}`, 'b-blocks')}  initialOpen={false} >
          <PanelBody className='bPlPanelBody' title={__('Profile Info', 'b-blocks')} initialOpen={false}>

     
     <TextControl
  label="Profile Image URL"
  value={profile[index].image || ""} // Access the nested value
  onChange={(newImage) => {
    const updatedProfile = [...profile];
    updatedProfile[index] = {
      ...updatedProfile[index],
      image: newImage,
    };
  
    setAttributes({
      profile: updatedProfile,
    });
  }}
  

/>

<MediaUploadCheck>
			<MediaUpload
          onSelect={(newImage) => {
            const updatedProfile = [...profile];
            updatedProfile[index] = {
              ...updatedProfile[index], 
              image: newImage.url, 
            };
          
            setAttributes({
              profile: updatedProfile, 
            });
          }}
          
				allowedTypes={['image'] }
				value={profile.image || "" }
				render={ ( { open } ) => (
					<Button isPrimary onClick={ open }>Upload Image</Button>
				) }
			/>
		</MediaUploadCheck>


<TextControl
  label="Profile Name"
  value={profile[index].name || ""} 
  onChange={(newName) => {
    const updatedProfile = [...profile]; 
    updatedProfile[index] = {
      ...updatedProfile[index], 
      name: newName, 
    };
  
    setAttributes({
      profile: updatedProfile, 
    });
  }}
  
  
/>


<TextControl
  label="Profile Designation"
  value={profile[index].designation || ""}
  onChange={(newDesignation) => {
    const updatedProfile = [...profile]; 
    updatedProfile[index] = {
      ...updatedProfile[index], 
      designation: newDesignation, 
    };
  
    setAttributes({
      profile: updatedProfile, 
    });
  }}
  
  
/>


<TextControl
  label="Profile Projects"
  value={profile[index].projects || ""} 
  onChange={(newProjects) => {
    const updatedProfile = [...profile]; 
    updatedProfile[index] = {
      ...updatedProfile[index], 
      projects: newProjects, 
    };
  
    setAttributes({
      profile: updatedProfile, 
    });
  }}
  
  
/>


<TextControl
  label="Profile Followers"
  value={profile[index].followers || ""} 
  onChange={(newFollowers) => {
    const updatedProfile = [...profile]; 
    updatedProfile[index] = {
      ...updatedProfile[index],
      followers: newFollowers, 
    };
  
    setAttributes({
      profile: updatedProfile,
    });
  }}
  
  
/>

<TextControl
  label="Profile Following"
  value={profile[index].following || ""} 
  onChange={(newFollowing) => {
    const updatedProfile = [...profile]; 
    updatedProfile[index] = {
      ...updatedProfile[index], 
      following: newFollowing, 
    };
  
    setAttributes({
      profile: updatedProfile,
    });
  }}
  
  
/>

<TextareaControl
	label="Profile Description"
	rows={4}
	value={ profile[index]?.description }
	onChange={(newDescription) => {
    const updatedProfile = [...profile]; 
    updatedProfile[index] = {
      ...updatedProfile[index],
      description: newDescription, 
    };
  
    setAttributes({
      profile: updatedProfile, 
    });
  }}
  
/>

<label>Profile Skills</label>
{profile[index]?.skills.map((skill, skillIndex) => (
  <div key={skillIndex}>
    <TextControl
      label={`Skill-${skillIndex + 1}`}
      value={skill}
      onChange={(newSkill) => {
        const updatedSkills = [...profile[index].skills];
        updatedSkills[skillIndex] = newSkill;
        const updatedProfile = [...profile];
        updatedProfile[index] = { ...profile[index], skills: updatedSkills };

        setAttributes({ profile: updatedProfile });
      }}
    />

    <Button
      isPrimary
      onClick={() => {
        const updatedSkills = profile[index].skills.filter(
          (_, i) => i !== skillIndex
        );
        const updatedProfile = [...profile];
        updatedProfile[index] = { ...profile[index], skills: updatedSkills };

        setAttributes({ profile: updatedProfile });
      }}
    >
      Delete
    </Button>
  </div>
))}






<FormTokenField
label='Add Skill'
  value={profile[index].skills} 
  suggestions={profile[index].skills} 
  onChange={(newSkills) => {
    const updatedProfile = [...profile]; 
    updatedProfile[index] = {
      ...updatedProfile[index],
      skills: newSkills, 
    };
  
    setAttributes({
      profile: updatedProfile, 
    });
  }}
  
/>




    </PanelBody>


        </PanelBody>)
       }

      </PanelBody>

      


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