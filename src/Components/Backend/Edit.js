import { useBlockProps } from "@wordpress/block-editor";

import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import ProfileCard from "../Common/ProfileCard";

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;
  const{profile}=attributes


  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps()} id={`block-${clientId}`}>
        <Style attributes={attributes} id={`block-${clientId}`} />

        <div className="cardsContainer">
        {
         Array.isArray(profile) && profile.map((pro,index) =><ProfileCard key={index} pro={pro} index={index} attributes={attributes} setAttributes={setAttributes}></ProfileCard>)
          
        }
        </div>

        
      </div>
    </>
  );
};
export default Edit;
