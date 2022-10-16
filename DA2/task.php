<!-- sample php code  -->

<?php
$task = $_GET['task'];
if ($task == "add") {
    $name = $_GET['name'];
    $email = $_GET['email'];
    $phone = $_GET['phone'];
    $address = $_GET['address'];
    $city = $_GET['city'];
    $state = $_GET['state'];
    $zip = $_GET['zip'];
    $country = $_GET['country'];
    $sql = "INSERT INTO contacts (name, email, phone, address, city, state, zip, country) VALUES ('$name', '$email', '$phone', '$address', '$city', '$state', '$zip', '$country')";
    $result = mysql_query($sql);
    if ($result) {
        echo "Contact added successfully";
    } else {
        echo "Error adding contact";
    }
} else if ($task == "update") {
    $id = $_GET['id'];
    $name = $_GET['name'];
    $email = $_GET['email'];
    $phone = $_GET['phone'];
    $address = $_GET['address'];
    $city = $_GET['city'];
    $state = $_GET['state'];
    $zip = $_GET['zip'];
    $country = $_GET['country'];
    $sql = "UPDATE contacts SET name = '$name', email = '$email', phone = '$phone', address = '$address', city = '$city', state = '$state', zip = '$zip', country = '$country' WHERE id = $id";
    $result = mysql_query($sql);
    if ($result) {
        echo "Contact updated successfully";
    } else {
        echo "Error updating contact";
    }
} else if ($task == "delete") {
    $id = $_GET['id'];
    $sql = "DELETE FROM contacts WHERE id = $id";
    $result = mysql_query($sql);
    if ($result) {
        echo "Contact deleted successfully";
    } else {
        echo "Error deleting contact";
    }
}
?>