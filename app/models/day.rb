class Day < ApplicationRecord
  belongs_to :forecast
  has_many :comments
end
