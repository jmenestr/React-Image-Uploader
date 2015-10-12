class ImagesController < ApplicationController
  def create
    @image = Image.new(image_params)
    @image.title = "Test Upload"
    @image.save
    render json: @image
  end

  def show
    @image = Image.find(params[:id])
  end

  def image_params
    params.require(:image).permit(:avatar)
  end
end
