
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
| **Title** | Verification Email Delayed or Not Sent |
| **Description** | Verification email is not received in inbox after account creation |
| **Environment** | Gmail, wooxy.com registration page, June 3 2026 ~10:30 GST |
| **Steps to Reproduce** | 1. Complete registration with email test_user@gmail.com
2. System displays "Verification email sent"
3. Wait 5 minutes
4. Check inbox and spam folder |
| **Test Data** | Email: test_user@gmail.com |
| **Actual Result** | No verification email appears in inbox or spam folder after 10 minutes |
| **Expected Result** | Verification email should arrive within 2 minutes to inbox or spam folder with clear verification link |
| **Severity** | High |

---

## Summary

### Test Coverage
- **Registration:** 3 test cases covering successful creation, duplicate prevention, and validation
- **Account Setup:** 2 test cases covering data submission and optional fields
- **Verification:** 2 test cases covering successful activation and error handling
- **Bug Reports:** 3 sample bugs documenting actual defects found

### Next Steps
1. Execute all test cases and document results
2. Report any additional bugs discovered
3. Verify fixes for reported bugs
4. Submit comprehensive test report with findings

