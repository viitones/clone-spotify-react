import { FaBook} from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";

import "../styles/components/library.sass"

const Library = () => {
  return (
    <div className="library">
        <div className="library__content">
            <button className="library-button">
                <span><FaBook /></span>
                <span>Sua Biblioteca</span>
            </button>
            <span className="fa"><FaPlus /></span>
        </div>
        <section className="section-playlist">
            <div className="section__playlist__content">
                <span className="text title">Crie sua primeira playlist</span>
                <span className="text subtitle">É fácil, vamos te ajudar</span>
                <button className="section__playlist__button">
                    <span>Criar Playlist</span>
                </button>
            </div>
        </section>
    </div>
  )
}

export default Library