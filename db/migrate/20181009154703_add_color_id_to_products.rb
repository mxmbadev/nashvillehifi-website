class AddColorIdToProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :color_id, :integer
  end
end
