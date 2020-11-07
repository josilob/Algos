def rot13 (string)
  caesar_string = ""

  string.scan (/./) do |i|
    # Identify letters only.
     if ("a".."z").include? (i.downcase) 
       13.times {i = i.next}
     end
     caesar_string << i[-1]
  end
  return caesar_string
end
#############################
def rot14(string)
   string.tr("A-Z", "N-ZA-M")
end
#############################
def rot15(string)
  new_string_array = string.split("").inject("") do |text, char|
      text << case char 
      when "A".."M", "a".."m"
        char.ord + 13
      when "N".."Z", "n".."z"
        char.ord - 13
      else 
        char.ord 
      end 
  end 
  return new_string_array

end 

puts rot15("FREE PIZZA!" )

# INPUT: rot13("SERR PBQR PNZC")
# OUTPUT: "FREE CODE CAMP"
# INPUT: rot13("SERR CVMMN!")
# OUTPUT: "FREE PIZZA!"
# @param string
# @return string