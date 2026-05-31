import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbw0apYO6tR_SZU3MxFiTzr0FIpR1yNDjX7UwF0kX1Z76pxG5bYETfnumMbUOMGgwGt1/exec";

const mealOptions = ["Blacked Salmon, Creole Cream Sauce, Butter Rice, Roasted Broccoli", 
                     "Pork Shoulder, Smashed Sweet Potatoes, Sauteed Greens", 
                     "Thai Coconut Curry - Basmati Rice, Sweet Potato, Broccolini, Cirspy Chickpeas, Green Onion (Vegetarian)"];

type Step = 0 | 1 | 2;

type GuestDetail = {
  name: string;
  mealChoice: string;
  dietary: string;
  accessibility: string;
};

type RsvpData = {
  firstName: string;
  lastName: string;
  guests: string;
  guestDetails: GuestDetail[];
};

const createGuest = (name = ""): GuestDetail => ({
  name,
  mealChoice: "",
  dietary: "",
  accessibility: "",
});

const initialData: RsvpData = {
  firstName: "",
  lastName: "",
  guests: "1",
  guestDetails: [createGuest()],
};

export function RSVPSectionNew() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, {
    once: true,
    margin: "-100px",
  });
  const [step, setStep] = useState<Step>(0);
  const [formData, setFormData] = useState<RsvpData>(initialData);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const fullName = `${formData.firstName} ${formData.lastName}`.trim();
  const progress = submitted ? 100 : ((step + 1) / 3) * 100;

  const partyNames = useMemo(
    () => formData.guestDetails.map((guest) => guest.name.trim()).filter(Boolean),
    [formData.guestDetails],
  );

  const canContinue = () => {
    if (step === 0) {
      return (
        formData.firstName.trim() &&
        formData.lastName.trim() &&
        formData.guestDetails.every((guest) => guest.name.trim())
      );
    }

    if (step === 1) {
      return formData.guestDetails.every((guest) => guest.mealChoice);
    }

    return true;
  };

  const keepRsvpInView = () => {
    window.setTimeout(() => {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  };

  const updatePrimaryName = (field: "firstName" | "lastName", value: string) => {
    const nextData = { ...formData, [field]: value };
    const nextFullName = `${field === "firstName" ? value : nextData.firstName} ${
      field === "lastName" ? value : nextData.lastName
    }`.trim();
    const guestDetails = [...nextData.guestDetails];
    guestDetails[0] = {
      ...guestDetails[0],
      name: nextFullName,
    };

    setFormData({ ...nextData, guestDetails });
  };

  const handleGuestsChange = (value: string) => {
    const numGuests = parseInt(value, 10);
    const guestDetails = Array(numGuests)
      .fill(null)
      .map((_, index) => {
        if (index === 0) {
          return {
            ...(formData.guestDetails[0] || createGuest()),
            name: fullName,
          };
        }

        return formData.guestDetails[index] || createGuest();
      });

    setFormData({
      ...formData,
      guests: value,
      guestDetails,
    });
  };

  const updateGuest = (index: number, updates: Partial<GuestDetail>) => {
    const guestDetails = [...formData.guestDetails];
    guestDetails[index] = {
      ...guestDetails[index],
      ...updates,
    };

    setFormData({
      ...formData,
      guestDetails,
    });
  };

  const goNext = () => {
    if (!canContinue()) return;
    setError("");
    setStep((current) => Math.min(current + 1, 2) as Step);
    keepRsvpInView();
  };

  const goBack = () => {
    setError("");
    setStep((current) => Math.max(current - 1, 0) as Step);
    keepRsvpInView();
  };

  const buildDietarySummary = () =>
    formData.guestDetails
      .map((guest, index) => {
        const name = guest.name.trim() || `Guest ${index + 1}`;
        return `${name}: Meal - ${guest.mealChoice || "N/A"}; Dietary - ${
          guest.dietary.trim() || "None"
        }; Accessibility - ${guest.accessibility.trim() || "None"}`;
      })
      .join(" | ");

  const submitRsvp = async () => {
    setSubmitting(true);
    setError("");

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          attendance: "Yes",
          guests: formData.guests,
          guestNames: partyNames.join(", "),
          dietary: buildDietarySummary(),
        }),
      });

      setSubmitted(true);
      keepRsvpInView();
    } catch (err) {
      console.error("Error submitting RSVP:", err);
      setError("Failed to submit RSVP. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData(initialData);
    setStep(0);
    setSubmitted(false);
    setError("");
    keepRsvpInView();
  };

  return (
    <section
      ref={sectionRef}
      id="rsvp"
      className="relative bg-gradient-to-b from-[#F6F5F3] to-[#FFF5F0] px-6 py-20"
    >
      <motion.div
        ref={contentRef}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-3xl"
      >
        <div className="mb-10 text-center">
          <p className="font-['Inter'] text-[10px] uppercase tracking-[0.34em] text-gray-500">
            {submitted ? "Received" : `${step + 1} of 3`}
          </p>
          <h2 className="mt-4 font-['Bodoni_Moda'] text-5xl text-gray-900 md:text-6xl">
            RSVP
          </h2>
          <p className="mt-4 font-['Inter'] text-sm text-gray-600">
            Please RSVP before September 30th, 2026
          </p>
          <div className="mx-auto mt-8 h-px max-w-sm bg-gray-200">
            <motion.div
              className="h-px bg-gray-900"
              initial={false}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.35 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <SuccessView key="success" fullName={fullName} onReset={resetForm} />
          ) : (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl bg-white/85 p-6 shadow-xl backdrop-blur-sm sm:p-8"
            >
              {step === 0 && (
                <PartyStep
                  formData={formData}
                  updatePrimaryName={updatePrimaryName}
                  handleGuestsChange={handleGuestsChange}
                  updateGuest={updateGuest}
                />
              )}

              {step === 1 && (
                <GuestDetailsStep
                  guestDetails={formData.guestDetails}
                  updateGuest={updateGuest}
                />
              )}

              {step === 2 && <ReviewStep guestDetails={formData.guestDetails} />}

              {error && (
                <p className="mt-6 text-center font-['Inter'] text-sm text-red-600">
                  {error}
                </p>
              )}

              <FooterNav
                step={step}
                canContinue={Boolean(canContinue())}
                submitting={submitting}
                onBack={goBack}
                onNext={goNext}
                onSubmit={submitRsvp}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

function PartyStep({
  formData,
  updatePrimaryName,
  handleGuestsChange,
  updateGuest,
}: {
  formData: RsvpData;
  updatePrimaryName: (field: "firstName" | "lastName", value: string) => void;
  handleGuestsChange: (value: string) => void;
  updateGuest: (index: number, updates: Partial<GuestDetail>) => void;
}) {
  return (
    <div className="space-y-8">
      <StepHeader
        title="Find Your Invitation"
        subtitle="Start with your name, then add everyone in your party."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          label="First Name"
          value={formData.firstName}
          onChange={(value) => updatePrimaryName("firstName", value)}
          placeholder="Hein"
        />
        <TextField
          label="Last Name"
          value={formData.lastName}
          onChange={(value) => updatePrimaryName("lastName", value)}
          placeholder="Soe"
        />
      </div>

      <div>
        <label className="mb-2 block font-['Inter'] text-sm text-gray-700">
          Party Size
        </label>
        <select
          value={formData.guests}
          onChange={(e) => handleGuestsChange(e.target.value)}
          className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 font-['Inter'] text-gray-900 outline-none transition-all focus:ring-2 focus:ring-gray-300"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num} {num === 1 ? "Guest" : "Guests"}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-4">
        <div>
          <p className="font-['Inter'] text-sm text-gray-700">Select Your Party</p>
          <p className="mt-1 font-['Inter'] text-xs text-gray-500">
            Guest 1 should be you. Add your friends or family after that.
          </p>
        </div>

        {formData.guestDetails.map((guest, index) => (
          <TextField
            key={index}
            label={`Guest ${index + 1} Name`}
            value={guest.name}
            onChange={(value) => updateGuest(index, { name: value })}
            placeholder={index === 0 ? "Your full name" : `Guest ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function GuestDetailsStep({
  guestDetails,
  updateGuest,
}: {
  guestDetails: GuestDetail[];
  updateGuest: (index: number, updates: Partial<GuestDetail>) => void;
}) {
  return (
    <div className="space-y-6">
      <StepHeader
        title="Guest Details"
        subtitle="Choose a meal and add any notes for each guest."
      />

      {guestDetails.map((guest, index) => (
        <div
          key={index}
          className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
        >
          <div className="mb-5">
            <p className="font-['Inter'] text-xs uppercase tracking-[0.22em] text-gray-500">
              Guest {index + 1}
            </p>
            <h3 className="mt-1 font-['Playfair_Display'] text-2xl text-gray-900">
              {guest.name || `Guest ${index + 1}`}
            </h3>
          </div>

          <div className="space-y-4">
            <div>
              <p className="mb-3 font-['Inter'] text-sm text-gray-700">
                Meal Choice <span className="text-red-500">*</span>
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {mealOptions.map((meal) => (
                  <button
                    key={meal}
                    type="button"
                    onClick={() => updateGuest(index, { mealChoice: meal })}
                    className={`rounded-2xl border px-4 py-3 text-left font-['Inter'] text-sm transition-all ${
                      guest.mealChoice === meal
                        ? "border-gray-900 bg-gray-900 text-white"
                        : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {meal}
                  </button>
                ))}
              </div>
              {!guest.mealChoice && (
                <p className="mt-2 font-['Inter'] text-xs text-red-600">
                  Please choose one meal for {guest.name || `Guest ${index + 1}`} to continue.
                </p>
              )}
            </div>

            <TextField
              label="Dietary Restrictions"
              value={guest.dietary}
              onChange={(value) => updateGuest(index, { dietary: value })}
              placeholder="None, vegetarian, nut allergy..."
            />
            <TextField
              label="Accessibility Needs"
              value={guest.accessibility}
              onChange={(value) => updateGuest(index, { accessibility: value })}
              placeholder="Any special accommodations?"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function ReviewStep({ guestDetails }: { guestDetails: GuestDetail[] }) {
  return (
    <div className="space-y-6">
      <StepHeader
        title="Review"
        subtitle="Make sure each guest's RSVP details look right."
      />

      {guestDetails.map((guest, index) => (
        <div
          key={index}
          className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
        >
          <h3 className="font-['Playfair_Display'] text-2xl text-gray-900">
            {guest.name || `Guest ${index + 1}`}
          </h3>
          <ReviewRow label="Meal Choice" value={guest.mealChoice || "Not selected"} />
          <ReviewRow label="Dietary Restrictions" value={guest.dietary || "None"} />
          <ReviewRow label="Accessibility Needs" value={guest.accessibility || "None"} />
        </div>
      ))}
    </div>
  );
}

function StepHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center">
      <h3 className="font-['Playfair_Display'] text-3xl text-gray-900 sm:text-4xl">
        {title}
      </h3>
      <p className="mt-2 font-['Inter'] text-sm text-gray-600">{subtitle}</p>
    </div>
  );
}

function TextField({
  label,
  value,
  placeholder,
  onChange,
}: {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-['Inter'] text-sm text-gray-700">
        {label}
      </span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 font-['Inter'] text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:ring-2 focus:ring-gray-300"
      />
    </label>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="mt-4 flex gap-4 border-t border-gray-100 pt-4 font-['Inter'] text-sm max-sm:flex-col max-sm:gap-1">
      <span className="flex-1 text-gray-500">{label}</span>
      <span className="text-right text-gray-900 max-sm:text-left">{value}</span>
    </div>
  );
}

function FooterNav({
  step,
  canContinue,
  submitting,
  onBack,
  onNext,
  onSubmit,
}: {
  step: Step;
  canContinue: boolean;
  submitting: boolean;
  onBack: () => void;
  onNext: () => void;
  onSubmit: () => void;
}) {
  return (
    <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6">
      <button
        type="button"
        onClick={onBack}
        disabled={step === 0 || submitting}
        className="inline-flex items-center gap-2 rounded-full px-4 py-3 font-['Inter'] text-sm text-gray-600 transition-colors hover:text-gray-900 disabled:invisible"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </button>

      {step < 2 ? (
        <div className="flex flex-col items-end gap-2">
          {step === 1 && !canContinue && (
            <p className="font-['Inter'] text-xs text-red-600">
              Meal choice is required for every guest.
            </p>
          )}
          <button
            type="button"
            onClick={onNext}
            disabled={!canContinue}
            className="inline-flex items-center gap-3 rounded-full bg-gray-900 px-6 py-3 font-['Inter'] text-sm text-white shadow-lg transition-all hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Continue
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={onSubmit}
          disabled={submitting}
          className="inline-flex items-center gap-3 rounded-full bg-gray-900 px-6 py-3 font-['Inter'] text-sm text-white shadow-lg transition-all hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {submitting ? "Submitting..." : "Submit RSVP"}
          <ArrowRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

function SuccessView({
  fullName,
  onReset,
}: {
  fullName: string;
  onReset: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="rounded-3xl bg-white/85 p-10 text-center shadow-xl backdrop-blur-sm"
    >
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white">
        <Check className="h-8 w-8" />
      </div>
      <h3 className="mt-6 font-['Playfair_Display'] text-3xl text-gray-900">
        Thank You!
      </h3>
      <p className="mt-3 font-['Inter'] text-gray-600">
        {fullName ? `${fullName}, your RSVP has been received.` : "Your RSVP has been received."}
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-8 rounded-full border border-gray-200 px-6 py-3 font-['Inter'] text-sm text-gray-700 transition-colors hover:bg-gray-50"
      >
        Submit Another RSVP
      </button>
    </motion.div>
  );
}
