/**
 * Property-Based Tests for ContactForm validate()
 *
 * Feature: alymedilink-web
 * Validates: Requirements 10.5
 */

import * as fc from "fast-check";
import { validate } from "../ContactForm";

// ──────────────────────────────────────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────────────────────────────────────

/**
 * Arbitrary yang menghasilkan string kosong atau whitespace-only (spasi).
 * Menggantikan fc.stringOf yang tidak tersedia di fast-check v4.
 */
const emptyOrWhitespace = fc.oneof(
  fc.constant(""),
  fc.string({ minLength: 1 }).map((s) => s.replace(/./g, " "))
);

// ──────────────────────────────────────────────────────────────────────────────
// Property 1a: errors.name !== undefined ketika name kosong / whitespace-only
// ──────────────────────────────────────────────────────────────────────────────

/**
 * **Validates: Requirements 10.5**
 *
 * Untuk setiap kombinasi:
 *   - name: string kosong atau whitespace-only
 *   - email: alamat email valid
 *   - message: teks lorem (non-empty)
 *
 * validate() HARUS selalu menghasilkan errors.name !== undefined.
 */
test(
  "Property 1a: validate() mengembalikan errors.name untuk setiap name kosong/whitespace",
  () => {
    fc.assert(
      fc.property(
        fc.record({
          name: emptyOrWhitespace,
          email: fc.emailAddress(),
          message: fc.lorem(),
        }),
        (values) => {
          const errors = validate(values);
          return errors.name !== undefined;
        }
      ),
      { numRuns: 100 }
    );
  }
);

// ──────────────────────────────────────────────────────────────────────────────
// Property 1b: errors.message !== undefined ketika message kosong / whitespace-only
// ──────────────────────────────────────────────────────────────────────────────

/**
 * **Validates: Requirements 10.5**
 *
 * Untuk setiap kombinasi:
 *   - name: nama pengguna valid (non-empty, non-whitespace)
 *   - email: alamat email valid
 *   - message: string kosong atau whitespace-only
 *
 * validate() HARUS selalu menghasilkan errors.message !== undefined.
 */
test(
  "Property 1b: validate() mengembalikan errors.message untuk setiap message kosong/whitespace",
  () => {
    fc.assert(
      fc.property(
        fc.record({
          name: fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0),
          email: fc.emailAddress(),
          message: emptyOrWhitespace,
        }),
        (values) => {
          const errors = validate(values);
          return errors.message !== undefined;
        }
      ),
      { numRuns: 100 }
    );
  }
);

// ──────────────────────────────────────────────────────────────────────────────
// Property 2: Validasi Format Email Untuk Semua String Tidak Valid
// ──────────────────────────────────────────────────────────────────────────────

/**
 * **Validates: Requirements 10.6**
 *
 * Untuk setiap kombinasi:
 *   - name: nama pengguna valid (non-empty, non-whitespace)
 *   - email: string non-empty yang TIDAK cocok dengan format email valid
 *   - message: teks lorem (non-empty)
 *
 * validate() HARUS selalu menghasilkan errors.email !== undefined.
 */
test(
  "Property 2: validate() mengembalikan errors.email untuk setiap string email tidak valid",
  () => {
    fc.assert(
      fc.property(
        fc.record({
          name: fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0),
          email: fc
            .string()
            .filter(
              (s) =>
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s) && s.trim() !== ""
            ),
          message: fc.lorem(),
        }),
        (values) => {
          const errors = validate(values);
          return errors.email !== undefined;
        }
      ),
      { numRuns: 100 }
    );
  }
);
