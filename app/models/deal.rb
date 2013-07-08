class Deal < ActiveRecord::Base
  attr_accessible :title, :body, :source, :clicks, :cents, :expired, :msrp

  belongs_to :user
  has_many :comments

  mount_uploader :deal_image, DealImageUploader

  before_create :remove_empty_params

  def remove_empty_params

  end
end
