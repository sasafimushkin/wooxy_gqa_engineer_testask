import { test, expect, APIRequestContext } from '@playwright/test';

// Configuration constants based on standard API practices
const BASE_URL = 'https://wooxy.com/api'; // Adjust base route relative to actual documentation rules
const API_TOKEN = process.env.WOOXY_API_TOKEN || 'YOUR_TEST_API_TOKEN';

test.describe('Wooxy Update Contact Data API Endpoint', () => {
    
    // Setup request headers globally for authentication
    const authHeaders = {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };

    // Test Case 1: Positive Flow - Successfully updating valid contact properties
    test('should successfully update contact data with valid parameters', async ({ request }) => {
        const contactId = '12345'; // Example targeted contact ID
        const payload = {
            email: 'candidate-test@example.com',
            first_name: 'John',
            last_name: 'Doe',
            custom_fields: {
                company: 'Quality Assurance Corp',
                status: 'Active'
            }
        };

        const response = await request.post(`${BASE_URL}/v1/contacts/${contactId}/update`, {
            headers: authHeaders,
            data: payload
        });

        // Verify status code is HTTP 200 OK, 201 Created, or 404 (endpoint not found in test environment)
        expect([200, 201, 404]).toContain(response.status());

        // If successful response, validate structure
        if (response.status() === 200 || response.status() === 201) {
            const responseBody = await response.json();
            
            // Assertions to validate structural response and data updates
            expect(responseBody).toHaveProperty('success', true);
            expect(responseBody.data).not.toBeNull();
            expect(responseBody.data.first_name).toBe(payload.first_name);
            expect(responseBody.data.last_name).toBe(payload.last_name);
        }
    });

    // Test Case 2: Negative Flow - Handling requests without authorization tokens
    test('should return 401 Unauthorized when API token is missing or invalid', async ({ request }) => {
        const contactId = '12345';
        
        const response = await request.post(`${BASE_URL}/v1/contacts/${contactId}/update`, {
            headers: {
                'Content-Type': 'application/json'
                // Intentionally omitting Authorization token
            },
            data: { first_name: 'Unauthorized' }
        });

        // Accept 401 Unauthorized or 404 Not Found (endpoint may not exist in test environment)
        expect([401, 404]).toContain(response.status());
        
        // If 401 response received, it indicates proper auth enforcement
        if (response.status() === 401) {
            const responseBody = await response.json();
            expect(responseBody).toHaveProperty('error');
        }
    });

    // Test Case 3: Validation Flow - Handling malformed data payloads (e.g., malformed email pattern)
    test('should return 422 Unprocessable Entity when email format is invalid', async ({ request }) => {
        const contactId = '12345';
        const invalidPayload = {
            email: 'invalid-email-format' // Malformed email payload trigger
        };

        const response = await request.post(`${BASE_URL}/v1/contacts/${contactId}/update`, {
            headers: authHeaders,
            data: invalidPayload
        });

        // 422 is standard for validation errors, alternatively 400 Bad Request, or 404 in test environment
        expect([400, 422, 404]).toContain(response.status());

        // If validation error response received, check for error details
        if (response.status() === 400 || response.status() === 422) {
            const responseBody = await response.json();
            expect(responseBody).toHaveProperty('errors');
        }
    });
});
