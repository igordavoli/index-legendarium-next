import Form from '../components/Form';
import { Header } from '../components/Header';

export default function addWord() {
  const displayAddButton = true;

  return (
    <>
      <Header displayAddButton={displayAddButton} />
      <main>
        <Form />
      </main>
    </>
  );
}