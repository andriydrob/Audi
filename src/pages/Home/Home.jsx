import Header from '../../components/layout/Header/Header';
import BgVideo from '../../components/BgVideo';
import CenterModeSlider from '../../components/UI/CenterModeSlider';
import PhotoCarousel from '../../components/UI/PhotoCarousel';
import PhotoAudi from '../../components/UI/PhotoAudi';
import PhotoCard from '../../components/UI/PhotoCard';
import SpecItem from '../../components/UI/SpecItem';

const Audi_Rs3_photo = "https://res.cloudinary.com/dh4jjre2h/image/upload/v1763856049/Audi_Rs3_photo_pml9ns.png";

const Audi_A3_card ="https://res.cloudinary.com/dh4jjre2h/image/upload/v1763856051/Audi_A3_card_trz98d.png";
const Audi_S3_card ="https://res.cloudinary.com/dh4jjre2h/image/upload/v1763856050/Audi_S3_card_nzb3bc.png";
const Audi_A3_Allstreet_card = "https://res.cloudinary.com/dh4jjre2h/image/upload/v1763856051/Audi_A3_Allstreet_card_lpayqk.png";

const Audi_A4_sedan_photo = "https://res.cloudinary.com/dh4jjre2h/image/upload/v1763856051/Audi_A4_sedan_photo_n1ctlx.png";

const Audi_S4_card = "https://res.cloudinary.com/dh4jjre2h/image/upload/v1763856051/Audi_S4_card_ggqngx.png";
const Audi_S4_avant_card = "https://res.cloudinary.com/dh4jjre2h/image/upload/v1763856050/Audi_S4_avant_card_kygsya.png";
const Audi_RS4_card = "https://res.cloudinary.com/dh4jjre2h/image/upload/v1763856049/Audi_Rs4_card_oqp7ai.png";

const Audi_A5_avant_photo = "https://res.cloudinary.com/dh4jjre2h/image/upload/v1763856052/Audi_A5_avant_photo_g7okez.png";



const Home = () => {

const images1 = [Audi_A3_card, Audi_S3_card, Audi_A3_Allstreet_card];

const images2 = [Audi_S4_card, Audi_S4_avant_card, Audi_RS4_card];

const titles1 = ["Audi A3", "Audi S3", "Audi A3 Allstreet"];

const titles2 = ["Audi S4", "Audi S4 Avant", "Audi RS4"];

//   const images = [
//     Audi_RS3_1, Audi_RS3_2, Audi_RS3_3, Audi_RS3_4, Audi_RS3_5, Audi_RS3_6, Audi_RS3_7, Audi_RS3_8, Audi_RS3_9, Audi_RS3_10];

// const customCarSettings = {
//         dots: true,
//         infinite: true,
//     };

    return(
        <div>
            <BgVideo />
            <Header />
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

            {/* <CenterModeSlider /> */}
        </div>
    )
}

export default Home;