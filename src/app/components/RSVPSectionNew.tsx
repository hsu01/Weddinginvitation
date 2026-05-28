import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Check } from "lucide-react";

// ⚠️ IMPORTANT: Replace this URL with your Google Apps Script Web App URL
// Follow instructions in GOOGLE_SHEETS_SETUP.md to get your URL
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxcsixPw0mfMgq99-ZNklEhhxJgT6RBgO6P7ExP1N7r9CJia2HXY7Xs2I9H_q6cWqm9/exec";

export function RSVPSectionNew() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });
  const [formData, setFormData] = useState({
    name: "",
    attendance: "",
    guests: "1",
    guestNames: [""],
    dietary: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Update guest names array when number of guests changes
  const handleGuestsChange = (value: string) => {
    const numGuests = parseInt(value);
    const newGuestNames = Array(numGuests)
      .fill("")
      .map((_, i) => formData.guestNames[i] || "");
    setFormData({
      ...formData,
      guests: value,
      guestNames: newGuestNames,
    });
  };

  const updateGuestName = (index: number, value: string) => {
    const newGuestNames = [...formData.guestNames];
    newGuestNames[index] = value;
    setFormData({
      ...formData,
      guestNames: newGuestNames,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      // Send data to Google Sheets
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          attendance: formData.attendance,
          guests:
            formData.attendance === "Yes"
              ? formData.guests
              : "N/A",
          guestNames:
            formData.attendance === "Yes"
              ? formData.guestNames
                  .filter((n) => n.trim())
                  .join(", ")
              : "N/A",
          dietary:
            formData.attendance === "Yes"
              ? formData.dietary
              : "N/A",
        }),
      });

      // Show success message
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          attendance: "",
          guests: "1",
          guestNames: [""],
          dietary: "",
        });
      }, 3000);
    } catch (err) {
      console.error("Error submitting RSVP:", err);
      setError("Failed to submit RSVP. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-[#F6F5F3] to-[#FFF5F0]">
      <div className="max-w-2xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="text-center space-y-4">
            <h2 className="font-['Bodoni_Moda'] text-5xl md:text-6xl text-gray-900">
              RSVP
            </h2>
            <p className="font-['Inter'] text-gray-700">
              Please RSVP before September 30th, 2026
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-12 text-center space-y-4"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl text-gray-900">
                Thank You!
              </h3>
              <p className="font-['Inter'] text-gray-700">
                Your RSVP has been received
              </p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 space-y-6 shadow-xl"
            >
              <div>
                <label className="block font-['Inter'] text-sm text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all font-['Inter']"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block font-['Inter'] text-sm text-gray-700 mb-3">
                  Will you attend?
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {["Yes", "No"].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          attendance: option,
                        })
                      }
                      className={`py-3 rounded-2xl border-2 transition-all duration-300 font-['Inter'] ${
                        formData.attendance === option
                          ? "bg-gray-900 border-gray-900 text-white"
                          : "bg-white border-gray-200 text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {formData.attendance === "Yes" && (
                <>
                  <div>
                    <label className="block font-['Inter'] text-sm text-gray-700 mb-2">
                      Number of Guests
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) =>
                        handleGuestsChange(e.target.value)
                      }
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all font-['Inter']"
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-4">
                    <label className="block font-['Inter'] text-sm text-gray-700">
                      Guest Names
                    </label>
                    {formData.guestNames.map(
                      (guestName, index) => (
                        <input
                          key={index}
                          type="text"
                          value={guestName}
                          onChange={(e) =>
                            updateGuestName(
                              index,
                              e.target.value,
                            )
                          }
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all font-['Inter']"
                          placeholder={`Guest ${index + 1} Name`}
                          required
                        />
                      ),
                    )}
                  </div>

                  <div>
                    <label className="block font-['Inter'] text-sm text-gray-700 mb-2">
                      Dietary Restrictions
                    </label>
                    <textarea
                      value={formData.dietary}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dietary: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all resize-none h-24 font-['Inter']"
                      placeholder="Any dietary restrictions..."
                    />
                  </div>
                </>
              )}

              {error && (
                <p className="text-red-600 text-center font-['Inter'] text-sm">
                  {error}
                </p>
              )}

              <motion.button
                type="submit"
                disabled={
                  submitting ||
                  !formData.name ||
                  !formData.attendance
                }
                whileHover={{ scale: submitting ? 1 : 1.02 }}
                whileTap={{ scale: submitting ? 1 : 0.98 }}
                className="w-full py-4 bg-gray-900 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-['Inter'] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting..." : "Submit RSVP"}
              </motion.button>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
}