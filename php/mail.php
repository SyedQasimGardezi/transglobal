<?php
if(!empty($_POST['send'])){
    $name=$_POST['name']
    $email=$_POST['email']
    $message=$_POST['message']
    $toMail='shahq383@gmail.com'

    $mailHeader = "Name: ". $name .
    "\r\n Email: ". $email .
    "\r\n Message: ". $message . "\r\n";

    if(mail($toMail, $name, $mailHeader)){
        $message="Message Recieved"
    }
}
?>