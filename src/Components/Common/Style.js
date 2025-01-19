import { getColorsCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id }) => {
	const { colors,cardStyle ,cardBackground} = attributes;

	const mainSl = `#${id}`;
	

	const container=`${mainSl} .container`
	const profileCard=`${container} .profile-card`

	return <style dangerouslySetInnerHTML={{
		__html: `
		${container} {
			width: 100%;
		max-width: ${cardStyle?.width};
		
		  }
		${profileCard}{
		min-height: ${cardStyle?.height};
  		background-color: ${cardBackground};

		}
		
		

	`}} />;
}
export default Style;