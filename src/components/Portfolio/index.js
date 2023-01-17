import React, { useState } from "react";
import './index.css'
import Modal from "../Modal"


function Portfolio() {
  const mainCard = [
    {
      name: 'Pet-Portal',
      category: 'Pet-Portal',
      className: 'big-card Pet-Portal hover-effect',
      description: 'Pet Portal is a collaborative effort with a creative twist to provide clinics a unique way to communicate with clients.',
      built: 'HTML, CSS, bootstrap, JavaScript, Node.js, Express, MySQL, Sequelize, Animejs'
    },
  ]
  const gifs = [
    {
      name: 'Just-Tech',
      category: 'Just-Tech',
      className: 'card Just-Tech col-5 hover-effect',
      description: 'Just Tech News is a social media platform for developers that are in to blogging. Users can create an account and interact with other developers',
      built: 'HTML, CSS, JavaScript, Node.js, MySQL, Express'
    },
    {
      name: 'Daily-Scheduler',
      category: 'Schedule',
      className: 'card Schedule col-5 hover-effect',
      description: 'Daily scheduler is a web application that uses Web API to store data so that a user may schedule out their day.',
      built: 'HTML, CSS, JavaScript, bootstrap, JQuery'
    },
    {
      name: 'Pokémon-Questionaire',
      category: 'Pokemon-Questionaire',
      className: 'card Pokémon-Questionaire col-5 hover-effect',
      description: "Pokémon Questionaire is a fun quiz game that tests a user's knowledge of Pokémons.",
      built: ''
    },
    {
      name: 'Run-Buddy',
      category: 'Run-Buddy',
      className: 'card Run-Buddy col-5 hover-effect',
      description: 'Front-End website development for Run Buddy.',
      built: 'HTML CSS'
    }
  ];

  const [isOpen, setIsOpen] = useState(false);
  // const [modalState, setModalState] = useState('false');
  const [modalCategory, setModalCategory] = useState(
    {
      name: '',
      category: '',
      description: '',
      built: ''
    })

  const modalHandler = (category) => {
    debugger
    setModalCategory(category)
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  // useEffect(() => {
  //   console.log(`isOpen current state is ${isOpen}`)

  //   if (isOpen) {
  //     setModalState('true');
  //     return
  //   }
  //   setModalState('false');
  // }, [isOpen]);

  return (
    <div className="port mt-5">
      <div className="container projects">
      {isOpen && <Modal onClose={modalHandler} currentGif={modalCategory} />}
        {/* main project */}
        {mainCard.map(card => {
          return (
            <section id={card.name} className={card.className} onClick={() => { modalHandler({ name: card.name, category: card.category, description: card.description, built: card.built }) }}>
              <div>{card.name}</div>
            </section>
          )
        })}

        {/* sub projects */}
        <div className="container sub-section">
          {gifs.map(gif => {
            return (
              <section id={gif.name} className={gif.className} onClick={() => { modalHandler({ name: gif.name, category: gif.category, description: gif.description, built: gif.built }) }}>
                <div>{gif.name}</div>
              </section>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;