class AddExpiredToDeals < ActiveRecord::Migration
  def change
  	add_column :deals, :expired, :boolean, :default => false
  end
end
