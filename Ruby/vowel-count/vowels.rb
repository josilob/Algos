def most_vowels(string)

  the_word = "";
  words_ary = string.split(" ")

  words_ary.each do |word|
    if word.count('aeiouAEIOU') > the_word.count('aeiouAEIOU')
      the_word = word
    end
  end

  p the_word
end

most_vowels("whaat AAaA WondEerful ruUuUuby")


=begin
ary = [1, 2, 4, 2]
ary.count               #=> 4
ary.count(2)            #=> 2
ary.count{ |x| x%2==0 } #=> 3
=end