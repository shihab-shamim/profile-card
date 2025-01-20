import { getColorsCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id }) => {
	const { colors,cardStyle ,cardBackground,CardBorder,profileImage,names,description,details,designation,skillses,skillsesBorder,skillsespadding,layout} = attributes;

	const mainSl = `#${id}`;
	

	const container=`${mainSl} .container`
	const profileCard=`${container} .profile-card`
	const cardContent=`${profileCard} .card-content`
	const avatarWrapper=`${cardContent} .avatar-wrapper`
	const avatar=`${avatarWrapper} .avatar`
	const profileInfo=`${cardContent} .profile-info`
	const name=`${cardContent} .name`
	const title=`${cardContent} .title`
	const stats=`${profileInfo} .stats`
	const stat=`${stats} .stat`
	const statValue=`${stat} .stat-value`
	const statLabel=`${stats} .stat-label`
	const bio=`${cardContent} .bio`
	const skills=`${cardContent} .skills`
	const skill=`${cardContent} .skill`
	const cardContainer=`${mainSl} .cardsContainer`



	return <style dangerouslySetInnerHTML={{
		__html: `
		${container} {
			width: 100%;
		max-width: ${cardStyle?.width};
		
		  }
		${profileCard}{
		min-height: ${cardStyle?.height};
  		background-color: ${cardBackground};
		border-radius: ${CardBorder?.top} ${CardBorder?.right} ${CardBorder?.bottom} ${CardBorder?.left};

		}
		${avatar}{
		width: ${profileImage?.width}; 
		height: ${profileImage?.height};
		border-radius: ${profileImage?.top} ${profileImage?.right} ${profileImage?.bottom} ${profileImage?.left};
		}
		${name}{
		background: ${names?.color} ;-webkit-background-clip: text;
		font-size: ${names?.size};
		}
		${title}{
		color: ${description?.color};
		font-size: ${description?.size};
		
		}
		${statValue}{
		background: ${details?.color} ;-webkit-background-clip: text;
		font-size: ${details?.size};
	}
		${statLabel}{
	    color: ${description?.color};
		font-size: ${description?.size};
		}
		
		${bio}{
		color: ${designation?.color};
		font-size: ${designation?.size};
		}
		${skill} {
		background-color: ${skillses?.bg};
		font-size: ${skillses?.size};
		color: ${skillses?.color};
		border-radius: ${skillsesBorder?.top} ${skillsesBorder?.right} ${skillsesBorder?.bottom} ${skillsesBorder?.left};
		padding:${skillsespadding?.top} ${skillsespadding?.right} ${skillsespadding?.bottom} ${skillsespadding?.left};

		}
		${cardContainer}{
		display: grid;
          grid-template-columns:${layout===2?"1fr 1fr " :"1fr 1fr 1fr"};
        gap:10px;
	}

	`}} />;
}
export default Style;