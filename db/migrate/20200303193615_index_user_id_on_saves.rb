class IndexUserIdOnSaves < ActiveRecord::Migration[5.2]
  def change
    add_index :saves, :user_id
  end
end
