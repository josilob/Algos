# DNA-string-ruby

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of `AT` and `CG`. Match the missing element to the provided character. Return the provided character as the first element in nested array.

Example:

```ruby
# Input:
dna_string('GCG')

# Output:
# => [["G", "C"], ["C","G"],["G", "C"]]
```

Does the follow pseduocode help you?

```ruby
# START PROGRAM
#   SET the pairs into a hash.
#   SET an empty return array
#   ITERATE over the input string.
#     Set an empty array called individual
#     Push the value of the current item into the array
#     Push the corresponding value of the Hash into the array.
#     push the individual array into the return array.
#   END ITERATE
#   RETURN the return array.
# END PROGRAM
```

```ruby
# @param string
# @return [[string]]

def dna_string(string)
  # happy hacking
end

```
