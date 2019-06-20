<?php
	require('../db/connect_db.php');
	$method = $_SERVER["REQUEST_METHOD"];
	if($method == "POST")
	{
		
		$s_belt_1 = $_POST["s_belt_1"];
		$light_f_1 = $_POST["light_f_1"];
		$light_b_1 = $_POST["light_b_1"];
		$light_e_1 = $_POST["light_e_1"];
		$f_mirror_1 = $_POST["f_mirror_1"];
		$s_mirror_1 = $_POST["s_mirror_1"];
		$wiper_1 = $_POST["wiper_1"];
		$water_1 = $_POST["water_1"];
		$fuel_1 = $_POST["fuel_1"];
		$lube_1 = $_POST["lube_1"];
		$horn_1 = $_POST["horn_1"];
		$brake_1 = $_POST["brake_1"];
		$ac_1 = $_POST["ac_1"];
		$wheel_1 = $_POST["wheel_1"];
		$fire_1 = $_POST["fire_1"];
		$battery_1 = $_POST["battery_1"];
		$i_clean_1 = $_POST["i_clean_1"];
		$i_dmg_1 = $_POST["i_dmg_1"];
		$o_dmg_1 = $_POST["o_dmg_1"];
		$car_registration = $_POST["car_registration"];
		$checker = $_POST["checker"];
		$date = date("d/m/Y");
		
		$sql_insert_data = "INSERT INTO tbl_checklist(SafetyBelt, FrontLight,BrakeLight, EmerLight, FrontMirror, SideMirror, Wiper, CleaningWater, Fuel, Lubricant, Horn, Brake, AC, Wheel, Fire, Battery, VisualClean, InsideDamage, OutsideDamage, CarRegis, User, date) VALUES('$s_belt_1', '$light_f_1', '$light_b_1', '$light_e_1', '$f_mirror_1', '$s_mirror_1', '$wiper_1', '$water_1', '$fuel_1', '$lube_1', '$horn_1', '$brake_1', '$ac_1', '$wheel_1', '$fire_1', '$battery_1', '$i_clean_1', '$i_dmg_1', '$o_dmg_1', '$car_registration', '$checker', '$date')";
		mysqli_query($conn, $sql_insert_data);
		
		echo "บันทึกข้อมูลเรียบร้อยแล้ว";
	}	
	else
	{
		echo "ผิดรูปแบบ";
	}
	
?>
