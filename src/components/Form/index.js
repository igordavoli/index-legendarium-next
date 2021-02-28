import FormComponent from '../src/styles/FormComponent';

export default function Form() {

  return (
    <FormComponent
      as={motion.section}
      initial={{ opacity: 0 }}
      animate={{ opacity: [.5, 1] }}
      transition={{ duration: 0.1 }}
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


      <button type="submit" className="primary-button">Salvar</button>

    </FormComponent>
  )
}