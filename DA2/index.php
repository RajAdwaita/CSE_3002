<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $name = "Adwaita";
    function A()
    {
        global $name;

        echo "My name is $name and I am a web developer";
    }
    A();
    ?>

</body>

</html>