
import { useState } from "react";

function ContactForm() {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [step, setStep] = useState(1);

  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

      {/* QUESTION 1 */}
      {step === 1 && (
        <>
          <p className="text-sm text-gray-400 mb-4">
            01 / 06
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-center mb-10">
            What can we help you with?
          </h2>

          {/* Answer buttons */}
          <div className="grid gap-4 w-full max-w-xl">

            <button
              onClick={() => setSelectedAnswer("Build a website")}
              className="border border-gray-700 rounded-xl p-5 text-left hover:bg-white hover:text-black transition"
            >
              Build a website
            </button>

            <button
              onClick={() => setSelectedAnswer("Build a mobile app")}
              className="border border-gray-700 rounded-xl p-5 text-left hover:bg-white hover:text-black transition"
            >
              Build a mobile app
            </button>

            <button
              onClick={() =>
                setSelectedAnswer("Improve an existing product")
              }
              className="border border-gray-700 rounded-xl p-5 text-left hover:bg-white hover:text-black transition"
            >
              Improve an existing product
            </button>

            <button
              onClick={() => setSelectedAnswer("Something else")}
              className="border border-gray-700 rounded-xl p-5 text-left hover:bg-white hover:text-black transition"
            >
              Something else
            </button>

          </div>

          {/* Show selected answer */}
          {selectedAnswer && (
            <p className="mt-8 text-gray-400">
              You selected: {selectedAnswer}
            </p>
          )}

          {/* Show Next button */}
          {selectedAnswer && (
            <button
              onClick={() => setStep(2)}
              className="mt-8 bg-white text-black px-8 py-4 rounded-full font-semibold"
            >
              Next
            </button>
          )}
        </>
      )}

      {/* QUESTION 2 */}
      {step === 2 && (
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-400 mb-4">
            02 / 06
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            What is your budget?
          </h2>
        </div>
      )}

    </section>
  );
}

export default ContactForm;