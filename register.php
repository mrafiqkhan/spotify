<?php
include("includes/config.php");

 $account = new Account($con);


include("includes/handlers/register-handler.php");
include("includes/handlers/login-handler.php");

function getInputValue($name)
{
    if (isset($_POST[$name])) {
        echo $_POST[$name];
    }
}
?>
<!DOCTYPE html>
<html lang="en">
   <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Welcome to Slotify!</title>
    <link rel="stylesheet" href="assets/css/normalize.css">
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/register.css">
  </head>
  <body>
    <div id="background">
      <div id="loginContainer" class="clear">
        <div id="inputContainer">
          <form action="register.php" method="POST" id="loginForm">
            <h2>Login to your account</h2>
            <p>
              <?php echo $account->getError(Constants::$loginFailed); ?>
              <label for="loginUsername">Username</label>
              <input type="text" id="loginUsername" name="loginUsername" placeholder="e.g. Steven" required>
            </p>
            <p>
            <span class="errorMessage"></span>
              <label for="loginPasswrod">Password</label>
              <input type="password" id="loginPassword" name="loginPassword" placeholder="Your Password" required>
            </p>

            <button type="submit" name="loginButton">Login</button>
            <div class="hasAccountText">
            <span>Don't hav an account yet? <a href="#" id="hideLogin">Sign up</a> here</span>
            </div>
          </form><!--  //// form#login -->

          <form action="register.php" method="POST" id="registerForm">
            <h2>Create your account</h2>
            <p>
              <?php echo $account->getError(Constants::$usernameCharacters);?>
              <?php echo $account->getError(Constants::$usernameTaken);?>
              <label for="username">Username</label>
              <input type="text" id="username" name="username" placeholder="e.g. Steven" required value="<?php getInputValue('username')?>" >
            </p>
            <p>
              <?php echo  $account->getError(Constants::$firstNameCharacters);?>
              <label for="firstname">First Name</label>
              <input type="text" id="firstName" name="firstname" placeholder="e.g. Steven" required value="<?php getInputValue('firstname')?>">
            </p>
            <p>
              <?php echo $account->getError(Constants::$lastNameCharacters);?>
              <label for="lastname">Last Name</label>
              <input type="text" id="lastName" name="lastname" placeholder="e.g. Maxwell" required value="<?php getInputValue('lastname')?>">
            </p>
            <p>
              <?php echo $account->getError(Constants::$emailsDoNotMatch);?>
              <?php echo $account->getError(Constants::$emailInvalid);?>
              <?php echo $account->getError(Constants::$emailTaken);?>
              <label for="email">Email</label>
              <input type="email" id="email" name="email" placeholder="e.g. stevenmax@gmail.com" required value="<?php getInputValue('email')?>">
            </p>
            <p>
              <span class="errorMessage"></span>
              <label for="email2">Repeat Email</label>
              <input type="email" id="email2" name="email2" placeholder="e.g. stevenmax@gmail.com" required value="<?php if(!$account->getError(Constants::$emailsDoNotMatch) and !$account->getError(Constants::$emailInvalid) and $account->getError(Constants::$emailTaken)){getInputValue('email2');}?>">
            </p>
            <p>
              <?php echo $account->getError(Constants::$passwordsDoNotMatch);?>
              <?php echo $account->getError(Constants::$passwordCharacters);?>
              <?php echo $account->getError(Constants::$passwordAlphanumeric);?>
              <label for="registerPassword">Password</label>
              <input type="password" id="registerPassword" name="password" placeholder="Your Password" required>
            </p>
            <p>
              <span class="errorMessage"></span>
              <label for="registerPassword2">Repeat Password</label>
              <input type="password" id="registerPassword2" name="password2" placeholder="Repeat Your Password" required >
            </p>
            <button type="submit" name="registerButton">Sign Up</button>
            <div class="hasAccountText">
            <span>Already have an account? <a href="#" id="hideRegister">Login</a> here</span>
            </div>
          </form><!--  //// form#registers-->
        </div><!--  //// div#inputContainer-->
        <div id="loginText">
          <h1>Get great music, right now</h1>
          <h3>Listen to loads of songs for free</h3>
          <ul>
            <li>Discover music you'll fall in love with</li>
            <li>Create your own playlist</li>
            <li>Follow artists to keep up to date</li>
          </ul>
        </div>
      </div><!--  //// div#loginContainer-->
    </div><!--  //// div#background-->
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/register.js"></script>
  </body>
</html>