class WordController < ApplicationController

    def search
        search_text = params[:word]
        response_object = nil
        logger.info "Searching for word #{search_text}"
        if(search_text.empty?)
            response_object = Response.new(Messages::SEARCH_NO_WORD,Constants::STATUS_BAD_REQUEST, nil)
            render json: response_object.to_json(), status: response_object.status_code
            return
        end
        @word = Word.find_by(name:search_text.downcase)
        if(@word.nil?)
            logger.info "Word not found in database"
            response_object = Response.new(Messages::SEARCH_NOT_FOUND,Constants::STATUS_NOT_FOUND, nil)
            render json: response_object.to_json(), status: response_object.status_code
            return
        end 
            response_object = Response.new(Messages::SEARCH_SUCCESS,Constants::STATUS_OK,@word.calculate_score) 
            render json: response_object.to_json(), status: response_object.status_code
            return
    end
end