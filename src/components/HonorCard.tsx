type Props = {
    award: string;
    title: string;
    description?: string
    awardLogo: string;
    color: string;
}

const HonorCard = ({
    award, title, description, awardLogo, color
}: Props) => {
    return (
        <div className='p-8 bg-white space-y-6 shadow-button rounded-3xl h-full'>
            <div className='flex flex-row items-center justify-between'>
                <div className='space-y-8'>
                    <p>
                        2024
                    </p>
                    <p className='text-3xl font-semibold' style={{ color: color }}>
                        {award}
                    </p>
                </div>
                <div>
                    <img src={awardLogo} alt="" />
                </div>
            </div>
            <div className="space-y-4">
                <p className="text-lg md:text-[20px] font-semibold text-gray-500">
                    {title}
                </p>
                {description && <p className="text-base md:text-[20px] text-gray-500">
                    {description}
                </p>}
            </div>
        </div>
    )
}

export default HonorCard