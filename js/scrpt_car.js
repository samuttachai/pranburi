//<--บันทึกข้อมูล-->
function savedata()
{
//SafetyBelt
	var s_belt = document.getElementsByName("s_belt");
	if(s_belt[0].checked)
		{
		var s_belt_1 = s_belt[0].value;
		}
	if(s_belt[1].checked)
		{
		var s_belt_1 = s_belt[1].value;
		}
	if(s_belt[2].checked)
		{
		var s_belt_1 = s_belt[2].value;
		}
//FrontLight
	var light_f = document.getElementsByName("light_f");
	if(light_f[0].checked)
		{
		var light_f_1 = light_f[0].value;
		}
	if(light_f[1].checked)
		{
		var light_f_1 = light_f[1].value;
		}
//BrakeLight
	var light_b = document.getElementsByName("light_b");
	if(light_b[0].checked)
		{
		var light_b_1 = light_b[0].value;
		}
	if(light_b[1].checked)
		{
		var light_b_1 = light_b[1].value;
		}
//EmerLight
	var light_e = document.getElementsByName("light_e");
	if(light_e[0].checked)
		{
		var light_e_1 = light_e[0].value;
		}
	if(light_b[1].checked)
		{
		var light_e_1 = light_e[1].value;
		}
//FrontMirror
	var f_mirror = document.getElementsByName("f_mirror");
	if(f_mirror[0].checked)
		{
		var f_mirror_1 = f_mirror[0].value;
		}
	if(f_mirror[1].checked)
		{
		var f_mirror_1 = f_mirror[1].value;
		}
	if(f_mirror[2].checked)
		{
		var f_mirror_1 = f_mirror[2].value;
		}
//SideMirror
	var s_mirror = document.getElementsByName("s_mirror");
	if(s_mirror[0].checked)
		{
		var s_mirror_1 = s_mirror[0].value;
		}
	if(s_mirror[1].checked)
		{
		var s_mirror_1 = s_mirror[1].value;
		}
	if(s_mirror[2].checked)
		{
		var s_mirror_1 = s_mirror[2].value;
		}
//Wiper
	var wiper = document.getElementsByName("wiper");
	if(wiper[0].checked)
		{
		var wiper_1 = wiper[0].value;
		}
	if(wiper[1].checked)
		{
		var wiper_1 = wiper[1].value;
		}
	if(wiper[2].checked)
		{
		var wiper_1 = wiper[2].value;
		}
//CleaningWater
	var water = document.getElementsByName("water");
	if(water[0].checked)
		{
		var water_1 = water[0].value;
		}
	if(water[1].checked)
		{
		var water_1 = water[1].value;
		}
//Fuel
	var fuel = document.getElementsByName("fuel");
	if(fuel[0].checked)
		{
		var fuel_1 = fuel[0].value;
		}
	if(fuel[1].checked)
		{
		var fuel_1 = fuel[1].value;
		}
	if(fuel[2].checked)
		{
		var fuel_1 = fuel[2].value;
		}
	if(fuel[3].checked)
		{
		var fuel_1 = fuel[3].value;
		}
	if(fuel[4].checked)
		{
		var fuel_1 = fuel[4].value;
		}
//Lubricant
	var lube = document.getElementsByName("lube");
	if(lube[0].checked)
		{
		var lube_1 = lube[0].value;
		}
	if(lube[1].checked)
		{
		var lube_1 = lube[1].value;
		}
	if(lube[2].checked)
		{
		var lube_1 = lube[2].value;
		}
//Horn
	var horn = document.getElementsByName("horn");
	if(horn[0].checked)
		{
		var horn_1 = horn[0].value;
		}
	if(horn[1].checked)
		{
		var horn_1 = horn[1].value;
		}
	if(horn[2].checked)
		{
		var horn_1 = horn[2].value;
		}
//Brake
	var brake = document.getElementsByName("brake");
	if(brake[0].checked)
		{
		var brake_1 = brake[0].value;
		}
	if(brake[1].checked)
		{
		var brake_1 = brake[1].value;
		}
	if(brake[2].checked)
		{
		var brake_1 = brake[2].value;
		}
//AC
	var ac = document.getElementsByName("ac");
	if(ac[0].checked)
		{
		var ac_1 = ac[0].value;
		}
	if(ac[1].checked)
		{
		var ac_1 = ac[1].value;
		}
	if(ac[2].checked)
		{
		var ac_1 = ac[2].value;
		}
//Wheel
	var wheel = document.getElementsByName("wheel");
	if(wheel[0].checked)
		{
		var wheel_1 = wheel[0].value;
		}
	if(wheel[1].checked)
		{
		var wheel_1 = wheel[1].value;
		}
	if(wheel[2].checked)
		{
		var wheel_1 = wheel[2].value;
		}
//Fire
	var fire = document.getElementsByName("fire");
	if(fire[0].checked)
		{
		var fire_1 = fire[0].value;
		}
	if(fire[1].checked)
		{
		var fire_1 = fire[1].value;
		}
	if(fire[2].checked)
		{
		var fire_1 = fire[2].value;
		}
//Battery
	var battery = document.getElementsByName("battery");
	if(battery[0].checked)
		{
		var battery_1 = battery[0].value;
		}
	if(battery[1].checked)
		{
		var battery_1 = battery[1].value;
		}
	if(battery[2].checked)
		{
		var battery_1 = battery[2].value;
		}
//VisualClean
	var i_clean = document.getElementsByName("i_clean");
	if(i_clean[0].checked)
		{
		var i_clean_1 = i_clean[0].value;
		}
	if(i_clean[1].checked)
		{
		var i_clean_1 = i_clean[1].value;
		}
//InsideDamage
	var i_dmg = document.getElementsByName("i_dmg");
	if(i_dmg[0].checked)
		{
		var i_dmg_1 = i_dmg[0].value;
		}
	if(i_dmg[1].checked)
		{
		var i_dmg_1 = i_dmg[1].value;
		}
	if(i_dmg[2].checked)
		{
		var i_dmg_1 = i_dmg[2].value;
		}
//OutsideDamage
	var o_dmg = document.getElementsByName("o_dmg");
	if(o_dmg[0].checked)
		{
		var o_dmg_1 = o_dmg[0].value;
		}
	if(o_dmg[1].checked)
		{
		var o_dmg_1 = o_dmg[1].value;
		}
	if(o_dmg[2].checked)
		{
		var o_dmg_1 = o_dmg[2].value;
		}
//CarRegis
	var car_registration = document.getElementById('car_registration').value;
//User
	var checker = document.getElementById('checker').value;
	
	//alert(water_1);
	
	//คำสั่งส่งข้อมูลไปเก็บ
	//เตรียมข้อมูล
	var formData = new FormData();
	formData.append('s_belt_1', s_belt_1);
	formData.append('light_f_1', light_f_1);
	formData.append('light_b_1', light_b_1);
	formData.append('light_e_1', light_e_1);
	formData.append('f_mirror_1', f_mirror_1);
	formData.append('s_mirror_1', s_mirror_1);
	formData.append('wiper_1', wiper_1);
	formData.append('water_1', water_1);
	formData.append('fuel_1', fuel_1);
	formData.append('lube_1', lube_1);
	formData.append('horn_1', horn_1);
	formData.append('brake_1', brake_1);
	formData.append('ac_1', ac_1);
	formData.append('wheel_1', wheel_1);
	formData.append('fire_1', fire_1);
	formData.append('battery_1', battery_1);
	formData.append('i_clean_1', i_clean_1);
	formData.append('i_dmg_1', i_dmg_1);
	formData.append('o_dmg_1', o_dmg_1);
	formData.append('car_registration', car_registration);
	formData.append('checker', checker);
	
	//ส่งข้อมูล
	$.ajax({
			url:'api/insert_data.php',
			method: 'POST',
			data: formData,
			async: true,
			cache: false,
			processData: false,
			contentType: false,
			success: function(response) {
									alert(response);
								}
		});	
}
