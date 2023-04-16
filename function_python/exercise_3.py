# Write a function named occurances that takes two string arguments as input and counts the
# number of occurances of the second string inside the first string.
def occurances(str1, str2):
 return str1.count(str2)

print(occurances('fleep floop', 'e') )