'use client'
import { FaPaperPlane } from "react-icons/fa";
import useSectionInView from "@/lib/hooks";
import sendEmail from "../actions/sendEmail";
import { useFormStatus } from "react-dom";

const SubmitBtn = () => {
    const { pending } = useFormStatus();

    return (
        <button disabled={pending} type="submit" className="bg-black text-white rounded-full flex items-center gap-2 justify-center h-12 w-32 transition-all hover:scale-110 active:scale-105 disabled:scale-100 disabled:opacity-65">
            {pending ? <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div> : (() => {
                return (
                    <>
                        Send <FaPaperPlane />
                    </>
                )
            })()}
        </button>
    );
};

const Contact = () => {
    const { ref } = useSectionInView('Contact', 0.5);
    const handleSubmit = async (formData: FormData) => {
        await sendEmail(formData);
    }
  return (
    <section id="contact" ref={ref} className="mb-28 max-w-200 scroll-mt-28 text-center sm:mb-40">
      <h2 className="text-3xl font-medium capitalize mb-2">Contact</h2>
      <p className="text-gray-700 dark:text-white/80">
        Please contact me directly at <a href="mailto:nishantjain200015@gmail.com" className="text-blue-500">nishantjain200015@gmail.com</a> or through this form.
      </p>
      <form className="mt-10 flex flex-col gap-2" action={handleSubmit}>
        <input type="email" name="email" required placeholder="Email" className="rounded-md border h-14 px-4 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2" />
        <textarea name="message" required placeholder="Message" className="rounded-md border h-32 px-4 py-2 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2" />
        <SubmitBtn />
      </form>
    </section>
  )
}

export default Contact