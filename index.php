<?php 
  session_start();
  if(isset($_SESSION['unique_id'])){
    header("location: users.php");
  }
  ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);
?>

<?php include_once "header.php"; ?>
<div id='chat' class="wrapper">
  <section class="form signup">
    
    <header> Sign Up  <i class="fa fa-close" onclick="console.log('hello');widget_close();" style="float: right;cursor:pointer;"></i></header>
      <form action="#" method="POST" enctype="multipart/form-data" autocomplete="on">
        <div class="error-text"></div>
        <div class="name-details">
          <div class="field input">
            <label>First Name</label>
            <input type="text" name="fname" placeholder="First name" required>
          </div>
          <div class="field input">
            <label>Last Name</label>
            <input type="text" name="lname" placeholder="Last name" required>
          </div>
        </div>
        <div class="field input">
          <label>Email Address</label>
          <input type="text" name="email" placeholder="Enter your email" required>
        </div>
        <div class="field input">
          <label>Password</label>
          <input type="password" name="password" placeholder="Enter new password" required>
          <i class="fas fa-eye"></i>
        </div>
        <div class="field image">
        <!-- <i class="fa-solid fa-image"></i> -->
        <!-- <i class="fas fa-eye"></i> -->

          <label>Select Image</label>
          <input type="file" name="image" accept="image/x-png,image/gif,image/jpeg,image/jpg" required>
        </div>
        <div class="field button">
          <input type="submit" name="submit" value="Continue to Chat">
        </div>
      </form>
      <div class="link">Already signed up? <a href="login.php">Login now</a></div>
    </section>
  </div>

  <script src="js/pass-show-hide.js"></script>
  <script src="js/signup.js"></script>

</body>
</html>
