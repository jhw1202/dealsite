class ChangeUserAuthTokenToString < ActiveRecord::Migration
  def up
  	change_column :users, :auth_token, :string
  end

  def down
  	change_column :users, :auth_token, :integer
  end
end
