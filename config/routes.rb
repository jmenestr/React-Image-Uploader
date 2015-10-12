Rails.application.routes.draw do
  root to: 'static_pages#root'
  resources :images, only: [:create], defaults: { format: :json }
end
