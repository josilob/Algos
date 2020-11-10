def dna_string(string)
  pairs = {"A" => "T", "T" => "A", "G" => "C", "C" => "G"}
  return_arr = []
  string.each_char do |l| 
    indiv = []
    indiv.push(l) 
    indiv.push pairs[l]
    return_arr.push(indiv)
  end
  return return_arr
end

p dna_string('ATTG')


