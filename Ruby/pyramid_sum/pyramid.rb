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