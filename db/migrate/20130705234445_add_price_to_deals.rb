class AddPriceToDeals < ActiveRecord::Migration
  def change
  	add_column :deals, :cents, :integer
  end
end
