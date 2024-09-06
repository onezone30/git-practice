<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/PHP/resume/background.css">
    <link rel="stylesheet" href="/PHP/resume/style.css">
    
</head>
<?php
    include("connection.php");

?>
<body>
    <div class="container">
        <div class="title">
            <h1>Group</h1>
        </div>
        <div class="members">
            <div class="member member_1">
                <a href="/PHP/resume/member/pinero_file.php">
                    <img src="/PHP/resume/images/pinero_image.jpg" alt="picture of a man">
                </a>
                <div class="member_name">
                    Pinero
                </div>
            </div>
            <div class="member member_1">
                <a href="/PHP/resume/member/pusing_file.php">
                    <img src="/PHP/resume/images/pusing_image.jpg" alt="picture of a man">
                </a>
                <div class="member_name">
                    Pusing
                </div>
            </div>
            <div class="member member_1">
                <a href="/PHP/resume/member/espinosa_file.php">
                    <img src="/PHP/resume/images/espinosa_image.jpg" alt="picture of a man">
                </a>
                <div class="member_name">
                    Espinosa
                </div>
            </div>
            <div class="member member_1">
                <a href="/PHP/resume/member/torres_file.php">
                    <img src="/PHP/resume/images/torres_image.jpg" alt="picture of a man">
                </a>
                <div class="member_name">
                    Torres
                </div>
            </div>
            <div class="member member_1">
                <a href="/PHP/resume/member/dacara_file.php">
                    <img src="/PHP/resume/images/dacara_image.jpg" alt="picture of a man">
                </a>
                <div class="member_name">
                    Dacara
                </div>
            </div>
            <div class="member member_1">
                <a href="/PHP/resume/member/montoya_file.php">
                    <img src="/PHP/resume/images/montoya_image.jpg" alt="picture of a man">
                </a>
                <div class="member_name">
                    Montoya
                </div>
            </div>
            <div class="member member_1">
                <a href="/PHP/resume/member/sagayo_file.php">
                    <img src="/PHP/resume/images/sagayo_image.jpg" alt="picture of a man">
                </a>
                <div class="member_name">
                    Sagayo
                </div>
            </div>
            <div class="member member_1">
                <a href="/PHP/resume/member/fernandez_file.php">
                    <img src="/PHP/resume/images/fernandez_image.jpg" alt="picture of a man">
                </a>
                <div class="member_name">
                    Fernandez
                </div>
            </div>
        </div>
    </div>
</body>
</html>

<?php
    mysqli_close($conn);

?>