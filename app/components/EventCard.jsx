import PropTypes from 'prop-types';
import Image from 'next/image';

export default function EventCard({ 
    title, 
    description, 
    imageSrc, 
    number
}) {
    const isEven = parseInt(number) % 2 === 0;

    return (
        <div className={`flex flex-col-reverse items-end md:items-center md:flex-row px-2 sm:px-16 container 
            ${isEven ? 'md:justify-end' : 'justify-start'}
            hover:translate-y-[-4px] transition-all duration-300 ease-in-out
            animate-fadeIn`}>
            <div className="flex flex-col items-center justify-center group">
                <h2 className='w-48 text-lg md:text-2xl text-end font-semibold bg-gradient-to-r from-[#00C2FF] to-[#00C187] 
                    bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300'>
                    {title}
                </h2>
                <p className='w-48 text-sm md:text-lg text-white text-wrap text-end opacity-80 
                    group-hover:opacity-100 transition-opacity duration-300'>
                    {description}
                </p>
            </div>
            <div className="group relative">
                <img src={imageSrc} alt="Logic Lounge" 
                    className='bg-contain min-w-[300px] transform group-hover:scale-105 transition-transform duration-300 ease-out' />
                <div className="absolute top-0 right-0 flex items-center justify-center animate-bounce">
                    <img src="/ellipse.png" alt="circle" className="relative group-hover:rotate-12 transition-transform duration-300" />
                    <span className="absolute text-white font-bold">{number}</span>
                </div>
            </div>
        </div>
    );
}

EventCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
};
