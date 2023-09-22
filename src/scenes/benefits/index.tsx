import {
  HomeModernIcon,
  UserGroupIcon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/24/solid";
import useMediaQuery from "../../hooks/useMediaQuery";
import { SelectedPage, BenefitType } from "../../shared/types";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "../../assets/branch/branch1.png";
import HText from "../../shared/HText";
import Benefit from "./Benefit";
import ActionButton from "../../shared/ActionButton";

import Branch from "../../assets/branch/leaf1.png"



const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Climate Regulation",
    description:
      "Forests act as carbon sinks, absorbing carbon dioxide from the atmosphere and releasing oxygen through photosynthesis. This process helps mitigate climate change by reducing greenhouse gas levels.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Medicinal Resources",
    description:
      " A significant portion of the world's medicinal plants is found in forests. Indigenous and traditional knowledge of forest plants has contributed to modern medicine.",
  },
  {
    icon: <GlobeAsiaAustraliaIcon className="h-6 w-6" />,
    title: "Global Ecosystem Balance",
    description:
      "Forests are interconnected with other ecosystems and help maintain the overall balance of the planet's ecological systems. Their destruction can lead to cascading environmental effects.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
  const flexBetween = "flex flex-col items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");

  return (
    <section
      id="benefits"
      className="mx-auto min-h-full w-5/6 py-20"
    >
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
          {/* HEADER */}
          <motion.div
            className="md:my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <HText>Explore, Adventure, and Reconnect in the Forest</HText>
            <p className="my-5 text-sm">
            Forests play a vital role in our world, and their importance cannot be overstated.
            </p>
          </motion.div>

          {/* BENEFITS */}
          <motion.div
            className="mt-5 items-center justify-between gap-8 md:flex"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
          >
            {benefits.map((benefit: BenefitType) => (
              <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </motion.div>

          {/* GRAPHICS AND DESCRIPTION */}
          <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">

            {/* GRAPHIC */}
            <img
              className="mx-auto"
              alt="benefits-page-graphic"
              src={BenefitsPageGraphic}
            />

            {/* DESCRIPTION */}
            <div>
              {/* TITLE */}
              <div className="relative">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: 50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <HText>
                      MILLIONS OF HAPPY MEMBERS GETTING{" "}
                      <span className="text-primary500">FIT</span>
                    </HText>
                  </motion.div>

              </div>

              {/* DESCRIPT */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <p className="my-5">
                Forests are incredibly rich in biodiversity, providing habitat and sustenance for countless plant and animal species. They are often referred to as the "lungs of the Earth" for their role in supporting diverse ecosystems.
                Forests are essential for industries such as forestry, agriculture, and tourism, contributing to economic growth and stability in many regions.
                Forests are natural watersheds, regulating the flow of water in rivers and streams. They help prevent erosion, filter pollutants, and maintain the quality of freshwater sources.
                </p>
                <p className="mb-5">
                Forests are not only a source of beauty and inspiration but also critical for the well-being of the planet and all its inhabitants, including humans. Protecting and conserving forests is a shared responsibility for the health of our planet and future generations.
                </p>
              </motion.div>

              {/* BUTTON */}
              <div className="relative mt-16">
                {isAboveMediumScreens && <img alt="wtf-sponsor" src={Branch} className="w-[500px] h-[600px]  absolute -bottom-48 -right-20 z-[-1] "/>}
                
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Join Now
                  </ActionButton>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits