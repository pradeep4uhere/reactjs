<?php
class apiService{
  public $url;
  public $api_url;
  public $postFields;

  public function __construct(){
    $this->postFields=array();
    $this->api_url='';
    $this->postFields='';
  }


  /*
   *@params should be string
   */
  public function setApiUrl($url){
    return $this->api_url=$url;
  }


  /*
   *@params should be in array formate
   */
  public function setPostFields($postData){
    return $this->postFields=$postData;
  }




  public function curlExec(){
    $request=array();
    $api_url=$this->api_url;
    $request=$this->postFields;
    $curl_handle = curl_init();
        curl_setopt($curl_handle, CURLOPT_URL, $api_url);
        curl_setopt($curl_handle, CURLOPT_ENCODING, "gzip");
        curl_setopt($curl_handle, CURLOPT_POST, true);
        if (get_magic_quotes_gpc() && isset($request)) {
            array_walk_recursive($request, 'self::removeSlashes');
        }
        //echo $api_url.'&'.http_build_query($request); die;
        curl_setopt($curl_handle, CURLOPT_POSTFIELDS, http_build_query($request));
        curl_setopt($curl_handle, CURLOPT_RETURNTRANSFER, 1);
        $response = curl_exec($curl_handle);
        print_r($response); die;
        return $response;
  }



    protected static function removeSlashes(&$value) {
        $value = stripslashes($value);
    }

    protected static function changeQuotes(&$value) {
        $value = stripslashes($value);
        $value = str_replace('"', '&quot;', $value);
    }

} 
?>

