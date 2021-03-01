<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">

  <head>
    
    <title>Ad Preview</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="Content-Language" content="en" />

    
    <style>
      body {
        font-family:Arial;
        text-align:center;
        margin:0 0 40px 0;
        padding:0;
      }
      
      h1 {
        margin:30px 50px 50px 50px;
      }
      
      h2 {
        margin:40px 30px 30px 30px;
        padding-top:40px;
        padding-bottom:10px;
        border-top:1px solid #eee;
        /*border-bottom:1px solid #eee;*/
      }     
      
      .logo {
        padding-top:40px;
      }
       
    </style>
       
  </head>

  <body>
  
<?
if (!isset($_GET["l"])) {
?>  
      
      <h1>Ad Preview</h1>      

<?
}
?>      
      


<?

error_reporting(0);

$id = $_GET["id"];
try {
  
   $xml_path = "https://www.gpb.digital/ads/" . $id . "/data.xml";

   $path = "https://www.gpb.digital/ads/" . $id . "/";

   if (file_get_contents($xml_path)) {
        $xml = simplexml_load_file($xml_path);
        //print_r($xml);
   }
   else {
        exit('Failed to open test.xml.');
   }

   //$xml = simplexml_load_file($path);


   if ($xml) {

    $group_index = 0;
    foreach ($xml->group as $group) {
    ?>
      <h2><?=$group["name"]?></h2>
    
    <?
    $ad_index = 0;
    if ($group->ad) foreach ($group->ad as $ad) {
    
    ?>
      
      <div class="ad">
        <h3><?=$ad["name"]?></h3>
        

      
      <div id="ad<?=$group_index?>_<?=$ad_index?>">
          <iframe src="<?=$path . $ad["file"] ?>" style="width:<?=$ad["width"]?>px; height:<?=$ad["height"]?>px; border:none; overflow:hidden;"></iframe>
        </div>
   
      </div>   
    
    <?
    $ad_index++;
    }
      $group_index++;
    }
  
  }

} catch (Exception $error) {
 
   die;
   
}

?>

  </body>
</html>  