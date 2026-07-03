/**
 * Unit Tests for ContactForm component
 *
 * Feature: alymedilink-web
 * Validates: Requirements 10.3, 10.4, 10.5, 10.6
 */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "../ContactForm";

// ──────────────────────────────────────────────────────────────────────────────
// Render structure tests
// ──────────────────────────────────────────────────────────────────────────────

test("render memiliki input[type='text'] dengan atribut required", () => {
  render(<ContactForm />);
  const textInput = document.querySelector('input[type="text"]');
  expect(textInput).not.toBeNull();
  expect(textInput).toBeRequired();
});

test("render memiliki input[type='email'] dengan atribut required", () => {
  render(<ContactForm />);
  const emailInput = document.querySelector('input[type="email"]');
  expect(emailInput).not.toBeNull();
  expect(emailInput).toBeRequired();
});

test("render memiliki textarea dengan atribut required", () => {
  render(<ContactForm />);
  const textarea = document.querySelector("textarea");
  expect(textarea).not.toBeNull();
  expect(textarea).toBeRequired();
});

test("render memiliki button[type='submit']", () => {
  render(<ContactForm />);
  const submitButton = document.querySelector('button[type="submit"]');
  expect(submitButton).not.toBeNull();
});

// ──────────────────────────────────────────────────────────────────────────────
// Validation behavior tests
// ──────────────────────────────────────────────────────────────────────────────

test("submit dengan field kosong menampilkan pesan error (tanpa navigasi halaman)", async () => {
  const user = userEvent.setup();
  render(<ContactForm />);

  const submitButton = document.querySelector('button[type="submit"]')!;
  await user.click(submitButton);

  // Error messages should appear for all three fields
  const alerts = screen.getAllByRole("alert");
  expect(alerts.length).toBeGreaterThanOrEqual(3);

  // Form should still be visible (no navigation / page change)
  expect(document.querySelector("form")).not.toBeNull();
});

test("submit dengan email tidak valid menampilkan pesan error format email", async () => {
  const user = userEvent.setup();
  render(<ContactForm />);

  await user.type(screen.getByLabelText(/Nama Lengkap/i), "Budi Santoso");
  await user.type(screen.getByLabelText(/Alamat Email/i), "email-tidak-valid");
  await user.type(screen.getByLabelText(/Pesan/i), "Halo, saya ingin bertanya.");

  const submitButton = document.querySelector('button[type="submit"]')!;
  await user.click(submitButton);

  expect(screen.getByText("Format email tidak valid.")).toBeInTheDocument();
});

test("submit dengan semua field valid menampilkan pesan konfirmasi", async () => {
  const user = userEvent.setup();
  render(<ContactForm />);

  await user.type(screen.getByLabelText(/Nama Lengkap/i), "Budi Santoso");
  await user.type(screen.getByLabelText(/Alamat Email/i), "budi@example.com");
  await user.type(screen.getByLabelText(/Pesan/i), "Halo, saya ingin bertanya.");

  const submitButton = document.querySelector('button[type="submit"]')!;
  await user.click(submitButton);

  // Confirmation message should be visible
  expect(screen.getByRole("status")).toBeInTheDocument();
  expect(screen.getByText("Pesan Terkirim!")).toBeInTheDocument();

  // Form should be hidden
  expect(document.querySelector("form")).toBeNull();
});
