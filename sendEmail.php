<?php
$to      = 'hello@annabellegoldsworthy.com'; //one.com email, or domain email
$name = $_POST['name'];
$email = $_POST['email'];
$sub = $_POST['subject'];
$body = $_POST['message'];
$subject = 'New Enquiry';
$message = "New enquiry from " . $name . " (". $email ."): " . $body; //input subject
$headers = 'From: hello@annabellegoldsworthy.com' . "\r\n" . //why do we put in our email here? or do we need to?
    'Reply-To: hello@annabellegoldsworthy.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

if(mail($to, $subject, $message, $headers)){
    header("Location: index.html");
} else {
    echo "Failure to send";
}
?>
