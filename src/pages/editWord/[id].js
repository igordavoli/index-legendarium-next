import { useRouter } from 'next/router';
import { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../../components/Header';
import { api } from '../../services/api';
import { FormComponent } from '../../StyledComponents/FormComponent';
import { LoginContext } from '../../contexts/LoginContext';

function FormEdit(props) {
  const router = useRouter();
  const { isLoged } = useContext(LoginContext);
  const wordToEdit = props.props.word;
  const [vocable, setVocable] = useState(wordToEdit.vocable);
  const [language, setLanguage] = useState(wordToEdit.language);
  const [type, setType] = useState(wordToEdit.type);
  const [meaning, setMeaning] = useState(wordToEdit.meaning);
  const [about, setAbout] = useState(wordToEdit.about);
  const [pages, setPages] = useState(wordToEdit.pages);
  const [see_too, setSee_too] = useState(wordToEdit.see_too);

  async function handleSubmit(event) {
    event.preventDefault();
    if (isLoged) {
      const word = {
        id: router.query.id,
        vocable,
        language,
        type,
        meaning,
        about,
        pages,
        see_too,
      };

      const response = await api.post("editWord", { word });

      const { message } = response.data;

      alert(message ? message : "Dados Salvos");

    } else {
      alert("É nessessário esta logado para salvar!");
    }
  }

  return (
    <FormComponent onSubmit={handleSubmit}>
      <div className="input-block">
        <label forhtlm="vocable">Vocábulo*</label>

        <input
          required
          name="vocable"
          id="vocable"
          type="text"
          value={vocable}
          onChange={event => setVocable(event.target.value)}
        />
      </div>
      <div className="input-block selectors">
        <div className="select">
          <label forhtlm="language">Idioma</label>
          <select
            name="language"
            id="language"
            value={language}
            onChange={event => setLanguage(event.target.value)}
          >
            <option value="">Nenhum</option>
            <option value="Khuzdul">Khuzdul (língia dos anãos)</option>
            <option value="Quenya">Quenya (alto élfico)</option>
            <option value="Sindarin">Sindarin (élfico cinzento)</option>
            <option value="Westron">Westron (fala comum)</option>
          </select>
        </div>
        <div className="select">
          <label forhtlm="type">Tipo</label>
          <select
            name="type"
            id="type"
            value={type}
            onChange={event => setType(event.target.value)}
          >
            <option value="">Nenhum</option>
            <option value="person">Pessoa</option>
            <option value="place">Lugar</option>
            <option value="object">Objeto</option>
          </select>
        </div>
      </div>
      <div className="input-block">
        <label forhtlm="meaning">Sigificado</label>
        <textarea
          name="meaning"
          id="meaning"
          type="text"
          value={meaning}
          onChange={event => setMeaning(event.target.value)}
        ></textarea>
      </div>
      <div className="input-block">
        <label forhtlm="about">Sobre</label>
        <textarea
          name="about"
          id="about"
          type="text"
          value={about}
          onChange={event => setAbout(event.target.value)}
        ></textarea>
      </div>
      <div className="input-block">
        <label forhtlm="pages">Páginas</label>
        <textarea
          name="pages"
          id="pages"
          type="text"
          value={pages}
          onChange={event => setPages(event.target.value)}
        ></textarea>
      </div>
      <div className="input-block">
        <label forhtlm="see_too">Ver também</label>
        <textarea
          name="see_too"
          id="related"
          type="text"
          value={see_too}
          onChange={event => setSee_too(event.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="primary-button">
        Salvar
      </button>
    </FormComponent>
  );
}

function editWord(props) {
  const displayAddButton = true;

  return (
    <>
      <Header displayAddButton={displayAddButton} />
      <main>
        <FormEdit props={props} />
      </main>
    </>
  );
}

async function getServerSideProps(context) {
  const { id } = context.params;
  let response = null;

  try {
    response = await api.get(`/editWord/${id}`);
  } catch (error) {
    return alert("Connection server error!");
  }
  const word = response.data;

  return {
    props: { word },
  };
}

export default editWord;
export { getServerSideProps };
