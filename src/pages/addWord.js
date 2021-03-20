import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { FormComponent } from "../components/Styled/FormComponent";
import { useRouter } from "next/router";
import { api } from "../services/api";

function FormAdd(props) {
  const router = useRouter();

  const [vocable, setVocable] = React.useState("");
  const [language, setLanguage] = React.useState("");
  const [type, setType] = React.useState("");
  const [meaning, setMeaning] = React.useState("");
  const [about, setAbout] = React.useState("");
  const [pages, setPages] = React.useState("");
  const [see_too, setSee_too] = React.useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    // # TEMPORALY HARDCODED #
    const user_id = "115f3a6a-673c-46c9-a3f4-7d109a9c3472";

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

    console.log(word);

    await api.post("addWord", word);

    alert("Salvo");

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
  const displayAddButton = false;

  return (
    <>
      <Header displayAddButton={displayAddButton} />
      <main>
        <FormAdd />
      </main>
    </>
  );
}
