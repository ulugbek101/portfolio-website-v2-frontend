function PageTitle({ children, extraClasses }) {
    return <h1 className={`${extraClasses} font-bold opacity-80 text-gray-400 text-5xl text-center`}>{children}</h1>
}

export default PageTitle;
