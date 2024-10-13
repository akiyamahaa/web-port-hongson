import { useState } from 'react'
import Container from './Container'
import ResumeCard from './ResumeCard'

const resumeOptions = [
    {
        id: 1,
        title: 'PERSONAL PROJECT',
    },
    {
        id: 2,
        title: 'LEADERSHIP'
    },
    {
        id: 3,
        title: 'INTERNSHIP'
    },
    {
        id: 4,
        title: 'RESEARCH'
    },
    {
        id: 5,
        title: 'OTHER ACTIVITIES'
    },
]

const content: any = {
    1: [
        {
            title: '“Health Diary” Mobile Application',
            subTitle: 'Founder and Lead-programmer',
            timeline: '09/2023 - 02/2024',
            description: 'An app created with specialized features for users to be informed about potential diseases and be reminded to take medicine',
            content: [
                'Led a team of 5 young developers in the app development process.',
                'Developed multiple functions such as a health diary, meeting organizer, drug-taking alarm, encyclopedia about diseases common to the elderly.',
                'Introduced and applied the app usage in multiple local Nursing Homes, helping over 50 elderly in the daily life',
            ]
        },
        {
            title: 'Book Project “Slow steps into the Digital Era”',
            subTitle: 'Author',
            timeline: '04/2024 - 09/2024',
            description: 'A book provided the basics and advances of digital devices for people that have difficulties using them',
            content: [
                'Wrote and published a 98-page book about teaching the elderly to get familiar with digital devices',
                'Printed and gifted over 150 copies to Nursing Homes around Ho Chi Minh city.',
                'Books are displayed and sold in local bookstores and newstands.',
                'Developed patience through anticipating common points of confusion and addressing them'
            ]
        }
    ],
    2: [
        {
            title: 'STEM Junior',
            subTitle: 'President',
            timeline: '05/2023 - Present',
            description: 'A club sharing knowledge about STEM and aiming to contribute knowledge to people in remote areas.',
            content: [
                'Led a STEM-inspired club with more than 50 high schoolers of all ages in the Ho Chi Minh area.',
                'Collaborated with over 10 clubs and organizations to host multiple voluntary teaching projects in the local areas and 3 trips to remote areas.',
                `Co-led a group of 18 highschool students in a volunteer project “Scientific Journey” with a purpose of sharing knowledge about STEM to children with difficult circumstances at SOS Children's Villages Vietnam, Ben Tre.`,
                `Organized a field trip to the Alluvia’s chocolate farm and factory for 30 elementary school students, participated in manually produce a qualified chocolate bar;`,
                'Organized “STEM DAY” for 60+ students to perform over 10 experiments about Physics, Chemistry,... to help them have practical experience and develop love for the subjects;',
                'Raised and donated over $200 in food supplies to charitable organizations.'
            ]
        }
    ],
    3: [
        {
            title: '“Health Diary” Mobile Application',
            subTitle: 'Founder and Lead-programmer',
            timeline: '09/2023 - 02/2024',
            description: 'An app created with specialized features for users to be informed about potential diseases and be reminded to take medicine',
            content: [
                'Led a team of 5 young developers in the app development process.',
                'Developed multiple functions such as a health diary, meeting organizer, drug-taking alarm, encyclopedia about diseases common to the elderly.',
                'Introduced and applied the app usage in multiple local Nursing Homes, helping over 50 elderly in the daily life',
            ]
        }
    ],
    4: [
        {
            title: '“Health Diary” Mobile Application',
            subTitle: 'Founder and Lead-programmer',
            timeline: '09/2023 - 02/2024',
            description: 'An app created with specialized features for users to be informed about potential diseases and be reminded to take medicine',
            content: [
                'Led a team of 5 young developers in the app development process.',
                'Developed multiple functions such as a health diary, meeting organizer, drug-taking alarm, encyclopedia about diseases common to the elderly.',
                'Introduced and applied the app usage in multiple local Nursing Homes, helping over 50 elderly in the daily life',
            ]
        }
    ],
    5: [
        {
            title: '“Health Diary” Mobile Application',
            subTitle: 'Founder and Lead-programmer',
            timeline: '09/2023 - 02/2024',
            description: 'An app created with specialized features for users to be informed about potential diseases and be reminded to take medicine',
            content: [
                'Led a team of 5 young developers in the app development process.',
                'Developed multiple functions such as a health diary, meeting organizer, drug-taking alarm, encyclopedia about diseases common to the elderly.',
                'Introduced and applied the app usage in multiple local Nursing Homes, helping over 50 elderly in the daily life',
            ]
        }
    ],
}

const Resume = () => {
    const [selectOption, setSelectOption] = useState(1)
    return (
        <div className='bg-primary-50 py-20 lg:py-36'>
            <Container>
                <div className='space-y-12'>
                    <h1 className='text-5xl text-primary-500 font-semibold text-center'>
                        Resume
                    </h1>
                    <div className='space-y-16'>
                        {/* List Button */}
                        <div className='flex flex-row flex-wrap gap-4 justify-center'>
                            {resumeOptions.map((option) => (
                                <div key={option.id}
                                    className={`cursor-pointer px-6 py-2 rounded-xl text-lg font-semibold transition-colors duration-300
                                ${selectOption === option.id
                                            ? 'bg-primary-500 text-white'
                                            : 'bg-primary-100 text-gray-800'
                                        }`}
                                    onClick={() => setSelectOption(option.id)} // Set selected option on click
                                >
                                    <span className='font-semibold text-base'>
                                        {option.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                        {/* Detail */}
                        {content[selectOption].map((item: any, index: number) =>
                        (
                            <div key={item.title}>
                                <ResumeCard data={content['1'][0]} />
                                {index < content[selectOption].length - 1 && <div className='bg-primary-200 w-full h-[1px] my-12' />}
                            </div>
                        )
                        )}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Resume