import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const Container = ({ children }: Props) => {
    return (
        <div className='container mx-auto px-8 max-w-screen-lg'>{children}</div>
    )
}

export default Container