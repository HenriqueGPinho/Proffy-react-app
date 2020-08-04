import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';


function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/48736821?s=460&v=4" alt="Henrique Pinho" />
        <div>
          <strong>Henrique Pinho</strong>
          <span>Física</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br /><br />
        Sapiente adipisci, enim blanditiis nemo incidunt consectetur! Deserunt nostrum eaque est, quos quis quia.
        Facilis eaque alias explicabo iste quia, a nostrum!
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 60,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
            Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;