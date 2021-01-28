import styled from 'styled-components'
import OptionsList from './OptionsList'

const Actions = styled.div`
	align-self: flex-end;
	display: flex;
	align-items: center;
	height: 30px;
	width: 100%;
	font-size: 1.3rem;
	font-family: sans-serif;
	color: #999;
	@media (min-width: 642px) {
		align-self: center;
		order: +2;
		width: 300px;
		font-family: sans-serif;
    margin-left: auto;
	}
`;

Actions.addWord = styled.a`
  display: flex;
		align-items: center;
		justify-content: center; 
		width: auto;
	.add-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 25px;
		height: 25px;
		padding: 2.5px 0 2.5px 0;
		cursor: pointer;
		border-radius: 4px;
	}
	.add-icon {
		margin-left: 2.5px;
		padding: 2px;
	}
	.add-icon:hover {
		background-color: #aaaaaa46;
	}
`;

Actions.options = styled.a`
	align-self: flex-end;
	display: flex;
	align-items: center; 
  justify-content: center;
	height: 30px;
	font-size: 1.3rem;
	font-family: sans-serif;
	color: #999;
	margin-left: auto;
	.user-icon,
	.options-icon {
		display: flex;
		align-items: center;
		justify-content: center;

		height: 25px;
		padding: 2.5px 0 2.5px 0;
		cursor: pointer;
		border-radius: 4px;
	}
	.user-icon {
		padding: 0;
		margin-left: 2.5px;
	}
	.user-icon svg {
    display: flex;
		align-items: center;
		justify-content: center;
		width: 25px;
		height: 25px;
	}
	.options-icon {
		width: 22.5px;  
	}
	.options-icon svg {
		width: 10px;
		height: 22.5px;
	}
`;

function ActionsContainer() {
  return (
    <Actions>
        <Actions.addWord href="/add-word">
					<div className="add-icon" title="Adicionar palavra">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="13" width="5" height="30" rx="2" fill="white"/>
              <rect y="17" width="5" height="30" rx="2" transform="rotate(-90 0 17)" fill="white"/>
            </svg>
					</div>
				</Actions.addWord>
				<Actions.options className="options">
					<div className="user-icon">
						<svg
							version="1.1"
							// style="fill-rule:evenodd" 
							viewBox="0 0 3340.802 3340.802">
							<circle className="fill2" cx="1670.401" cy="1670.401" r="1670.401" />
							<path className="fill1" d="M2825.618 2876.876c-300.018,287.349 -706.986,463.926 -1155.217,463.926 -448.231,0 -855.199,-176.577 -1155.217,-463.926 170.524,-473.105 623.344,-811.36 1155.217,-811.36 531.873,0 984.693,338.255 1155.217,811.36z" />
							<circle className="fill1" cx="1670.401" cy="1367.015" r="536.222" />
						</svg>
					</div>
					<div id="options-icon" className="options-icon" alt="Opções" title="Opções">
						<svg className="fill0" version="1.1" viewBox="0 0 584.26 2000">
							<circle cx="292.13" cy="292.13" r="292.13" />
							<circle cx="292.13" cy="1000" r="292.13" />
							<circle cx="292.13" cy="1707.86" r="292.13" />
						</svg>
					</div>	
          <OptionsList/>
				</Actions.options>
			</Actions>
  )
}
export default ActionsContainer;