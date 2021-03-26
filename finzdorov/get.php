<?php
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

$expectMarks = array('utm_source','utm_medium','utm_campaign','utm_term','utm_content');$utms=array();foreach($expectMarks as $utm){if(isset($_COOKIE[$utm])){${$utm}=$_COOKIE[$utm];}}

$phone = $_POST['phone'];
$title = $_POST['title'];
$name = $_POST['name'];

// формируем URL в переменной $queryUrl
$queryUrl = '';
// формируем параметры для создания лида в переменной $queryData
$queryData = http_build_query(array(
  'fields' => array(
    'TITLE' => $title,
    'SOURCE_ID' => 22,
	'ASSIGNED_BY_ID' => 11,
    'PHONE' =>  array(array('VALUE' => $phone, 'VALUE_TYPE' => 'WORK')),
    'NAME' => $name,
	'UTM_SOURCE' => $utm_source,
	'UTM_MEDIUM' => $utm_medium,
	'UTM_CAMPAIGN' => $utm_campaign,
	'UTM_CONTENT' => $utm_content,
	'UTM_TERM' => $utm_term
	
  ),
  'params' => array("REGISTER_SONET_EVENT" => "Y")
));
// обращаемся к Битрикс24 при помощи функции curl_exec
$curl = curl_init();
  curl_setopt_array($curl, array(
  CURLOPT_SSL_VERIFYPEER => 0,
  CURLOPT_POST => 1,
  CURLOPT_HEADER => 0,
  CURLOPT_RETURNTRANSFER => 1,
  CURLOPT_URL => $queryUrl,
  CURLOPT_POSTFIELDS => $queryData,
));
$result = curl_exec($curl);
curl_close($curl);
$result = json_decode($result, 1);
var_dump($result);
if (array_key_exists('error', $result)) echo "Ошибка при сохранении лида: ".$result['error_description']."<br/>";
