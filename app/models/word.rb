class Word < ApplicationRecord
    def calculate_score
        score = 0
        word = self.name
        word_length = word.length
        if(word_length > 2 and word_length < 6)
            score = word_length - 2
        else
            socre = 4
        end
        {word:word, score:score}
    end

end
