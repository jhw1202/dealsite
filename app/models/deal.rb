class Deal < ActiveRecord::Base
  attr_accessible :title, :body, :source, :clicks, :cents, :expired, :msrp

  belongs_to :user
  has_many :comments

  mount_uploader :deal_image, DealImageUploader

  before_create :add_http

  def add_http
  	self.source = "http://" + self.source unless self.source.match(/http/)
	end

end
