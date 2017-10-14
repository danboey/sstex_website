Rails.application.routes.draw do
  root 'pages#home'

  get 'products/knitted' => 'pages#knitted'
  get 'products/woven' => 'pages#woven'
  get 'products/fabrics_textiles' => 'pages#fabrics_textiles'
  get 'products/uniforms' => 'pages#uniforms'
  get 'products/traditional' => 'pages#traditional'
  
end
