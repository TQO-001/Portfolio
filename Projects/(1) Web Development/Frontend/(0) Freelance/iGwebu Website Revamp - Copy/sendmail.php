<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize input data
    $fullname = htmlspecialchars($_POST['fullname']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);
    
    // Set up email parameters
    $to = 'info@igwebu.co.za';
    $subject = 'Contact Form Submission';
    $message_content = "Name: $fullname\n";
    $message_content .= "Email: $email\n";
    $message_content .= "Phone: $phone\n\n";
    $message_content .= "Message:\n$message";
    $headers = "From: $email";
    
    // Send email
    if (mail($to, $subject, $message_content, $headers)) {
        echo '<script>alert("Your message has been sent successfully."); window.location = "contact.html";</script>';
    } else {
        echo '<script>alert("Unable to send message. Please try again later."); window.location = "contact.html";</script>';
    }
}
?>
