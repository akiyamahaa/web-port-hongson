import Started1 from "../../assets/image/started1.png";
import Started2 from "../../assets/image/started2.png";
import Started3 from "../../assets/image/started3.png";
import Flipbook from "./Flipbook";

const StartedPart = () => {
  return (
    <div className="mt-12 pb-32">
      <div className="space-y-3 mb-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          Started
        </h2>
        <div className="space-y-3">
          <h3 className="text-base md:text-xl text-gray-500 text-center">
            2023
          </h3>
          <p className="text-base md:text-xl text-gray-500 text-center">
            Driven by my passion for technology and a desire to help the
            community, I launched a project called “Son’s Helpful App” to create
            meaningful change. My first step was to improve my coding skills and
            organize coding classes over the course of a year. Through these
            efforts, I raised 15 million VND for charity to develop a free
            healthcare app for the elderly.
          </p>
        </div>
      </div>
      {/* Image container  */}
      <div className="flex-row gap-12 hidden xl:flex">
        <div className="w-1/3">
          <img
            src={Started1}
            className="w-full object-cover rounded-3xl h-[314px]"
          />
        </div>
        <div className="w-2/3 pt-12">
          <img
            src={Started2}
            className="w-full object-cover rounded-3xl h-[514px]"
          />
        </div>
        <div className="w-1/3">
          <img
            src={Started3}
            className="w-full object-cover rounded-3xl h-[314px]"
          />
        </div>
      </div>
      <div className="flex-row flex-wrap flex xl:hidden">
        <div className="w-1/2 pr-3">
          <img
            src={Started1}
            className="w-full object-cover rounded-3xl h-[314px]"
          />
        </div>
        <div className="w-1/2 pl-3">
          <img
            src={Started3}
            className="w-full object-cover rounded-3xl h-[314px]"
          />
        </div>
        <div className="w-full pt-12">
          <img
            src={Started2}
            className="w-full object-cover rounded-3xl h-[514px]"
          />
        </div>
      </div>
      {/* Flip Book */}
      <div className="mt-32">
        <Flipbook
          title="Harnessing the Power of Health Diaries: A Pathway to Improved Healthcare Engagement in Older Populations"
          year="2023"
          content="In the second step, I used part of the funding to deepen my understanding of seniors' health complications and the benefits of a health diary in their care. Under the guidance of Dr. Pham Dao Tien at the Institute of Technical Education, Ho Chi Minh University of Technology and Education, I co-authored this research that was published in JMEST. This collaborative effort provided valuable insights that will inform the future of the project."
          bookIframe={
            <iframe
              scrolling="no"
              className="bg-background w-full h-[1000px] 
              "
              src="https://heyzine.com/flip-book/9c68e7f34b.html"
            ></iframe>
          }
        />
      </div>
      <div className="mt-32">
        <Flipbook
          title="Slow Steps into the Digital Era"
          year="2023"
          content="Understanding that many elderly users were unfamiliar with using the app, I created a software manual with large fonts and simple language to help them navigate it. Additionally, I wrote a book titled “Slow Steps into the Digital Era,” which offers both basic and advanced guidance on using digital devices. This resource aims to empower those who struggle with technology, enabling them to engage more confidently in the digital world."
          bookIframe={
            <iframe
              scrolling="no"
              className="bg-background w-full h-[1000px] 
              "
              src="https://heyzine.com/flip-book/c5c28acd03.html"
            ></iframe>
          }
        />
      </div>
    </div>
  );
};

export default StartedPart;
