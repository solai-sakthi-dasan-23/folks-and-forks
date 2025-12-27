import { useState, useRef } from "react";
import { supabase } from "../supabaseClient";

export default function OrderForm() {
  const [form, setForm] = useState({
    name: "",
    mobile_number: "",
    door_number: "",
    street_name: "",
    area: "",
    locality: "",
    district: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const refs = {
    name: useRef(),
    mobile_number: useRef(),
    door_number: useRef(),
  };

  const isValidMobile = (value) => /^[6-9]\d{9}$/.test(value);
  const isValidPincode = (value) =>
    value === "" || /^[1-9]\d{5}$/.test(value);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!form.mobile_number) {
      newErrors.mobile_number = "Mobile number is required";
    } else if (!isValidMobile(form.mobile_number)) {
      newErrors.mobile_number =
        "Enter a valid 10-digit Indian mobile number";
    }

    if (!form.door_number.trim()) {
      newErrors.door_number = "Door / Flat number is required";
    }

    if (!isValidPincode(form.pincode)) {
      newErrors.pincode = "Enter a valid 6-digit pincode";
    }

    setErrors(newErrors);

    // Focus first invalid field
    const firstErrorField = Object.keys(newErrors)[0];
    if (firstErrorField && refs[firstErrorField]) {
      refs[firstErrorField].current.focus();
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);

    if (!validate()) return;

    setLoading(true);

    const { error } = await supabase
      .from("client_details")
      .insert([
        {
          name: form.name.trim(),
          mobile_number: form.mobile_number,
          door_number: form.door_number.trim(),
          street_name: form.street_name.trim() || null,
          area: form.area.trim() || null,
          locality: form.locality.trim() || null,
          district: form.district.trim() || null,
          pincode: form.pincode.trim() || null,
          client_status: "new",
        },
      ]);

    setLoading(false);

    if (!error) {
      setSuccess(true);
      setForm({
        name: "",
        mobile_number: "",
        door_number: "",
        street_name: "",
        area: "",
        locality: "",
        district: "",
        pincode: "",
      });
      setErrors({});
    }
  };

  const inputClass = (field) =>
    `input ${
      errors[field] ? "border-red-500 focus:border-red-500" : ""
    }`;

  const errorText = (field) =>
    errors[field] && (
      <p className="text-xs text-red-600 mt-1">
        {errors[field]}
      </p>
    );

  return (
    <section id="order" className="section py-20">
      <h2 className="heading text-center">
        Start Your Daily Nutrition Journey
      </h2>

      <p className="text-center subtext mt-2">
        Leave your details and we’ll contact you.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 max-w-xl mx-auto space-y-4"
        noValidate
      >
        <div>
          <input
            ref={refs.name}
            className={inputClass("name")}
            name="name"
            placeholder="Full Name *"
            value={form.name}
            onChange={handleChange}
          />
          {errorText("name")}
        </div>

        <div>
          <input
            ref={refs.mobile_number}
            className={inputClass("mobile_number")}
            name="mobile_number"
            placeholder="Mobile Number *"
            value={form.mobile_number}
            onChange={handleChange}
            inputMode="numeric"
          />
          {errorText("mobile_number")}
        </div>

        <div>
          <input
            ref={refs.door_number}
            className={inputClass("door_number")}
            name="door_number"
            placeholder="Door / Flat Number *"
            value={form.door_number}
            onChange={handleChange}
          />
          {errorText("door_number")}
        </div>

        <input
          className="input"
          name="street_name"
          placeholder="Street Name"
          value={form.street_name}
          onChange={handleChange}
        />

        <input
          className="input"
          name="area"
          placeholder="Area"
          value={form.area}
          onChange={handleChange}
        />

        <input
          className="input"
          name="locality"
          placeholder="Locality"
          value={form.locality}
          onChange={handleChange}
        />

        <input
          className="input"
          name="district"
          placeholder="District"
          value={form.district}
          onChange={handleChange}
        />

        <div>
          <input
            className={inputClass("pincode")}
            name="pincode"
            placeholder="Pincode"
            value={form.pincode}
            onChange={handleChange}
            inputMode="numeric"
          />
          {errorText("pincode")}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`primary-btn w-full ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Submitting..." : "Place Order"}
        </button>

        {success && (
          <p className="text-sm text-green-700 text-center mt-2">
            Thank you! We will contact you shortly.
          </p>
        )}
      </form>
    </section>
  );
}
