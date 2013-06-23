class Deal < ActiveRecord::Base
  attr_accessible :title, :body, :source
  mount_uploader :deal_image, DealImageUploader
end
