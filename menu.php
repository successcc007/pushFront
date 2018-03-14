<?php
?>
<!DOCTYPE html>
<html>
<head>
    <meta name="keywords" content="Hot Restaurant">
    <meta name="description" content="Hot Restaurant">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Menu</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <script >
        function bookingClick(value){
            console.log(value.getAttribute("data"));
        }
    </script>

</head>
<body>

<!-- header -->
<header>
	<h1>Hot Restaurant</h1>
</header>

<!-- nav -->
<nav>
    <ul>
        <li><a href="location.php">Location </a></li>
        <li><a href="contact.php">Contact</a></li>
        <li><a href="specials.php">Specials </a></li>
        <li><a href="menu.php" class="on">Menu</a></li>
        <li><a href="index.php" >Home</a></li>
    </ul>
    <div class="clear"></div>
</nav>

<div class="edu">
	<dl>
		<dd><img src="images/menu1.jpg" width="460" height="230"></dd>
		<dt>
			<h3>Menu Name</h3>
			<p>Australian National University is a world-renowned top research universities, the Australian group of eight in the first, only ranked the world's top 20 university in the southern hemisphere, the southern hemisphere is known as the first university, a founding member of the international alliance of research universities, University of the Pacific association. </p>
        <input type="button" name="booking" id="booking"  data="oid" value="booking" onclick="bookingClick(this)">
		</dt>
	</dl>
	<div class="clear"></div>
    <dl>
        <dd><img src="images/menu1.jpg" width="460" height="230"></dd>
        <dt>
        <h3>Menu Name</h3>
        <p>Australian National University is a world-renowned top research universities, the Australian group of eight in the first, only ranked the world's top 20 university in the southern hemisphere, the southern hemisphere is known as the first university, a founding member of the international alliance of research universities, University of the Pacific association. </p>
        </dt>
    </dl>

</div>


<!-- footer -->
<footer>
    <p>Contact Me:042*****　Email:****@qq.com　copyright@2017 by ***</p>
</footer>
</body>
</html>