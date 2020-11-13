#p pyramid_sum([1, 4, 6]) #=> [[15], [5, 10], [1, 4, 6]]
#p pyramid_sum([3, 7, 2, 11]) #=> [[41], [19, 22], [10, 9, 13], [3, 7, 2, 11]]


def pyramid_sum(base)
  final_arr = []
  final_arr.unshift(base)
  func_arr = base
  while func_arr.length != 1
    i = 1
    math_arr = []
    while i < func_arr.length
      value = func_arr[i - 1] + func_arr[i]
      math_arr.push(value)
      i += 1
    end
    final_arr.unshift(math_arr)
    func_arr = math_arr
  end
  p final_arr
end
###############################################

def pyramid_sum2 (base)
  solution_array = []

  temp_array = base

  adding_array = []

  solution_array<<base
    loop do
    temp_array.each_with_index do | num, index |

      if index +1 < temp_array.length
        sum = temp_array[index] + temp_array[index +1]
        adding_array << sum
      end
    end
    solution_array << adding_array
    temp_array = adding_array
    adding_array = []

      if temp_array.length == 1
        break
      end
  end
return solution_array.reverse
end

pyramid_sum([1, 2, 3, 4])
p pyramid_sum2([1, 2, 3, 4])