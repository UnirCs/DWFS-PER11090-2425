import PerfilIcon from "../../assets/Perfil"
import { HeaderOptions } from "./HeaderOptions"
import "./Header.css"

export const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <a href="#">unir cinema</a>
      </div>
      <div className="header__options">
        <HeaderOptions label="Cartelera" icon="🎞️" />
        <HeaderOptions label="Dulceria" icon="🍿" />
        <HeaderOptions label="UnirClub" icon="🎬" />
        <HeaderOptions label="Perfil" icon={<PerfilIcon />} />
        <div className="divider"></div>
        <HeaderOptions label="" icon="🛒" />
      </div>
    </header>
  )
}
