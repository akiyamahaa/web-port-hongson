import React from 'react'
import Container from './Container'
import Input from './Input'
import { Send2 } from 'iconsax-react'

type Props = {}

const Contact = (props: Props) => {
    return (
        <Container>
            <div className='py-20 lg:py-36 flex md:flex-row gap-16 flex-col'>
                <div className='space-y-8 flex-1'>
                    <div className='space-y-2'>
                        <h1 className='font-semibold text-xl text-primary-500'>
                            Get in touch!
                        </h1>
                        <p className='text-2xl md:text-3xl lg:text-4xl text-gray-800'>
                            If you would like to learn more about my projects, research,
                            or collaborations, feel free to reach out!
                        </p>
                    </div>
                    <div className='space-y-1'>
                        <p className='text-xl text-gray-500'>Email</p>
                        <p className='text-xl font-semibold text-gray-800'>
                            sondt07@gmail.com
                        </p>
                    </div>
                </div>
                <div className='flex-1 space-y-8'>
                    <Input label='Name' />
                    <Input label='Email' />
                    <Input label='Message' />
                    <button className='flex justify-center items-center gap-2 bg-primary-500 rounded-2xl w-full py-3.5 hover:opacity-80 '>
                        <p className='text-white text-lg font-semibold'>
                            Send me message
                        </p>
                        <Send2 color='#fff' />
                    </button>
                </div>
            </div>
        </Container>
    )
}

export default Contact