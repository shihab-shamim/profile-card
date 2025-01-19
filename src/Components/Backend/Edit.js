import { useBlockProps } from "@wordpress/block-editor";

import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import ProfileCard from "../Common/ProfileCard";

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;


  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps()} id={`block-${clientId}`}>
        <Style attributes={attributes} id={`block-${clientId}`} />

        <ProfileCard attributes={attributes} setAttributes={setAttributes}></ProfileCard>

        
      </div>
    </>
  );
};
export default Edit;
