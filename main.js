var a=[];
var n=parseInt(prompt("Enter the size of the array"));

	
for (let i=0; i<n; i++){
	a[i]=parseInt(prompt("Enter the" + (i+1) +" value"));
}

document.write("Given Array = "+a+"<br><br>");

var sum=0;
var c
for (let i=0;i<a.length;i++){
    if(a[i]%2==0){
        b=a[i];
        sum=sum+a[i];
    }
}
var c=sum/b
document.write(c);