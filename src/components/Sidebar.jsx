import "../styles/components/sidebar.sass"

import { FaSpotify, FaHome, FaSearch } from "react-icons/fa"

const Sidebar = () => {
  return (
        <nav className="sidebar__navigation">
            <div className="logo">
                <a href="#">
                    <FaSpotify />
                    Spotify
                </a>
            </div>
            <ul>
                <li>
                    <a href="#">
                        <FaHome />
                        <span>Início</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FaSearch />
                        <span>Buscar</span>
                    </a>
                </li>
            </ul>
        </nav>
  )
}

export default Sidebar