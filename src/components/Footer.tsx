import Container from './Container'
import { ArrowUp } from 'iconsax-react'

const Footer = () => {
    return (
        <Container>
            <div className='flex flex-col md:flex-row items-center justify-between gap-8 pb-12 pt-6 border-t border-gray-400'>
                <p className='text-xl text-gray-800'>
                    ©2024 Dao Tan Son, All Rights Reserved
                </p>
                <div className='flex flex-row items-center gap-2 text-gray-800 cursor-pointer' onClick={() => {
                    window.scrollTo({
                        top: 0, // Scroll to the top of the page
                        behavior: 'smooth', // Smooth scrolling animation
                    });
                }}>
                    Back to top
                    <ArrowUp color='#1F2937' />
                </div>
            </div>
        </Container>
    )
}

export default Footer