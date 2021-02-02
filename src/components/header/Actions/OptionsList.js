import styled from 'styled-components'
 
const OptionsList = styled.div` 
  display: none;
	top: 50px;
	right: 17px;
	width: 250px;
	background: #f0f0f0;
	position: absolute;
	border-radius: 3px;
	overflow: hidden;
	transition: all 400ms;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	.switch-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;  
	}
	ul {
		list-style: none;
	}
	li {
		padding: .8rem 1.5rem .8rem 1.5rem;
	}
	.options-item {
		padding: 0;
	}
	.activevate-dark-mode {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;   
		padding: .8rem 1.5rem .8rem 1.5rem; 
		background-color: #e2e2e2;
	}
	li:hover{
		background-color: #cac9c938;
	}

	@media (min-width: 642px){
		top: 55px;
		right: 22px;
	}

	.switch {
		display: none;
	}
	label {
		border-radius: 22px;  
	}
	.switch + label {
		display: block;
		position: relative;
		cursor: pointer;
		outline: none;
		user-select: none;
	}
	.switch-shadow + label {
		padding: 1px;
		width: 35px;
		height: 15px;
		background-color: #cacaca;
		border-radius: 22px;
		transition: all 0.3s;		
	}
	.switch-shadow + label:before,
	.switch-shadow + label:after {
		display: block;
		position: absolute;
		top: 1px;
		left: 1px;
		bottom: 1px;
		content: '';
		border-radius: 22px; 	
	}
	.switch-shadow + label:before {
		right: 1px;
		background-color: #dcdcdc;
		border-radius: 22px;
		transition: all 0.4s;
		border: 1px;	
	}
	.switch-shadow + label:after {
		width: 13px;
		background-color: #fff;
		border-radius: 22px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
		transition: all 0.4s;	
	}
	.switch-shadow:checked + label:before {
		background-color: #77e9a2;	
	}
	.switch-shadow:checked + label:after {
		transform: translateX(20px);
		background-color: #5c5c5c;	   
	}
`;

function OptionsLst(){
  return(
    <OptionsList>
      <ul>
        <li>Conta</li>
        <li>Privacidade</li>
        <li className="options-item">
          <div className="activevate-dark-mode">
            <label htmlFor="darkMode">Modo escuro</label>
            <div className="switch-container">
              <input id="darkMode" className="switch switch-shadow" type="checkbox" />
              <label htmlFor="darkMode"></label>
            </div>
          </div>
        </li>
        <li>Configirações</li>
      </ul>
    </OptionsList>
  )
}

export default OptionsLst;