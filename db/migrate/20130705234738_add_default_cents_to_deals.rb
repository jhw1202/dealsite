class AddDefaultCentsToDeals < ActiveRecord::Migration
  def change
  	change_column :deals, :cents, :integer, :default => 0
  end
end
