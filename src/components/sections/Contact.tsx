import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "@components/buttons/Alert";
import ShimmerButton from "../buttons/ShimmerButton";

type AlertType = "success" | "error";

type AlertState = {
  show: boolean;
  type: AlertType;
  message: string;
};

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<AlertState>({
    show: false,
    type: "success",
    message: "",
  });

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Honeypot check
    if (formRef.current.company.value) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setAlert({
        show: true,
        type: "success",
        message: "Message sent successfully! We'll get back to you soon.",
      });

      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setAlert({
        show: true,
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="flex flex-col items-center py-16">
      {/* Header */}
      <div className="text-center mb-16 px-8 md:px-24">
        <h2 className="text-base md:text-lg font-bold text-white mb-6 tracking-widest uppercase">
          Contact
        </h2>
        <div className="flex justify-center gap-6 mb-4 flex-wrap">
          <h1 className="text-white text-4xl md:text-5xl uppercase">Get In</h1>
          <h1 className="text-[#FF9FFC] text-4xl md:text-5xl uppercase">
            Touch
          </h1>
        </div>
        <p className="text-white/60 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
          Whether you have a project, a collaboration in mind, or you're a
          recruiter looking for a passionate developer, feel free to reach out.
          I'm always open to new opportunities and conversations.
        </p>
      </div>

      {/* Form */}
      <div className="w-full max-w-3xl px-6 md:px-12">
        <div
          className="rounded-2xl border border-white/10 backdrop-blur-md p-6 md:p-8"
          style={{
            background: "rgba(0,0,0,0.3)",
            backdropFilter: "blur(21px)",
          }}
        >
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-6"
          >
            {/* Honeypot */}
            <input type="text" name="company" className="hidden" />

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#FF9FFC]"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#FF9FFC]"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#FF9FFC]"
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-2 px-6 py-3 rounded-lg bg-[#FF9FFC]/20 border border-[#FF9FFC]/40 text-white font-medium hover:bg-[#FF9FFC]/30 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="text-center border-b border-white/10 text-white/50 my-6 text-xs">
          or
        </div>
        {/* Calendly Shimmer Button */}
        <div className="mt-8 flex justify-center">
          <ShimmerButton
            href="https://calendly.com/sea-mac-dev/30min"
            className="px-8 py-3 text-sm"
            style={{ borderRadius: "8px" }}
          >
            Schedule Meeting
          </ShimmerButton>
        </div>
      </div>
      {/* Custom Alert */}
      <Alert
        show={alert.show}
        type={alert.type}
        message={alert.message}
        onClose={() =>
          setAlert({ ...alert, show: false, type: "success", message: "" })
        }
      />
    </section>
  );
}

export default Contact;
