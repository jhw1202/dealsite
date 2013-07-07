class Deal < ActiveRecord::Base
<<<<<<< HEAD
  attr_accessible :title, :body, :source, :clicks, :cents, :expired, :msrp
=======
  attr_accessible :title, :body, :source, :cents

>>>>>>> a466f740e54a5206bc363a21e7f962d4c89b7812
  belongs_to :user
  has_many :comments

  mount_uploader :deal_image, DealImageUploader
end
