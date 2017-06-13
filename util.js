function merge(a,b)
{
	return a+ " " + b;
}
function JsonItem(jsonString,key)
{ 
  return JSON.stringify(JSON.parse(jsonString)[key]);
}
function GetRecentBuildId(jsonString,key)
{ 
  return JSON.parse(jsonString).value[0].id;
}