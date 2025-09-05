function Reservation() {
  return (
    <div className="bg-gradient-to-r from-emerald-100 via-green-50 to-emerald-100 min-h-screen flex items-center justify-center">
      <div className="max-w-xl w-full mx-auto py-12 px-6">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center text-emerald-800 mb-10">
          Book Your Flight Ticket
        </h2>

        {/* Reservation Form */}
        <form
          action="https://formsubmit.co/xxxxx@gmail.com"
          method="POST"
          className="space-y-5 bg-white p-8 rounded-2xl shadow-2xl"
        >
          {/* FormSubmit Settings */}
          <input
            type="hidden"
            name="_next"
            value="https://yourwebsite.com/thank-you"
          />
          <input
            type="hidden"
            name="_subject"
            value="New Flight Ticket Reservation"
          />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for choosing Safina Voyage! We’ll contact you soon with more details."
          />

          {/* Full Name */}
          <input
            type="text"
            name="Full Name"
            placeholder="Full Name"
            className="input input-bordered w-full"
            required
          />

          {/* Phone */}
          <input
            type="tel"
            name="Phone Number"
            placeholder="Phone Number"
            className="input input-bordered w-full"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="Email"
            placeholder="Your Email"
            className="input input-bordered w-full"
            required
          />

          {/* Message */}
          <textarea
            name="Message"
            placeholder="Tell us about your travel needs (Hajj, Umrah, destination...)"
            className="textarea textarea-bordered w-full"
            rows={4}
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn bg-emerald-600 text-white hover:bg-emerald-700 block mx-auto mt-4 px-8 py-2 rounded-lg font-bold shadow-md transition"
          >
            Submit Reservation
          </button>
        </form>
      </div>
    </div>
  );
}

export default Reservation;
