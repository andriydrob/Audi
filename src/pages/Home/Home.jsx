import Header from '../../components/layout/Header/Header';
import BgVideo from '../../components/BgVideo';
import CenterModeSlider from '../../components/UI/CenterModeSlider';
import PhotoCarousel from '../../components/UI/PhotoCarousel';
import PhotoAudi from '../../components/UI/PhotoAudi';
import PhotoCard from '../../components/UI/PhotoCard';
import SpecItem from '../../components/UI/SpecItem';
import VideoAudi from '../../components/UI/VideoAudi';
import Btn from '../../components/UI/Btn';

const Audi_Rs3_photo = "https://res.cloudinary.com/dh4jjre2h/image/upload/v1763856049/Audi_Rs3_photo_pml9ns.png";

const Audi_A3_card ="https://res.cloudinary.com/dh4jjre2h/image/upload/v1763856051/Audi_A3_card_trz98d.png";
const Audi_S3_card ="https://res.cloudinary.com/dh4jjre2h/image/upload/v1763856050/Audi_S3_card_nzb3bc.png";
const Audi_A3_Allstreet_card = "https://res.cloudinary.com/dh4jjre2h/image/upload/v1763856051/Audi_A3_Allstreet_card_lpayqk.png";

const Audi_A4_sedan_photo = "https://res.cloudinary.com/dh4jjre2h/image/upload/v1763856051/Audi_A4_sedan_photo_n1ctlx.png";

const Audi_S4_card = "https://res.cloudinary.com/dh4jjre2h/image/upload/v1763856051/Audi_S4_card_ggqngx.png";
const Audi_S4_avant_card = "https://res.cloudinary.com/dh4jjre2h/image/upload/v1763856050/Audi_S4_avant_card_kygsya.png";
const Audi_RS4_card = "https://res.cloudinary.com/dh4jjre2h/image/upload/v1763856049/Audi_Rs4_card_oqp7ai.png";

const Audi_A5_avant_photo = "https://res.cloudinary.com/dh4jjre2h/image/upload/v1763910509/Audi_A5_avant_photo_c5v4u0.png";

const Audi_A5_card = "https://res.cloudinary.com/dh4jjre2h/image/upload/v1763911743/Audi_A5_card_yec7bk.png";
const Audi_S5_card = "https://res.cloudinary.com/dh4jjre2h/image/upload/v1763912415/Audi_S5_card_iuydua.png";
const Audi_RS5_card = "https://res.cloudinary.com/dh4jjre2h/image/upload/v1763912715/Audi_RS5_card_rroshl.png";

const Audi_RS6_video = "https://res.cloudinary.com/dh4jjre2h/video/upload/v1763913590/Audi_RS6_video_xcfd9x.mp4";

const Audi_A6_sedan = "https://res.cloudinary.com/dh4jjre2h/image/upload/v1763915055/Audi_A6_sedan_ap8sdd.png";
const Audi_A6_avant_card = "https://res.cloudinary.com/dh4jjre2h/image/upload/v1763915056/Audi_A6_avant_card_hw5ut8.png";
const Audi_S6_etron_avant = "https://res.cloudinary.com/dh4jjre2h/image/upload/v1763915055/Audi_S6_etron_avant_qahnae.png";

const Audi_RS7_photo = "https://res.cloudinary.com/dh4jjre2h/image/upload/v1763920263/Audi_RS7_photo_geoi98.png";

const Audi_A7_card = "https://res.cloudinary.com/dh4jjre2h/image/upload/v1763920676/Audi_A7_card_lzusbq.png";
const Audi_S7_card = "https://res.cloudinary.com/dh4jjre2h/image/upload/v1763920676/Audi_S7_card_dejyzs.png";

const Home = () => {

const images1 = [Audi_A3_card, Audi_S3_card, Audi_A3_Allstreet_card];
const images2 = [Audi_S4_card, Audi_S4_avant_card, Audi_RS4_card];
const images3 = [Audi_A5_card, Audi_S5_card, Audi_RS5_card];
const images4 = [Audi_A6_sedan, Audi_A6_avant_card, Audi_S6_etron_avant];
const images5 = [Audi_A7_card, Audi_S7_card]

const titles1 = ["Audi A3", "Audi S3", "Audi A3 Allstreet"];
const titles2 = ["Audi S4", "Audi S4 Avant", "Audi RS4"];
const titles3 = ["Audi A5 Sedan", "Audi S5 Sportback ", "Audi RS5 Sportback"];
const titles4 = ["Audi A6", "Audi A6 Avant", "Audi S6 e-tron Avant"]
const titles5 = ["Audi A7 Sportback", "Audi S7 Performance"];


//   const images = [
//     Audi_RS3_1, Audi_RS3_2, Audi_RS3_3, Audi_RS3_4, Audi_RS3_5, Audi_RS3_6, Audi_RS3_7, Audi_RS3_8, Audi_RS3_9, Audi_RS3_10];

// const customCarSettings = {
//         dots: true,
//         infinite: true,
//     };

    return(
        <div>
            <div className='relative'>
                <BgVideo />
                <Header />
                <div className='relative'>
                    <p className="absolute md:bottom-35 md:left-15 bottom-22 left-10 Futura New text-lg sm:text-2xl md:text-3xl text-white inline-block">EXPERIENCE PEAK PERFORMANCE.</p>
                    <Btn className="bg-[#B5B7B8]/80 left-1/2 md:rounded-4xl -translate-x-1/2 w-[90%] md:w-auto md:left-47 md:bottom-15 bottom-10 absolute z-10 text-black hover:text-black duration-500 font-normal transition rounded-[20px] py-2 md:py-3 px-6 md:px-8 text-sm md:text-xl hover:bg-[#626263]/90 backdrop-blur-sm">
                        AUDI SPORT MODELS
                    </Btn>
                </div>

            </div>
            <section className='bg-[#191919] py-8 md:py-8 flex justify-around items-start border-t border-b border-gray-800'>
                <SpecItem 
                label="Power"
                value="630 HP"
                note="With Boost Engaged"
                />

                <SpecItem 
                label="Torque"
                value="850 Nm"
                note="Peak"
                />

                <SpecItem 
                label="0-100 km/h in"
                value="3.3 sec"
                note="Launch Control"
                />
            </section>

            <PhotoAudi 
            photo={Audi_Rs3_photo}
            title="AUDI RS 3"
            subtitle="Take a closer look."
            />    

            <PhotoCard 
            images={images1}
            title={titles1}
            />

            <PhotoAudi 

            photo={Audi_A4_sedan_photo}
            title="Audi A4 Sedan"
            subtitle="A balance of elegance and innovation."
            />          

            <PhotoCard 
            images={images2}
            title={titles2}
            />  

            <PhotoAudi 
            className=''
            photo={Audi_A5_avant_photo}
            title="AUDI A5 AVANT"
            subtitle="Powerful. Sporty. Emotional."
            />   

            <PhotoCard 
            images={images3}
            title={titles3}
            />

            <VideoAudi 
            videoUrl={Audi_RS6_video}
            title="AUDI RS 6"
            subtitle="The King of Versatility. The only limit is you."
            />   

            <PhotoCard 
            images={images4}
            title={titles4}
            />

            <PhotoAudi 
            photo={Audi_RS7_photo}
            title="AUDI RS 7 Performance"
            subtitle="Speed dressed in a tuxedo."
            /> 

            <PhotoCard 
            images={images5}
            title={titles5}
            />

            {/* <CenterModeSlider /> */}
        </div>
    )
}

export default Home;