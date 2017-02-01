/*!
 * Framework : jQuery JavaScript Library
 * http://jquery.com/
 * jQuery 1.3.2 and above
 *
 * HTML5 Web Storage
 * M S, Aravind (Cognizant)
 * 332818
 *
 */
var html5webstorage = {
	
	local: [],
	
	init: function(){
		this.checkWebStorageSupport(); // Checking the web storage support.
	},
	
	checkWebStorageSupport: function(){
		if (Modernizr.localstorage) {// Using the Modernizr.js to check the local storage support.
			$localStorage = window.localStorage;
			this.addEventListenerForLocal();
			this.checkLocalDataExist();
		}
		else {
			alert("Your browser does not support Local Storage.");
			return;
		}
		
		if (Modernizr.sessionstorage) {// Using the Modernizr.js to check the session storage support.
			$sessionStorage = window.sessionStorage;
			this.addEventListenerForSession();
			this.checkSessionDataExist();
		}
		else {
			alert("Your browser does not support Session Storage.");
			return;
		}
		
	},
	
	checkSessionDataExist: function(){
		if($sessionStorage.sessiondata !== null || typeof $sessionStorage.sessiondata !== "undefined")
			$('#web_ss').val($sessionStorage.sessiondata);
	},
	
	checkLocalDataExist: function(){
		if($localStorage.localdata === null || typeof $localStorage.localdata === "undefined")
			return false;
			
		var localStoredData = JSON.parse($localStorage.localdata);
		
		html5webstorage.local = localStoredData;

		$('.clear_list').show();
		
		var create_list= '';
		
		for(var i=0; i<localStoredData.length; i++)
		{
			if(localStoredData[i] !== null && typeof localStoredData[i] !== "undeifned")
			{
				create_list += '<li>';
					create_list += '<div>'+localStoredData[i].emp_id+'</div>';
					create_list += '<div>'+localStoredData[i].name+'</div>';
					create_list += '<div>'+localStoredData[i].dept+'</div>';
					create_list += '<div class="delete"><a href="#" id="'+i+'">Delete</a></div>';
				create_list += '</li>';
			}
		}
		
		$('.storage_list ul').html(create_list);
	},
	
	submitSessionStorage: function(event){
		var sstext = $('#web_ss').val();
		
		if($.trim(sstext) == "")
		{
			alert("Field should not be empty.");
			return false;
		}
		
		$sessionStorage.setItem('sessiondata', sstext);
		
		alert("Data Saved.");
		
		return false;
	},
	
	submitLocalStorage: function(event){
		var name, emp_id, dept, cnt;

		name = $('#inp_name').val();
		emp_id = $('#inp_emp_id').val();
		dept = $('#inp_dept').val();
		
		if(!($.trim(name) != "" && $.trim(emp_id) != "" && $.trim(dept) != ""))
		{
			alert("Fields should not be empty.");
			return false;
		}

		cnt = ($localStorage.localdata === null || typeof $localStorage.localdata === "undefined") ? 0 : JSON.parse($localStorage.localdata).length++;
		
		if(cnt >= 0)
			$('.clear_list').fadeIn();
		
		html5webstorage.local[cnt] = {"emp_id": emp_id, "name": name, "dept": dept};

		$localStorage.setItem('localdata', JSON.stringify(html5webstorage.local));

		var append_list='';
		append_list += '<li>';
			append_list += '<div>'+emp_id+'</div>';
			append_list += '<div>'+name+'</div>';
			append_list += '<div>'+dept+'</div>';
			append_list += '<div class="delete"><a href="#" id="'+cnt+'">Delete</a></div>';
		append_list += '</li>';
		
		$('.storage_list ul').append(append_list);
		
		$('#inp_name').val('');
		$('#inp_emp_id').val('');
		$('#inp_dept').val('');
		
		return false;
	},
	
	deleteLocalStorage: function(event){
		var newld = [];
		var ldjson = JSON.parse($localStorage.localdata); 
		var id = $(this).attr('id');
		
		if(ldjson.length == 1)
		{
			$('.clear_list').hide();
			$localStorage.removeItem('localdata');
		}
		else
		{
			var j = 0;
			for(var i=0; i<ldjson.length; i++)
			{
				if(i != id)
				{
					newld[j] = ldjson[i];
					j++;
				}
			}
			
			$localStorage.setItem('localdata', JSON.stringify(newld));
		}
		
		$(this).closest('li').remove(); return false;
	},
	
	addEventListenerForLocal: function(){
		$('#localstorage').on('submit', this.submitLocalStorage);

		$('.clear_list').on('click', function(event){ $localStorage.removeItem('localdata'); $('.storage_list ul').html(''); $(this).hide(); })

		$('body').on('click', '.delete a', this.deleteLocalStorage);
		
		$('#savessdata').on('submit', this.submitSessionStorage);
	},
	
	addEventListenerForSession: function(){
		$('#sessionstorage').on('submit', this.submitSessionStorage);
		
		$('#clearsession').on('click', function(event){ 
			if($sessionStorage.sessiondata === null || typeof $sessionStorage.sessiondata === "undefined")
				return false;
				
			$sessionStorage.removeItem('sessiondata');
			
			$('#web_ss').val('');
			
			alert("Data Cleared");
		});
	}
};

$(document).ready(function(){
	html5webstorage.init();
});