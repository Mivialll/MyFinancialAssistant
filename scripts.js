$("document").ready(function(){
	
	$("#btnSubmit").click(function(){
		
		if (valid())
		$("#res").html("$:  " + (Math.round(money( $("#txtSalary").val(), $("#txtLoanPayment").val(), $("#txtPayOffTime").val(), $("#txtFixedExpenses").val()) * 100) / 100))
		else
		$("#res").html("<div class='text-danger'>Please Enter Valid Values</div>")

		
		function money(salary, loan, years, expenses) {
		    return salary - loan / years - expenses;
		}

		
		function valid()
		{
			if ($.isNumeric($("#txtSalary").val()) && $.isNumeric($("#txtLoanPayment").val()) &&  $.isNumeric($("#txtPayOffTime").val()) && $.isNumeric($("#txtFixedExpenses").val()))
			return true;
			else
			return false;
		}

})});
