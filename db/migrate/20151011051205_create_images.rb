class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :title, null: false
      t.string :avatar
      t.timestamps null: false
    end
  end
end
