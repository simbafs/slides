module.exports = function random(length = 6){
	let r = () => Math.floor(Math.random() * length); 
	let token = '';
	for(let i = 0; i < length; i++)	token += r();
	return token;
}
