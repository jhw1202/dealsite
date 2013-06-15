class AddDefaultToClickCount < ActiveRecord::Migration
  def change
    change_column :deals, :clicks, :integer, :default => 0
  end
end
