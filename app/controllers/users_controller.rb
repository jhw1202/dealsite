class UsersController < ApplicationController

  def new
  	@user = User.new
  end

  def create
    # Rails.logger.debug(user_params)
    Rails.logger.debug(filter_params(User, params[:user]))
  	@user = User.new(filter_params(User, params[:user]))
    Rails.logger.debug
  	if @user.save
      sign_in(@user)
  		flash[:notice] = 'Account Creation Success'
  	end

  	respond @user
  end

end
