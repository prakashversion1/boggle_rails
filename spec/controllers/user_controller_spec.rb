require 'rails_helper'

RSpec.describe UserController, type: :controller do
    context "POST #create" do
        
        it "User response should be in json format" do
            post :create,:params => { :userName => "prakash" }, :format => :json
            expect(response.content_type).to eq "application/json; charset=utf-8"
        end

        it "New User should be created" do
            post :create,:params => { :userName => "prakash" }, :format => :json
            expect(JSON.parse(response.body)['message']).to eq "New user created"
        end

        it "User default highScore shoud be zero" do
            post :create,:params => { :userName => "prakash" }, :format => :json
            expect(JSON.parse(response.body)['data']['highScore']).to eq 0
        end
        
        # if "Existing user should return old existing record" do
        #     user = User.new(name: 'prakash').save
        #     post :create,:params => { :userName => "prakash" }, :format => :json
        #     expect(JSON.parse(response.body)['message']).to eq "Existing user found"
        # end
        
    end
end