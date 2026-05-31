import { useState } from "react";
import axios from "axios";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        form
      );

      console.log(response.data);

      setSuccess(true);

      setForm({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>

      <form onSubmit={submitForm} className="contact-form">

        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && (
          <p className="success-msg">
            Message sent successfuully ✔
          </p>
        )}

      </form>
    </section>
  );
}

export default Contact;