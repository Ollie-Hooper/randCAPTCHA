function get_count(input, n) {
	var count = []
	var counter = 0

	for (var i in input) {
		if (input.charAt(i) == n && i != input.length - 1) {
			counter++
		} else {
			if (input.charAt(i) == n) {
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

function calc_score(count, l) {
	var expected = []
	var difference = []
	var diff = 0

	for (var i = 0; i < count.length; i++) {
		var k = i + 1
		var x = l * Math.pow(1 / 2, k + 2)
		expected.push(x)
		var d = x - count[i]
		difference.push(d)
		diff += d
	}

	return diff
}

function max_abs(a) {
	var max = Math.max(...a)
	var min = Math.min(...a)
	if (Math.abs(max) > Math.abs(min)) {
		return max
	} else {
		return min
	}
}

export function get_score(input) {
	input = input.replace(/\s/g, '')
	var l = input.length
	var scores = []
	for (var n in ['0', '1']) {
		var count = get_count(input, n)
		scores.push(calc_score(count, l))
	}
	return max_abs(scores)
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
