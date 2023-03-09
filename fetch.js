fetch("https://jsonplaceholder.typicode.com/users")
.then((ambil)=>ambil.json())
.then((ambil)=>{
	document.querySelector("tbody").innerHTML=ambilData(ambil)
})

function ambilData(data){
	let output = "";
	data.forEach((m)=>{
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
