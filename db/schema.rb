# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171010212823) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "products", force: :cascade do |t|
    t.integer "product_number"
    t.string "product_name"
    t.string "product_desc"
    t.integer "unit_quantity"
    t.string "retail_price"
    t.string "color"
    t.integer "discount"
    t.integer "units_in_stock"
    t.boolean "product_available"
    t.string "image_teaser"
    t.string "image_1"
    t.string "image_2"
    t.string "care_instructions"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
