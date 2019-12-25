class User < ApplicationRecord
    def getUserJson
        {userName:self.name,highScore:self.highscore}
    end
end
