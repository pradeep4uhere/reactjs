<?php  error_reporting(E_ALL);
ini_set("display_errors", 1);
require_once('api.class.php');
/**********************Define All the Url Here**********************/
define('SERVER','http://127.0.0.1/blogServer/public/index.php/api/api/v1');
define('REG_URL',SERVER.'/saveusers');
define('LOGIN_URL',SERVER.'/login');
define('USERINFO_URL',SERVER.'/getuserinfo');
define('NEWPOST_URL',SERVER.'/createpost');
define('ALLPOST_URL',SERVER.'/getuserpost');

/**********************Define All the Url Here**********************/

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
$data=file_get_contents("php://input");
$action=trim($_REQUEST['action']);
switch($action){
    case 'getuser': 
         echo $get_data = callAPI('GET', 'http://127.0.0.1/blogServer/public/index.php/api/api/v1/users', false); 
         break;
    case 'login':
        if(!empty($data)){
          $postData=$_POST;
          $apiObj = new apiService();
          $api_url=LOGIN_URL;
          $postFields=$postData;
          $apiObj->setApiUrl($api_url);
          $apiObj->setPostFields($postData,true);
          $result=$apiObj->curlExec();
          $resultArr=json_decode($result,true);
          echo json_encode($resultArr); die;
        }else{
                $res=array('message'=>'Parameter mising.','error'=>'error');
          return $res;
        }
      break;

      case 'getuserinfo':
            if(!empty($_REQUEST)){
                $postData['id']=$_REQUEST['id'];
                $apiObj = new apiService();
                $api_url=USERINFO_URL;
                $apiObj->setApiUrl($api_url);
                $apiObj->setPostFields($postData);
                $result=$apiObj->curlExec();
                $resultArr=json_decode($result,true);
                echo json_encode($resultArr); die;
              }else{
                      $res=array('message'=>'Parameter mising.','error'=>'error');
                return $res;
              }

      break;


      case 'getuserpost':
            if(!empty($_REQUEST)){
                $postData=$_REQUEST;
                $apiObj = new apiService();
                $api_url=ALLPOST_URL;
                $apiObj->setApiUrl($api_url);
                $apiObj->setPostFields($postData);
                $result=$apiObj->curlExec();
                $resultArr=json_decode($result,true);
                echo json_encode($resultArr); die;
              }else{
                      $res=array('message'=>'Parameter mising.','error'=>'error');
                return $res;
              }

      break;

      case 'register':
        if(!empty($data)){
          $postData=$_POST;
          $apiObj = new apiService();
          $api_url=REG_URL;
          $apiObj->setApiUrl($api_url);
          $apiObj->setPostFields($postData);
          $result=$apiObj->curlExec();
          $resultArr=json_decode($result,true);
          echo json_encode($resultArr); die;
        }else{
                $res=array('message'=>'Parameter mising.','error'=>'error');
          return $res;
        }
      break;


      case 'newpost': 
            if(!empty($data)){
                $postData=$_POST;
                $apiObj = new apiService();
                $api_url=NEWPOST_URL;
                $apiObj->setApiUrl($api_url);
                $apiObj->setPostFields($postData);
                $result=$apiObj->curlExec();
                $resultArr=json_decode($result,true);
                echo json_encode($resultArr); die;
              }else{
                      $res=array('message'=>'Parameter mising.','error'=>'error');
                return $res;
              }

      break;
  
    default:
    $array = array('status'=>'error','message'=>'Invalid Request!!');
    echo json_encode($array);
    break;
 }



function callAPI($method, $url, $data){
   $curl = curl_init();
   switch ($method){
      case "POST":
         echo "dasdsad"; die;
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
?>
