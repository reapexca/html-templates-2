<!DOCTYPE HTML>
<html>

<head>
  <title>CSS3_five</title>
  <meta name="description" content="website description" />
  <meta name="keywords" content="website keywords, website keywords" />
  <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
  <link rel="stylesheet" type="text/css" href="css/style.css" />
  <!-- modernizr enables HTML5 elements and feature detects -->
  <script type="text/javascript" src="js/modernizr-1.5.min.js"></script>
</head>

<body>
  <div id="container">
    <img src="images/sun.png" alt="sunshine" />
    <div id="main">
      <header>
        <div id="logo">
          <div id="logo_text">
            <h1><a href="index.html">CSS3<span class="logo_colour">_five</span></a></h1>
            <h2>Simple. Contemporary. Website Template.</h2>
          </div>
          <div id="logo_text2">
            <h3>Telephone</h3>
            <h4>0100 123 456</h4>
          </div>
        </div>
        <nav>
          <ul class="sf-menu" id="nav">
            <li><a href="index.html">Home</a></li>
            <li><a href="examples.html">Examples</a></li>
            <li><a href="page.html">A Page</a></li>
            <li><a href="another_page.html">Another Page</a></li>
            <li><a href="#">Example Drop Down</a>
              <ul>
                <li><a href="#">Drop Down One</a></li>
                <li><a href="#">Drop Down Two</a>
                  <ul>
                    <li><a href="#">Sub Drop Down One</a></li>
                    <li><a href="#">Sub Drop Down Two</a></li>
                    <li><a href="#">Sub Drop Down Three</a></li>
                    <li><a href="#">Sub Drop Down Four</a></li>
                    <li><a href="#">Sub Drop Down Five</a></li>
                  </ul>
                </li>
                <li><a href="#">Drop Down Three</a></li>
                <li><a href="#">Drop Down Four</a></li>
                <li><a href="#">Drop Down Five</a></li>
              </ul>
            </li>
            <li><a href="contact.php">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      <div id="site_content">
        <div id="sidebar_container">
          <div class="sidebar">
            <h4>New Website Launched</h4>
            <h5>January 1st, 2012</h5>
            <p>2012 sees the redesign of our website. Let us know what you think..... <a href="#">read more</a></p>
          </div>
          <div class="sidebar">
            <h4>20% Discount</h4>
            <p>For the month of March 2012, we are offering a 20% discount for all new customers.</p>
          </div>
          <div class="sidebar">
            <h4>Contact Us</h4>
            <p>We'd love to hear from you. Call us, <a href="#">email us</a> or complete our <a href="contact.php">contact form</a>.</p>
          </div>
        </div>
        <div id="content">
          <h1>Contact Us</h1>
          <p>Say hello, using this contact form.</p>
          <?php
            // This PHP Contact Form is offered &quot;as is&quot; without warranty of any kind, either expressed or implied.
            // David Carter at www.css3templates.co.uk shall not be liable for any loss or damage arising from, or in any way
            // connected with, your use of, or inability to use, the website templates (even where David Carter has been advised
            // of the possibility of such loss or damage). This includes, without limitation, any damage for loss of profits,
            // loss of information, or any other monetary loss.

            // Set-up these 3 parameters
            // 1. Enter the email address you would like the enquiry sent to
            // 2. Enter the subject of the email you will receive, when someone contacts you
            // 3. Enter the text that you would like the user to see once they submit the contact form
            $to = 'enter email address here';
            $subject = 'Enquiry from the website';
            $contact_submitted = 'Your message has been sent.';

            // Do not amend anything below here, unless you know PHP
            function email_is_valid($email) {
              return preg_match('/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i',$email);
            }
            if (!email_is_valid($to)) {
              echo '<p style="color: red;">You must set-up a valid (to) email address before this contact page will work.</p>';
            }
            if (isset($_POST['contact_submitted'])) {
              $return = "\r";
              $youremail = trim(htmlspecialchars($_POST['your_email']));
              $yourname = stripslashes(strip_tags($_POST['your_name']));
              $yourmessage = stripslashes(strip_tags($_POST['your_message']));
              $contact_name = "Name: ".$yourname;
              $message_text = "Message: ".$yourmessage;
              $user_answer = trim(htmlspecialchars($_POST['user_answer']));
              $answer = trim(htmlspecialchars($_POST['answer']));
              $message = $contact_name . $return . $message_text;
              $headers = "From: ".$youremail;
              if (email_is_valid($youremail) && !eregi("\r",$youremail) && !eregi("\n",$youremail) && $yourname != "" && $yourmessage != "" && substr(md5($user_answer),5,10) === $answer) {
                mail($to,$subject,$message,$headers);
                $yourname = '';
                $youremail = '';
                $yourmessage = '';
                echo '<p style="color: blue;">'.$contact_submitted.'</p>';
              }
              else echo '<p style="color: red;">Please enter your name, a valid email address, your message and the answer to the simple maths question before sending your message.</p>';
            }
            $number_1 = rand(1, 9);
            $number_2 = rand(1, 9);
            $answer = substr(md5($number_1+$number_2),5,10);
          ?>
          <form id="contact" action="contact.php" method="post">
            <div class="form_settings">
              <p><span>Name</span><input class="contact" type="text" name="your_name" value="<?php echo $yourname; ?>" /></p>
              <p><span>Email Address</span><input class="contact" type="text" name="your_email" value="<?php echo $youremail; ?>" /></p>
              <p><span>Message</span><textarea class="contact textarea" rows="5" cols="50" name="your_message"><?php echo $yourmessage; ?></textarea></p>
              <p style="line-height: 1.7em;">To help prevent spam, please enter the answer to this question:</p>
              <p><span><?php echo $number_1; ?> + <?php echo $number_2; ?> = ?</span><input type="text" name="user_answer" /><input type="hidden" name="answer" value="<?php echo $answer; ?>" /></p>
              <p style="padding-top: 15px"><span>&nbsp;</span><input class="submit" type="submit" name="contact_submitted" value="send" /></p>
            </div>
          </form>
        </div>
      </div>
      <footer>
        <p><a href="index.html">Home</a> | <a href="examples.html">Examples</a> | <a href="page.html">A Page</a> | <a href="another_page.html">Another Page</a> | <a href="contact.php">Contact Us</a></p>
        <p>Copyright &copy; CSS3_five | <a href="http://www.css3templates.co.uk">design from css3templates.co.uk</a></p>
      </footer>
    </div>
  </div>
  <div id="grass"></div>
  <!-- javascript at the bottom for fast page loading -->
  <script type="text/javascript" src="js/jquery.js"></script>
  <script type="text/javascript" src="js/jquery.easing-sooper.js"></script>
  <script type="text/javascript" src="js/jquery.sooperfish.js"></script>
  <script type="text/javascript">
    $(document).ready(function() {
      $('ul.sf-menu').sooperfish();
    });
  </script>
</body>
</html>
