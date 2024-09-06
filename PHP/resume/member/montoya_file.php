
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pinero File</title>
    <link rel="stylesheet" href="/PHP/resume/background.css">
    <link rel="stylesheet" href="/PHP/resume/member/member.css">
</head>
<?php
    include("../connection.php");

    $sql = "SELECT first_name, last_name, age, height, weight, dream_job, birthday, address, hobby, elem_school, high_school, senior_school, college, father_name, mother_name FROM members WHERE id = 7";
    $result = $conn->query($sql);

    if($result->num_rows > 0){
        $row = $result->fetch_assoc();
    }

    mysqli_close($conn);
?>
<body>
    <div class="container">
        <div class="profile">
            <div class="profile_image">
                <img src="/PHP/resume/images/montoya_image.jpg" alt="">
            </div>
        <table border="10">
            <tr>
                <th>Fields</th>
                <th>Value</th>
            </tr>
            <tr>
                <td>First name</td>
                <td><?php echo $row['first_name']; ?></td>
            </tr>
            <tr>
                <td>Last name</td>
                <td><?php echo $row['last_name']; ?></td>
            </tr>
            <tr>
                <td>Age</td>
                <td><?php echo $row['age']; ?></td>
            </tr>
            <tr>
                <td>Height</td>
                <td><?php echo $row['height']; ?></td>
            </tr>
            <tr>
                <td>Weight</td>
                <td><?php echo $row['weight']; ?></td>
            </tr>
            <tr>
                <td>Dream job</td>
                <td><?php echo $row['dream_job']; ?></td>
            </tr>
            <tr>
                <td>Birthday</td>
                <td><?php echo $row['birthday']; ?></td>
            </tr>
            <tr>
                <td>Address</td>
                <td><?php echo $row['address']; ?></td>
            </tr>
            <tr>
                <td>Hobby</td>
                <td><?php echo $row['hobby']; ?></td>
            </tr>
            <tr>
                <td>Elementary School</td>
                <td><?php echo $row['elem_school']; ?></td>
            </tr>
            <tr>
                <td>High school</td>
                <td><?php echo $row['high_school']; ?></td>
            </tr>
            <tr>
                <td>Senior school</td>
                <td><?php echo $row['senior_school']; ?></td>
            </tr>
            <tr>
                <td>College</td>
                <td><?php echo $row['college']; ?></td>
            </tr>
            <tr>
                <td>Father name</td>
                <td><?php echo $row['father_name']; ?></td>
            </tr>
            <tr>
                <td>Mother name</td>
                <td><?php echo $row['mother_name']; ?></td>
            </tr>
        </table>
        </div>
        <div class="back_button">
            <a href="\PHP\resume\index.php"><button><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="m287-446.67 240 240L480-160 160-480l320-320 47 46.67-240 240h513v66.66H287Z"/></svg></button></a>
        </div>
       
    </div>
</body>
</html>

<?php
    
?>