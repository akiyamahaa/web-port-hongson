
type Props = {
    label: string
}

const Input = ({ label }: Props) => {
    return (
        <div className='flex flex-col gap-2'>
            <label htmlFor="text" className='text-xl text-gray-800'>{label}</label>
            <input type="text" className='bg-white rounded-2xl py-3 px-3 border border-gray-400' placeholder={label} />
        </div>
    )
}

export default Input