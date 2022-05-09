import axios from "axios";
import React, { useEffect, useState } from "react";
import { Header } from "components/Header";
import { PaginationNav } from "components/Nav";
import { CharacterCard, CharacterModal } from "components/Character";
import { usePage, useModal } from "contexts";
import styles from "components/Character/character.module.css";
import { API_GET_CHARACTERS } from "utils";

const App = () => {
  const [characters, setCharacters] = useState([])
  const { modal } = useModal()
  const { pgNumber } = usePage()

  /**
   * this effect calls the API for the current pgNumber and sets the characters state to response.data, whenever the pgNumber is updated
   */
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`${API_GET_CHARACTERS}${pgNumber}`)
        setCharacters(response.data.results)
      } catch (e) {
        console.log(e.status)
      }
    })()
  }, [pgNumber])

  return (
    <div
    >
      <Header />
      <PaginationNav />

      {/* grid fo character cards */}

      <section className={`grid grid-maxcols-4 ${styles.cardsGrid} mg-s`}>
        {
          characters?.map(char => <CharacterCard key={char.id} character={char} />)
        }
      </section>

      {/* modal for detailed character info */}

      {
        modal.visible && <CharacterModal character={modal.value} />
      }
    </div>
  );
};

export default App;
