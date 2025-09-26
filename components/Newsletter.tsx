import React from 'react';

const newsletterBg = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAcADADASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAUGBwEDBAj/xAApEAACAQMDAwQCAwAAAAAAAAABAgMEBREABgcSITFBURMhIkJhcYGx/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgMB/8QAHBEAAgICAwEAAAAAAAAAAAAAAQIAAxESBCEx/9oADAMBAAIRAxEAPwD1PRXLHX22nrq2gko5ZYw7wS4Lxn2JBIz+DWN11uhpzREaLqS5+BJMu9I0jaR2XOMkKCQM579uNaCz3a332z0t5s8iyUtTGHifaVJH1BwQfYjkayPV+6eg9FXhLLqGpWOreETKjBnwhJGSACDkEev866K9fiyS8vPHMRj8s12p949D6X06t/uV2iajeUxI0UbyszgZK7VBIIBOTjjI9+M/N/uJaBWQvJcXmlclQkdLISHPoCQAB+QSPqNCqfePQelNMNqS53eJqR5TEskMbSqz4yV2qCQRnJzxgj34z83+4poFIHeS4vM+CVRLWQlz6AEgAfkkD6Gtq9eXLUs/EoylZrL/wCKnhb2av8Akf8A7R/ip4W9mr/kf/trJVX+4n4cglZItXcKgEhXjpWIPuMgA/zWP/4qeFvZq/5H/wC0f4qeFvZq/wCR/wDtp+3cs/ZlGawf/E9wsBnV/wAj/wDaP8TvCwGTq/5H/wC2slVf7ifhyCVki1dwqASFeOlYg+4yAD/NY/8A4nuFhlOr/kf/ALR/id4WGTrA/wDkf/tp+3cvJ7Moza7j/cT8NJIqRV1wZSQC70rYGe5IAJ/kA/Wsf/xNcLf+av8Akf8A7R/ia4W/81f8j/8AbT9vJLz2ZlGbXD/uK+GnkWNKu4KzEABKRiSfcDA/zWO/8TXC3/mr/kf/ALR/ia4W/wDNX/I//bT9vJLT2ZRn/9k=';

const Newsletter: React.FC = () => {
  return (
    <section 
      className="relative bg-cover bg-center text-white" 
      style={{ backgroundImage: `url('${newsletterBg}')` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Stay Inspired</h2>
              <p className="text-gray-300 mb-8 text-lg">
                  Subscribe to our newsletter for the latest stories, exclusive offers, and a regular dose of visual beauty delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="flex-grow px-6 py-4 rounded-full bg-white/10 border-2 border-transparent focus:border-dark-accent focus:outline-none transition-colors duration-300 placeholder-gray-400 text-white"
                  />
                  <button 
                      type="submit"
                      className="px-8 py-4 rounded-full bg-dark-accent text-black font-semibold uppercase tracking-wider hover:opacity-90 transform hover:scale-105 transition-all duration-300"
                  >
                      Subscribe
                  </button>
              </form>
          </div>
      </div>
    </section>
  );
};

export default Newsletter;