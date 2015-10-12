
class Image < ActiveRecord::Base
  validates :title, presence: true
  mount_base64_uploader :avatar, AvatarUploader
end
