class Deal < ActiveRecord::Base
  attr_accessible :title, :body, :source, :clicks, :cents, :expired, :msrp
  belongs_to :user
  has_many :comments

  mount_uploader :deal_image, DealImageUploader
end
