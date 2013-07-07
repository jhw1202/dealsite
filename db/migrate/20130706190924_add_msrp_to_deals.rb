class AddMsrpToDeals < ActiveRecord::Migration
  def change
  	add_column :deals, :msrp, :integer, :default => 0
  end
end
