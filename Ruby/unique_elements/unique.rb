
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

def unique_letters2 (ary)
  unique=[]
  for letter in 0...ary.length do
    unless unique.index(ary[letter])
      unique.push ary[letter]
    end
  end
  return unique
end
unique_letters2(letters_arr)


def unique_letters3(ary)
  new_array = []
  ary.each do |letter|
    if new_array.include? letter
    else 
      new_array.push(letter)
    end
  end
  p new_array
end
unique_letters3(letters_arr)