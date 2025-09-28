import React, { forwardRef } from 'react';

interface NewsletterProps {
  formRef?: React.RefObject<HTMLDivElement>;
}

const newsletterBg = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAcADADASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAUGBwEDBAj/xAApEAACAQMDAwQCAwAAAAAAAAABAgMEBREABgcSITFBURMhIkJhcYGx/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgMB/8QAHBEAAgICAwEAAAAAAAAAAAAAAQIAAxESBCEx/9oADAMBAAIRAxEAPwD1PRXLHX22nrq2gko5ZYw7wS4Lxn2JBIz+DWN11uhpzREaLqS5+BJMu9I0jaR2XOMkKCQM579uNaCz3a332z0t5s8iyUtTGHifaVJH1BwQfYjkayPV+6eg9FXhLLqGpWOreETKjBnwhJGSACDkEev866K9fiyS8vPHMRj8s12p949D6X06t/uV2iajeUxI0UbyszgZK7VBIIBOTjjI9+M/N/uJaBWQvJcXmlclQkdLISHPoCQAB+QSPqNCqfePQelNMNqS53eJqR5TEskMbSqz4yV2qCQRnJzxgj34z83+4poFIHeS4vM+CVRLWQlz6AEgAfkkD6Gtq9eXLUs/EoylZrL/wCKnhb2av8Akf8A7R/ip4W9mr/kf/trJVX+4n4cglZItXcKgEhXjpWIPuMgA/zWP/4qeFvZq/5H/wC0f4qeFvZq/wCR/wDtp+3cs/ZlGawf/E9wsBnV/wAj/wDaP8TvCwGTq/5H/wC2slVf7ifhyCVki1dwqASFeOlYg+4yAD/NY/8A4nuFhlOr/kf/ALR/id4WGTrA/wDkf/tp+3cvJ7Moza7j/cT8NJIqRV1wZSQC70rYGe5IAJ/kA/Wsf/xNcLf+av8Akf8A7R/ia4W/81f8j/8AbT9vJLz2ZlGbXD/uK+GnkWNKu4KzEABKRiSfcDA/zWO/8TXC3/mr/kf/ALR/ia4W/wDNX/I//bT9vJLT2ZRn/9k=';

const Newsletter = forwardRef<HTMLElement, NewsletterProps>(({ formRef }, ref) => {
  return (
    <footer ref={ref} className="bg-light-cream dark:bg-dark-bg py-16 px-6 font-['EB_Garamond']">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info and Form */}
          <div className="space-y-8">
            {/* Let's talk section */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-light text-gray-800 dark:text-dark-text mb-6 font-['EB_Garamond']">
                  Let's Engage With Us
                </h2>
                <div className="w-16 h-0.5 bg-gray-400 mb-8"></div>
              </div>

              {/* Contact Information */}
              <div className="space-y-2 text-gray-600 dark:text-dark-text/80 mb-8 font-['EB_Garamond']">
                <p>4th Floor, Pillar No.1680, Silver Square Building</p>
                <p>36, Cable Bridge Rd, Aditya Enclave, Venkatagiri</p>
                <p>Jubilee Hills, Hyderabad, Telangana 500033</p>
                <p>Tel. +918341079140</p>
                <p>info@arifphotography.com</p>
              </div>

              {/* Contact Form */}
              <div ref={formRef}>
                <form
                  action="mailto:Connect.arifphotography@gmail.com"
                  method="POST"
                  encType="text/plain"
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm text-gray-600 dark:text-dark-text/80 mb-2 font-['EB_Garamond']"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-dark-text/20 focus:border-gray-500 dark:focus:border-dark-text focus:outline-none transition-colors bg-white dark:bg-dark-bg"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm text-gray-600 dark:text-dark-text/80 mb-2 font-['EB_Garamond']"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-dark-text/20 focus:border-gray-500 dark:focus:border-dark-text focus:outline-none transition-colors bg-white dark:bg-dark-bg"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-gray-600 dark:text-dark-text/80 mb-2 font-['EB_Garamond']"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-dark-text/20 focus:border-gray-500 dark:focus:border-dark-text focus:outline-none transition-colors bg-white dark:bg-dark-bg"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm text-gray-600 dark:text-dark-text/80 mb-2 font-['EB_Garamond']"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-dark-text/20 focus:border-gray-500 dark:focus:border-dark-text focus:outline-none transition-colors bg-white dark:bg-dark-bg"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm text-gray-600 dark:text-dark-text/80 mb-2 font-['EB_Garamond']"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-dark-text/20 focus:border-gray-500 dark:focus:border-dark-text focus:outline-none transition-colors bg-white dark:bg-dark-bg resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-orange-500 text-white px-8 py-3 hover:bg-orange-600 transition-colors font-['EB_Garamond'] font-medium dark:bg-orange-400 dark:hover:bg-orange-300 animate-pulse"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right Side - Wedding Image */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gray-200 dark:bg-dark-secondary-bg overflow-hidden">
              <img
                src="https://i.postimg.cc/dVZZBJPF/014-A3530-Edit-Edit.jpg"
                alt="Wedding couple"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Newsletter;