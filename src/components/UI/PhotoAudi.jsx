import Btn from './Btn';


const PhotoAudi = ({photo, title, subtitle}) => {
    return(
        <div className='relative w-full bg-[#191919] flex items-center justify-center overflow-hidden'>
            
            <div className='max-w-full h-auto max-h-screen'>
                <img src={photo} alt="Car Photo" className="w-full h-auto block" />
            </div>

            <div className="absolute inset-0 bg-black/50 opacity-40 z-[5px]"></div>
            
            <div className="absolute bottom-4 left-5 md:bottom-10 md:left-10 z-10">
                
                <div className="flex flex-col mb-4 md:mb-6">
                    <h1 className="Futura New font-bold text-[14px] md:text-6xl text-white">{title}</h1>
                    <p className="Futura New text-[10px] md:text-2xl text-white inline-block">{subtitle}</p>
                </div>

                <div className='flex space-x-3 md:space-x-4'>
                    <Btn className="
                        bg-[#B5B7B8] text-black hover:text-black 
                        duration-500 font-normal transition rounded-3xl 
                        py-1 md:py-2 px-3 md:px-4 
                        text-[10px] md:text-xl 
                        hover:bg-[#626263]"
                    >
                        Show more
                    </Btn>
                    
                    <Btn className="
                        bg-[#191919] text-white 
                        duration-500 transition 
                        font-normal rounded-3xl 
                        py-1 md:py-2 px-2 md:px-4 
                        text-[10px] md:text-xl 
                        hover:bg-[#626263] hover:text-white"
                    >
                        Configurator
                    </Btn>
                </div>
            </div>

        </div>
    )
};

export default PhotoAudi;