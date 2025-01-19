import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';
import ProfileCard from './Components/Common/ProfileCard';

document.addEventListener('DOMContentLoaded', () => {
	const blockNameEls = document.querySelectorAll('.wp-block-b-blocks-test-purpose');
	blockNameEls.forEach(blockNameEl => {
		const attributes = JSON.parse(blockNameEl.dataset.attributes);

		createRoot(blockNameEl).render(<>
			<Style attributes={attributes} id={blockNameEl.id} />

			<ProfileCard attributes={attributes}  view={true}></ProfileCard>
		</>);

		blockNameEl?.removeAttribute('data-attributes');
	});
});