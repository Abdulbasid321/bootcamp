"use client";

import { useState } from "react";
import axios from "axios";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    childName: "",
    age: "",
    parentName: "",
    phone: "",
    email: "",
    course: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post("https://bootcampapi-1-ir2j.onrender.com/api/register", formData);
      setMessage("Registration successful!");
      setFormData({
        childName: "",
        age: "",
        parentName: "",
        phone: "",
        email: "",
        course: "",
      });
    } catch (error: any) {
      setMessage("Registration failed.");
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {message && (
        <div className="col-span-2 text-center text-sm text-green-600 font-medium">{message}</div>
      )}

      <div className="col-span-1">
        <label className="block text-gray-700 font-medium mb-2">Child's Name</label>
        <input
          type="text"
          name="childName"
          value={formData.childName}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      <div className="col-span-1">
        <label className="block text-gray-700 font-medium mb-2">Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      <div className="col-span-1">
        <label className="block text-gray-700 font-medium mb-2">Parent's Name</label>
        <input
          type="text"
          name="parentName"
          value={formData.parentName}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      <div className="col-span-1">
        <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      <div className="col-span-1 md:col-span-2">
        <label className="block text-gray-700 font-medium mb-2">Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      <div className="col-span-1 md:col-span-2">
        <label className="block text-gray-700 font-medium mb-2">Select a Course</label>
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        >
          <option value="">-- Choose a Course --</option>
          <option value="Introduction to Computer">Introduction to Computer</option>
          <option value="Graphics Design">Graphics Design</option>
          <option value="Web Development">Web Development</option>
          <option value="Data Analysis">Data Analysis</option>
          <option value="UI/UX">UI/UX</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="Artificial Intelligence (AI)">Artificial Intelligence (AI)</option>
        </select>
      </div>

      <div className="col-span-1 md:col-span-2 text-center mt-4">
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-full text-lg transition"
        >
          {loading ? "Submitting..." : "Submit Registration"}
        </button>
      </div>
    </form>
  );
}
