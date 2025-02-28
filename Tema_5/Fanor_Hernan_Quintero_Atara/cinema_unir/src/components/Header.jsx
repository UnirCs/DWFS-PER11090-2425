import '../styles/Header.css';
import Logo from '../images/logo.png';

export default () => {
    return (
        <header className='header'>
            <div className='header__content'>
                <img src={Logo} alt="logo" className='header__content__logo' />
            </div>
        </header>
    )
};