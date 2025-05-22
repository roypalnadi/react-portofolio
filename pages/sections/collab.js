import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import {
  AiFillEnvironment,
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";

export default function Collab() {
  const form = useRef();
  const [active, setActive] = useState(true);
  const sendEmail = (e) => {
    e.preventDefault();

    setActive(false);
    emailjs
      .sendForm(
        "service_3v7i9wd", // Ganti dengan Service ID dari EmailJS
        "template_8ec87j8", // Ganti dengan Template ID dari EmailJS
        form.current,
        "NmmweJKoNGXKLAsyx" // Ganti dengan Public Key dari EmailJS
      )
      .then(
        (result) => {
          console.log("Email Sent:", result.text);
          alert("Email sent successfully!");
          setActive(true);
        },
        (error) => {
          console.log("Email Error:", error.text);
          alert("Failed to send email.");
          setActive(true);
        }
      );
  };

  return (
    <div className="md:flex">
      <div className="flex-1 flex flex-col gap-5">
        <div className="pr-4">
          <h3 className="text-3xl py-1 dark:text-space-white font-semibold">
            Contact me for collaboration
          </h3>
          <p className="text-base py-2 text-gray-800 dark:text-gray-200">
            {
              "Excited to collaborate? Let's create something amazing together! Feel free to reach out and let's bring great ideas to life! 🚀"
            }
          </p>
        </div>
        <div className="text-2xl flex flex-col gap-5 text-gray-800 dark:text-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-space-300 flex justify-center items-center">
              <AiFillMail className="" />
            </div>
            <div className="flex-1 flex flex-col">
              <span className="text-base font-medium">Email</span>
              <span className="text-base">revannaldi45@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-space-300 flex justify-center items-center">
              <AiFillPhone className="" />
            </div>
            <div className="flex-1 flex flex-col">
              <span className="text-base font-medium">Phone</span>
              <span className="text-base">+62 819 0710 2428</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-space-300 flex justify-center items-center">
              <AiFillEnvironment className="" />
            </div>
            <div className="flex-1 flex flex-col">
              <span className="text-base font-medium">Location</span>
              <span className="text-base">Bogor, Indonesia</span>
            </div>
          </div>
        </div>
        <div className="text-3xl flex gap-5 text-gray-800 dark:text-gray-200">
          <a
            target="_blank"
            href="https://www.facebook.com/roypalnadi.pebruar.9"
            rel="noreferrer"
          >
            <AiFillFacebook />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/roy-palnadi-pebruar-8b621b138/"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            target="_blank"
            href="https://github.com/roypalnadi"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
        </div>
      </div>
      <div className="flex-1">
        <form ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col gap-2">
            {/* <div className="flex gap-2"> */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-800 dark:text-gray-200">
                Name
              </label>
              <input
                required={true}
                name="name"
                type="text"
                placeholder="Enter your name here..."
                className="w-full px-4 py-2 bg-space-300 border border-space-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-space-neon text-gray-800 dark:text-gray-200"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-800 dark:text-gray-200">
                Email
              </label>
              <input
                required={true}
                name="email"
                type="email"
                placeholder="user@example.com"
                className="w-full px-4 py-2 bg-space-300 border border-space-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-space-neon text-gray-800 dark:text-gray-200"
              />
            </div>
            {/* </div> */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-800 dark:text-gray-200">
                Message
              </label>
              <textarea
                required={true}
                name="message"
                type="text"
                placeholder="Hello Roy"
                className="h-36 w-full px-4 py-2 bg-space-300 border border-space-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-space-neon text-gray-800 dark:text-gray-200"
              />
            </div>
            <button
              disabled={!active}
              className={`${
                !active
                  ? "bg-space-300"
                  : "bg-space-neon hover:bg-space-neon/90"
              } py-2 border-none rounded-md w-full transition`}
              rel="noreferrer"
              type="submit"
            >
              <span
                className={`${
                  !active ? "text-space-white" : "text-space-200"
                } font-medium transition`}
              >
                Submit
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
