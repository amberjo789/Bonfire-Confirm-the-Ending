function end(str, target) {
  str=str.replace(/[\W_]/g,'');
  
  //length parameter in substring()
  var length = str.length;
  //start parameter in substring()
  var start = str.length-target.length;
  
  var str2 = str.substring(start, length);
  console.log(str.substring(start,length));
  
  if(str2 == target){
   return true;  
  }
  else
    return false;
}

end("He has to give me a new name", "name");
