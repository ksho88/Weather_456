class Forecast < ApplicationRecord
  belongs_to :location
  has_many :days
end
