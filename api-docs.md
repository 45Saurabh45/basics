# API Documentation

Our API is documented using OpenAPI 3.0 specification. You can find the full specification in `openapi.yaml`.

## Example Usage

You can import the OpenAPI specification into tools like Swagger UI, Postman, or other API development tools. For quick testing, you can also use curl:

### Gmail API Examples

List emails:

```bash
curl -X GET 'http://localhost:3000/api/gmail?limit=5&offset=0'
```

Get specific email:

```bash
curl -X GET 'http://localhost:3000/api/gmail/msg123'
```

### Calendar API Examples

List events:

```bash
curl -X GET 'http://localhost:3000/api/calendar?limit=5&offset=0'
```

Get specific event:

```bash
curl -X GET 'http://localhost:3000/api/calendar/evt123'
```

## Tools Integration

You can use this API specification with:

- [Swagger UI](https://swagger.io/tools/swagger-ui/)
- [Postman](https://www.postman.com/)
- [Insomnia](https://insomnia.rest/)
- Any other OpenAPI-compatible tool

Simply import the `openapi.yaml` file into your preferred tool to get started.

# Contact API Documentation

The `/api/contact` endpoint extracts and returns a list of contacts from Gmail and Calendar events. It supports pagination and domain filtering options.

## **List Contacts**

### Request URL:

GET http://localhost:3000/api/contact?limit=5&offset=0


### Optional Query Parameters:
- **`limit`**: (Optional) The number of contacts to return. Default is `10`.
- **`offset`**: (Optional) The number of contacts to skip. Default is `0`.
- **`ignoreDomains`**: (Optional) A comma-separated list of domains to ignore. If an email or calendar event contains only participants from these domains, it will be excluded.
- **`blockDomains`**: (Optional) A comma-separated list of domains. If any email or calendar event has participants from these domains, it will be excluded from the results.

### Example Request:

GET http://localhost:3000/api/contact?limit=5&offset=0&ignoreDomains=cake.com&blockDomains=nektar.ai


This will fetch contacts from emails and calendar events while:
- Ignoring events where participants are only from `cake.com`.
- Blocking events where participants are from `nektar.ai`.

### Response Format:

A paginated response that includes the contact details, such as email, first name, last name, and domain.

#### Example Response:

```json
{
  "data": [
    {
      "email": "aryan-kapoor@cake.com",
      "firstName": "Aryan",
      "lastName": "Kapoor",
      "domain": "cake.com"
    },
    {
      "email": "arjun_singh@cake.com",
      "firstName": "Arjun",
      "lastName": "Singh",
      "domain": "cake.com"
    }
  ],
  "total": 3,
  "limit": 5,
  "offset": 0
}

Postman URL Example:
To test this API in Postman, use the following URL (assuming your server is running locally on port 3000):

http://localhost:3000/api/contact?limit=5&offset=0&ignoreDomains=cake.com&blockDomains=nektar.ai
This will fetch the contact data while applying the filters you've set for domains. You can adjust the limit, offset, ignoreDomains, and blockDomains parameters in Postman to test different cases.

Get Contact by Email
Request URL:
GET http://localhost:3000/api/contact/:contactEmail

URL Parameters:
:contactEmail: The email address of the contact you wish to retrieve.
Example Request:
GET http://localhost:3000/api/contact/aryan-kapoor@cake.com

This will fetch the contact details for the email aryan-kapoor@cake.com from both Gmail and Calendar.

Response Format:
The response contains the contact details including email, firstName, lastName, and domain.

Example Response:
{
  "data": {
    "email": "aryan-kapoor@cake.com",
    "firstName": "Aryan",
    "lastName": "Kapoor",
    "domain": "cake.com"
  }
}


Contact API Documentation
This documentation describes the various endpoints for managing and retrieving contact data from Gmail and Calendar events.

1. Get Contact by Email
Request URL:
GET http://localhost:3000/api/contact/:contactEmail

URL Parameters:
:contactEmail: The email address of the contact you wish to retrieve.
Example Request:
GET http://localhost:3000/api/contact/aryan-kapoor@cake.com

This will fetch the contact details for the email aryan-kapoor@cake.com from both Gmail and Calendar.

Response Format:
The response contains the contact details including email, firstName, lastName, and domain.

Example Response:
json
Copy code
{
  "data": {
    "email": "aryan-kapoor@cake.com",
    "firstName": "Aryan",
    "lastName": "Kapoor",
    "domain": "cake.com"
  }
}

Get Gmail Messages by Contact Email
Request URL:
GET http://localhost:3000/api/gmail/:contactEmail

URL Parameters:
:contactEmail: The email address of the contact whose Gmail messages you want to retrieve.
Optional Query Parameters:
limit: (Optional) The number of Gmail messages to return. Default is 10.
offset: (Optional) The number of messages to skip. Default is 0.
Example Request:
GET http://localhost:3000/api/gmail/aryan-kapoor@cake.com?limit=5&offset=0

This will fetch the Gmail messages for the contact aryan-kapoor@cake.com with pagination.

Response Format:
A paginated response that includes Gmail message details such as snippet, subject, and labels.

Example Response:
{
  "data": [
    {
      "snippet": "Thanks. razan Sales Head 9384545410",
      "subject": "account 1 minato incoming mail rc oct 22nd",
      "labels": ["UNREAD", "CATEGORY_PERSONAL", "INBOX"]
    },
    {
      "snippet": "hello, This is test mail. Thanks. nam Product Head 9080908090",
      "subject": "Nam test gmail sync",
      "labels": ["UNREAD", "IMPORTANT", "CATEGORY_PERSONAL", "INBOX"]
    }
  ],
  "total": 3,
  "limit": 5,
  "offset": 0
}

Get Gmail Messages by Contact Email with Filtering
Request URL:
GET http://localhost:3000/api/gmail/:contactEmail

URL Parameters:
:contactEmail: The email address of the contact whose Gmail messages you want to retrieve.
Optional Query Parameters:
limit: (Optional) The number of Gmail messages to return. Default is 10.
offset: (Optional) The number of messages to skip. Default is 0.
ignoreDomains: (Optional) A comma-separated list of domains to ignore. If any message involves participants from these domains, it will be excluded.
blockDomains: (Optional) A comma-separated list of domains. Messages containing participants from these domains will be excluded.
Example Request:
GET http://localhost:3000/api/gmail/aryan-kapoor@cake.com?limit=5&offset=0&ignoreDomains=cake.com&blockDomains=nektar.ai

This will fetch Gmail messages for aryan-kapoor@cake.com, ignoring messages involving only participants from cake.com, and blocking messages involving participants from nektar.ai.

Response Format:
A paginated response that includes Gmail message details, filtered by the specified domains.

Example Response:
{
  "data": [
    {
      "snippet": "Thanks. razan Sales Head 9384545410",
      "subject": "account 1 minato incoming mail rc oct 22nd",
      "labels": ["UNREAD", "CATEGORY_PERSONAL", "INBOX"]
    },
    {
      "snippet": "hello, This is test mail. Thanks. nam Product Head 9080908090",
      "subject": "Nam test gmail sync",
      "labels": ["UNREAD", "IMPORTANT", "CATEGORY_PERSONAL", "INBOX"]
    }
  ],
  "total": 3,
  "limit": 5,
  "offset": 0
}

Get Combined Contacts from Gmail and Calendar
Request URL:
GET http://localhost:3000/api/contact

Optional Query Parameters:
limit: (Optional) The number of contacts to return. Default is 10.
offset: (Optional) The number of contacts to skip. Default is 0.
ignoreDomains: (Optional) A comma-separated list of domains to ignore. If an email or calendar event contains only participants from these domains, it will be excluded.
blockDomains: (Optional) A comma-separated list of domains. If any email or calendar event has participants from these domains, it will be excluded from the results.
Example Request:
GET http://localhost:3000/api/contact?limit=5&offset=0&ignoreDomains=cake.com&blockDomains=nektar.ai

This will fetch contacts from emails and calendar events while ignoring participants from cake.com and blocking participants from nektar.ai.

Response Format:
A paginated response that includes the contact details such as email, first name, last name, and domain.

Example Response:
{
  "data": [
    {
      "email": "aryan-kapoor@cake.com",
      "firstName": "Aryan",
      "lastName": "Kapoor",
      "domain": "cake.com"
    },
    {
      "email": "arjun_singh@cake.com",
      "firstName": "Arjun",
      "lastName": "Singh",
      "domain": "cake.com"
    }
  ],
  "total": 3,
  "limit": 5,
  "offset": 0
}

 Get Combined Contacts from Gmail and Calendar by Email
Request URL:
GET http://localhost:3000/api/contact/:contactEmail

URL Parameters:
:contactEmail: The email address of the contact to search for within Gmail and Calendar events.
Example Request:
GET http://localhost:3000/api/contact/aryan-kapoor@cake.com

This will search for the contact aryan-kapoor@cake.com in both Gmail and Calendar.

Response Format:
If the contact is found, it returns the details like email, firstName, lastName, and domain. If not found, it returns an error.

Example Response (Success):
{
  "data": {
    "email": "aryan-kapoor@cake.com",
    "firstName": "Aryan",
    "lastName": "Kapoor",
    "domain": "cake.com"
  }
}







