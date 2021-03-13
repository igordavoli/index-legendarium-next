import { Header } from "../components/Header";
import { api } from "../services/api";
import { motion } from "framer-motion";
import { FormComponent } from "../components/Styled/FormComponent";
import { useRouter } from "next/router";

function FormEdit(props) {
  const router = useRouter();

  const toEditWord = props.props;

  const [vocable, setVocable] = React.useState(toEditWord.vocable);
  const [language, setLanguage] = React.useState(toEditWord.language);
  const [type, setType] = React.useState(toEditWord.type);
  const [meaning, setMeaning] = React.useState(toEditWord.meaning);
  const [about, setAbout] = React.useState(toEditWord.about);
  const [pages, setPages] = React.useState(toEditWord.pages);
  const [see_too, setSee_too] = React.useState(toEditWord.see_too);

  async function handleSubmit(event) {
    event.preventDefault();

    // # TEMPORALY HARDCODED #
    const user_id = "ab9bbc76-cf45-4571-8386-471b131cefb2";

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

    await api.post("editWord", word);

    alert("Dados Salvos");

    router.push("/words");
  }

  return (
    <FormComponent onSubmit={handleSubmit}>
      <div className='input-block'>
        <label forhtlm='vocable'>
          Vocábulo*
          <spam className='proper'></spam>
        </label>
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

export default function addWord() {
  const displayAddButton = true;
  const word = {
    vocable: "Helm",
    language: "Westron",
    type: "place",
    meaning: "dczczcdv",
    about: "fdhfgjhkhjl",
    pages: "dfsdfds",
    see_too: "fdfgdfhdf",
  };

  return (
    <>
      <Header displayAddButton={displayAddButton} />
      <main>
        <FormEdit props={word} />
      </main>
    </>
  );
}
