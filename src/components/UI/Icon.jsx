function Icon({ name, extraClasses = "", onClick = () => {}, tabIndex, onKeyDown = () => {} }) {
    return <span onClick={onClick} className={`${extraClasses} select-none text-gray-400 material-icons`} tabIndex={tabIndex} onKeyDown={onKeyDown}>{name}</span>
}

export default Icon;
