function radio()
{
	console.log('123151');
	var radio = document.getElementsByName("belt");
	if(radio[0].checked)
	{
		var val = radio[0].value;
		
	}
	if(radio[1].checked)
	{
		var val = radio[1].value;
		
	}
	if(radio[2].checked)
	{
		var val = radio[2].value;
		
	}
	alert(val);
	var formData = new FormData();
	formData.append('TEST', val + '5522365' );
	$.ajax({
			url: 'api/test.php',
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