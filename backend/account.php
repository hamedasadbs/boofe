<?php

include('connection.php');

$_POST = json_decode(array_keys($_POST)[0], true);

if ($_POST['goal'] == 'login') {
    $query = "SELECT * FROM account WHERE email_mobile='{$_POST['emailMobile']}' and password='{$_POST['password']}'";
    $result = mysqli_query(connection(), $query);
    $rows = array();
    while ($r = mysqli_fetch_assoc($result)) {
        $rows[] = $r;
    }
    if (sizeof($rows) == 0) {
        print '';
    } else {
        $username = $rows[0]['username'];
        $role = $rows[0]['role'];
        $token = [$username, $role];
        print json_encode($token);
    }
} else {
    $query1 = "SELECT * FROM account WHERE username='{$_POST['username']}'";
    $result1 = mysqli_query(connection(), $query1);
    $rows1 = array();
    while ($r1 = mysqli_fetch_assoc($result1)) {
        $rows1[] = $r1;
    }

    $query2 = "SELECT * FROM account WHERE email_mobile='{$_POST['emailMobile']}'";
    $result2 = mysqli_query(connection(), $query2);
    $rows2 = array();
    while ($r2 = mysqli_fetch_assoc($result2)) {
        $rows2[] = $r2;
    }

    if (sizeof($rows1) == 0 && sizeof($rows2) == 0) {
        $query3 = "INSERT INTO account (username,email_mobile,password,role) VALUES('{$_POST['username']}', '{$_POST['emailMobile']}', '{$_POST['password']}', 0)";
        $result3 = mysqli_query(connection(), $query3);

        if ($result3) {
            print '3';
        }
    } else {
        if (sizeof($rows2) > 0) {
            print '2';
        } else if (sizeof($rows1) > 0) {
            print '1';
        }
    }
}
