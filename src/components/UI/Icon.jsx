function Icon(props) {
    const { name, extraClasses = "", onClick = () => {} } = props;
    return <span onClick={onClick} className={`${extraClasses} select-none text-gray-400 material-icons`} {...props}>{name}</span>
}

export default Icon;
