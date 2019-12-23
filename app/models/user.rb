class User < ApplicationRecord
    def getUserJson
        {userName:self.name,highSore:self.highscore}
    end
end
