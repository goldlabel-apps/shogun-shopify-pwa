
const errorTranslations = [
	{	
		machine:`Error: Network Error`,
		human: `Cloud functions are not running on ${process.env.REACT_APP_ENV}`,
	},
]

const machinetoHuman = machine => {
	let human = machine
	for (let i=0; i<errorTranslations.length; i++){
		if (machine === errorTranslations[i].machine) human = errorTranslations[i].human
	}
	return human
}

export {
	errorTranslations,
	machinetoHuman,
}