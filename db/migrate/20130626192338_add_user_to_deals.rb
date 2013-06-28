class AddUserToDeals < ActiveRecord::Migration
  def change
  	add_column :deals, :user_id, :integer
  end
end
