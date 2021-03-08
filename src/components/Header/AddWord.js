import Link from '../Link';
import { AddWordComponent } from '../Styled/AddWordComponent';

export default function AddWord() {
  return (
    <AddWordComponent
      as={Link}
      href="/addWord"
    >
      <div className="add-icon" title="Adicionar palavra">
        <svg
          width="30" height="30" viewBox="0 0 30 30">
          <rect x="13" width="5" height="30" rx="2" fill="white" />
          <rect y="17" width="5" height="30" rx="2" transform="rotate(-90 0 17)" fill="white" />
        </svg>
      </div>
    </AddWordComponent>
  )
}