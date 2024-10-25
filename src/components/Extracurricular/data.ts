import bentre20240 from "../../assets/image/bentre20240.jpg";
import bentre20241 from "../../assets/image/bentre20241.jpg";
import bentre20242 from "../../assets/image/bentre20242.jpg";
import bentre20243 from "../../assets/image/bentre20243.jpg";
import bentre20244 from "../../assets/image/bentre20244.jpg";
import bentre20245 from "../../assets/image/bentre20245.jpg";
import bentre20246 from "../../assets/image/bentre20246.jpg";
import bentre20230 from "../../assets/image/bentre20230.jpg";
import bentre20231 from "../../assets/image/bentre20231.jpg";
import dance0 from "../../assets/image/dance0.jpg";
import dance1 from "../../assets/image/dance1.jpg";
import dance2 from "../../assets/image/dance2.jpg";
import dance3 from "../../assets/image/dance3.jpg";
import dance4 from "../../assets/image/dance4.jpg";
import coding0 from "../../assets/image/coding0.jpg";
import coding1 from "../../assets/image/coding1.jpg";
import coding2 from "../../assets/image/coding2.jpg";
import coding3 from "../../assets/image/coding3.jpg";
import swimming0 from "../../assets/image/swimming0.jpg";
import swimming1 from "../../assets/image/swimming1.jpg";
import swimming2 from "../../assets/image/swimming2.jpg";
import swimming3 from "../../assets/image/swimming3.jpg";
import swimming4 from "../../assets/image/swimming4.jpg";
import rubik0 from "../../assets/image/rubik0.jpg";
import rubik1 from "../../assets/image/rubik1.jpg";
import rubik2 from "../../assets/image/rubik2.jpg";
import rubik3 from "../../assets/image/rubik3.jpg";

export enum EType {
  RESUME,
  SWIPER,
}

export const extracurricularOptions = [
  {
    id: 1,
    title: "Leadership",
    type: EType.RESUME,
    content: [
      {
        title: "STEM Junior",
        subTitle: "President",
        timeline: "05/2023 - Present",
        description:
          "A club sharing knowledge about STEM and aiming to contribute knowledge to people in remote areas.",
        content: [
          "Led a STEM-inspired club with more than 50 high schoolers of all ages in the Ho Chi Minh area.",
          "Collaborated with over 10 clubs and organizations to host multiple voluntary teaching projects in the local areas and 3 trips to remote areas.",
          `Co-led a group of 18 highschool students in a volunteer project “Scientific Journey” with a purpose of sharing knowledge about STEM to children with difficult circumstances at SOS Children's Villages Vietnam, Ben Tre.`,
          `Organized a field trip to the Alluvia’s chocolate farm and factory for 30 elementary school students, participated in manually produce a qualified chocolate bar;`,
          "Organized “STEM DAY” for 60+ students to perform over 10 experiments about Physics, Chemistry,... to help them have practical experience and develop love for the subjects;",
          "Raised and donated over $200 in food supplies to charitable organizations.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Internship",
    content: [
      {
        title:
          "School of Computer Science and Engineering of Vietnam International – National University HCMC",
        subTitle: "Trainee Intern",
        timeline: "06/2023 - 08/2023",
        description:
          "Joined the research team at the School of Computer Science and Engineering, International University - Vietnam National University HCMC under the supervision of Dr. Ha Viet Uyen Synh – Head of Center for Information Services.",
        content: [
          "Gained knowledge about algorithms like segment trees, DSU, LCA, etc. to further my path to competitive programming and future career.",
        ],
      },
      {
        title: "Ho Chi Minh University of Technology and Education",
        subTitle: "Trainee Intern",
        timeline: "06/2024 - 08/2024",
        description:
          "Joined the research team at the Institute of Technical Education, Ho Chi Minh University of Technology and Education, under the guidance of Dr. Bui Van Hong, the Rector of the Institute.",
        content: [
          "Collaborated with a team of 16 to develop an app that assists users in managing their personal finances by tracking income, expenses, and savings goals.",
          "Delved deeper into app development and acquired valuable experience in a professional setting.",
        ],
      },
    ],
    type: EType.RESUME,
  },
  {
    id: 3,
    title: "RESEARCH",
    type: EType.RESUME,
    content: [
      {
        title:
          "Harnessing the Power of Health Diaries: A Pathway to Improved Healthcare Engagement in Older Populations",
        subTitle: "Co-Author",
        timeline: "08/2023 - 01/2024",
        description:
          "A research paper published at the Journal of Multidisciplinary Engineering Science and Technology (JMEST) exploring the utilization of health diaries as a strategy to enhance healthcare engagement among older populations.",
        content: [
          "Researched the importance of health diaries under Dr. Pham Dao Tien, contributing 8 pages to the paper.",
          "Discovered the significance of tracking the well-being of the elderly, which inspired me to prioritize my own health to prevent future health issues.",
          "This research motivated me to explore the glycemic index (GI) of my everyday meals for better health management.",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "OTHER ACTIVITIES",
    type: EType.RESUME,
    content: [
      {
        title: "The Plasbit Campaign",
        subTitle: "HR Member",
        timeline: "08/2023 - 07/2024",
        description: "A campaign focused on improving lives through recycling.",
        content: [
          "Coordinated online meetings and co-hosted bonding activities for over 40 students.",
          "Monitored deadlines for team members to ensure timely completion of tasks.",
          "Hand-crafted accessories from recycled paper to research autonomously about the paper recycling process, becoming more conscientious about waste classification.",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "BEN TRE 2023",
    images: [bentre20230, bentre20231],
    type: EType.SWIPER,
  },
  {
    id: 6,
    title: "BEN TRE 2024",
    description: `President of STEM JUNIOR club co-hosting SCIENTIFIC JOURNEY project at Ben Tre province for more than 100 childrens at SOS Children's Villages`,
    images: [
      bentre20240,
      bentre20241,
      bentre20242,
      bentre20243,
      bentre20244,
      bentre20245,
      bentre20246,
    ],
    type: EType.SWIPER,
  },
  {
    id: 7,
    title: "DANCE PERFORMANCE",
    images: [dance0, dance1, dance2, dance3, dance4],
    type: EType.SWIPER,
  },
  {
    id: 8,
    title: "Coding",
    description: `This is one of the classes I teach directly, where sharing knowledge with students has deepened my love for programming even more.`,
    images: [coding0, coding1, coding2, coding3],
    type: EType.SWIPER,
  },
  {
    id: 9,
    title: "Swimming",
    description: `Swimming is not only a workout but also a passion for me. Every time I swim, I feel that my body is healthier and my mind is more relaxed.`,
    images: [swimming0, swimming1, swimming2, swimming3, swimming4],
    type: EType.SWIPER,
  },
  {
    id: 10,
    title: "Solving Rubik",
    description: `Solving the Rubik's Cube is not just a hobby for me; it's a way to relax and stimulate my brain. In my spare time, I enjoy tackling its complex challenges`,
    images: [rubik0, rubik1, rubik2, rubik3],
    type: EType.SWIPER,
  },
];
