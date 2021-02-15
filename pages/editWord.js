import styled from 'styled-components';
import Header from '../src/components/Header';
import { motion } from 'framer-motion'

const Form = styled.form`
	display: flex;
	flex-direction: column;
	height:fit-content;
	width: 95vw;
	margin: 10px 0 10px 0 ;
	padding: 20px 30px  20px  30px;
	background-color: #f0f0f0;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 7.5px;
	line-height: 2.25rem;
	font-size: 1.5rem;
	transition: background-color  200ms;
	color: #9bafa0;

h1 {
	line-height: 3rem;
	font-style: Playfair Display;
}

.input-block {
	margin: 15px 0 15px 0;   
}

label {
	display: flex;
	justify-content: space-between;
	font-family: sans-serif;
}

.selectors {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 16rem;
}
.selectors select {
	width: 250px;
	height: 30px;
	border: none;
	border-radius: 5px;
	background-color: #27ae60ee;
	color: #fefefe;
	font-size: 1.5rem;
}

input,
textarea {
	height: 35px;
	width: 100%;
	padding: 5px;
	margin-top: 5px;
	border: 1px solid #d3e5dc; 
	border-radius: 7.5px;
	font-size: 1.5rem;
	line-height: 2rem;
	font-family: sans-serif;
	color: #82a18b;
}
textarea {
	height: 100px;
	resize: vertical;
}
div.button {
	align-self: center;
	width: 100%;
	margin: 0px 20px 20px 20px;  
}

.primary-button{
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: 35px;
	background: #37C77F;
	border-radius: 7.5px;
	border: none;
	cursor: pointer;
	transition: background-color  200ms;
	margin-top: 6.4rem;
	font-size: 1.6rem;
	line-height: 26px;
	color:#ffffff;
	text-decoration: none;
}



/* Dark-mode */
.dark-mode {
	background-color: #545859;
}

.dark-mode input,
.dark-mode textarea {
	background-color: #818a89;
	border-color: #818a89;
	color: #fefefe;
} 

/* Desktop version */
@media (min-width: 642px) {
 
		width: 700px;
	
 h1 {
		margin-bottom: 20px;
			
	}
 .selectors {
		height: auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	div.button,
	.primary-button{
		width: 200px;
	}
}
`

export default function addWord() {
	return (
		<>
			<Header/>
			<main>
				<Form 
          animate={'show'}
          action="saveWord" 
          method="post" 
          className="animate-down"
        >
					<div className="input-block">
						<label forhtlm="vocable">Vocábulo*
					<spam className="proper">
							</spam>
						</label>
						<input required name="vocable" id="vocable" type="text" />
					</div>
					<div className="input-block selectors">
						<div className="select"  >
							<label forhtlm="language">Idioma</label>
							<select name="language" id="language" >
								<option value="">Selecione uma opção</option>
								<option value="Khuzdul (língia dos anãos)">Khuzdul (língia dos anãos)</option>
								<option value="Quenya (alto élfico) ">Quenya (alto élfico) </option>
								<option value="Sindarin(élfico cinzento)">Sindarin (élfico cinzento)</option>
								<option value="Westron (fala comum)">Westron (fala comum)</option>
							</select>
						</div>
						<div className="select">
							<label forhtlm="type">Tipo</label>
							<select name="type" id="type" >
								<option value="">Selecione uma opção</option>
								<option value="person">Pessoa</option>
								<option value="place">Lugar</option>
								<option value="object">Objeto</option>
							</select>
						</div>
					</div>
					<div className="input-block">
						<label forhtlm="meaning">Sigificado</label>
						<textarea name="meaning" id="meaning" type="text"></textarea>
					</div>
					<div className="input-block">
						<label forhtlm="about">Sobre</label>
						<textarea name="about" id="about" type="text"></textarea>
					</div>
					<div className="input-block">
						<label forhtlm="pages">Páginas</label>
						<textarea name="pages" id="pages" type="text" ></textarea>
					</div>
					<div className="input-block">
						<label forhtlm="see">Ver também</label>
						<textarea name="see" id="related" type="text" ></textarea>
					</div>

					<div className="button">
						<button type="submit" className="primary-button">Salvar</button>
					</div>
				</Form>
			</main>
		</>

	)
}