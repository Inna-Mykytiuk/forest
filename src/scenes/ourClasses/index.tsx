import { SelectedPage, ClassType } from "../../shared/types";
import { motion } from "framer-motion";
import { classes } from "./classes";
import HText from "../../shared/HText";
import Class from "./Class";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  const flexBetween = "flex flex-col items-center justify-between";

  return (
    <section id="ourclasses" className="w-full bg-primary100 py-40">
      
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
              <HText>OUR CLASSES</HText>
              <p className="py-5">
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
              </p>
            </div>
          </motion.div>
          <div
          className="mt-10 h-[353px] w-full 
          overflow-x-auto overflow-y-hidden
          scrollbar-thin scrollbar-thumb-red-400 scrollbar-track-gray-100">
            <ul className="w-[2800px] whitespace-nowrap">
              {classes.map((item: ClassType, index) => (
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

export default OurClasses;