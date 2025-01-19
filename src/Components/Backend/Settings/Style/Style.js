import { useState } from "react";
import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalBoxControl as BoxControl,
  __experimentalUnitControl as UnitControl
} from "@wordpress/components";
import { ColorsControl } from "../../../../../../bpl-tools/Components";
import { ColorPicker } from "@wordpress/components";

const Style = ({ attributes, setAttributes }) => {
  const { colors , cardStyle,cardBackground} = attributes;
  const [values, setValues] = useState({
    top: "50px",
    left: "10px",
    right: "10px",
    bottom: "50px",
  });



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

<ColorPicker
	color={ cardBackground }
/>

       
      </PanelBody>
    </>
  );
};

export default Style;
