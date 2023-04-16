# Write a function named largest that takes a list of numbers as an argument
#  and returns the largest number in that list.

def largest(numbers):
    largest = numbers[0]
    for number in numbers:
        if number > largest:
            largest = number
    return largest

print(largest([1, 2, 3, 4, 0]))
print(largest([10, 4, 2, 231, 91, 54]))
