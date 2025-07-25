import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import ActionButton from "../components/ActionButton";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FaUser, FaEnvelope, FaTag, FaCommentDots } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    data.access_key = "72a92109-ed07-4e92-a019-0f9e48d95d09";

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
        background: "#0f172a",
        color: "#f8fafc",
        confirmButtonColor: "#22c55e",
        confirmButtonText: "Ok",
        iconColor: "#22c55e",
      });
      reset();
    } else {
      console.log("Error", res);
    }
  };

  // 🔥 GSAP Animations
  useEffect(() => {
    const fields = gsap.utils.toArray(".animate-contact");

    fields.forEach((el, index) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 40,
        duration: 0.6,
        delay: index * 0.1,
        ease: "power2.out",
      });
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="pt-10 lg:pt-[2.5vw] pb-30 lg:pb-[8.5vw] flex items-center justify-center w-full">
      <div className="text-accent overflow-hidden rounded relative w-full sm:w-2/3 lg:max-w-2/3 flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid w-full gap-5 lg:gap-[1.5vw] grid-cols-2 sm:grid-cols-6"
        >
          {/* Title */}
          <div className="animate-contact text-grow order-1 w-full sm:col-span-6 col-span-4 text-center rounded flex flex-col items-center justify-center py-5 lg:py-1.5vw">
            <h2 className="text-xl sm:text-3xl text-center lg:text-[2.5vw] font-bold drop-shadow-[1px_5px_1px] text-accent">
              <span className="text-grow">Let’s Work Together</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-[1.5vw] text-grow mt-6 lg:mt-[2.5vw]">
              Whether you have a question, a project idea, or just want to
              connect — feel free to reach out. I’ll get back to you as soon as
              possible!
            </p>
          </div>

          {/* Name */}
          <div className="animate-contact relative bg-accent/60 shadow-accent/50 shadow-sm backdrop-blur-2xl order-2 col-span-4 sm:col-span-2 text-grow w-full rounded">
            <div className="flex items-center w-full">
              <span className="px-4 text-grow text-xl lg:text-[1.5vw]">
                <FaUser />
              </span>
              <input
                placeholder="Your Name"
                {...register("name", { required: true })}
                type="text"
                name="name"
                id="name"
                className="px-3 py-3 lg:px-[1vw] lg:py-[1vw] outline-0 w-full text-base lg:text-[1.2vw] h-full text-grow"
              />
            </div>
            {errors.name && (
              <p className="text-red-500 absolute text-xs lg:text-[1vw] py-1 lg:py-[.2vw] bg-accent/60 rounded-full px-5 lg:px-[2.5vw]">
                Please enter your name.
              </p>
            )}
          </div>

          {/* Email */}
          <div className="animate-contact bg-accent/60 shadow-accent/50 shadow-sm relative col-span-4 order-3 sm:col-span-4 sm:order-3 text-grow w-full rounded backdrop-blur-2xl">
            <div className="flex items-center w-full">
              <span className="px-4 text-grow text-xl lg:text-[1.5vw]">
                <FaEnvelope />
              </span>
              <input
                placeholder="Your Email Address"
                {...register("email", { required: true })}
                type="email"
                name="email"
                id="email"
                className="px-3 py-3 lg:px-[1vw] lg:py-[1vw] outline-0 w-full text-base lg:text-[1.2vw] h-full bg-transparent text-grow"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 absolute text-xs lg:text-[1vw] py-1 lg:py-[.2vw] bg-accent/60 rounded-full px-5 lg:px-[2.5vw]">
                Please enter your email.
              </p>
            )}
          </div>

          {/* Subject */}
          <div className="animate-contact bg-accent/60 shadow-accent/50 shadow-sm relative col-span-4 order-4 sm:col-span-6 sm:order-4 text-grow w-full rounded backdrop-blur-2xl">
            <div className="flex items-center w-full">
              <span className="px-4 text-grow text-xl lg:text-[1.5vw]">
                <FaTag />
              </span>
              <input
                placeholder="Subject"
                {...register("subject", { required: true })}
                type="text"
                name="subject"
                id="subject"
                className="px-3 py-3 lg:px-[1vw] lg:py-[1vw] outline-0 w-full text-base lg:text-[1.2vw] h-full bg-transparent text-grow"
              />
            </div>
            {errors.subject && (
              <p className="text-red-500 absolute text-xs lg:text-[1vw] py-1 lg:py-[.2vw] bg-accent/60 rounded-full px-5 lg:px-[2.5vw]">
                Please enter a subject.
              </p>
            )}
          </div>

          {/* Message */}
          <div className="animate-contact bg-accent/60 shadow-accent/50 shadow-sm order-5 sm:order-5 col-span-4 sm:col-span-6 text-grow relative w-full rounded backdrop-blur-2xl">
            <div className="flex items-start w-full">
              <span className="px-4 pt-3 text-grow text-xl lg:text-[1.5vw]">
                <FaCommentDots />
              </span>
              <textarea
                placeholder="Write Your Message Here"
                {...register("message", { required: true })}
                name="message"
                id="message"
                className="px-3 py-3 lg:px-[1vw] lg:py-[1vw] outline-0 w-full text-base lg:text-[1.2vw] h-full text-grow"
              ></textarea>
            </div>
            {errors.message && (
              <p className="text-red-500 absolute text-xs lg:text-[1vw] py-1 lg:py-[.2vw] bg-accent/60 rounded-full px-5 lg:px-[2.5vw]">
                Please enter your message.
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="animate-contact order-6 col-span-4 sm:col-span-6 flex justify-center w-full">
            <ActionButton label="Send" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
