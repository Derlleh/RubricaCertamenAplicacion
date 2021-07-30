<script>

	function MostrarSeleccionado()
	{
		if(document.getElementById('radio1').checked)
		{
			alert('Puntos de Item Actual: 1 pts');
		}
		if(document.getElementById('radio2').checked)
		{
			alert('Puntos de Item Actual: 2 pts');
		}
		if(document.getElementById('radio3').checked)
		{
			alert('Puntos de Item Actual: 3 pts');
		}
		if(document.getElementById('radio0').checked)
		{
			alert('El item actual no tiene puntaje: 0 pts');
		}
	
	
	}
	
	function MostrarSeleccionado2()
	{
		if(document.getElementById('radios1').checked)
		{
			alert('Puntos de Item Actual: 1 pts');
		}
		if(document.getElementById('radios2').checked)
		{
			alert('Puntos de Item Actual: 2 pts');
		}
		if(document.getElementById('radios3').checked)
		{
			alert('Puntos de Item Actual: 3 pts');
		}
		if(document.getElementById('radio20').checked)
		{
			alert('El item actual no tiene puntaje: 0 pts');
		}
	
	
	}
	
	function MostrarSeleccionado3()
	{
		if(document.getElementById('radioss1').checked)
		{
			alert('Puntos de Item Actual: 1');
		}
		if(document.getElementById('radioss2').checked)
		{
			alert('Puntos de Item Actual: 2');
		}
		if(document.getElementById('radioss3').checked)
		{
			alert('Puntos de Item Actual: 3');
		}
			if(document.getElementById('radio30').checked)
		{
			alert('El item actual no tiene puntaje: 0 pts');
		}
	
	
	}
	
	function MostrarSeleccionado4()
	{
		if(document.getElementById('r1').checked)
		{
			alert('Puntos de Item Actual: 1');
		}
		if(document.getElementById('r2').checked)
		{
			alert('Puntos de Item Actual: 2');
		}
		if(document.getElementById('r3').checked)
		{
			alert('Puntos de Item Actual: 3');
		}
			if(document.getElementById('radio40').checked)
		{
			alert('El item actual no tiene puntaje: 0 pts');
		}
	}
	
	function MostrarSeleccionado5()
	{
	
	
	
		if(document.getElementById('ra1').checked)
		{
			alert('Puntos de Item Actual: 1');
		}
		if(document.getElementById('ra2').checked)
		{
			alert('Puntos de Item Actual: 2');
		}
		if(document.getElementById('ra3').checked)
		{
			alert('Puntos de Item Actual: 3');
		}
			if(document.getElementById('radio50').checked)
		{
			alert('El item actual no tiene puntaje: 0 pts');
		}
	}
	
	function MostrarSeleccionado6()
	{
	
	
		if(document.getElementById('rad1').checked)
		{
			alert('Puntos de Item Actual: 1');
		}
		if(document.getElementById('rad2').checked)
		{
			alert('Puntos de Item Actual: 2');
		}
		if(document.getElementById('rad3').checked)
		{
			alert('Puntos de Item Actual: 3');
		}
			if(document.getElementById('radio60').checked)
		{
			alert('El item actual no tiene puntaje: 0 pts');
		}
	}
	
	function MostrarSeleccionado7()
	{
	
	
		if(document.getElementById('siete1').checked)
		{
			alert('Puntos de Item Actual: 1');
		}
		if(document.getElementById('siete2').checked)
		{
			alert('Puntos de Item Actual: 2');
		}
		if(document.getElementById('siete3').checked)
		{
			alert('Puntos de Item Actual: 3');
		}
			if(document.getElementById('radio70').checked)
		{
			alert('El item actual no tiene puntaje: 0 pts');
		}
	}
	
	function MostrarSeleccionado8()
	{
	
	
		if(document.getElementById('oc1').checked)
		{
			alert('Puntos de Item Actual: 1');
		}
		if(document.getElementById('oc2').checked)
		{
			alert('Puntos de Item Actual: 2');
		}
		if(document.getElementById('oc3').checked)
		{
			alert('Puntos de Item Actual: 3');
		}
			if(document.getElementById('radio80').checked)
		{
			alert('El item actual no tiene puntaje: 0 pts');
		}
	}
	
	function MostrarSeleccionado9()
	{
	
	
		if(document.getElementById('nu1').checked)
		{
			alert('Puntos de Item Actual: 1');
		}
		if(document.getElementById('nu2').checked)
		{
			alert('Puntos de Item Actual: 2');
		}
		if(document.getElementById('nu3').checked)
		{
			alert('Puntos de Item Actual: 3');
		}
			if(document.getElementById('radio90').checked)
		{
			alert('El item actual no tiene puntaje: 0 pts');
		}
	}
	
	function MostrarSeleccionado10()
	{
	
	
		if(document.getElementById('d1').checked)
		{
			alert('Puntos de Item Actual: 1');
		}
		if(document.getElementById('d2').checked)
		{
			alert('Puntos de Item Actual: 2');
		}
		if(document.getElementById('d3').checked)
		{
			alert('Puntos de Item Actual: 3');
		}
			if(document.getElementById('radio100').checked)
		{
			alert('El item actual no tiene puntaje: 0 pts');
		}
	}
	
	function calcpuntos() {
		  var price = 0;
		  $("input[type=radio][data-price]:checked").each(function(i, el) {
			price += +$(el).data("price");
		  })
		  $("#price").text(price);
		}

		$("input[type=radio]").on("change", calcpuntos);
			calcpuntos();
		
		
		function calcNota()
		{
			n1 = document.getElementById("numero1");
		
			if(this.a = parseInt(n1.value) == 30) 
			{
			  alert('Nota: 7.0');
			  
			}
			if(this.a = parseInt(n1.value) == 29)
			{
				 alert('Nota: 6.8');
			}
			if(this.a = parseInt(n1.value) == 28)
			{
				 alert('Nota: 6.5');
			}
			if(this.a = parseInt(n1.value) == 27)
			{
				 alert('Nota: 6.3');
			}
			if(this.a = parseInt(n1.value) == 26)
			{
				 alert('Nota: 6.0');
			}
			if(this.a = parseInt(n1.value) == 25)
			{
				 alert('Nota: 5.8');
			}
			if(this.a = parseInt(n1.value) == 24)
			{
				 alert('Nota: 5.5');
			}
			if(this.a = parseInt(n1.value) == 23)
			{
				 alert('Nota: 5.3');
			}
			if(this.a = parseInt(n1.value) == 22)
			{
				 alert('Nota: 5.0');
			}if(this.a = parseInt(n1.value) == 21)
			{
				 alert('Nota: 4.8');
			}if(this.a = parseInt(n1.value) == 20)
			{
				 alert('Nota: 4.5');
			}
			if(this.a = parseInt(n1.value) == 19)
			{
				 alert('Nota: 4.3');
			}
			if(this.a = parseInt(n1.value) == 18)
			{
				 alert('Nota: 4.0');
			}
			if(this.a = parseInt(n1.value) == 17)
			{
				 alert('Nota: 3.8');
			}
			if(this.a = parseInt(n1.value) == 16)
			{
				 alert('Nota: 3.7');
			}
			if(this.a = parseInt(n1.value) == 15)
			{
				 alert('Nota: 3.5');
			}
			if(this.a = parseInt(n1.value) == 14)
			{
				 alert('Nota: 3.3');
			}if(this.a = parseInt(n1.value) == 13)
			{
				 alert('Nota: 3.2');
			}
			if(this.a = parseInt(n1.value) == 12)
			{
				 alert('Nota: 3.0');
			}
			if(this.a = parseInt(n1.value) == 11)
			{
				 alert('Nota: 2.8');
			}
			if(this.a = parseInt(n1.value) == 10)
			{
				 alert('Nota: 2.7');
			}
			if(this.a = parseInt(n1.value) == 9)
			{
				 alert('Nota: 2.5');
			}
			if(this.a = parseInt(n1.value) == 8)
			{
				 alert('Nota: 2.3');
			}
			if(this.a = parseInt(n1.value) == 7)
			{
				 alert('Nota: 2.2');
			}
			if(this.a = parseInt(n1.value) == 6)
			{
				 alert('Nota: 2.0');
			}
			if(this.a = parseInt(n1.value) == 5)
			{
				 alert('Nota: 1.8');
			}
			if(this.a = parseInt(n1.value) == 4)
			{
				 alert('Nota: 1.7');
			}
			if(this.a = parseInt(n1.value) == 3)
			{
				 alert('Nota: 1.5');
			}
			if(this.a = parseInt(n1.value) == 2)
			{
				 alert('Nota: 1.3');
			}
			if(this.a = parseInt(n1.value) == 1)
			{
				 alert('Nota: 1.2');
			}
			if(this.a = parseInt(n1.value) == 0)
			{
				 alert('Nota: 1.0');
			}

		}

		
	
		
				</script>