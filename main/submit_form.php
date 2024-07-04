<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set up the recipient email address
    $to = 'balakramtudu81@gmail.com';

    // Set up the email subject
    $subject = 'New message from your website contact form';

    // Construct the email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message:\n$message";

    // Set up the email headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send the email
    if (mail($to, $subject, $email_message, $headers)) {
        echo 'Thank you for your message. We will get back to you shortly.';
    } else {
        echo 'Oops! Something went wrong and we couldn\'t send your message.';
    }
}
?>
