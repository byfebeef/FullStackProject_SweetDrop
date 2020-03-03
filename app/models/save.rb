# == Schema Information
#
# Table name: saves
#
#  id           :bigint           not null, primary key
#  savable_type :string           not null
#  savable_id   :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Save < ApplicationRecord
end
