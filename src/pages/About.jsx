function About() {
  return (
    <div className="flex w-8/12 flex-col items-center justify-center">
      <img
        src="./sleepingKirby.gif"
        alt="Profile Picture"
        className="mb-4 h-40 rounded-full"
      />
      <p className="text-center text-lg">
        Hi, I'm [Your Name]. I'm a software developer passionate about building
        amazing web applications. I have experience in [list your skills or
        technologies]. I love learning new things and solving complex problems.
        Feel free to reach out to me at [your email address]!
      </p>
    </div>
  );
}

export default About;
