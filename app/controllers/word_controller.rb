class WordController < ApplicationController

    def search
        search_text = params[:word]
        responseObject = nil
        logger.info "Searching for word #{search_text}"
        if(search_text.empty?)
            responseObject = Response.new(Messages::SEARCH_NO_WORD,Constants::STATUS_BAD_REQUEST, nil)
            render json: responseObject.to_json(), status: responseObject.status_code
            return
        end
        @word = Word.find_by(name:search_text.downcase)
        if(@word.nil?)
            logger.info "Word not found in database"
            responseObject = Response.new(Messages::SEARCH_NOT_FOUND,Constants::STATUS_NOT_FOUND, nil)
            render json: responseObject.to_json(), status: responseObject.status_code
            return
        end 
            responseObject = Response.new(Messages::SEARCH_SUCCESS,Constants::STATUS_OK,@word.calculate_score) 
            render json: responseObject.to_json(), status: responseObject.status_code
            return
    end
end