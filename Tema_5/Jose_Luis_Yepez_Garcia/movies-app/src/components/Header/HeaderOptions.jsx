import './HeaderOptions.css'

export const HeaderOptions = ({ label, icon }) => {
  return (
    <div className="header__options__option">
      {icon && <span className='header__options__option__icon'>{icon}</span>}
      {label && <span>{label}</span>}
    </div>
  )
}
