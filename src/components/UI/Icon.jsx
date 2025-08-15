function Icon({ name, extraClasses, onClick }) {
    return <span onClick={onClick} className={`${extraClasses} text-gray-400 material-icons`}>{name}</span>
}

export default Icon;
