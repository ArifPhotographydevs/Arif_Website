import React from 'react';

const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 mb-4 text-light-accent dark:text-dark-accent"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 mb-4 text-light-accent dark:text-dark-accent"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 mb-4 text-light-accent dark:text-dark-accent"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const ContactInfoCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}> = ({ icon, title, children }) => (
  <div className="bg-light-bg dark:bg-dark-bg p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
    {icon}
    <h3 className="font-bold text-xl mb-2">{title}</h3>
    <div className="text-light-text/70 dark:text-dark-text/70">{children}</div>
  </div>
);

const ContactPage: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-light-secondary-bg dark:bg-dark-secondary-bg">
      <div className="container mx-auto px-6 pt-12">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-7xl font-bold">
            Let's Create Together
          </h1>
          <p className="text-lg text-light-text/70 dark:text-dark-text/70 mt-4 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <ContactInfoCard icon={<MailIcon />} title="Email Us">
            <a
              href="mailto:hello@Arif.photo"
              className="hover:text-light-accent dark:hover:text-dark-accent transition-colors"
            >
              Connect.arifphotography@gmail.com
            </a>
          </ContactInfoCard>
          <ContactInfoCard icon={<PhoneIcon />} title="Call Us">
            <a
              href="tel:+1234567890"
              className="hover:text-light-accent dark:hover:text-dark-accent transition-colors"
            >
              8341079140
            </a>
          </ContactInfoCard>
          <ContactInfoCard icon={<LocationIcon />} title="Visit Us">
            <p>
              4th Floor, Pillar No.1680, Silver Square Building, 36, Cable Bridge Rd,
              Aditya Enclave, Venkatagiri
              <br />
              Jubilee Hills, Hyderabad, Telangana 500033
            </p>
          </ContactInfoCard>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center bg-light-bg dark:bg-dark-bg p-8 md:p-12 rounded-lg shadow-2xl">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Send a Message
            </h2>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full p-4 bg-light-secondary-bg dark:bg-dark-secondary-bg rounded-md focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full p-4 bg-light-secondary-bg dark:bg-dark-secondary-bg rounded-md focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent transition-all"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className="w-full p-4 bg-light-secondary-bg dark:bg-dark-secondary-bg rounded-md focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  rows={5}
                  className="w-full p-4 bg-light-secondary-bg dark:bg-dark-secondary-bg rounded-md focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent transition-all"
                ></textarea>
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="px-8 py-4 rounded-full bg-light-accent text-white dark:bg-dark-accent dark:text-black font-semibold uppercase tracking-wider hover:opacity-90 transform hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="h-96 lg:h-full rounded-lg overflow-hidden relative shadow-inner">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Address%3A%204th%20Floor%2CPillar%20No.1680%2C%20Silver%20Square%20Building%2C%2036%2C%20Cable%20Bridge%20Rd%2C%20Aditya%20Enclave%2C%20Venkatagiri%2C%20Jubilee%20Hills%2C%20Hyderabad%2C%20Telangana%20500033&maptype=roadmap"
              allowFullScreen
            ></iframe>
            <div className="absolute top-4 left-4 p-4 bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-sm rounded-lg">
              <h3 className="font-serif font-bold text-2xl">Find Our Studio</h3>
              <p className="text-light-text/70 dark:text-dark-text/70 mt-1">
                4th Floor, Pillar No.1680, Silver Square Building, 36, Cable Bridge Rd,
                Aditya Enclave, Venkatagiri, Jubilee Hills, Hyderabad, Telangana 500033
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;