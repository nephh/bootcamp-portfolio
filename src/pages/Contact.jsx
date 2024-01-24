function handleSubmit(e) {
  e.preventDefault();
}

export default function Contact() {
  return (
    <div className="flex w-10/12 md:w-5/12 items-center justify-center">
      <div className="mx-auto w-full">
        <form onSubmit={handleSubmit}>
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
              className="text-zinc-900 w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
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
              className="text-zinc-900 w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
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
              className="text-zinc-900 w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
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
              className="text-zinc-900 w-full resize-none rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button className="my-4 px-3 rounded-md bg-zinc-200 p-2 font-extrabold text-zinc-900 transition-all duration-300 hover:px-5">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
