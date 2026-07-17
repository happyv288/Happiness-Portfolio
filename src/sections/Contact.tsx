import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { contactData } from "../data/portfolio";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setSuccess("Message sent successfully! 🎉");
      form.current.reset();
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="bg-white py-24 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-blue-500 dark:text-blue-400">
            Contact
          </p>

          <h2 className="mt-4 text-5xl font-bold">{contactData.title}</h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-600 dark:text-slate-400">
            {contactData.subtitle}
          </p>
        </motion.div>

        <div className="grid gap-14 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-5">
              <div className="rounded-xl bg-blue-500/10 p-4 text-blue-500 dark:text-blue-400">
                <FaEnvelope size={24} />
              </div>

              <div>
                <h3 className="font-semibold">Email</h3>

                <p className="text-slate-600 dark:text-slate-400">
                  {contactData.email}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="rounded-xl bg-blue-500/10 p-4 text-blue-500 dark:text-blue-400">
                <FaPhoneAlt size={24} />
              </div>

              <div>
                <h3 className="font-semibold">Phone</h3>

                <p className="text-slate-600 dark:text-slate-400">
                  {contactData.phone}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="rounded-xl bg-blue-500/10 p-4 text-blue-500 dark:text-blue-400">
                <FaMapMarkerAlt size={24} />
              </div>

              <div>
                <h3 className="font-semibold">Location</h3>

                <p className="text-slate-600 dark:text-slate-400">
                  {contactData.location}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900/60 dark:backdrop-blur-md"
          >
            <input
              name="from_name"
              type="text"
              required
              placeholder="Your Name"
              className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />

            <input
              name="from_email"
              type="email"
              required
              placeholder="Email Address"
              className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />

            <textarea
              name="message"
              rows={6}
              required
              placeholder="Tell me about your project..."
              className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && <p className="text-center text-green-500">{success}</p>}

            {error && <p className="text-center text-red-500">{error}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
