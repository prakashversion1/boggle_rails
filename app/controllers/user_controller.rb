class UserController < ApplicationController
    #simply to test api from rest client. Need to re-enable it.
    skip_before_action :verify_authenticity_token

    def create
        userName = params[:userName].strip
        logger.info "Trying to search/create user with name ====> #{userName}"
        if(userName.nil? || userName.empty?)
            logger.info("Searching for empty username")
            responseObject = Response.new(Messages::USER_REQUEST_MISSING,Constants::STATUS_BAD_REQUEST, nil)
            render json: responseObject.to_json(), status: responseObject.status_code
            return
        end
        user = User.find_by(name:userName)
        if(user.nil?)
            logger.info "User not found in the system so creating one"
            u = User.new
            u.name = userName
            u.highscore = 0
            u.save()
            responseObject = Response.new(Messages::USER_NEW_CREATED,Constants::STATUS_OK,u.getUserJson)
            render json: responseObject.to_json(), status: responseObject.status_code
            return
        end
        logger.info("User found in the database")
        responseObject = Response.new(Messages::USER_FOUND,Constants::STATUS_OK,user.getUserJson)
        render json: responseObject.to_json(), status: responseObject.status_code
        return
    end

    def highscore
        userName = params[:userName].strip
        newScore = params[:newScore]
        logger.info "Trying to set highscore for user with name ====> #{userName} and high score ====> #{newScore}"
        if(userName.nil? || userName.empty?)
            logger.info("Setting highscore for empty username")
            responseObject = Response.new(Messages::USER_REQUEST_MISSING,Constants::STATUS_BAD_REQUEST, nil)
            render json: responseObject.to_json(), status: responseObject.status_code
            return
        end
        user = User.find_by(name:userName)
        if(user.nil?)
            logger.info "User not found to set high score"
            responseObject = Response.new(Messages::USER_NOT_FOUND,Constants::STATUS_NOT_FOUND,nil)
            render json: responseObject.to_json(), status: responseObject.status_code
            return
        end
        if(user.highscore < newScore)
            logger.info "New High score set for user #{userName} with high score ===> #{newScore}"
            user.highscore = newScore
            user.save()
            responseObject = Response.new(Messages::USER_HIGH_SCORE,Constants::STATUS_OK,user.getUserJson)
            render json: responseObject.to_json(), status: responseObject.status_code
            return
        end
        responseObject = Response.new(Messages::USER_SAME_SCORE,Constants::STATUS_OK,user.getUserJson)
        render json: responseObject.to_json(), status: responseObject.status_code
        return
    end
end