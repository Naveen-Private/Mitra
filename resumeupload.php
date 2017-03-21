<?php
$to = "naveen.yaragarla@gmail.com";
$subject = "Your password with attachment test";
$from = "naveendevgeek@gmail.com";
$myAttachment = file_get_contents( $_FILES['userfile']['tmp_name']);

var_dump($myAttachment);

$filename = $_FILES['userfile']['tmp_name'];
 
$headers = "From: \"Webmaster\" <admin@itsupport.com>\r\n" .
  "Repy-To: admin@itsupport.com\r\n" .
   "MIME-Version: 1.0\r\n" .
   "Content-Type: multipart/mixed; boundary= \"1a2a3a\"\r\n";
$body = "--1a2a3a\r\n" .
    "Content-Type: multipart/alternative; boundary= \"4a5a6a\"\r\n" .
     "--4a5a6a\r\n" .
      "Content-Type: text/plain; charset=\"iso-8859-1\"\r\n" .
      "Content-Transfer-Encoding: 7bit\r\n" .
  "The attachment contains the log-files .\r\n" .
     "--4a5a6a\r\n" .
      "Content-Type: text/html; charset=\"iso-8859-1\"\r\n" .
       "<html>
 <head>
  <title>Report of last months log files</title>
 </head>
 <body></pre>
<span><strong>Please keep in mind :</strong></span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
<pre>
 </body>
</html>\r\n" .
    "--1a2a3a\r\n" .
     "Content-Type: text/html; name=\"$filename\"\r\n" .
     "Content-Transfer-Encoding: base64\r\n" .
     "Content-Disposition: attachment\r\n" .
  $myAttachment. "\r\n" .
  "--1a2a3a--";
 
   $success = mail($to, $subject, $body, $headers);
   if (!$success) {
  echo "Mail to " . $to . " is fail.";
   }else {
  echo "Success : Mail was send to " . $to ;
   }
 




function sendMailWithAttachment($file, $to, $from, $from_name, $replyto, $subject, $message) {
    $hash = md5(uniqid(time()));

    $header = "From: ".$from_name." <".$from.">\r\n";
    $header .= "Reply-To: ".$replyto."\r\n";
    $header .= "MIME-Version: 1.0\r\n";
    $header .= "Content-Type: multipart/mixed; boundary=\"".$hash."\"\r\n\r\n";
    $header .= "This is a multi-part message in MIME format.\r\n";
    $header .= "--".$hash."\r\n";
    $header .= "Content-type:text/html; charset=iso-8859-1\r\n";
    $header .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $header .= $message."\r\n\r\n";

    $filename = basename($file);
    $file_size = filesize($file);
    $handle = fopen($file, "r");
    $content = fread($handle, $file_size);
    fclose($handle);
    $content = chunk_split(base64_encode($content));

    $header .= "--".$hash."\r\n";
    $header .= "Content-Type: application/octet-stream; name=\"".$filename."\"\r\n"; 
    $header .= "Content-Transfer-Encoding: base64\r\n";
    $header .= "Content-Disposition: attachment; filename=\"".$filename."\"\r\n\r\n";
    $header .= $content."\r\n\r\n";

    $header .= "--".$hash."--";
    // $message is already in header
    return mail($to, $subject, "", $header);
}

?>