const SpecItem = ({ label, value, note}) => (
    <div className='flex flex-col items-center'>
        <p className='text-base sm:text-lg font-light opacity-80 mb-1 text-white'>{label}</p>
        <p className="text-2xl sm:text-4xl font-bold mb-1 text-white">{value}</p>
        <p className='text-xs sm:text-sm font-light opacity-60 text-white'>{note}</p>
    </div>
);
export default SpecItem;