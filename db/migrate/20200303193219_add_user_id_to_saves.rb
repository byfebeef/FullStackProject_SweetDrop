class AddUserIdToSaves < ActiveRecord::Migration[5.2]
  def change
    add_column :saves, :user_id, :string, null: false
  end
end
