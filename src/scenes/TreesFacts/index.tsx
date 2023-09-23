import { SelectedPage, ClassType } from "../../shared/types";
import { motion } from "framer-motion";
import { facts } from "./facts";
import HText from "../../shared/HText";
import Class from "./Fact";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const TreesFacts = ({ setSelectedPage }: Props) => {
  const flexBetween = "flex flex-col items-center justify-between";

  return (
    <section id="facts" className="w-full bg-borderLight py-40">
      
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
          <div className={`${flexBetween} mx-auto w-5/6`}>

          <motion.div
            className="mx-auto w-5/6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="md:w-3/5">
              <HText>Some facts</HText>
              <p className="py-5">
              Forests exemplify the beauty of interconnectedness in nature, where cooperation and mutual support are key to the survival and flourishing of all its inhabitants, from the tallest trees to the smallest organisms on the forest floor.
              </p>
            </div>
          </motion.div>
          <div
          className="mt-10 h-[353px] w-full 
          overflow-x-auto overflow-y-hidden
          scrollbar-thin scrollbar-thumb-red-400 scrollbar-track-gray-100">
            <ul className="w-[2800px] whitespace-nowrap">
              {facts.map((item: ClassType, index) => (
                <Class
                  key={`${item.name}-${index}`}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                />
              ))}
            </ul>
          </div>
          </div>
        </motion.div>


      

    </section>
  );
};

export default TreesFacts;