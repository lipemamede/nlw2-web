import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
    <header>
      <img src="https://scontent.fsod2-1.fna.fbcdn.net/v/t1.0-9/75264795_2967523783262213_3760839334798819328_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_eui2=AeFhWZ5BmWkICDFJIxsvfotKMUA7zkSQZ8sxQDvORJBny892ovm7stIRFjLvkbMlVw47Y8ZuNeofjFmo1j8oVAq2&_nc_ohc=XoK7fik64ycAX_Dgzls&_nc_ht=scontent.fsod2-1.fna&oh=c76bcca08829882fe98fb5d62c545d03&oe=5F4DDE2F" alt="Felipe Mamede"/>
      <div>
        <strong>Felipe Mamede</strong>
        <span>Desenvolvimento de Jogos</span>
      </div>
    </header>

    <p>
      Entusiasta das melhores tecnologias de jogos.
      <br /><br />
      Apaixonado por desenvolvimento de jogos mudando a vida das pesseoas através de experiencias.
      Mais de 800 mil pessoas já passaram por uma dessas experiencias
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>
          R$ 120,00                
        </strong>
      </p>

      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
      </button>
    </footer>
  </article>
  )
}

export default TeacherItem;