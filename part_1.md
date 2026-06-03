



## Part 1: Test Plan - Registration Funnel Test Cases

| Test Case ID | Section/Step | User Story / Scenario | Description/Steps | Expected Result | Priority |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **TC-REG-01** | Registration | Successful Account Creation | 1. Navigate to wooxy.com registration page.<br>2. Fill in a unique candidate email and strong password.<br>3. Check Terms of Service and click "Sign Up". | Account is created. User is redirected to onboarding/setup. Verification email is sent. | High |
| **TC-REG-02** | Registration | Duplicate Email Prevention | 1. Attempt to register using an email that already exists in the system.<br>2. Complete remaining required fields and click "Sign Up". | System displays a clear validation error stating the email is already in use. | High |
| **TC-REG-03** | Registration | Input Field Validation | 1. Submit form with empty fields, invalid email structure (e.g., missing @), or weak password. | Inline errors appear for each field. Form submission is blocked. | Medium |
| **TC-REG-04** | Account Setup | Profile Data Submission | 1. Progress to Account Setup step.<br>2. Fill in valid mandatory company and profile details.<br>3. Click "Continue". | Data saves successfully. Progress updates to the final verification step without error. | High |
| **TC-REG-05** | Account Setup | Optional Field Bypass | 1. Leave optional setup inputs blank.<br>2. Submit mandatory fields. | System accepts submission and advances user without flagging optional entries as errors. | Medium |
| **TC-REG-06** | Verification | Successful Email Activation | 1. Open your own candidate inbox.<br>2. Click the verification link sent by Wooxy. | Redirects back to wooxy.com. Account marks as "Verified" and opens the dashboard. | High |
| **TC-REG-07** | Verification | Expired/Malformed Token | 1. Intercept or copy verification URL and alter the token string.<br>2. Attempt to navigate to the modified URL. | Application displays an "Expired or Invalid Verification Link" error with a resend option. | Medium |
| **BUG-01** | Bugs (Sample) | Password Masking Failure | 1. Go to the Sign Up form.<br>2. Type characters into the Password field. | Password text must be masked (`••••••`) by default. *(Actual: Characters visible in plain text).* | High |
| **BUG-02** | Bugs (Sample) | Setup Wizard State Loss | 1. Partially fill out "Account Setup" form fields.<br>2. Manually reload/refresh the browser page. | Input fields should cache/retain inputs or safely restore step. *(Actual: All inputs clear entirely).* | Medium |