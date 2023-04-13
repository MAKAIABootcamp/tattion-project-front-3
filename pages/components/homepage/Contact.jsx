import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Map from "./Map";

const Contact = () => {
  const styles = {
    section: "h-screen snap-center",
  };

  const ref = useRef(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_51nyjg5",
        "template_hnwu2zi",
        ref.current,
        "user_aeOQXLW1MEs9JIZm3LFO4"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (err) => {
          console.log(err.text);
          setSuccess(false);
        }
      );
  };

  return (
    <div className={`${styles.section}`}>
      <div className=" h-screen flex gap-12">
        <div className="leftContact flex items-center justify-end max-md:justify-center">
          <form
            ref={ref}
            className="flex flex-col gap-6 w-3/5 max-md:w-4/5"
            onSubmit={handleSubmit}
          >
            <h1 className="text-4xl font-extralight tracking-wide">
              Contact Us
            </h1>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="p-5 bg-white rounded-xs "
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              className="p-5 bg-white rounded-xs "
            />
            <textarea
              placeholder="Write your message"
              name="message"
              className="p-5 bg-white rounded-xs outline-none text-[#434343]"
              rows={7}
            ></textarea>
            <button className="bg-red-500 p-5 rounded-xs" type="submit">
              Send
            </button>
            {success ? (
              <p className="text-2xl font-extralight tracking-wide">
                Thank you for your message. We will get back to you as soon as
                possible.
              </p>
            ) : null}
          </form>
        </div>
        <div className="rightContact max-md:hidden">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Contact;
