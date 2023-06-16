const	fizzBuzz = (nbr) =>
{
	if (nbr % 3 === 0 && nbr % 5 === 0)
		return ('FizzBuzz');
	else if (nbr % 3 === 0)
		return ('Fizz');
	else if (nbr % 5 === 0)
		return ('Buzz');
	else
		return (nbr);
}

module.exports = fizzBuzz;