import { useForm } from "react-hook-form";
import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "../../assets/trees/tree1.png";
import Forest from "../../assets/forestT.png";
import HText from "../../shared/HText";
import useMediaQuery from "../../hooks/useMediaQuery";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-borderLight px-5 py-3 placeholder-white`;
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    const isValid = await trigger();
    if (isValid) {
      reset();
    }
  };


  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <p className="text-primary-500">Join Us in Preserving <span className="text-secondary400">Forests and Nature</span></p >
          </HText>
          <p className="my-5">
            We invite you to join hands with us in a noble endeavor that holds the key to our planet's health and future – the preservation of forests and nature. In a world where the balance of nature is under threat, collective action becomes our greatest asset. Together, we can make a difference, and together, we can protect the invaluable beauty and resources that our forests offer.
          </p>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={handleSubmit(onSubmit)}
              action="https://formsubmit.co/innka-pinnka@ukr.net"
              method="POST"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}

              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                className={inputStyles}
                placeholder="MESSAGE"
                rows={4}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary500">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary500 px-20 py-3  hover:bg-secondGreen hover:text-white transition duration-300 ease-in-out"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          {isAboveMediumScreens &&
            <motion.div
              className="relative mt-16 basis-4/5 md:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <img
                className="md:w-[400px] md:h-[500px] xl:w-[600px] xl:h-[700px] absolute -top-[200px] right-[80px]"
                alt="contact-us-page-graphic"
                src={ContactUsPageGraphic}
              />
              <img src={Forest } alt="tree" className="w-full absolute md:-bottom-[120px] xl:-bottom-[200px] right-[50px] z-[1] ">
              </img>
            </motion.div>}

        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
