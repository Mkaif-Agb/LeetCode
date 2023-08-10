def uplow(words):
	result = ""
	index = 0
	for letter in words:
		if index % 2 == 0:
			result += letter.upper()
		else:
			result += letter.lower()
		index += 1
	return result


words = "hellothere"
result = uplow(words)
print(result) 
