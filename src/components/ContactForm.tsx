"use client";

import { useState } from "react";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Nama lengkap wajib diisi.";
  if (!values.email.trim()) {
    errors.email = "Alamat email wajib diisi.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Format email tidak valid.";
  }
  if (!values.message.trim()) errors.message = "Pesan wajib diisi.";
  return errors;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <i className="ph ph-check-circle"></i>
        <h3>Pesan Terkirim!</h3>
        <p>
          Terima kasih telah menghubungi kami. Kami akan segera merespons pesan
          Anda.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="contact-name">Nama Lengkap</label>
        <input
          id="contact-name"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Masukkan nama lengkap Anda"
          required
          aria-required="true"
          aria-describedby={errors.name ? "error-name" : undefined}
        />
        {errors.name && (
          <span id="error-name" className="field-error" role="alert">
            {errors.name}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="contact-email">Alamat Email</label>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Masukkan alamat email Anda"
          required
          aria-required="true"
          aria-describedby={errors.email ? "error-email" : undefined}
        />
        {errors.email && (
          <span id="error-email" className="field-error" role="alert">
            {errors.email}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="contact-message">Pesan</label>
        <textarea
          id="contact-message"
          name="message"
          value={values.message}
          onChange={handleChange}
          placeholder="Tuliskan pesan atau pertanyaan Anda di sini"
          rows={5}
          required
          aria-required="true"
          aria-describedby={errors.message ? "error-message" : undefined}
        />
        {errors.message && (
          <span id="error-message" className="field-error" role="alert">
            {errors.message}
          </span>
        )}
      </div>

      <button type="submit" className="submit-button">
        Kirim Pesan
      </button>
    </form>
  );
}
