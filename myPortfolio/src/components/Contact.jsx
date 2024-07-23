function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Feel free to reach out to me via email or follow me on social media.
        </p>
        <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
          <input
            type="text"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            placeholder="Your Name"
          />
          <input
            type="email"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            placeholder="Your Email"
          />
          <textarea
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            placeholder="Your Message"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
