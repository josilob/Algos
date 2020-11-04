
letters_arr = ['a', 'b', 'c', 'd', 'd', 'e', 'f', 'f']

def unique_letters(ary)
  ary.sort
  i=0
  while i < ary.length
    if ary[i] == ary[i + 1]
      ary.delete_at(i)
    end
    i += 1
  end
  print ary
end
unique_letters(letters_arr)
