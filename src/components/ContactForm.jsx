import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5">
          {/* Form Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Get in Touch
            </h2>
            <p className="text-sm text-gray-500">
              Please fill out the form below to send a message.
            </p>
          </div>

          {/* Form Body */}
          <form  className="space-y-4">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 sm:text-sm"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 sm:text-sm"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Write your message here..."
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 sm:text-sm"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors"
            >
              Submit Message
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default ContactForm