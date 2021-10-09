Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    
    resources :user do
      resources :location
    end 
    resources :location do
      resources :forecast
    end 
    resources :forecast do
      resources :day
    end 
    resources :day do
      resources :comment
    end 
  end
end
