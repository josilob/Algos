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


def dna_string2(string)
  new_dna = []
  string.split('').map do |i|
    case (i) 
  when 'C'
      new_dna.push(['C', 'G']);
  when 'G'
      new_dna.push(['G', 'C']);
  when 'A'
      new_dna.push(['A', 'T']);  
  when 'T'
      new_dna.push(['T', 'A']);
    end
  end
  return new_dna
end

p dna_string2('ATGC')


def dna_string3(str)
    map = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    }
    comps = []

    0.upto(str.length - 1) do |i|
        char = str[i].to_sym
        comps.push([char.to_s, map[char]])
    end

    return comps
end

p dna_string3("ATGC")