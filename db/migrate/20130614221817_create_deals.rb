class CreateDeals < ActiveRecord::Migration
  def change
    create_table :deals do |t|
      t.string :title
      t.text :body
      t.string :source
      t.integer :clicks
      t.timestamps
    end
  end
end
