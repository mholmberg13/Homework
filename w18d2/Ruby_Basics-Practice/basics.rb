
require 'prime'


adjective = "Big Bad"

hello = "Hello #{adjective} World"

p hello.upcase()



# ///////////NUMS ARRAY AND ENUMERABLES/////////////

nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]

# 1
no_dup = nums.uniq
p no_dup

# 2
nums.push(5)
p nums

# 3
p nums.include?(8)

# 4
p nums.find_all {|element| element > 10}

# 5
p nums.all? {|element| element > 10}

# 6
p nums.any? {|element| element / 8 == 0}

# 7
p nums.count {|element| element > 4}

# 8
p nums.each_with_index {|element, index| element * index}

# 9
p nums.find {|element| element % 7 == 0 && element % 5 == 0 && element > 0}

# 10
p nums.find_index {|element| element % 7 == 0 && element % 5 == 0 && element > 0}

# 11
p nums.first(3)

# 12
p nums.last(5)

# 13
p nums.group_by {|element| element % 3}

# 14 
p nums.minmax

# 15
p nums.reject {|element| element % 3 == 0}

# 16
p nums.select {|element| element % 5 == 0}



# //////////// COLOR ARRAY /////////////

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

# 1
p colors.sample

# 2
p colors.reverse

# 3
for i in 0...colors.length do
    p colors[i].upcase()
end

////////// METHODS ////////////

1
def find_area(width, height) 
    area = width * height
    p area
end
find_area(10, 10)

# 2
def multiply_each_by_five
    nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0]
    for i in 0...nums.length do
        p nums[i] * 5
    end
end
multiply_each_by_five()



# ////////// METHODS WITH A HASH ////////////

book = {
  title: 'The Great Gatsby',
  author: 'F Scott Fitzgerald',
  year: 1925,
  price: 10
}

lamp = {
  type: 'reading',
  brand: 'Ikea',
  price: 25
}

table = {
  type: 'bed side',
  brand: 'Crate & Barrel',
  color: 'birch',
  price: 50
}


def print_price(hash) 
    price = hash[:price]
    p price
end
print_price(book)

def print_item_sums(hashone, hashtwo)
    priceone = hashone[:price]
    pricetwo = hashtwo[:price]
    sum = priceone + pricetwo
    p sum
end
print_item_sums(lamp, table)



# ////////// SOLVING PROBLEMS WITH RUBY ////////////
numbers = []
 for i in 1...1000 do
    if i % 3 == 0 or i % 5 == 0
    numbers.push(i)
    end
 end
p numbers.sum


def check_prime?(number)
    p number.prime?
end

check_prime?(4)

def get_primes(limit)
    for i in 1...limit do
        if i.prime?
            p i
        end
    end
end 
get_primes(100)