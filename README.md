# Contact Us Form - NextJS Chakra UI Project

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/omkarhcode/contact-us-form/blob/main/LICENSE)

A Next.js application with Chakra UI integration that features a contact form. The form sends an email notification and updates a Google Sheet every time someone submits the form.

## Features

- Contact form with fields for name, email, and message.
- Email notification sent to specified recipient(s) upon form submission.
- Google Sheet integration to store and organize form submission data.

## Demo

Check out the live demo: [Contact Us Form Demo](https://contact-us-form-wine.vercel.app/)


## Technologies Used

- Next.js
- Chakra UI
- Nodemailer
- Google Sheets API

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/omkarhcode/contact-us-form.git
   ```

2. Navigate to the project directory:

   ```shell
   cd contact-us-form
   ```

3. Install dependencies:

   ```shell
   npm install
   ```

4. Set up environment variables:
   
   - Create a `.env.local` file in the root directory.
   - Add the following environment variables:

     ```plaintext
     NODEMAILER_EMAIL=your-email@gmail.com
     NODEMAILER_EMAIL_PASSWORD=your-email-password
     GOOGLE_CLIENT_EMAIL=your-email@gmail.com
     GOOGLE_PRIVATE_KEY=your-email-password
     GOOGLE_SHEET_ID=your-google-sheet-id
     ```

5. Run the development server:

   ```shell
   npm run dev
   ```

6. Access the application at `http://localhost:3000`.

## Usage

1. Fill out the contact form with the required information.
2. Submit the form to trigger the email notification and update the Google Sheet.

## Deployment

To deploy the application, follow the deployment instructions for Next.js in the official documentation: [Next.js - Deployment](https://nextjs.org/docs/deployment)

## Contributing

Contributions are welcome! Feel free to open issues and submit pull requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [Chakra UI Documentation](https://chakra-ui.com/docs)
- [Nodemailer Documentation](https://nodemailer.com/about/)
- [Google Sheets API Documentation](https://developers.google.com/sheets/api)

## Links

- [GitHub Repository](https://github.com/omkarhcode/contact-us-form)
- [Live Demo](https://your-demo-url)
- [Google Sheet](https://docs.google.com/spreadsheets/d/1KJDR0M8oFuOCg_Z10vA4L-Lg-ZJD8mIOJRbOFB7UyNw/edit?usp=sharing)

## Contact

For any inquiries or feedback, please reach out to me at [omkarhcode@gmail.com](mailto:omkarhcode@gmail.com).

Thank you for checking out the Contact Us Form project! Enjoy building and customizing it for your needs.
