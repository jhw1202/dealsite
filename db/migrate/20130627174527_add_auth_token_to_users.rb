class AddAuthTokenToUsers < ActiveRecord::Migration
  def change
  	add_column :users, :auth_token, :integer
  end
end
