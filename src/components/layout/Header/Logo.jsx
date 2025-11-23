import LogoAudi from '../../../assets/icons/Logo_white.svg'

const Logo = () => {
    return(
    <div className='items-center object-center shrink-0'>
        <a href="#" className="items-center ">
          <img 
          src={LogoAudi}
          alt="Logo website"
          className='object-contain w-20 h-15  sm:w-26' 
          />
        </a>
    </div>
    );
};

export default Logo;