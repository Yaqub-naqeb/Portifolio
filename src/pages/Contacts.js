import React, { useState, useRef } from "react";
import "../App.css";
import useTheme from "../components/store/useTheme";
import emailjs from "@emailjs/browser";

const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/YaqubEng" },
  { label: "Instagram", href: "https://www.instagram.com/Yaqub_321_/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yaqwb-naqib-b9894b238/" },
  { label: "GitHub", href: "https://github.com/Yaqub-naqeb" },
];

const Contacts = () => {
  const { mode } = useTheme();
  const formRef = useRef();
  const [formData, setFormData] = useState({
    from_email: "",
    message: "",
    website: "", // honeypot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Silent honeypot — bots fill this; humans never see it
    if (formData.website) {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ from_email: "", message: "", website: "" });
      return;
    }

    try {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.sendForm(
          serviceId,
          templateId,
          formRef.current,
          publicKey
        );
        setSubmitStatus("success");
        setFormData({ from_email: "", message: "", website: "" });
      } else {
        const subject = encodeURIComponent("Contact from Portfolio");
        const body = encodeURIComponent(
          `Email: ${formData.from_email}\n\nMessage:\n${formData.message}`
        );
        window.location.href = `mailto:yaqub.009448401@gmail.com?subject=${subject}&body=${body}`;
        // Mailto opens the user's mail client — don't claim the message was sent
        setSubmitStatus("mailto");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contacts"
      className={`${
        mode ? "contact" : "bg-[#262626]"
      } relative py-12 sm:py-16 md:py-20 lg:px-[10rem] md:px-[4rem] px-4 sm:px-6`}
    >
      <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2
            className={`${
              mode ? "text-[#2a2a2a]" : "text-[#ADD6E8]"
            } text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 sm:mb-6`}
          >
            Get In Touch
          </h2>
          <p
            className={`${
              mode ? "text-[#4a4a4a]" : "text-[#9C9C9C]"
            } text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto`}
          >
            I'm a frontend developer building modern websites that help
            businesses succeed. Let's bring your ideas to life!
          </p>
        </div>

        <div
          className={`${
            mode
              ? "bg-white shadow-lg"
              : "bg-[#1f1f1f] shadow-xl shadow-black/20"
          } rounded-2xl p-6 sm:p-8 md:p-10 transition-all duration-300`}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Honeypot field — hidden from users */}
            <div className="absolute -left-[9999px] opacity-0 h-0 overflow-hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="from_email"
                className={`${
                  mode ? "text-[#2a2a2a]" : "text-[#ADD6E8]"
                } block text-sm sm:text-base font-medium mb-2`}
              >
                Your Email
              </label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                required
                autoComplete="email"
                className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#ADD6E8] ${
                  mode
                    ? "bg-[#f8f8f8] border-[#e0e0e0] text-[#2a2a2a] focus:border-[#83c3de]"
                    : "bg-[#262626] border-[#404040] text-[#ADD6E8] focus:border-[#ADD6E8]"
                }`}
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className={`${
                  mode ? "text-[#2a2a2a]" : "text-[#ADD6E8]"
                } block text-sm sm:text-base font-medium mb-2`}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#ADD6E8] resize-none ${
                  mode
                    ? "bg-[#f8f8f8] border-[#e0e0e0] text-[#2a2a2a] focus:border-[#83c3de]"
                    : "bg-[#262626] border-[#404040] text-[#ADD6E8] focus:border-[#ADD6E8]"
                }`}
                placeholder="Tell me about your project or how I can help..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed ${
                mode
                  ? "bg-[#83c3de] hover:bg-[#61b1d6] text-white"
                  : "bg-[#ADD6E8] hover:bg-[#9cd5ee] text-[#262626]"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            <div role="status" aria-live="polite">
              {submitStatus === "success" && (
                <div
                  className={`p-4 rounded-lg ${
                    mode
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-green-900/30 text-green-400 border border-green-700/50"
                  }`}
                >
                  <p className="text-sm sm:text-base">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === "mailto" && (
                <div
                  className={`p-4 rounded-lg ${
                    mode
                      ? "bg-blue-50 text-blue-700 border border-blue-200"
                      : "bg-blue-900/30 text-blue-300 border border-blue-700/50"
                  }`}
                >
                  <p className="text-sm sm:text-base">
                    Your email app should open with the message ready — hit send
                    there to finish. Or email me directly at{" "}
                    <a
                      href="mailto:yaqub.009448401@gmail.com"
                      className="underline hover:opacity-80"
                    >
                      yaqub.009448401@gmail.com
                    </a>
                    .
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div
                  className={`p-4 rounded-lg ${
                    mode
                      ? "bg-red-50 text-red-700 border border-red-200"
                      : "bg-red-900/30 text-red-400 border border-red-700/50"
                  }`}
                >
                  <p className="text-sm sm:text-base">
                    Something went wrong. Please try again or email me directly
                    at{" "}
                    <a
                      href="mailto:yaqub.009448401@gmail.com"
                      className="underline hover:opacity-80"
                    >
                      yaqub.009448401@gmail.com
                    </a>
                  </p>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>

      <footer
        className={`max-w-4xl mx-auto pt-8 mt-4 border-t ${
          mode ? "border-[#e5e7eb]" : "border-[#3a3a3a]"
        }`}
      >
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:items-center">
          <p
            className={`${
              mode ? "text-[#6b7280]" : "text-[#9C9C9C]"
            } text-sm`}
          >
            © {new Date().getFullYear()} Yaqwb Naqeb
          </p>

          <nav
            aria-label="Social links"
            className="flex items-center gap-5"
          >
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                target="_blank"
                rel="noopener noreferrer"
                href={social.href}
                className={`${
                  mode
                    ? "text-[#6b7280] hover:text-[#2a2a2a]"
                    : "text-[#9C9C9C] hover:text-[#ADD6E8]"
                } text-sm transition-colors duration-300`}
              >
                {social.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Contacts;
