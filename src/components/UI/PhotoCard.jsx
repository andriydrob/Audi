import { ChevronRight } from 'lucide-react';

const PhotoCard = ({ images, title }) => {
    if (!images || images.length === 0) {
        return <div className="text-white p-4 bg-[#191919]">Немає фотографій для відображення.</div>;
    }

    return (
        <div>
        <div className="flex flex-col md:flex-row bg-[#191919] gap-4 md:gap-8 p-4 py-4 md:py-10 items-center justify-center">
            {images.map((image, index) => (
                <div 
                    key={index} 
                    className="relative min-h-auto w-full md:w-auto md:max-w-1/3 overflow-hidden">
                    <img 
                        src={image.src || image}
                        alt={image.alt || `Photo ${index + 1}`} 
                        className="w-full h-auto block object-cover transition duration-500 hover:scale-110 rounded-4xl"
                    />
                    <div className="relative w-full h-auto bg-[#191919] flex flex-col md:flex-col">
                        <h1 className="Futura New text-xl md:text-4xl text-[#B5B7B8]">{title[index]}</h1>
                        <p className="Futura New text-base text-white hover:text-[#B5B7B8] group cursor-pointer transition duration-300 inline-flex items-center self-start">
                            <span className='border-b border-white hover:border-[#B5B7B8]'>
                                Show more 
                            </span>
                        <ChevronRight className="ml-1 transition duration-300"/>    
                        </p>
                    </div>
                </div>
            ))}

        </div>

        </div>
    );
};

export default PhotoCard;