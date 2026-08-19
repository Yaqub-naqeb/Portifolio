"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { PROFILE } from "@/data/profile";

export default function ContactForm() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    from_email: "",
    message: "",
    website: "",
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

    if (formData.website) {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ from_email: "", message: "", website: "" });
      return;
    }

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

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
        window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
        setSubmitStatus("mailto");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass =
    "w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#ADD6E8] bg-[#f8f8f8] border-[#e0e0e0] text-[#2a2a2a] focus:border-[#83c3de] dark:bg-[#262626] dark:border-[#404040] dark:text-[#ADD6E8] dark:focus:border-[#ADD6E8]";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div
        className="absolute -left-[9999px] opacity-0 h-0 overflow-hidden"
        aria-hidden="true"
      >
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
          className="text-[#2a2a2a] dark:text-[#ADD6E8] block text-sm sm:text-base font-medium mb-2"
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
          className={fieldClass}
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="text-[#2a2a2a] dark:text-[#ADD6E8] block text-sm sm:text-base font-medium mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className={`${fieldClass} resize-none`}
          placeholder="Tell me about your project or how I can help..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-6 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed bg-[#83c3de] hover:bg-[#61b1d6] text-white dark:bg-[#ADD6E8] dark:hover:bg-[#9cd5ee] dark:text-[#262626]"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      <div role="status" aria-live="polite">
        {submitStatus === "success" && (
          <div className="p-4 rounded-lg bg-green-50 text-green-700 border border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-700/50">
            <p className="text-sm sm:text-base">
              Message sent successfully! I&apos;ll get back to you soon.
            </p>
          </div>
        )}

        {submitStatus === "mailto" && (
          <div className="p-4 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700/50">
            <p className="text-sm sm:text-base">
              Your email app should open with the message ready — hit send there
              to finish. Or email me directly at{" "}
              <a
                href={`mailto:${PROFILE.email}`}
                className="underline hover:opacity-80"
              >
                {PROFILE.email}
              </a>
              .
            </p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="p-4 rounded-lg bg-red-50 text-red-700 border border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-700/50">
            <p className="text-sm sm:text-base">
              Something went wrong. Please try again or email me directly at{" "}
              <a
                href={`mailto:${PROFILE.email}`}
                className="underline hover:opacity-80"
              >
                {PROFILE.email}
              </a>
            </p>
          </div>
        )}
      </div>
    </form>
  );
}
