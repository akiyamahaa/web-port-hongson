import { ArrowRight } from 'iconsax-react';

type Props = {
    title: string;
    onClick: any;
}

const Button = ({ title, onClick }: Props) => {
    return (
        <div
            className='px-8 py-3 border border-primary-500 rounded-2xl w-fit flex flex-row items-center gap-2 cursor-pointer hover:opacity-50'
            onClick={onClick}>
            <span className='text-primary-500 font-semibold text-lg'>
                {title}
            </span>
            <ArrowRight size={24} color='#53CB17' />
        </div>
    )
}

export default Button