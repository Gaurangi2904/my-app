"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `Hello Sharwari Collection,
Name: ${name}
Phone: ${phone}
Message: ${message}`;

    const whatsappUrl = `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold mb-4 text-center">
        Contact Us
      </h1>

      <p className="text-center text-gray-600 mb-10">
        We’d love to help you choose the perfect outfit
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 space-y-6"
      >
        <div>
          <label className="block font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">
            Message
          </label>
          <textarea
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Send via WhatsApp
        </button>
      </form>

      {/* DIRECT INFO */}
      <div className="text-center mt-10 text-gray-700">
        <p>📍 Your City, Maharashtra</p>
        <p>📞 9XXXXXXXXX</p>
      </div>

    </main>
  );
}
