// EmailJS Configuration
// Follow these steps to set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create a free account
// 3. Create a new email service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your Service ID, Template ID, and Public Key
// 6. Replace the values below with your actual EmailJS credentials

export const emailConfig = {
  serviceId: 'service_gdbm04q', // Your EmailJS service ID (already filled in!)
  templateId: 'template_u5gd2a5', // Replace with the Template ID from EmailJS after saving
  publicKey: 'YQ4AdfIdFutFerHdd' // Replace with your Public Key from Account settings
}

// Example EmailJS template variables:
// {{user_name}} - From contact form name field
// {{user_email}} - From contact form email field  
// {{subject}} - From contact form subject field
// {{message}} - From contact form message field
