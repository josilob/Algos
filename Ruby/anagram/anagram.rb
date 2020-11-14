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
#################################################
def anagram?(word1, word2)
  word1_arr = word1.split("")
  word2_arr = word2.split("")
  while word1_arr.length > 0
    char = word1_arr[0]
    if word2_arr.include?(char) == true
      index1 = word1_arr.find_index(char)
      index2 = word2_arr.find_index(char)
      word1_arr.slice!(index1)
      word2_arr.slice!(index2)
    else
      return false
    end
  end
  return word1_arr.empty? && word2_arr.empty?
end

################################################

puts anagrams?("cat", "act")          #=> true
puts anagrams?("restful", "fluster")  #=> true
puts anagrams?("cat", "dog")          #=> false
puts anagrams?("boot", "bootcamp")    #=> false