class AddDealImageToDeals < ActiveRecord::Migration
  def change
    add_column :deals, :deal_image, :string
  end
end
