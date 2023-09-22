import { SelectedPage } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "../../shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";

// import HomePageText from "../../assets/HomePageText.png";

import HomePageGraphic from "../../assets/branch/branch2.png";
import SponsorForbes from "../../assets/sponsors/forbes.png";
import SponsorWtf from "../../assets/sponsors/wtf.png";
import SponsorWorld from "../../assets/sponsors/world.png";
import SponsorCiel from "../../assets/sponsors/ciel.png";
import { motion } from "framer-motion";

type Props = {
  children?: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");
  const flexBetween = "flex flex-col items-center justify-between";

  return (
    <section
      id="home"
      className="gap-16 bg-homeBg py-20 md:h-full md:pb-0 md:py-[100px]"
    >
      <div className={`${flexBetween} mx-auto w-5/6`}>
        {/* IMAGE AND MAIN HEADER */}
        <motion.div
          className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
          onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
          {/* MAIN HEADER */}
          <div className="z-10 sm:mt-16 md:mt-32 md:basis-3/5">

            {/* HEADINGS */}
            <motion.div
              className="md:-mt-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="relative flex">
                <div className="flex flex-col">
                  <div className="before:absolute before:-top-24 xl:before:-top-32 md:before:content-evolvetext before:-left-20 before:z-[-1]"></div>
                  {/* <img alt="home-page-text" src={HomePageText}></img> */}
                  <p className="md:text-[92px] text-[72px] text-rose800 font-black font-family leading-[100px]" >Wild Forest</p>
                  <p className="text-[42px] text-rose800 font-thin tracking-[5px]">Rediscover Wonder.</p>
                </div>
              </div>

              <p className="mt-5 font-montserrat sm:text-sm text-md md:text-primary100  xl:text-mainGreen">
                What do trees feel, How They Communicate?
                Do you know that trees experience pain and have memories and that tree parents
                live together with their children?
                I invite you to share with me the joy trees can bring us. And, who knows,
                perhaps on your next walk in the forest, you will discover for yourself
                wonders great and small.
              </p>
            </motion.div>

            {/* ACTIONS */}
            <motion.div
              className="mt-8 flex items-center gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <ActionButton setSelectedPage={setSelectedPage}>Join now</ActionButton>
              <AnchorLink className="text-sm font-bold text-secondary500 underline hover:text-white"
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}>
                <p className="transition duration-100 ease">Learn More</p>

              </AnchorLink>
            </motion.div>

          </div>

          {/* IMAGE */}
          <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-end">
            <img alt="home-page-graphic" src={HomePageGraphic}></img>
          </div>

        </motion.div>
        {/* SPONSORS */}
        {isAboveMediumScreens && (
          <div className="h-[150px] w-full bg-primary200 py-10 mt-[80px] backdrop-opacity-10 backdrop-invert bg-primary200/60"
          // style={{
          //   backdropFilter: 'blur(10px)',
          //   backgroundColor: 'rgba(90, 72, 72, 0.3)',
          //   boxShadow: 'rgba(0, 0, 0, 0.5) 0px 5px 15px',
          // }}
          >
            <div className={`${flexBetween} mx-auto w-full  `}
            >
              <div className="flex w-full items-center justify-around gap-8">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  alt="forbes-sponsor" src={SponsorForbes} className="w-[150px] h-[50px]" />
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  alt="wtf-sponsor" src={SponsorWtf} className="w-[80px] h-[100px]" />
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  alt="world-sponsor" src={SponsorWorld} className="w-[80px] h-[80px]" />
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  alt="ciel-sponsor" src={SponsorCiel} className="w-[250px] h-[50px]" />
              </div>
            </div>
          </div>
        )}
      </div>


    </section>
  )
}

export default Home