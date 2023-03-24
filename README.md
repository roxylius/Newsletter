# Newsletter
This GitHub project is a newsletter web app that uses MailChimp API for communication, React for frontend and Node.js for backend. It allows users to subscribe to newsletters and receive updates on various topics. The application has a responsive design and customizable email preferences, ensuring user convenience. Overall, it's a reliable tool for personal and business use that demonstrates the versatility of these programming languages.


## Installation

To install this project, follow these steps:

1. Clone the repository to your local machine:

```
git clone https://github.com/roxylius/Newsletter.git
```

2. Navigate to the project directory:

```
cd Newsletter
```

3. Then Navigate to server directory: 

```
cd server
```

4. Install the project dependencies in server:

```
npm install
```

5. Then Navigate to client directory: 

```
cd client
```

6. Install the project dependencies in client:

```
npm install
```

## Environment Variables

There are 3 environment variable in **server** directory:

1. **POSTURL** : https://<dc>.api.mailchimp.com/3.0/lists/{list_id} check out [request documentation](https://mailchimp.com/developer/marketing/docs/methods-parameters/)

2. **AUTH_KEY** : user:0123xxxxxxxxx456abcde-us6 check out [API documentation](https://mailchimp.com/developer/marketing/guides/quick-start/#generate-your-api-key)

3. **WEB_URL** : Provide your client-side app’s URL


There is 1 environment variable in **client** directory:

1. **REACT_APP_SERVER_URL** : Provide you server-side app's URL

## Usage

To run the project, use the following command in both **client** and **server** directory:

```
npm start
```
