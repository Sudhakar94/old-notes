   $(document).ready(function(e){	
   			/* form manipulation starts */
					$('#form1').on('submit', function(e){
						e.preventDefault();
						submitData();
						return false;
					});	
						function submitData(){
						var tableStr="<tr>";
						$('#form1 input[type=text],input[type=email],input[type=radio]').each(function(){
							if($(this).attr('type')=="radio"){
								if($(this).prop('checked')==true){
									tableStr = tableStr+"<td>"+$(this).val()+"</td>";
								}
							}
							else{
							tableStr = tableStr+"<td>"+$(this).val()+"</td>";
							}
						});
						
						// gettting date						
						var fullDate = new Date();
						var twoDigitMonth = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) : '0' + (fullDate.getMonth()+1);
						var currentDate = fullDate.getDate() + "/" + twoDigitMonth + "/" + fullDate.getFullYear();
						
						tableStr = tableStr+"<td>"+currentDate+"</td><td><a class='edit' href='#'>edit</a> | <a class='delete' href='#'>delete</a></td></tr>";
						$('#formTable').find('tbody').append(tableStr);
						return false;
						}			
									 
					
				
					
					// editing / saving table record
					$(document).on('click','a.edit', function(e){						
						e.preventDefault();
						var eletd=$(this).closest('td').index();						
						if($(this).text()=="edit"){
							var ele= $(this).closest('tr').find('td');
							ele.each(function(index){
								if($(this).closest('td').index()!=eletd){
								var eleVal=$(this).text();
								var str="<input type='text' value='"+eleVal+"' />";
								$(this).html(str);
								}
							});
							$(this).text('save');							
						}
						else if($(this).text()=="save"){
						var ele= $(this).closest('tr').find('td');
							ele.each(function(index){
								if($(this).closest('td').index()!=eletd){
								var eleVal=$(this).find('input').val();								
								$(this).html(eleVal);
								}
							});
							$(this).text('edit');			
						}
					});
					
					// deleting table record
					$(document).on('click','a.delete', function(e){
						$(this).closest('tr').remove();
  				    });
					
					/* form manipulation ends */
					
					/* shuttling functionality starts*/
					$('#addRecords').click(function(){						
						$('.box_container:eq(0)').find('input[type=checkbox]:checked').each(function(){
							$('.box_container:eq(2)').append($(this).closest('li'));	
						});
					});
					
					$('#removeRecords').click(function(){						
						$('.box_container:eq(2)').find('input[type=checkbox]:checked').each(function(){
							$('.box_container:eq(0)').append($(this).closest('li'));	
						});
					});
					/* shuttling functionality ends*/
					
					/* jQuery Animation starts */
					
					$('.clickme').on('click',function(){
						if($(this).text()=="Click me"){
						$(this).text('Drop me');
						$(document).on('mousemove',function(e){ 
							var posLeft =e.pageX;
							var posTop =e.pageY;
							$('.clickme').css({'top': posTop,'left':posLeft});
						});
						}
						else{
						$(document).off('mousemove');
						$(this).text('Click me');
						}
					});
					
					/* jQuery Animation ends */
					
					
					
					$('#basic_jquery p').click(function(){
						$(this).hide();
					});	
					
					
				$('#checkbox_container li input').on('click', function(e){	
				var selectFlag=0;
				var checkboxlen = $('#checkbox_container li input').length;
				$('#checkbox_container li input').each(function(index){
					if($(this).prop('checked')){
						selectFlag++;
					}
				});
				
				if(selectFlag==checkboxlen){
					$('#selectall').prop('checked',true);	
				}
				else{
					$('#selectall').prop('checked',false);	
				}
				
				});
				$('#selectall').on('click', function(e){	
					if($(this).prop('checked')){
						$('#checkbox_container').find('input[type=checkbox]').prop('checked',true);	
					}
					else{
						$('#checkbox_container').find('input[type=checkbox]').prop('checked',false);	
					}
				
				});
				
				$('#color_change input[type=text]').on('focus', function(e){	
					$('#color_change input[type=text]').css('background-color','white');
					$(this).css('background-color','yellow');					
				});
				$('#color_change input[type=text]').on('blur', function(e){	
					$('#color_change input[type=text]').css('background-color','white');								
				});
				
				$('#checkbox_container1 li input').on('click', function(e){	
					if($(this).attr('name')==$(this).next().text()){
						alert('Same Value');	
					}
					else{
						alert('Different Value');	
					}
				});
				
				    $("#btn1").click(function(){
						$("#html_manip p").append(" <b>Appended text</b>.");
					});
					
					$("#btn2").click(function(){
						$("<span>Hello world!</span>").insertAfter("#html_manip p");
					});
						
					 $("#btn3").click(function(){
						$("#html_manip p").before("<p>Hello world!</p>");
					});			
					
					$("#btn4").click(function(){
						$("#html_manip p").remove();
					});
					$("#btn5").click(function(){
						$("#html_manip span").empty();
					});
					 $("#btn6").click(function(){
							$("#html_manip p").addClass("intro");
					});
					 $("#btn7").click(function(){
							$("#html_manip p").removeClass("intro");
					});
			   });
 