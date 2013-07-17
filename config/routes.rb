Dealsite::Application.routes.draw do
  root :to => "pages#index"

  match '/deals/search' => "deals#search", :via => :get

  resources :deals, :only => [:show, :create, :index, :update, :destroy]

  match '/deals/:id/go' => "deals#go", :via => :put, :as => "external"

  resources :sessions, :only => [:create, :destroy]

  resource :users, :only => [:create]

  match "/signup" => "users#new", :via => :get

end
