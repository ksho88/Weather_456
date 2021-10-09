class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :title
      t.text :body
      t.belongs_to :day, null: false, foreign_key: true

      t.timestamps
    end
  end
end
