import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';
import ProfileCard from './Components/Common/ProfileCard';

document.addEventListener('DOMContentLoaded', () => {
	const blockNameEls = document.querySelectorAll('.wp-block-b-blocks-test-purpose');
	blockNameEls.forEach(blockNameEl => {
		const attributes = JSON.parse(blockNameEl.dataset.attributes);
		const {profile}=attributes

		createRoot(blockNameEl).render(<>
			<Style attributes={attributes} id={blockNameEl.id} />

			<div className='cardsContainer'>
			{
          profile.map((pro,index) =><ProfileCard view={true} key={index} pro={pro} attributes={attributes} ></ProfileCard>)
          
        }

			</div>
		</>);

		blockNameEl?.removeAttribute('data-attributes');
	});
});