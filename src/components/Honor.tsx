import HonorCard from './HonorCard'
import FirstTropy from '../assets/image/1st.png'
import GoldTropy from '../assets/image/gold.png'
import SilverTropy from '../assets/image/silver.png'
import BronzeTropy from '../assets/image/bronze.png'
import Container from './Container'

const listHonor = [
    {
        title: 'Global Mathematics Elite Competition',
        award: '1st runner-up',
        awardLogo: FirstTropy,
        description: 'One of the two salutatorians out of 50 students that scored 360 in a world-wide scale contest.',
        color:'#EF4444'
    },
    {
        award: 'Gold Medal',
        title: 'Brilliance Intelligence Students Olympiad',
        awardLogo: GoldTropy,
        color:'#EAA108'

    },
    {
        award: 'Silver Medal',
        title: 'International Math and Science Competitions',
        awardLogo: SilverTropy,
        color:'#6B7280'
    },
    {
        award: 'Bronze Medal',
        title: 'International Mathematics Olympiad Competition of SouthEast Asia',
        awardLogo: BronzeTropy,
        color:'#855F0E'

    }
]

const Honor = () => {
    return (
        <Container>
            <div className='mt-20 lg:mt-36 space-y-16' id='honor'>
                <h1 className='text-center text-4xl md:text-6xl text-primary-500 font-semibold'>
                    Honors and Awards
                </h1>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                    {listHonor.map((item) =>
                        <div key={item.award}>
                            <HonorCard {...item} />
                        </div>
                    )}
                </div>
            </div>
        </Container>

    )
}

export default Honor