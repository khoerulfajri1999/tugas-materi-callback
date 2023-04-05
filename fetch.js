function ambilData(url, callback){
  let xhr = new XMLHttpRequest();
  xhr.onload = function (){
    if (xhr.status === 200){
      return callback(JSON.parse(xhr.responseText));
    }
  };
  xhr.open("GET", url)
  xhr.send();
}

const data = ambilData("https://jsonplaceholder.typicode.com/users", function(data){
  console.log(data);
  document.querySelector("tbody").innerHTML=ambil(data)
})

function ambil(x){
	let output = "";
	x.forEach((m)=>{
		output += `<tr>
                <td><center>${m.id}</center></td>
                <td>${m.name}</td>
                <td>${m.username}</td>
                <td>${m.email}</td>
                <td>
                  ${m.address.street},
                  ${m.address.suite}, 
                  ${m.address.city}
                 </td>
                <td>${m.company.name}</td>
              </tr>`;
	});
	return output;
}
