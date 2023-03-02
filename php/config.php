<?php
  // $username = "root";

  $hostname = "192.168.1.80";
  $username = "bablu";
  $password = "admin";
  
  $dbname = "chatapp";

  $conn = mysqli_connect($hostname, $username, $password, $dbname);
  if(!$conn){
    echo "Database connection error".mysqli_connect_error();
  }
?>
