<?php

include('connection.php');

$_POST = json_decode(array_keys($_POST)[0], true);

switch ($_POST['goal']) {
    case 'get':
        $query = "SELECT * FROM restaurants";
        $result = mysqli_query(connection(), $query);
        $rows = array();
        while ($r = mysqli_fetch_assoc($result)) {
            $rows[] = $r;
        }
        print json_encode($rows);
        break;
    case 'add':
        $title = str_replace('_', ' ', $_POST['title']);
        $address = str_replace('_', ' ', $_POST['address']);
        $info1 = str_replace('_', ' ', $_POST['info1']);
        $info2 = str_replace('_', ' ', $_POST['info2']);
        if ($info1 == "") {
            $info1 = $info2;
        }
        if ($info2 == "") {
            $info2 = $info1;
        }
        $image = str_replace('_png', '.png', $_POST['image']);
        $image = str_replace('_jpg', '.jpg', $image);
        $image = str_replace('_jpeg', '.jpeg', $image);
        $query = "INSERT INTO restaurants (title,address,star,point,image,info1,info2) VALUES('$title', '$address', '{$_POST['star']}', '{$_POST['point']}','$image','$info1','$info2')";
        $result = mysqli_query(connection(), $query);
        if ($result) {
            print 'این رستوران اضافه شد';
        }
        break;
    case 'update':
        $title = str_replace('_', ' ', $_POST['title']);
        $address = str_replace('_', ' ', $_POST['address']);
        $info1 = str_replace('_', ' ', $_POST['info1']);
        $info2 = str_replace('_', ' ', $_POST['info2']);
        $query = "UPDATE restaurants SET title='$title', address='$address', info1='$info1', info2='$info2' WHERE id='{$_POST['id']}'";
        $result = mysqli_query(connection(), $query);

        if ($result) {
            print 'تغییرات با موفقیت ذخیره شدند';
        }
        break;
    case 'delete':
        $query = "DELETE FROM restaurants WHERE id='{$_POST['id']}'";
        $result = mysqli_query(connection(), $query);
        break;
    default:
        break;
}

