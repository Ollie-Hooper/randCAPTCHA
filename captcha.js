function get_count(input) {
	var count = []
	var counter = 0

	for (var i in input) {
		if (input.charAt(i) == '1' && i != input.length - 1) {
			counter++
		} else {
			if (input.charAt(i) == '1') {
				counter++
			}
			if (counter > 0) {
				var l = count.length
				if (l < counter) {
					for (var j = 0; j < counter - l; j++) {
						count.push(0)
					}
				}
				count[counter - 1]++
				counter = 0
			}
		}
	}
	return count
}

function calc_score(count, n) {
	var expected = []
	var difference = []
	var diff = 0

	for (var i = 0; i < count.length; i++) {
		var k = i + 1
		var x = n * Math.pow(1 / 2, k + 2)
		expected.push(x)
		var d = x - count[i]
		difference.push(d)
		diff += d
	}

	return diff
}

export function get_score(input) {
	input = input.replace(/\s/g, '')
	var n = input.length
	var count = get_count(input)
	return calc_score(count, n)
}

export function is_human(input) {
	var score = get_score(input)
	if (Math.abs(score) > 5) {
		return true
	} else {
		return false
	}
}

export function create_rand_array(n) {
	var array = ''
	for (var i = 0; i < n; i++) {
		array = array.concat(Math.floor(Math.random() * 2))
	}
	return array
}
