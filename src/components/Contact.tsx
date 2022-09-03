function Contact() {
  return (
    <section
      id="contact"
      className="flex h-full w-full items-center justify-center border-t border-b border-primary"
    >
      <div className="h-[420px] w-full max-w-[900px] bg-primary py-14 px-8 lg:h-[500px] lg:px-16 lg:py-24">
        <div className="flex h-full w-full flex-col items-center justify-between">
          <h1 className="w-[70%] max-w-[450px]  text-center text-[2.1rem] font-extrabold leading-[2.5rem] tracking-tighter text-secondary md:text-[2.8rem] md:leading-[3.5rem]">
            Let's jump on a quick call
          </h1>
          <p className="w-[70%] max-w-[350px] text-center text-sm tracking-wider text-secondary">
            Ask me any questions you might have or just drop me a message to say
            hello :)
          </p>
          <a
            href="mailto:abhigyankvo@gmail.com?subject=Coming from Portfolio Website"
            className="border border-secondary px-10 py-5 text-base font-medium text-secondary"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
