# Wooxy General QA Engineer - Test Task

## Dear Candidate,

Thank you for your interest in the General QA Engineer position at Wooxy. As part of our selection process, we would like you to complete the following tasks to showcase your skills and technical abilities. Please note that this test task is solely for assessment purposes and will not be used for any commercial purposes. Your work will be evaluated only as part of the hiring process.

---

## Part 1

We'd like to see your approach to solving this problem. It is up to you to choose the test plan and how to implement it.

- **Test the wooxy.com platform registration funnel.**
  - **IMPORTANT: DO NOT SEND TEST EMAILS OR REGISTER ACCOUNTS USING ANY EMAIL ADDRESS OTHER THAN YOURS**

- **Write a test plan describing all the main "user story" you find for each step:**
  - Registration
  - Account setup
  - Verification

- **If you find bugs, write a bug report description for the development team.**

---

## Part 2

- **Write an autotest for our Update Contact Data API method.**
  - https://wooxy.com/api-documentation/

---

## Important Notes

- There are **no strictly right or wrong answers**. We want to see how you think, prioritize, and organize in an unfamiliar industry.
- Please **avoid over-relying on AI-generated solutions**. We're interested in your perspective, skills, and ideas.
- **Don't worry about grammar or stylistic perfection**; clarity of thought is more important.
- **Please feel free to complete the test task in your preferred language.**

---

## Test Plan - Part 1 Results

### Registration Test Cases

| Test Case ID | Section | User Story | Description | Expected Result | Priority |
|---|---|---|---|---|---|
| **TC-REG-01** | Registration | Successful Account Creation | 1. Navigate to wooxy.com registration page<br>2. Fill in unique email and strong password<br>3. Check Terms of Service and click "Sign Up" | Account created. Redirected to onboarding. Verification email sent. | High |
| **TC-REG-02** | Registration | Duplicate Email Prevention | 1. Attempt to register with existing email<br>2. Complete fields and click "Sign Up" | Validation error: email already in use | High |
| **TC-REG-03** | Registration | Input Field Validation | 1. Submit form with empty fields or invalid email<br>2. Submit with weak password | Inline errors for each field. Submission blocked. | Medium |
| **TC-REG-04** | Account Setup | Profile Data Submission | 1. Progress to Account Setup<br>2. Fill mandatory company and profile details<br>3. Click "Continue" | Data saves. Progress updates to verification step. | High |
| **TC-REG-05** | Account Setup | Optional Field Bypass | 1. Leave optional inputs blank<br>2. Submit mandatory fields | Submission accepted. User advances without errors. | Medium |
| **TC-REG-06** | Verification | Successful Email Activation | 1. Open inbox and click verification link from Wooxy<br>2. Complete verification | Redirect to wooxy.com. Account marked "Verified". Dashboard opens. | High |
| **TC-REG-07** | Verification | Expired/Malformed Token | 1. Alter verification URL token<br>2. Navigate to modified URL | Error displayed: "Expired or Invalid Verification Link" with resend option | Medium |

### Bug Reports

| Bug ID | Section | Title | Description | Steps | Expected | Actual | Priority |
|---|---|---|---|---|---|---|---|
| **BUG-01** | Registration | Password Masking Failure | Password field not masking input | 1. Go to Sign Up form<br>2. Type in Password field | Text masked as `••••••` | Text visible in plain text | High |
| **BUG-02** | Account Setup | Setup Wizard State Loss | Form data lost on page refresh | 1. Partially fill Account Setup form<br>2. Refresh browser | Inputs cached or safely restored | All inputs cleared entirely | Medium |

---

## API Test Implementation - Part 2

Located in `part_2.ts` - Playwright API test suite for Update Contact Data endpoint

### Test Cases

1. **Successfully update contact data with valid parameters**
   - Endpoint: POST /v1/contacts/{contactId}/update
   - Expected: HTTP 200 OK
   - Validates response structure and data updates

2. **Return 401 Unauthorized when API token is missing**
   - Tests missing Authorization header
   - Validates proper error handling

3. **Return 422 Unprocessable Entity for malformed data**
   - Tests invalid email format
   - Validates error response structure

### Setup Instructions

1. Install Playwright:
   ```bash
   npm install @playwright/test
   ```

2. Set API token:
   ```bash
   set WOOXY_API_TOKEN=your_test_token
   ```

3. Run tests:
   ```bash
   npx playwright test part_2.ts
   ```

---

**Good luck! We look forward to reviewing your work.**