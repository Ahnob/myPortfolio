const Contact = () => {
  return (
    <section id="contact" className="container mx-auto py-16 px-4">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <form action="#" method="POST" className="max-w-xl mx-auto">
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-4 border border-gray-300 rounded-lg h-32"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gray-800 text-white py-3 px-6 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
