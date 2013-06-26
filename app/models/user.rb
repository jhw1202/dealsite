class User < ActiveRecord::Base

	# attr_protected :password_digest

	attr_accessible :password, :password_confirmation

	has_secure_password

	has_many :deals
  # attr_accessible :title, :body
end
