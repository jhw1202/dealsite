class Deal < ActiveRecord::Base
  attr_accessible :title, :body, :source, :cents

  belongs_to :user

  mount_uploader :deal_image, DealImageUploader
end
