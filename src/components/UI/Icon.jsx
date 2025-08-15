function Icon({ name, extraClasses, onClick }) {
    return <span onClick={onClick} className={`${extraClasses} material-icons`}>{name}</span>
}

export default Icon;
