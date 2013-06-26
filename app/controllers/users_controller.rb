class UsersController < ApplicationController

	# respond_to :html, :json

  def new
  	@user = User.new
  end

  def create
  	user = User.new(params[:user])

  	if user.save
      create_user_session(user)
  		flash[:notice] = 'Account Creation Success'
  	end

  	respond user
  end


end
