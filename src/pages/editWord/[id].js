import { useRouter } from "next/router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { FormComponent } from "../../StyledComponents/FormComponent";
import cookies from "js-cookie";

function FormEdit(props) {
  const router = useRouter();

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

    // # TEMPORALY HARDCODED #
    const token = "115f3a6a-673c-46c9-a3f4-7d109a9c3472";

    const word = {
      user_id,
      vocable,
      language,
      type,
      meaning,
      about,
      pages,
      see_too,
    };

    await api.post("editWord", { word, token });

    alert("Dados Salvos");

    router.push(`/words?search=${vocable}`);
  }

  return (
    <FormComponent onSubmit={handleSubmit}>
      <div className='input-block'>
        <label forhtlm='vocable'>Vocábulo*</label>

        <input
          required
          name='vocable'
          id='vocable'
          type='text'
          value={vocable}
          onChange={event => setVocable(event.target.value)}
        />
      </div>
      <div className='input-block selectors'>
        <div className='select'>
          <label forhtlm='language'>Idioma</label>
          <select
            name='language'
            id='language'
            value={language}
            onChange={event => setLanguage(event.target.value)}
          >
            <option value=''>Nenhum</option>
            <option value='Khuzdul'>Khuzdul (língia dos anãos)</option>
            <option value='Quenya'>Quenya (alto élfico)</option>
            <option value='Sindarin'>Sindarin (élfico cinzento)</option>
            <option value='Westron'>Westron (fala comum)</option>
          </select>
        </div>
        <div className='select'>
          <label forhtlm='type'>Tipo</label>
          <select
            name='type'
            id='type'
            value={type}
            onChange={event => setType(event.target.value)}
          >
            <option value=''>Nenhum</option>
            <option value='person'>Pessoa</option>
            <option value='place'>Lugar</option>
            <option value='object'>Objeto</option>
          </select>
        </div>
      </div>
      <div className='input-block'>
        <label forhtlm='meaning'>Sigificado</label>
        <textarea
          name='meaning'
          id='meaning'
          type='text'
          value={meaning}
          onChange={event => setMeaning(event.target.value)}
        ></textarea>
      </div>
      <div className='input-block'>
        <label forhtlm='about'>Sobre</label>
        <textarea
          name='about'
          id='about'
          type='text'
          value={about}
          onChange={event => setAbout(event.target.value)}
        ></textarea>
      </div>
      <div className='input-block'>
        <label forhtlm='pages'>Páginas</label>
        <textarea
          name='pages'
          id='pages'
          type='text'
          value={pages}
          onChange={event => setPages(event.target.value)}
        ></textarea>
      </div>
      <div className='input-block'>
        <label forhtlm='see_too'>Ver também</label>
        <textarea
          name='see_too'
          id='related'
          type='text'
          value={see_too}
          onChange={event => setSee_too(event.target.value)}
        ></textarea>
      </div>
      <button type='submit' className='primary-button'>
        Salvar
      </button>
    </FormComponent>
  );
}

function editWord(props) {
  const displayAddButton = true;
  const word = props;
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
  const response = await api.get(`/editWord/${id}`);
  const word = response.data;

  return {
    props: { word },
  };
}

export default editWord;
export { getServerSideProps };
