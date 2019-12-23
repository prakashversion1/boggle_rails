Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root 'boggle#index'
  get 'word/search', to:'word#search'
  post 'user', to:'user#create'
  post 'user/highscore', to:'user#highscore'   #TODO: set the url to standard /user/{ID}/score =>  research

end
