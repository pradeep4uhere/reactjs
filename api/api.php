<?php  error_reporting(E_ALL);
ini_set("display_errors", 1);
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
function callAPI($method, $url, $data){
   $curl = curl_init();
   switch ($method){
      case "POST":
         curl_setopt($curl, CURLOPT_POST, 1);
         if ($data){
                curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
            }
         break;
      case "PUT":
         curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT");
         if ($data)
            curl_setopt($curl, CURLOPT_POSTFIELDS, $data);			 					
         break;
      default:
         if ($data){
           echo  $url = sprintf("%s?%s", $url, http_build_query($data));die;
         }
   }

   // OPTIONS:
   curl_setopt($curl, CURLOPT_URL, $url);
   //curl_setopt($curl, CURLOPT_HTTPHEADER, array(
   //   'APIKEY: 111111111111111111111',
   //   'Content-Type: application/json',
   //));
   curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
   curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);

   // EXECUTE:
   $result = curl_exec($curl);
   if(!$result){
   die("Connection Failure");}
   curl_close($curl);
   return $result;
}

echo $get_data = callAPI('GET', 'http://127.0.0.1/blogServer/public/index.php/api/api/v1/users', false); die;
$response = json_decode($get_data, true);
$errors = $response['response']['errors'];
$data = $response['response']['data'][0];

echo $get_data; die;
?>
