const Btn = ({children, className='', ...props}) => {
    return(
        <button {...props} 
        className={`font-bold text-center
             hover:cursor-pointer transition-colors duration-300 ${className}`}
        >
        {children}
        </button>
    );
};

export default Btn;