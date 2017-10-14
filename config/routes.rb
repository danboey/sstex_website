Rails.application.routes.draw do

  root 'pages#home'

  get 'products/knitted' 					=> 'pages#knitted'
  get 'products/woven' 						=> 'pages#woven'
  get 'products/fabrics_textiles' => 'pages#fabrics_textiles'
  get 'products/uniforms' 				=> 'pages#uniforms'
  get 'products/traditional' 			=> 'pages#traditional'

  get 'about_us' => 'pages#about'
  get 'clients'  => 'pages#clients'
  get 'careers'  => 'pages#careers'
  get 'contact'  => 'pages#contact'
  
end
