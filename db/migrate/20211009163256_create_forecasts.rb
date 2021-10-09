class CreateForecasts < ActiveRecord::Migration[6.1]
  def change
    create_table :forecasts do |t|
      t.string :rain
      t.string :snow
      t.string :sunshine
      t.string :wind
      t.belongs_to :location, null: false, foreign_key: true

      t.timestamps
    end
  end
end
