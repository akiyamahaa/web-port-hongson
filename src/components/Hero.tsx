import { ArrowDown2 } from 'iconsax-react'
import HeroImg from '../assets/image/hero-img.png'
import Button from './Button'
import Container from './Container'

type Props = {}

const Hero = (props: Props) => {
    const handleNavigateResume = () => {

    }
    const handleScroll = () => {
        const honorElement = document.getElementById('honor');
        if (honorElement) {
            honorElement.scrollIntoView({
                behavior: 'smooth', // Smooth scroll animation
                block: 'start',     // Align to the top of the element
            });
        }
    };
    return (
        <div className='bg-primary-50 w-full relative min-h-screen'>
            <Container>
                <div className=" py-48">
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16'>
                        <div className='flex-1'>
                            <div className='space-y-8'>
                                <div className='space-y-4 text-center lg:text-start'>
                                    <h1 className='text-4xl md:text-7xl font-semibold text-gray-800'>Hi, I'm </h1>
                                    <h1 className='text-4xl md:text-7xl font-semibold text-primary-500'>DAO TUAN SON</h1>
                                </div>
                                <p className='text-xl text-gray-500 text-center lg:text-start'>
                                    A passionate student dedicated to STEM, leadership, and creating impactful solutions through technology. With a deep interest in computer science, mathematics, and problem-solving, I aim to use my skills to make a positive impact in the world.
                                </p>
                                <div className='flex flex-row justify-center lg:justify-start'>
                                    <Button title='View Resume' onClick={handleNavigateResume} />
                                </div>
                            </div>
                        </div>
                        <div className='flex-1 mt-'>
                            <img src={HeroImg} alt="" />
                        </div>
                    </div>
                </div>
            </Container>
            {/* Arrow */}
            <div
                className="absolute bottom-5 left-1/2 transform -translate-x-1/2 cursor-pointer"
                onClick={handleScroll}
            >
                <ArrowDown2 size={40} color='#9CA3AF' />
            </div>
        </div>

    )
}

export default Hero