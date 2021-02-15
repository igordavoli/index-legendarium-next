import styled from 'styled-components';

const InputBlock = styled.div`
	form {
		width: 96.62vw;
  	display: flex;
  	align-items: center;
  	justify-content: center;
  	
  	border-radius: 7.5px 7.5px 7.5px 7.5px;
  	box-shadow: 0px 3.75062px 3.75062px rgba(0, 0, 0, 0.25);
	}
	input {
  	width: 100%;
  	height: 35px;
  	padding: 2px 3px 2px 6px;
  	background: #f5f8fa;
  	border: 1px solid #d3e5dc;
  	border-radius: 7.5px 0px 0px 7.5px;
  	border-right: none;
  	font-size: 1.3rem;
  	color: #91a79a;
  	transition: all 200ms;
	}
	input::placeholder {
  	color: #91a79a;
  	font-family: sans-serif;
    font-size: 1.2rem;
	}
	button {
  	display: flex;
  	justify-content: center;
  	align-items: center;
  	height: 35px;
  	width: 50px;
  	border-radius: 0px 7.5px 7.5px 0px;
  	background: #e7f0eb;
  	border: 1px solid #d3e5dc;
  	border-left: none;
  	transition: background-color  200ms;
  	outline: none;
	}
	button:hover {
  	background-color: #d8dfdb;
	}
	button svg {
  	fill: #27ae60;
  	transition: background-color  200ms;
	}

	@media (min-width: 648px) {
    margin: auto;
		height: 27px;
		form {
			width: 75vw;
    	height: 27px;
    	border-right: none;
    	font-size: 1.5rem;
    	color: #91a79a;
			}
		input {
			height: 27px;
		}
		button {
    	width: 65px;
    	height: 27px;
    	display: flex;
    	justify-content: center;
    	align-items: center;
    	border-left: none;
  	}
	}
	@media (min-width: 768px) {
		form {
			width: clamp(100px, 40vw, 900px);
    	height: 27px;
    	border-right: none;
    	font-size: 1.5rem;
    	color: #91a79a;
    }
	
	}
`;

function InputBlck() {
  return (
   <InputBlock>
      <form 
        action="queryWord" 
        method="get" >
        <input required name="search" type="text" placeholder="Pesquisar..." title="Preencha o campo"/>
        <button type="submit" title="Buscar" alt="Buscar">
          <svg width="17" height="17" >
            <path d="M12.1498 10.6918H11.3819L11.1098 10.4294C12.0952 9.28636 12.6369 7.82709 12.6358 6.3179C12.6358 5.06834 12.2653 3.84684 11.571 2.80786C10.8768 1.76889 9.89009 0.95911 8.73565 0.480924C7.58121 0.00273743 6.31089 -0.122378 5.08534 0.121399C3.85979 0.365177 2.73404 0.966898 1.85047 1.85047C0.966898 2.73404 0.365177 3.85979 0.121399 5.08534C-0.122378 6.31089 0.00273747 7.58121 0.480924 8.73565C0.95911 9.8901 1.76889 10.8768 2.80786 11.571C3.84684 12.2653 5.06834 12.6358 6.3179 12.6358C7.88279 12.6358 9.32133 12.0623 10.4294 11.1098L10.6918 11.3819V12.1498L15.5517 17L17 15.5517L12.1498 10.6918ZM6.3179 10.6918C3.89766 10.6918 1.94397 8.73814 1.94397 6.3179C1.94397 3.89766 3.89766 1.94397 6.3179 1.94397C8.73814 1.94397 10.6918 3.89766 10.6918 6.3179C10.6918 8.73814 8.73814 10.6918 6.3179 10.6918Z"/>
          </svg>
        </button>
      </form>
    </InputBlock>  
  );
}

export default InputBlck;