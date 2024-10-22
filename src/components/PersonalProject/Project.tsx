import DemoApp from "../../assets/image/demoapp.png";
import { motion } from "framer-motion";
import Button from "../Button";
import Dot from "../Dot";
import Container from "../Container";
import { DocumentDownload } from "iconsax-react";
import ImageGallery from "./ImageGallery";

const data = {
  title: "“Health Diary” Mobile Application",
  subTitle: "Founder and Lead-programmer",
  timeline: "09/2023 - 02/2024",
  description:
    "An app created with specialized features for users to be informed about potential diseases and be reminded to take medicine",
  content: [
    "Led a team of 5 young developers in the app development process.",
    "Developed multiple functions such as a health diary, meeting organizer, drug-taking alarm, encyclopedia about diseases common to the elderly.",
    "Introduced and applied the app usage in multiple local Nursing Homes, helping over 50 elderly in the daily life",
  ],
};

const Project = () => {
  return (
    <div className="space-y-32">
      <div className="bg-gray-100">
        <Container>
          <div className="flex flex-col xl:flex-row gap-16 mt-32">
            <div className="flex-1">
              <img src={DemoApp} className="w-full h-[400px] md:h-[680px]" />
            </div>
            <div className="flex-1 space-y-12 mb-20">
              <div className="space-y-4">
                <motion.h1
                  className="font-semibold text-2xl md:text-3xl text-gray-800"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  {data.title}
                </motion.h1>
                <div className="space-y-1">
                  <motion.p
                    className="text-base md:text-xl font-semibold text-primary-500"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    {data.subTitle}
                  </motion.p>
                  <motion.p
                    className="text-base md:text-xl text-gray-800"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    {data.timeline}
                  </motion.p>
                </div>
                <motion.p
                  className="text-base md:text-xl text-gray-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  {data.description}
                </motion.p>
                <Button
                  title="Download Apk"
                  onClick={() => {}}
                  variant="outline"
                  Icon={<DocumentDownload size={24} color="#53CB17" />}
                />
              </div>
              <div className="space-y-1">
                {data.content.map((item) => (
                  <motion.div
                    className="flex flex-row items-start gap-2"
                    key={item}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <div className="mt-3">
                      <Dot />
                    </div>
                    <p className="text-gray-800 text-xl">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            How to use “Health Diary” Application
          </h2>
          <p className="text-base md:text-xl text-gray-500 text-center">
            Lorem ipsum dolor sit amet consectetur. Enim dignissim felis egestas
            feugiat. Vel volutpat blandit pharetra fermentum odio ac tortor a.
          </p>
        </div>
        <div className="mt-12">
          <video className="w-full rounded-3xl" controls>
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/mp4"
            />
            Your browser does not support HTML video.
          </video>
        </div>
      </Container>
      <Container>
        <div className="mt-32 pb-48 space-y-12">
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            “Son’s Helpful App” Project
          </h2>
          <ImageGallery />
        </div>
      </Container>
    </div>
  );
};

export default Project;
