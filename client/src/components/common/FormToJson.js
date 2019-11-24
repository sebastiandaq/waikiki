export default function formToJson(form){

	if('form'!==form.nodeName.toLowerCase() && 1!==form.nodeType){
		// console.log('Form error');
		return false;
	}

	let json_data = {}, new_arr_obj=null, index=null, key=null, input_name=null, new_obj=null;

	for(let i=0,n=form.length; i<n; i++){

		if(form[i].type!=='submit' || form[i].nodeName.toLowerCase()!=='fieldset' || form[i].nodeName.toLowerCase()!=='reset'){

			if(
				(form[i]!==undefined && form[i]!==null) &&
				(form[i].type==='checkbox' && form[i].checked) ||
				(form[i].type==='radio' && form[i].checked) ||
				(form[i].type==='text' && form[i].value.length>0) ||
				(form[i].type==='range' && form[i].value.length>0) ||
				(form[i].type==='select-one' && form[i].options[form[i].selectedIndex].value.length>0) ||
				(form[i].type==='select-multiple' && form[i].selectedOptions.length>0) ||
				(form[i].type==='textarea' && form[i].value.length>0) ||
				(form[i].type==='number' && form[i].value.length>0) ||
				(form[i].type==='date' && form[i].value.length>0) ||
				(form[i].type==='color' && form[i].value.length>0) ||
				(form[i].type==='month' && form[i].value.length>0) ||
				(form[i].type==='week' && form[i].value.length>0) ||
				(form[i].type==='time' && form[i].value.length>0) ||
				(form[i].type==='datetime' && form[i].value.length>0) ||
				(form[i].type==='datetime-local' && form[i].value.length>0) ||
				(form[i].type==='email' && form[i].value.length>0) ||
				(form[i].type==='password' && form[i].value.length>0) ||
				(form[i].type==='search' && form[i].value.length>0) ||
				(form[i].type==='tel' && form[i].value.length>0) ||
				(form[i].type==='url' && form[i].value.length>0) ||
				(form[i].type==='image' && form[i].value.length>0) ||
				(form[i].type==='file' && form[i].value.length>0)
			){

				/*get the name of the current input*/
				input_name = form[i].name;

				/*array/object*/
				if(input_name.match(/\[.*\]/g)){

					if(input_name.match(/\[.+\]/g)){

						/*array object,  Object[][name]*/
						if(input_name.match(/\[.+\]/g)[0].match(/\[[0-9]\]/)!==null){

							new_arr_obj = input_name.replace(/\[.+\]/g,''); //get object name
							index = input_name.match(/[0-9]/g)[0]; //get index group
							key = input_name.match(/\[.+\]/g)[0].replace(/(\[|\]|[0-9])/g,'');

							/*create an array in an object*/
							if(typeof json_data[new_arr_obj]==='undefined'){
								json_data[new_arr_obj] = [];
							}

							/*create an object inside array*/
							if(typeof json_data[new_arr_obj][index]==='undefined'){
								json_data[new_arr_obj][index] = {};
							}

							json_data[new_arr_obj][index][key] = form[i].value;

						}else if(input_name.match(/\[.+\]/g)!==null){
							//to object
							//Object[name]

							/*get object name*/
							new_obj = input_name.replace(/\[.+\]/g,'');

							/*set new object*/
							if(typeof json_data[new_obj]==='undefined'){
								json_data[new_obj] = {};
							}
							/*assign a key name*/
							key = input_name.match(/\[.+\]/g)[0].replace(/(\[|\])/g,'');

							/*set key and form value*/
							json_data[new_obj][key] = form[i].value;
						}else{return false;}
					}else{

						/*to array, Object[]*/
						key = input_name.replace(/\[.*\]/g, '');

						if(form[i].type==='select-multiple'){
							for(let j=0, m=form[i].selectedOptions.length; j<m; j++){
								if(form[i].selectedOptions[j].value.length>0){
									if(typeof json_data[key]==='undefined'){
										json_data[key] = [];
									}
									json_data[key].push(form[i].selectedOptions[j].value);
								}
							}

						}else{
							if(typeof json_data[key]==='undefined'){
								json_data[key] = [];
							}
							json_data[key].push(form[i].value);
						}

					}
				}else{
					/*basic info*/
					key = form[i].name.replace(/\[.*\]/g, '');
					json_data[key] = form[i].value;

				}
			}
		}
	}//endfor

	// document.getElementById('').innerHTML = JSON.stringify(json_data);
	// console.log("Result: ",JSON.stringify(json_data));
	return JSON.stringify(json_data);
}
