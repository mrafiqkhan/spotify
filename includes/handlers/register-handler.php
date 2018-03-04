<?php


function sanitizeFormUsername($str)
{
    $str = strip_tags($str);
    $str = str_replace(" ", "", $str);

    return $str;

}

function sanitizeFormString($str)
{
    $str = strip_tags($str);
    $str = str_replace(" ", "", $str);
    $str = ucfirst(strtolower($str));
    return $str;
}


function sanitizeFormPassword($pass)
{
    $pass = strip_tags($pass);
    return $pass;
}

if (isset($_POST['registerButton'])) {
    // Register button was pressed
    $username = sanitizeFormUsername($_POST['username']);
    $firstName = sanitizeFormString($_POST['firstname']);
    $lastName = sanitizeFormString($_POST['lastname']);
    $email =  sanitizeFormString($_POST['email']);
    $email2 =  sanitizeFormString($_POST['email2']);
    $password = sanitizeFormPassword($_POST['password']);
    $password2 = sanitizeFormPassword($_POST['password2']);

    $wasSuccessful =  $account->register($username, $firstName, $lastName, $email, $email2, $password, $password2);

    if ($wasSuccessful) {
        $_SESSION['userLoggedIn'] = $username;
        header("Location:index.php");
    }
}
