export default function Contact() {
  return (
    <div className="flex w-5/12 items-center justify-center">
      <div className="mx-auto w-full">
        <form>
          <h2 className="m-4 flex justify-center text-3xl font-extrabold">
            Contact Me!
          </h2>
          <div className="mb-5">
            <label htmlFor="name" className="mb-3 block text-base font-medium">
              Full Name
            </label>
            <input
              required
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="mb-3 block text-base font-medium">
              Email Address
            </label>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@domain.com"
              className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="subject"
              className="mb-3 block text-base font-medium"
            >
              Subject
            </label>
            <input
              required
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter your subject"
              className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium"
            >
              Message
            </label>
            <textarea
              required
              rows="4"
              name="message"
              id="message"
              placeholder="Type your message"
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div>
            <button className="hover:shadow-form rounded-md bg-[#6A64F1] px-8 py-3 text-base font-semibold text-white outline-none">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
