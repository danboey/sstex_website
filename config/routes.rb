Rails.application.routes.draw do
  root 'pages#home'

  get 'products/knitted' => 'pages#knitted'
end
