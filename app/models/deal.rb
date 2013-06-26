class Deal < ActiveRecord::Base
  attr_accessible :title, :body, :source

  belongs_to :user

  mount_uploader :deal_image, DealImageUploader
end
