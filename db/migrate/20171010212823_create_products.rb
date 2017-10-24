class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.integer :product_number
      t.string :product_name
      t.string :product_desc
      t.integer :unit_quantity
      t.string :retail_price
      t.string :color
      t.integer :discount
      t.integer :units_in_stock
      t.boolean :product_available
      t.string :image_teaser
      t.string :image_1
      t.string :image_2
      t.string :care_instructions

      t.timestamps
    end
  end
end
