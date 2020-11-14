# @param string
  # @param string
  # @return boolean

def anagrams? (word1, word2)

  if word1.length != word2.length
    return false
  end

  char_list = word2.split('')
  position1 = 0
  valid = true

  while position1 < word1.length && valid
    position2 = 0
    found = false

    while position2 < char_list.length && !found
      if word1[position1] == char_list[position2]
        found = true
      else position2 += 1
      end
    end

    if found
      char_list[position2] = nil
    else
      valid = false
    end
    position1 += 1
  end
  return valid
end