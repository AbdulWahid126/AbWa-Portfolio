import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// component
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Front-End Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-yellow-400">Abdul Wahid</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excle at crafting elegent digital experience and I am proficient
              in very programming languages and technologies.
            </p>
            {/* btn & social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-8">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-yellow-400 rounded-full flex justify-center items-center
                  text-yellow-400 text-base hover:bg-yellow-400 hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-8">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
