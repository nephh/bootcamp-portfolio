export default function About() {
  return (
    <div className="flex w-8/12 flex-col items-center justify-center">
      <img
        src="./sleepingKirby.gif"
        alt="Profile Picture"
        className="mb-4 h-40 rounded-full"
      />
      <p className="text-center text-lg md:text-2xl md:leading-9">
        Hello! My name is Owen and I am on the road to becoming a junior
        developer.
        <br />
        You might find me online as neph or nebusoku.
        <br />I love to learn and create, and am constantly trying to improve my
        skills and become a better thinker. Check out some of my projects over
        on the projects page, or get in contact with me through the contact
        form.
        <br />I am incredibly excited to continue this journey and create useful
        tools.
      </p>
    </div>
  );
}
