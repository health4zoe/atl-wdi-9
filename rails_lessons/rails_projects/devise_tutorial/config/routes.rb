Rails.application.routes.draw do
  get 'home' => 'static_pages#home'

  get 'about' => 'static_pages#about'

  get 'faqs' => 'static_pages#faqs'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
