import React, { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import emailjs from "@emailjs/browser";
import "react-datepicker/dist/react-datepicker.css";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("Submit!");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const today = new Date();

  const formatPhoneNumber = (input) => {
    // Remove all non-digit characters from the input using a regular expression.
    const cleaned = ("" + input).replace(/\D/g, "");

    // Apply the desired formatting.
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]})-${match[2]}-${match[3]}`;
    }

    return input;
  };

  const handlePhoneNumberChange = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhoneNumber(formattedPhoneNumber);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const validKeyForPhone = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Backspace"];

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_zlanr09", "template_4czqznn", form.current, "jwLUixlerwVK9ReDL").then(
      (result) => {
        setStatus("Sent!");

        setTimeout(() => {
          setStatus("Submit!"); // Change the status back to "Submit!" after a delay
        }, 2000);
      },
      (error) => {
        console.log(error.text);
      }
    );

    setStatus("Sending...");

    setName("");
    setEmail("");
    setPhoneNumber("");
    setComment("");
    setSelectedDate(null);
    // Add your form submission logic here, including the selectedDate.
  };

  return (
    <div>
      <h2 className="text-center sm:mt-36 mt-10 text-4xl font-bold">Contact Us!</h2>
      <div
        id="contact"
        className="flex flex-col justify-center mx-auto sm:w-[800px] shadow-xl mt-10 mb-5"
      >
        <div className="text-center p-2">
          <p>
            Have specific questions? Please fill out the form below and we will be happy to assist
            you or contact us at xxx-xxx-xxxx.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-screen sm:w-2/3 p-4 mx-auto"
          ref={form}
        >
          <div className="mb-4 w-full">
            <label htmlFor="name" className="block font-bold">
              Name
            </label>
            <input
              className="border-green border rounded-md p-2 w-full"
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="mb-4 w-full">
            <label htmlFor="email" className="block font-bold">
              Email
            </label>
            <input
              className="border-green border rounded-md p-2 w-full"
              name="email"
              type="email"
              id="email"
              placeholder="jdoe@email.com"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col mb-4 w-full">
            <label htmlFor="phone" className="block font-bold">
              Phone
            </label>
            <input
              className="border-green border rounded-md p-2 w-full"
              type="tel"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              id="phone"
              onKeyDown={(e) => {
                if (!validKeyForPhone.includes(e.key)) {
                  e.preventDefault();
                }
              }}
              placeholder="(xxx)-xxx-xxxx"
              required
            />
          </div>
          <div className="flex flex-col mb-4 w-full">
            <label htmlFor="comments" className="block font-bold">
              Comments
            </label>
            <textarea
              placeholder="Add anything we need to know here!"
              className="border-green border rounded-md p-2"
              required
              name="comment"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="mb-4 w-full">
            <label htmlFor="preferredDate" className="block font-bold">
              *Preferred Date:
            </label>

            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="MM/dd/yyyy"
              value={selectedDate}
              minDate={today}
              isClearable
              name="selectedDate"
              className="border-green border rounded-md p-2 w-full"
            />

            <p className="text-sm mt-1">*Optional</p>
          </div>
          <div className="w-full flex justify-center items-center">
            <button
              type="submit"
              className="bg-green text-white py-2 px-4 rounded w-full font-bold"
            >
              {status}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
