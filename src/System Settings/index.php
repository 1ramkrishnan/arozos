<?php
include '../auth.php';
include_once("../SystemAOB/functions/personalization/configIO.php");
$theme = (getConfig("function_bar",false));
$themeColor = "#4286f4";
if (isset($theme["actBtnColor"][3])){
    $themeColor = $theme["actBtnColor"][3];
}


?>
<html>
<head>
<script type='text/javascript' charset='utf-8'>
    // Hides mobile browser's address bar when page is done loading.
      window.addEventListener('load', function(e) {
        setTimeout(function() { window.scrollTo(0, 1); }, 1);
      }, false);
</script>
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="viewport" content="width=device-width, initial-scale=0.7, shrink-to-fit=no">
    <meta charset="UTF-8">
	<script src="../script/jquery.min.js"></script>
    <link rel="stylesheet" href="../script/tocas/tocas.css">
	<script type='text/javascript' src="../script/tocas/tocas.js"></script>
	<title>System Setting</title>
	<style>
	.clickable{
		cursor:pointer;
		border: solid 1px transparent;
		padding-top:30px !important;
		top:0px;
		transition: top ease 0.2s;
	}
	.clickable:hover{
	    position: relative; 
        top: -5px;
	    border: solid 1px #4286f4;
		background-color:#edf5ff;
		border-radius: 3px;
	}
	
	body{
		background-color:white;
	}
	.sub{
	    font-size:60% !important;
	}
	.themeColor{
	    color: <?php echo $themeColor;?>;
	}
	</style>
</head>
<body>
<div id="topbar" class="ts pointing secondary menu">
    <a class="item" href="../"><i class="angle left icon"></i></a>
    <a class="active item">System Setting</a>
</div>
<div class="ts container" align="center">
<h3 class="ts center aligned header">
    ArOZ Online System Settings
</h3>
<div class="ts icon tiny input">
		<input type="text" placeholder="Search Settings" style="width:300px;">
		<i class="search icon"></i>
</div>
</div>
<br>
<div style="margin-right: 100px;margin-left: 100px;">
<div class="ts grid">
	<div class="doubling six column row">
        <a class="column clickable" href="navi.php?page=host">
		<h4 class="ts center aligned icon header">
			<i class="disk outline icon themeColor"></i>Host
			<div class="sub header">Host Info, WebApps, Thermal</div>
		</h4>
		<br>
		</a>
        <a class="column clickable" href="navi.php?page=device">
		<h4 class="ts center aligned icon header">
			<i class="laptop icon themeColor"></i>Device
			<div class="sub header">Storage, USB Mounting, IO</div>
		</h4>
		<br>
		</a>
		
        <a class="column clickable" href="navi.php?page=network">
		<h4 class="ts center aligned icon header">
			<i class="wifi icon themeColor"></i>Network
			<div class="sub header">WiFi Adaptor, Access Point, Ethernet</div>
		</h4>
		<br>
		</a>
		
        <a class="column clickable" href="navi.php?page=theme">
		<h4 class="ts center aligned icon header">
			<i class="paint brush icon themeColor"></i>Personalization
			<div class="sub header">Color Scheme, Desktop Theme, Lock Screen</div>
		</h4>
		<br>
		</a>
		
		<a class="column clickable" href="navi.php?page=users">
		<h4 class="ts center aligned icon header">
			<i class="user outline icon themeColor"></i>Users
			<div class="sub header">Your account, device UUID, Identification</div>
		</h4>
		<br>
		</a>
		
		<a class="column clickable" href="navi.php?page=time">
		<h4 class="ts center aligned icon header">
			<i class="clock icon themeColor"></i>Time
			<div class="sub header">Clock, Date Settings</div>
		</h4>
		<br>
		</a>
		
		<a class="column clickable" href="navi.php?page=file">
		<h4 class="ts center aligned icon header">
			<i class="file outline icon themeColor"></i>File & Storage
			<div class="sub header">File List, Clean, Search</div>
		</h4>
		<br>
		</a>
		
		<a class="column clickable" href="navi.php?page=sync">
		<h4 class="ts center aligned icon header">
			<i class="cloud upload icon themeColor"></i>ArOZ Sync
			<div class="sub header">Cluster File Hosting, Disk Recovery</div>
		</h4>
		<br>
		</a>
		
		<a class="column clickable" href="navi.php?page=cluster">
		<h4 class="ts center aligned icon header">
			<i class="server icon themeColor"></i>ArOZ Clusters
			<div class="sub header">MapReduce, Cluster Settings</div>
		</h4>
		<br>
		</a>
		
		<a class="column clickable" href="navi.php?page=backup">
		<h4 class="ts center aligned icon header">
			<i class="refresh icon themeColor"></i>Backup and Restore
			<div class="sub header">Create backup, restore</div>
		</h4>
		<br>
		</a>
		
		<a class="column clickable" href="navi.php?page=about">
		<h4 class="ts center aligned icon header">
			<i class="notice icon themeColor"></i>About ArOZ
			<div class="sub header">More information, contact developer</div>
		</h4>
		<br>
		</a>
    </div>
</div>
</div>
<script>
var VDI = !(!parent.isFunctionBar);

if (VDI){
	$("#topbar").hide();
	$("body").css("padding-top","20px");
	$("body").css("padding-bottom","50px");
	
	//If it is currently in VDI, force the current window size and resize properties
	var windowID = $(window.frameElement).parent().attr("id");
	//parent.setWindowPreferdSize(windowID + "",1300,650);
	parent.setWindowIcon(windowID + "","setting");
	parent.setGlassEffectMode(windowID + "");
}



</script>
</body>
</html>