class User < ApplicationRecord
    validates :name, presence: true
    def getUserJson
        {userName:self.name,highScore:self.highscore}
    end
end
