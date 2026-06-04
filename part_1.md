
# Part 1: Wooxy Registration Funnel - Test Plan & Cases

## Overview

This document describes the comprehensive test plan for the wooxy.com platform registration funnel. The focus is on validating the user experience, data integrity, and system behavior across three key steps: Registration, Account Setup, and Verification.

---

## Scope

- **Test the wooxy.com platform registration funnel**
  - **IMPORTANT: DO NOT SEND TEST EMAILS OR REGISTER ACCOUNTS USING ANY EMAIL ADDRESS OTHER THAN YOURS**

- **User Stories by Step:**
  - Registration: User account creation with email and password
  - Account Setup: User profile configuration and preferences
  - Verification: Email verification and account activation

- **Deliverables:**
  - Test cases with comprehensive field coverage
  - Bug reports for any defects discovered
  - Clear documentation of expected vs. actual behavior

---

## Test Cases

### Registration Step Test Cases

#### TC-REG-01: Successful Account Creation

| Field | Value |
|-------|-------|
| **Test Case ID** | TC-REG-01 |
| **Title** | Successful Account Creation |
| **Description** | Verify that a new user can successfully create an account with valid credentials |
| **Precondition** | User is on wooxy.com registration page; using a valid email address |
| **Steps to Reproduce** | 1. Navigate to wooxy.com registration page
2. Enter valid email address
3. Enter strong password (min 8 chars, mixed case, numbers)
4. Accept Terms of Service
5. Click "Sign Up" button |
| **Test Data** | Email: test_candidate@example.com
Password: SecurePass123! |
| **Expected Result** | Account is created successfully
User is redirected to Account Setup step
Verification email is sent to provided email
Success message is displayed |
| **Severity** | High |

---

#### TC-REG-02: Duplicate Email Prevention

| Field | Value |
|-------|-------|
| **Test Case ID** | TC-REG-02 |
| **Title** | Duplicate Email Prevention |
| **Description** | Verify that system prevents registration with an already-registered email |
| **Precondition** | Email already exists in the system from a previous registration |
| **Steps to Reproduce** | 1. Navigate to wooxy.com registration page
2. Enter email that already exists
3. Enter valid password
4. Accept Terms of Service
5. Click "Sign Up" button |
| **Test Data** | Email: existing_user@example.com (known to exist)
Password: SecurePass123! |
| **Expected Result** | System displays error message: "Email already registered"
Form submission is prevented
User remains on registration page
Suggestion to login or reset password is shown |
| **Severity** | High |

---

#### TC-REG-03: Input Field Validation

| Field | Value |
|-------|-------|
| **Test Case ID** | TC-REG-03 |
| **Title** | Input Field Validation |
| **Description** | Verify that form validates all required fields and shows appropriate errors |
| **Precondition** | User is on wooxy.com registration page |
| **Steps to Reproduce** | 1. Leave email field empty and submit
2. Enter invalid email format (e.g., notanemail) and submit
3. Enter weak password (less than 8 characters) and submit
4. Submit without accepting Terms of Service |
| **Test Data** | Invalid Email: invalid.email
Weak Password: Pass123 |
| **Expected Result** | Inline validation errors appear for each field
Form submission is blocked
Error messages are clear and actionable
User can correct errors and retry |
| **Severity** | Medium |

---

### Account Setup Step Test Cases

#### TC-SETUP-01: Profile Data Submission

| Field | Value |
|-------|-------|
| **Test Case ID** | TC-SETUP-01 |
| **Title** | Profile Data Submission |
| **Description** | Verify that user can successfully fill and submit account setup form |
| **Precondition** | User has completed registration step and is on Account Setup page |
| **Steps to Reproduce** | 1. Navigate to Account Setup page
2. Enter company name
3. Enter full name
4. Enter job title
5. Select country/region
6. Click "Continue" button |
| **Test Data** | Company: Wooxy Tech
Full Name: John Doe
Job Title: QA Engineer
Country: United States |
| **Expected Result** | Form data is saved successfully
No validation errors appear
User is redirected to Verification step
Progress indicator updates |
| **Severity** | High |

---

#### TC-SETUP-02: Optional Field Bypass

| Field | Value |
|-------|-------|
| **Test Case ID** | TC-SETUP-02 |
| **Title** | Optional Field Bypass |
| **Description** | Verify that optional fields can be left blank without blocking progression |
| **Precondition** | User is on Account Setup page |
| **Steps to Reproduce** | 1. Fill only mandatory fields (name, email)
2. Leave optional fields blank (phone, company size)
3. Click "Continue" button |
| **Test Data** | Name: Jane Smith
Optional Fields: Left empty |
| **Expected Result** | Form accepts submission without errors
User progresses to next step
No validation errors for optional fields |
| **Severity** | Medium |

---

### Verification Step Test Cases

#### TC-VER-01: Successful Email Activation

| Field | Value |
|-------|-------|
| **Test Case ID** | TC-VER-01 |
| **Title** | Successful Email Activation |
| **Description** | Verify that user can activate account via email verification link |
| **Precondition** | User has completed registration and setup; verification email has been sent |
| **Steps to Reproduce** | 1. Check email inbox for verification email from Wooxy
2. Click verification link in email
3. System processes the token and validates email |
| **Test Data** | Verification email with valid token link |
| **Expected Result** | Email verification is successful
User is redirected to wooxy.com dashboard
Account status changes to "Verified"
User can access all features |
| **Severity** | High |

---

#### TC-VER-02: Expired/Malformed Token

| Field | Value |
|-------|-------|
| **Test Case ID** | TC-VER-02 |
| **Title** | Expired or Malformed Verification Token |
| **Description** | Verify that system properly handles invalid or expired verification tokens |
| **Precondition** | User has received verification email |
| **Steps to Reproduce** | 1. Copy verification URL from email
2. Modify the token string in the URL
3. Navigate to the modified URL in browser |
| **Test Data** | Modified token: abc123xyz789 (invalid/malformed) |
| **Expected Result** | Error message: "Verification link expired or invalid"
User is offered option to resend verification email
User remains on verification page |
| **Severity** | Medium |

---

## Bug Reports

### BUG-REG-01: Password Field Not Masked

| Field | Value |
|-------|-------|
| **Bug ID** | BUG-REG-01 |
| **Title** | Password Text Visible in Plain Text |
| **Description** | Password input field displays characters in plain text instead of masked dots |
| **Environment** | Chrome 120.0, Windows 10, wooxy.com registration page |
| **Steps to Reproduce** | 1. Navigate to wooxy.com registration page
2. Focus on Password input field
3. Type password characters
4. Observe field behavior |
| **Test Data** | Input: MyPassword123! |
| **Actual Result** | Password characters are visible as plain text: MyPassword123! |
| **Expected Result** | Password characters should be masked as dots: вЂўвЂўвЂўвЂўвЂўвЂўвЂўвЂўвЂўвЂўвЂўвЂўвЂўвЂў |
| **Severity** | High |

---

### BUG-REG-02: Registration Form Accepts Invalid Email Format

| Field | Value |
|-------|-------|
| **Bug ID** | BUG-REG-02 |
| **Title** | Registration Form Email Field Missing Format Validation (Missing '@') |
| **Description** | The email input field on the registration form does not enforce standard email format validation (e.g., checking for the presence of an `@` symbol). It accepts plain domains or arbitrary strings as valid emails. |
| **Environment** | Chrome, Windows 10, wooxy.com registration page |
| **Steps to Reproduce** | 1. Navigate to the sign-up page<br>2. Fill in First Name, Last Name, and Password<br>3. In the Email field, enter a string without an `@` symbol (e.g., `sasafimushkin.com`)<br>4. Observe the state of the form and "Sign up" button |
| **Test Data** | Email: `sasafimushkin.com` |
| **Actual Result** | The form accepts the invalid email format without any inline error, and the "Sign up" button becomes active and clickable. |
| **Expected Result** | The form should display an inline validation error (e.g., "Please enter a valid email address") and keep the "Sign up" button disabled until a valid email format is provided. |
| **Severity** | High |

---

### BUG-REG-03: Duplicate Account Registration via Google Sign-Up

| Field | Value |
|-------|-------|
| **Bug ID** | BUG-REG-03 |
| **Title** | Unhandled Duplicate Registration via "Sign up with Google" |
| **Description** | When a user attempts to sign up using the "Sign up with Google" button using an email address that is already registered in the system (e.g., `sasafimushkin@gmail.com`), the system fails to handle the duplicate gracefully. It either allows a duplicate record or throws an unhandled error instead of routing the user to login. |
| **Environment** | Chrome, Windows 10, wooxy.com registration page |
| **Steps to Reproduce** | 1. Navigate to the sign-up page<br>2. Ensure `sasafimushkin@gmail.com` is already a registered account<br>3. Click the "Sign up with Google" button<br>4. Authenticate with the `sasafimushkin@gmail.com` Google account |
| **Test Data** | Account: `sasafimushkin@gmail.com` (Existing) |
| **Actual Result** | The system fails to prevent the duplicate registration gracefully. |
| **Expected Result** | The system should detect that the email is already registered, prevent the creation of a duplicate account, and elegantly log the user in or display an "Account already exists, please log in" message. |
| **Attachments** | ![Google Sign Up Bug](./screenshots/screenshot_7.png) |
| **Severity** | High |

---

### BUG-SETUP-01: Form Data Lost on Page Refresh

| Field | Value |
|-------|-------|
| **Bug ID** | BUG-SETUP-01 |
| **Title** | Account Setup Form Data Lost on Refresh |
| **Description** | Partially filled form data is cleared when user refreshes the browser page |
| **Environment** | Firefox 123.0, Windows 10, wooxy.com Account Setup page |
| **Steps to Reproduce** | 1. Navigate to Account Setup page
2. Fill in company name, full name, job title
3. Do NOT submit form
4. Press F5 or click refresh button |
| **Test Data** | Company: Test Corp
Name: Alice Johnson
Title: Senior QA |
| **Actual Result** | All form fields are cleared and empty after refresh |
| **Expected Result** | Form should either: (a) retain entered data via local storage, OR (b) display warning before refresh |
| **Severity** | Medium |

---

### BUG-VER-01: Verification Email Not Received

| Field | Value |
|-------|-------|
| **Bug ID** | BUG-VER-01 |
| **Title** | Verification Email Routed to Promotions Tab and Missing Verification Link |
| **Description** | The system sends a "Welcome to Wooxy!" email that lands in Gmail's "Promotions" tab rather than the Primary inbox, causing users to easily miss it. Furthermore, the email body contains a "Start Campaign" button but lacks a clear, explicit "Verify Email" link/button to complete the registration funnel. |
| **Environment** | Gmail, wooxy.com registration flow |
| **Steps to Reproduce** | 1. Complete registration with a Gmail address<br>2. Check Primary inbox (email is not there)<br>3. Check the "Promotions" tab<br>4. Open the "Oleksandr, welcome to Wooxy!" email<br>5. Inspect the email body for a verification link |
| **Test Data** | Email: test_user@gmail.com |
| **Actual Result** | The email is categorized as a Promotion. Upon opening, there is no explicit verification link or button; only a "Start Campaign" button is visible. |
| **Expected Result** | Crucial transactional emails (like account verification) should be optimized to land in the Primary inbox. The email must contain a clear, functional verification link or button. |
| **Attachments** | ![Verification Email in Promotions](./screenshots/screenshot_6.png) |
| **Severity** | High |

---

### BUG-VER-02: Incorrect Pre-fill of Business Email Prefix

| Field | Value |
|-------|-------|
| **Bug ID** | BUG-VER-02 |
| **Title** | Business Email Prefix Pre-filled with Full Email Address |
| **Description** | When attempting to verify a sender domain, the business email prefix input field is incorrectly pre-filled with the user's full account email address (including the domain), leading to validation errors. |
| **Environment** | Chrome, Windows 10, wooxy.com Domain Settings page |
| **Steps to Reproduce** | 1. Navigate to Domain Settings and add a new domain (e.g., sasa.com)<br>2. Click "Verify sender email" button<br>3. Observe the "Business email address" input field in the modal popup |
| **Test Data** | Account email: sasafimushkin@gmail.com<br>Domain: sasa.com |
| **Actual Result** | The input is pre-filled with `sasafimushkin@gmail.com`, creating the invalid email `sasafimushkin@gmail.com@sasa.com`. A "User name is not valid" error appears below the field. |
| **Expected Result** | The input field should either be left blank or pre-filled with only the username prefix (e.g., `sasafimushkin`), forming a valid business email. |
| **Attachments** | ![Incorrect Pre-fill](./screenshots/bug-ver-02.png) |
| **Severity** | High |

---

### BUG-VER-03: Missing Validation for Target Verification Email

| Field | Value |
|-------|-------|
| **Bug ID** | BUG-VER-03 |
| **Title** | System Accepts and Attempts to Send to Invalid Email Addresses |
| **Description** | The system allows sending verification links to improperly formatted or non-existent email addresses, showing a success message regardless of deliverability. |
| **Environment** | Chrome, Windows 10, wooxy.com Domain Settings page |
| **Steps to Reproduce** | 1. Navigate to Domain Settings and add a malformed domain (e.g., sasafimushkingmail.com)<br>2. Click "Verify by email"<br>3. In the popup, enter a duplicate or invalid prefix (e.g., sasafimushkingmail.com)<br>4. Click "Send link" |
| **Test Data** | Prefix: sasafimushkingmail.com<br>Domain: sasafimushkingmail.com |
| **Actual Result** | The system accepts the invalid email `sasafimushkingmail.com@sasafimushkingmail.com`, closes the modal, and shows a green success toast: "New verification link is on its way to email." |
| **Expected Result** | The system should validate the email format and domain before confirming dispatch, displaying an appropriate error message for invalid or unreachable addresses instead of a false success message. |
| **Attachments** | ![Invalid Email Acceptance](./screenshots/bug-ver-03.png) |
| **Severity** | Medium |

---

### BUG-VER-04: Form Submission Not Disabled on Validation Error

| Field | Value |
|-------|-------|
| **Bug ID** | BUG-VER-04 |
| **Title** | "Send link" Button Remains Active Despite Validation Errors in Modal |
| **Description** | In the "Verification link" modal popup, when front-end validation fails (e.g., displaying "User name is not valid"), the "Send link" submit button is not disabled. The user can still click it to submit the invalid data. |
| **Environment** | Chrome, Windows 10, wooxy.com Getting Started / Domain Settings page |
| **Steps to Reproduce** | 1. Click "Verify sender email" for a domain<br>2. In the "Verification link" popup, enter an invalid prefix (e.g., `sasafimushkin@gmail.com`)<br>3. Observe the "User name is not valid" error message appears<br>4. Observe the state of the "Send link" button<br>5. Click the "Send link" button |
| **Test Data** | Prefix: sasafimushkin@gmail.com |
| **Actual Result** | The "Send link" button remains active and clickable. Clicking it submits the form and triggers a success message ("New verification link is on its way to email."), bypassing the visible error. |
| **Expected Result** | The "Send link" button should be disabled whenever there are active validation errors in the form to prevent invalid submissions. |
| **Attachments** | screenshot

---

## Summary

### Test Coverage
- **Registration:** 3 test cases covering successful creation, duplicate prevention, and validation
- **Account Setup:** 2 test cases covering data submission and optional fields
- **Verification:** 2 test cases covering successful activation and error handling
- **Bug Reports:** 8 sample bugs documenting actual defects found (including verification UI and validation issues)
sas
### Next Steps
1. Execute all test cases and document results
2. Report any additional bugs discovered
3. Verify fixes for reported bugs
4. Submit comprehensive test report with findings

---




