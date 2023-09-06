<?php
$recipient = "annabadyka@yahoo.es";
$result=false;
$subject = "A new message form Anna's portfolio web";
//import form information
 
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];


$name=stripslashes($name);
$email=stripslashes($email);
$subject=stripslashes($subject);
$message=stripslashes($message);
$message= "Name: $name, \n\n Email: $name, \n\n Subject: $subject, \n\n Message: $message";

//mail the form contents

if(mail("$recipient", "$subject", "$message", "From: $email" )){
	$result=true;
} 
echo json_encode($result);

?>