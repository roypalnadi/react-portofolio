import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

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
      <div className="flex-1">
        <div className="w-3/4">
          <h3 className="text-3xl py-1 dark:text-space-white font-semibold">
            Contact me for collaboration
          </h3>
          <p className="text-base py-2 text-gray-800 dark:text-gray-200 mb-5">
            {
              "Excited to collaborate? Let's create something amazing together! Feel free to reach out and let's bring great ideas to life! 🚀"
            }
          </p>
        </div>
      </div>
      <div className="flex-1">
        <form ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col gap-2">
            <div class="flex gap-2">
              <div class="flex flex-col">
                <label
                  for="name"
                  class="mb-2 font-medium text-gray-800 dark:text-gray-200"
                >
                  Name
                </label>
                <input
                  required={true}
                  name="name"
                  type="text"
                  placeholder="Enter your name here..."
                  class="w-full px-4 py-2 bg-space-300 border border-space-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-space-neon text-gray-800 dark:text-gray-200"
                />
              </div>
              <div class="flex flex-col">
                <label
                  for="name"
                  class="mb-2 font-medium text-gray-800 dark:text-gray-200"
                >
                  Email
                </label>
                <input
                  required={true}
                  name="email"
                  type="email"
                  placeholder="user@example.com"
                  class="w-full px-4 py-2 bg-space-300 border border-space-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-space-neon text-gray-800 dark:text-gray-200"
                />
              </div>
            </div>
            <div class="flex flex-col">
              <label
                for="name"
                class="mb-2 font-medium text-gray-800 dark:text-gray-200"
              >
                Message
              </label>
              <textarea
                required={true}
                name="message"
                type="text"
                placeholder="Hello Roy"
                class="h-32 w-full px-4 py-2 bg-space-300 border border-space-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-space-neon text-gray-800 dark:text-gray-200"
              />
            </div>
            <button
              disabled={!active}
              className={`${
                !active ? "bg-space-300" : "bg-space-neon"
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
