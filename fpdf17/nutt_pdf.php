<?php
	require('fpdf.php');
	class PDF extends FPDF
	{
		function BasicTable($header,$data)
		{
			//Header
			$w=array(30,30,55,100);
			//Header
			for($i=0;$i<count($header);$i++)
			$this->Cell($w[$i],10,iconv('UTF-8','TIS-620',$header[$i]),1,0,'C');
			$this->Ln();
			//Data
			foreach ($data as $eachResult) 
			{
				$this->Cell(30,6,$eachResult["pln"],1);
				$this->Cell(30,6,$eachResult["act"],1);
				$this->Cell(55,6,$eachResult["per"],1);
				$this->Cell(100,6,iconv('UTF-8','TIS-620',$eachResult["dis"]),1,0,'C');
				$this->Ln();
			}
		}
	}
	///////////////////////////////ดึงข้อมูลจาก SQL
	require('../connect-db.php');
	$sql_text = "SELECT pln,act,per,dis FROM tbl_rbr WHERE status = 'REL ' AND staff_id = '502507'";
	$query = mysqli_query($conn,$sql_text);
	$resultData = array();
	while($obj_result = mysqli_fetch_assoc($query))
	{
		array_push($resultData,$obj_result);
	}
	////////////สร้างไฟล์ PDF//////////////
	define('FPDF_FONTPATH','font/'); //กำหนด PATH ของ font
	$header = array('ค่าใช้จ่ายตามแผน','ค่าใช้จ่ายจริง','เปอร์เซนต์การเบิกจ่าย','รายละเอียด');
	$pdf = new PDF('L','mm','A4');
	$pdf->SetTopMargin(0);
	$pdf->SetLeftMargin(15);
	$pdf->AddPage();
	$pdf->AddFont('angsa','','angsa.php');
	$pdf->SetFont('angsa','',20);
	
	$pdf->Cell(0,20,iconv( 'UTF-8','TIS-620','รายงานการตรวจยานพาหนะ'),0,1,"C");
	//$pdf->Ln();
	$pdf->SetFont('angsa','',16);
	$pdf->BasicTable($header,$resultData);
	$pdf->Output();
?>