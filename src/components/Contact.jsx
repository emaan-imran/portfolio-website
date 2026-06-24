import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 py-24"
    >
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl text-white font-bold">
          Contact Me
        </h2>

        <p className="text-gray-300 mt-5">
          Let's connect and build something amazing.
        </p>

        <div className="flex justify-center gap-10 mt-10 text-4xl text-sky-400">

          <a href="https://github.com/maan371">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/emaan-imran-40960a3ab/?skipRedirect=true">
            <FaLinkedin />
          </a>

          <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=emaannnimran@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaEnvelope />
</a>

        </div>

      </div>
    </section>
  );
}