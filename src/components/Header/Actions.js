import { useState } from 'react';
import { ActionsComponent, OptionsComponent } from '../Styled/ActionsComponent';
import AddWord from './AddWord';
import OptionsListComponent from './OptionsList';

export default function Actions() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHover, setIsHover] = useState(false)

  return (
    <ActionsComponent>
      <AddWord />
      <OptionsComponent
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
      </OptionsComponent>

      <OptionsListComponent isOpen={isOpen} isHover={isHover} />

    </ActionsComponent>
  );
};