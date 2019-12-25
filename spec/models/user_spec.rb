require 'rails_helper'

RSpec.describe User, type: :model do
  context "User Model: validation Tests" do
    before { @new_user = User.new }

    it "User should have name" do
      user = User.new().save
      expect(user).to  eq(false)
    end

    it "User should be saved if name is present" do
      user = User.new(name: 'prakash').save
      expect(user).to eq(true)  
    end
    
    it "User should have default score set to 0" do
      expect(@new_user.highscore).to eq(0)
    end

  end
  
end
