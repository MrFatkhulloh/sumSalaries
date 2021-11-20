var salaries = {
	"Akmal": 1200,
	"Salim": 5200,
	"Karima": 1800
}

function sumSalaries(params) {
    var sumSalaries = 0;

    for (const key in salaries) {
        sumSalaries += salaries[key];
    } 
}

console.log(`total salary ${sumSalaries(salaries)}`);

// function sumSalaries(object) {
    
// }