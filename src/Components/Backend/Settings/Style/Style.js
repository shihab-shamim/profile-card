import { useState } from "react";
import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalBoxControl as BoxControl,
  __experimentalUnitControl as UnitControl, 
  GradientPicker 
 } from "@wordpress/components";

import { ColorPicker } from "@wordpress/components";

const Style = ({ attributes, setAttributes }) => {
  const { colors , cardStyle,cardBackground,CardBorder,profileImage,names,description,details,designation,skillses,skillsesBorder,skillsespadding} = attributes;
 



  return (
    <>
      <PanelBody
      
        className="bPlPanelBody"
        title={__("Profile Card Style", "b-blocks")}
        initialOpen={false}
      >
        <UnitControl
	onChange={(val)=>setAttributes({
    cardStyle: {
      ...cardStyle,
      width: val
    },
  }) }
	onUnitChange={ e => console.log("new unit") }
	label="Width"
	isUnitSelectTabbable
	value={ cardStyle.width } />
  <UnitControl
	onChange={(val)=>setAttributes({
    cardStyle: {
      ...cardStyle,
      height: val
    },
  }) }
	onUnitChange={ e => console.log("new unit") }
	label="Height"
	isUnitSelectTabbable
	value={ cardStyle.height } />

  <label>Card Background Color</label>

<ColorPicker
	color={cardBackground}
  onChangeComplete={(color) => setAttributes({ cardBackground: color.hex }) }
  label={__("Background Color", "b-blocks")} 
/>



<BoxControl
  label={__('Border Radius', 'b-blocks')}
  values={{
    top: CardBorder.top,
    right: CardBorder.right,
    bottom: CardBorder.bottom,
    left: CardBorder.left,
  }}
  onChange={(values) =>
    setAttributes({
      CardBorder: {
        ...CardBorder,
        ...values, 
      },
    })
  }
/>



       
      </PanelBody>



      <PanelBody
      className="bPlPanelBody"
      title={__("Profile Card Content Style", "b-blocks")}
      initialOpen={false}

      >
        <PanelBody
      className="bPlPanelBody"
      title={__("Profile Image Style", "b-blocks")}
      initialOpen={false}

      >

<UnitControl
	onChange={(val)=>setAttributes({
    profileImage: {
      ...profileImage,
      width: val
    },
  }) }
	onUnitChange={ e => console.log("new unit") }
	label="Width"
	isUnitSelectTabbable
	value={ profileImage.width } />
<UnitControl
	onChange={(val)=>setAttributes({
    profileImage: {
      ...profileImage,
      height: val
    },
  }) }
	onUnitChange={ e => console.log("new unit") }
	label="Height"
	isUnitSelectTabbable
	value={ profileImage.height } />
  <BoxControl
  label={__('Border Radius', 'b-blocks')}
  values={{
    top: profileImage.top,
    right: profileImage.right,
    bottom: profileImage.bottom,
    left: profileImage.left,
  }}
  onChange={(values) =>
    setAttributes({
      profileImage: {
        ...profileImage,
        ...values, 
      },
    })
  }
/>

      </PanelBody>
      <PanelBody
      className="bPlPanelBody"
      title={__("Profile Card Name Style", "b-blocks")}
      initialOpen={false}
      >
<UnitControl
	onChange={(val)=>setAttributes({
    names: {
      ...names,
      size: val
    },
  }) }
	onUnitChange={ e => console.log("new unit") }
	label="name size"
	isUnitSelectTabbable
	value={ names.size } />

<GradientPicker
					value={names.color}
					onChange={(newValue) => 
            setAttributes({
              names: {
                ...names, 
                color: newValue, 
              },
            })
          }
				/>



      </PanelBody>


      {/*  */}
      <PanelBody
      className="bPlPanelBody"
      title={__("Profile Card Designation Style", "b-blocks")}
      initialOpen={false}
      >
<UnitControl
	onChange={(val)=>setAttributes({
    description: {
      ...description,
      size: val
    },
  }) }
	onUnitChange={ e => console.log("new unit") }
	label="Designation size"
	isUnitSelectTabbable
	value={ description.size } />

        <ColorPicker
	color={ description?.color}
  onChange={(newValue) => 
    setAttributes({
      description: {
        ...description, 
        color: newValue, 
      },
    })
  }
/>



      </PanelBody>

      {/*  */}
      

      <PanelBody
      className="bPlPanelBody"
      title={__("Profile Card Details Style", "b-blocks")}
      initialOpen={false}
      >
<UnitControl
	onChange={(val)=>setAttributes({
    details: {
      ...details,
      size: val
    },
  }) }
	onUnitChange={ e => console.log("new unit") }
	label="Details size"
	isUnitSelectTabbable
	value={ details.size } />

        
<GradientPicker
					value={details.color}
					onChange={(newValue) => 
            setAttributes({
              details: {
                ...details, 
                color: newValue, 
              },
            })
          }
				/>


      </PanelBody>

      {/*  */}


      <PanelBody
      className="bPlPanelBody"
      title={__("Profile Card Description Style", "b-blocks")}
      initialOpen={false}
      >
<UnitControl
	onChange={(val)=>setAttributes({
    designation: {
      ...designation,
      size: val
    },
  }) }
	onUnitChange={ e => console.log("new unit") }
	label="Description size"
	isUnitSelectTabbable
	value={ designation.size } />

        <ColorPicker
	color={ designation?.color}
  onChange={(newValue) => 
    setAttributes({
      designation: {
        ...designation, 
        color: newValue, 
      },
    })
  }
/>



      </PanelBody>

      {/*  skills */}

      <PanelBody
      className="bPlPanelBody"
      title={__("Profile Card Skills Style", "b-blocks")}
      initialOpen={false}
      >
<UnitControl
	onChange={(val)=>setAttributes({
    skillses: {
      ...skillses,
      size: val
    },
  }) }
	onUnitChange={ e => console.log("new unit") }
	label="Skills size"
	isUnitSelectTabbable
	value={ skillses.size } />

  <label>Skills Color</label>

        <ColorPicker
	color={ skillses?.color}
  onChange={(newValue) => 
    setAttributes({
      skillses: {
        ...skillses, 
        color: newValue, 
      },
    })
  }
/>
  <label>Skills Background Color</label>

        <ColorPicker
	color={ skillses?.bg}
  onChange={(newValue) => 
    setAttributes({
      skillses: {
        ...skillses, 
        bg: newValue, 
      },
    })
  }
/>
<BoxControl
  label={__('Border Radius', 'b-blocks')}
  values={{
    top: skillsesBorder.top,
    right: skillsesBorder.right,
    bottom: skillsesBorder.bottom,
    left: skillsesBorder.left,
  }}
  onChange={(values) =>
    setAttributes({
      skillsesBorder: {
        ...skillsesBorder,
        ...values, 
      },
    })
  }
/>
<BoxControl
  label={__('Skills Padding', 'b-blocks')}
  values={{
    top: skillsespadding.top,
    right: skillsespadding.right,
    bottom: skillsespadding.bottom,
    left: skillsespadding.left,
  }}
  onChange={(values) =>
    setAttributes({
      skillsespadding: {
        ...skillsespadding,
        ...values, 
      },
    })
  }
/>



      </PanelBody>
      </PanelBody>
    </>
  );
};

export default Style;
