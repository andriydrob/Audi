import Btn from './Btn';

const PhotoAudi = ({ photo, title, subtitle }) => {
    return (
        <div 
            className='
                relative 
                h-screen
                w-full 
                bg-[#191919] 
                overflow-hidden
                flex items-center justify-center
            '
        >
            <div className='absolute inset-0'>
                <img 
                    src={photo} 
                    alt="Car Photo" 
                    className="
                        w-full h-full
                        object-cover
                        block
                    " 
                />
            </div>
            
            <div 
                className="
                    absolute inset-0 
                    bg-gradient-to-t 
                    from-black/70 via-black/30 to-black/20 
                    z-10 
                "
            ></div>
            
            <div className="
                absolute 
                bottom-10 left-5 md:left-10 md:bottom-20
                z-20
                w-[90%] md:w-auto
            ">
                
                <div className="flex flex-col mb-4 md:mb-6">
                    <h1 className="Futura New font-bold text-4xl sm:text-6xl md:text-7xl text-white leading-none mb-2">{title}</h1>
                    <p className="Futura New text-lg sm:text-2xl md:text-3xl text-white inline-block">{subtitle}</p>
                </div>

                <div className='flex flex-col space-y-3 md:flex-row md:space-x-4 md:space-y-0'>
                    <Btn className="bg-[#B5B7B8]/80 text-black hover:text-black duration-500 font-normal transition rounded-3xl py-2 md:py-3 px-6 md:px-8 text-sm md:text-xl hover:bg-[#626263]/90 backdrop-blur-sm">
                        Show more
                    </Btn>
                    
                    <Btn className="bg-black/70 text-white duration-500 transition font-normal rounded-3xl py-2 md:py-3 px-6 md:px-8 text-sm md:text-xl hover:bg-[#626263] hover:text-white backdrop-blur-sm">
                        Configurator
                    </Btn>
                </div>
            </div>
        </div>
    );
};

export default PhotoAudi;