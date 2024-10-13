import Button from './Button'
import Dot from './Dot';

type Props = {
    data: {
        title: string;
        subTitle: string;
        timeline: string;
        description: string;
        content: string[]
    }
}

const ResumeCard = ({ data }: Props) => {
    return (
        <div className='flex flex-col lg:flex-row gap-16'>
            <div className='space-y-4'>
                <h1 className='font-semibold text-3xl text-gray-800'>
                    {data.title}
                </h1>
                <div className='space-y-1' >
                    <p className='text-xl font-semibold text-primary-500'>
                        {data.subTitle}
                    </p>
                    <p className='text-xl text-gray-800'>
                        {data.timeline}
                    </p>
                </div>
                <p className='text-xl text-gray-500'>
                    {data.description}
                </p>
                <Button title='View more' onClick={() => { }} />
            </div>
            <div>
                {data.content.map((item) =>
                (
                    <div className='flex flex-row items-start gap-2' key={item}>
                        <div className='mt-3'>
                            <Dot />
                        </div>
                        <p className='text-gray-800 text-xl'>
                            {item}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ResumeCard