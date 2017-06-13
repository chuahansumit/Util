function merge(a,b)
{
	return a+ " " + b;
}
function JsonItem(jsonString,key)
{ 
  return JSON.stringify(JSON.parse(jsonString)[key]);
}