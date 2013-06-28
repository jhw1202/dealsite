class User < ActiveRecord::Base
	VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

	validates :email, presence: true, format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }

  validates :name, presence: true, uniqueness: { case_sensitive: false }

  validates :password, presence: true, length: { minimum: 6 }, confirmation: true

  validates :password_confirmation, presence: true

	attr_accessible :name, :email, :password, :password_confirmation, :auth_token

	has_secure_password

	has_many :deals

	before_save :create_token

	def self.find_by_username_or_email(input)
    if input.match VALID_EMAIL_REGEX
      return User.find_by_email(input)
    else
      return User.find_by_username(input)
    end
  end

	private

  def create_token
    self.auth_token = SecureRandom.urlsafe_base64
  end
end
