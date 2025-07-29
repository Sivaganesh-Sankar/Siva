import React, { useState } from 'react';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Please wait...");
    const formData = new FormData(event.target);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      });
      const data = await response.json();
      if (response.status === 200) {
        setResult("Form submitted successfully");
        event.target.reset();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("Something went wrong!");
    } finally {
      setTimeout(() => setResult(""), 3000);
    }
  };

  const socialLinks = [
    { icon: "fa-facebook", url: "https://www.facebook.com/profile.php?id=100004938364975" },
    { icon: "fa-twitter", url: "https://twitter.com/" },
    { icon: "fa-instagram", url: "https://www.instagram.com/_ak_siva?igsh=MWNpZ2wweGJua2M2aQ==" },
    { icon: "fa-github", url: "https://github.com/Sivaganesh-Sankar" }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800/30">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side */}
          <div className="contact-left">
            <h1 className="sub-title text-primary text-4xl font-bold">Contact Me</h1>
            <p className="mt-4 text-xl">
              <i className="fa-solid fa-envelope text-primary mr-3"></i>
              sivaganeshshankar@gmail.com
            </p>
            <p className="mt-2 text-xl">
              <i className="fa-solid fa-phone text-primary mr-2"></i>
              +91 9080460428
            </p>
            <div className="social-icons flex gap-6 mt-6 text-2xl">
              {socialLinks
                .filter(s => s.url)
                .map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-primary transition-colors duration-300 text-3xl"
                  >
                    <i className={`fa-brands ${s.icon}`}></i>
                  </a>
                ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="contact-right">
            <form onSubmit={onSubmit}>
              {/* ✅ Web3Forms Access Key */}
              <input type="hidden" name="access_key" value="29cc6a6b-908e-437c-80b6-a7e56a9bac02" />
              <input
                type="text"
                name="Name"
                placeholder="Your Name"
                required
                className="w-full bg-slate-700/50 p-3 rounded mb-3 outline-none focus:ring-2 focus:ring-primary transition"
              />
              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                required
                className="w-full bg-slate-700/50 p-3 rounded mb-3 outline-none focus:ring-2 focus:ring-primary transition"
              />
              <input
                type="tel"
                name="Contact"
                placeholder="Your Number"
                required
                className="w-full bg-slate-700/50 p-3 rounded mb-3 outline-none focus:ring-2 focus:ring-primary transition"
              />
              <textarea
                name="Message"
                rows="6"
                placeholder="Your Message"
                className="w-full bg-slate-700/50 p-3 rounded mb-3 outline-none focus:ring-2 focus:ring-primary transition"
              ></textarea>
              <button type="submit" className="btn btn2 hover:bg-primary/800 transition duration-300">
                Submit
              </button>
              <div className="mt-2 text-sm text-slate-300">{result}</div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
