class CreateDays < ActiveRecord::Migration[6.1]
  def change
    create_table :days do |t|
      t.string :date_dat
      t.string :time_hours
      t.belongs_to :forecast, null: false, foreign_key: true

      t.timestamps
    end
  end
end
