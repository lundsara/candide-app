Rails.application.routes.draw do
  resources :products
  root to: "root#index"
 end

