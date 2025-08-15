function Container({ children, extraClasses }) {
    return <div className={`${extraClasses} mt-48`}>
        {children}
    </div>
}

export default Container;