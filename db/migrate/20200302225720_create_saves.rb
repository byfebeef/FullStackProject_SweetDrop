class CreateSaves < ActiveRecord::Migration[5.2]
  def change
    create_table :saves do |t|
      t.string :savable_type, null: false
      t.integer :savable_id, null: false
      t.timestamps
    end

    add_index :saves, :savable_type
    add_index :saves, :savable_id
  end
end
