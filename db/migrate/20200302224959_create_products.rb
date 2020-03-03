class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.integer :price, null: false
      t.text :description, null: false
      t.integer :category_id
      t.boolean :expired
      t.timestamps
    end
    add_index :products, :name
    add_index :products, :category_id
    add_index :products, :expired
  end
end
