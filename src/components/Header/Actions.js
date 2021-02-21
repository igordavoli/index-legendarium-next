import { useState } from 'react';
import OptionsList from './OptionsList';
import Link from '../Link';
import { ActionsElement, AddWord, Options } from '../../styles/Actions';

export default function Actions() {
	const [isOpen, setIsOpen] = useState(false)
  const [isHover, setIsHover] = useState(false)
 
	return (
		<ActionsElement>
			<AddWord 
        as={Link}
        href="/addWord"
      >
				<div className="add-icon" title="Adicionar palavra">
					<svg 
            width="30" height="30" viewBox="0 0 30 30">
						<rect x="13" width="5" height="30" rx="2" fill="white" />
						<rect y="17" width="5" height="30" rx="2" transform="rotate(-90 0 17)" fill="white" />
					</svg>
				</div>
			</AddWord>
			<Options 
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={(event) => {
          event.stopPropagation();
          setIsOpen(!isOpen);
        }}
        alt="Opções" 
        title="Opções"
      >
				<div className="user-icon">
					<svg
						version="1.1"
						viewBox="0 0 3340.802 3340.802">
						<circle className="fill2" cx="1670.401" cy="1670.401" r="1670.401" />
						<path className="fill1" d="M2825.618 2876.876c-300.018,287.349 -706.986,463.926 -1155.217,463.926 -448.231,0 -855.199,-176.577 -1155.217,-463.926 170.524,-473.105 623.344,-811.36 1155.217,-811.36 531.873,0 984.693,338.255 1155.217,811.36z" />
						<circle className="fill1" cx="1670.401" cy="1367.015" r="536.222" />
					</svg>
				</div>
				<div id="options-icon" className="options-icon">
					<svg className="fill0" version="1.1" viewBox="0 0 584.26 2000">
						<circle cx="292.13" cy="292.13" r="292.13" />
						<circle cx="292.13" cy="1000" r="292.13" />
						<circle cx="292.13" cy="1707.86" r="292.13" />
					</svg>
				</div>
			</Options>
				<OptionsList isOpen={isOpen} isHover={isHover} />
		</ActionsElement>
	);
};