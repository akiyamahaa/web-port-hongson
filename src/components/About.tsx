import AboutImg from '../assets/image/aboutImg.png'
import Container from './Container'
import Dot from './Dot'


const About = () => {
    return (
        <Container>
            <div className='py-20 lg:py-36 flex flex-row item-start gap-16'>
                <div className='flex-1 hidden lg:block'>
                    <img src={AboutImg} alt="img" className='w-full' />
                </div>
                <div className='flex-1 space-y-8'>
                    <div className='space-y-6'>
                        <h2 className='text-primary-500 font-semibold text-5xl'>
                            About me
                        </h2>
                        <p className='text-xl text-gray-800'>
                            I am a high school student at Tran Dai Nghia High School for the Gifted with a passion for science and technology. My academic journey began at Hoang Hoa Tham Secondary School, where I developed a strong foundation in mathematics and computer science. Currently, with a GPA of 9.5 in grade 11 and a 1500 SAT score, I am driven to pursue a major in Computer Science, focusing on creating practical solutions to real-world problems.
                        </p>
                    </div>
                    <div className='space-y-4'>
                        <h2 className='text-2xl text-gray-800 font-semibold'>
                            Education Timeline:
                        </h2>
                        <div>
                            <div className='flex flex-row items-center text-xl gap-2'>
                                <Dot />
                                <span className='font-semibold min-w-[120px]'>
                                    2018-2022:
                                </span>
                                Hoang Hoa Tham Secondary School
                            </div>
                            <div className='flex flex-row items-center text-xl gap-2'>
                                <Dot />
                                <p className='font-semibold min-w-[120px]'>
                                    2022-2025:
                                </p>
                                Tran Dai Nghia High School for the Gifted
                            </div>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <h2 className='text-2xl text-gray-800 font-semibold'>
                            GPA:
                        </h2>
                        <div className='flex flex-row items-center justify-between'>
                            <div className='space-y-2'>
                                <p className='font-semibold text-5xl text-gray-800'>
                                    8.8
                                </p>
                                <p className='text-xl text-primary-500'>
                                    Grade 9
                                </p>
                            </div>
                            <div className='space-y-2'>
                                <p className='font-semibold text-5xl text-gray-800'>
                                    8.9
                                </p>
                                <p className='text-xl text-primary-500'>
                                    Grade 10
                                </p>
                            </div>
                            <div className='space-y-2'>
                                <p className='font-semibold text-5xl text-gray-800'>
                                    9.5
                                </p>
                                <p className='text-xl text-primary-500'>
                                    Grade 11
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <h2 className='text-2xl text-gray-800 font-semibold'>
                            Scores:
                        </h2>
                        <div className='flex flex-row items-center justify-between'>
                            <div className='space-y-2'>
                                <p className='font-semibold text-5xl text-gray-800'>
                                    1500
                                </p>
                                <p className='text-xl text-primary-500'>
                                    SAT (superscore)
                                </p>
                            </div>
                            <div className='space-y-2'>
                                <p className='font-semibold text-5xl text-gray-800'>
                                    7.0
                                </p>
                                <p className='text-xl text-primary-500'>
                                    IELTS
                                </p>
                            </div>
                            <div className='space-y-2'>
                                <p className='font-semibold text-5xl text-gray-800'>
                                    5
                                </p>
                                <p className='text-xl text-primary-500'>
                                    AP Computer Science A
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>

    )
}

export default About