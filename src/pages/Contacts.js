import React, { useState, useRef } from "react";
import "../App.css";
import useTheme from "../components/store/useTheme";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const { mode } = useTheme();
  const formRef = useRef();
  const [formData, setFormData] = useState({
    from_email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear status when user starts typing
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration - uses environment variables if available
      // To set up EmailJS:
      // 1. Go to https://www.emailjs.com/ and create a free account
      // 2. Add an email service (Gmail, Outlook, etc.)
      // 3. Create an email template with variables: {{from_email}} and {{message}}
      // 4. Add these to your .env file:
      //    REACT_APP_EMAILJS_SERVICE_ID=your_service_id
      //    REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
      //    REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key

      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      // Try EmailJS if configured, otherwise use mailto fallback
      if (serviceId && templateId && publicKey) {
        await emailjs.sendForm(
          serviceId,
          templateId,
          formRef.current,
          publicKey
        );
        setSubmitStatus("success");
        setFormData({ from_email: "", message: "" });
      } else {
        // EmailJS not configured - show helpful message
        console.warn(
          "EmailJS not configured. Using mailto fallback. See EMAILJS_SETUP.md for setup instructions."
        );

        // Fallback: Use mailto link (works without EmailJS setup)
        const subject = encodeURIComponent("Contact from Portfolio");
        const body = encodeURIComponent(
          `Email: ${formData.from_email}\n\nMessage:\n${formData.message}`
        );
        window.location.href = `mailto:yaqub.009448401@gmail.com?subject=${subject}&body=${body}`;

        // Show success message after a short delay to allow mailto to open
        setTimeout(() => {
          setSubmitStatus("success");
          setFormData({ from_email: "", message: "" });
        }, 500);
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
      {/* Contact Form Section */}
      <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
        {/* Descriptive Message */}
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

        {/* Contact Form */}
        <div
          className={`${
            mode
              ? "bg-white shadow-lg"
              : "bg-[#1f1f1f] shadow-xl shadow-black/20"
          } rounded-2xl p-6 sm:p-8 md:p-10 transition-all duration-300`}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
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
                className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#ADD6E8] ${
                  mode
                    ? "bg-[#f8f8f8] border-[#e0e0e0] text-[#2a2a2a] focus:border-[#83c3de]"
                    : "bg-[#262626] border-[#404040] text-[#ADD6E8] focus:border-[#ADD6E8]"
                }`}
                placeholder="your.email@example.com"
              />
            </div>

            {/* Message Input */}
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

            {/* Submit Button */}
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

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div
                className={`p-4 rounded-lg ${
                  mode
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-green-900/30 text-green-400 border border-green-700/50"
                }`}
              >
                <p className="text-sm sm:text-base">
                  ✓ Message sent successfully! I'll get back to you soon.
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
                  ✗ Something went wrong. Please try again or email me directly
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
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex gap-3 justify-center lg:justify-between md:justify-between align-middle flex-wrap pt-8 border-t border-[#404040]">
        {/* copy right  */}
        <div
          className={`${
            mode
              ? "text-[#9C9C9C] hover:text-[#000000a9]"
              : "text-[#9C9C9C] hover:text-[#ffffff]"
          } transition-colors duration-300 text-sm sm:text-base order-2 sm:order-1`}
        >
          &copy; {new Date().getFullYear()} Yaqwb Naqeb
        </div>
        {/* Socials */}
        <div>
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://www.facebook.com/YaqubEng"
            className="text-[#9C9C9C]"
          >
            <span className="hover:text-[#000000a9] transition-all duration-300">
              Facebook
            </span>{" "}
            |{" "}
          </a>
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://www.instagram.com/Yaqub_321_/"
            className="text-[#9C9C9C]"
          >
            <span className="hover:text-[#000000a9] transition-all duration-300">
              Instagram
            </span>{" "}
            |{" "}
          </a>
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://www.linkedin.com/in/yaqwb-naqib-b9894b238/"
            className="text-[#9C9C9C]"
          >
            <span className="hover:text-[#000000a9] transition-all duration-300">
              LinkedIn
            </span>{" "}
            |{" "}
          </a>
          <a
            href="https://github.com/Yaqub-naqeb"
            target={"_blank"}
            rel="noreferrer"
            className="text-[#9C9C9C]"
          >
            <span className="hover:text-[#000000a9] transition-all duration-300">
              GitHub
            </span>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
