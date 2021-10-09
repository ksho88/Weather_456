class Api::CommentsController < ApplicationController
  before_action :set_user
  
  def index
    render json: @user.locations
  end

  def show
    @location = @user.locations.find(params[:id])
  end

  def create
    @location = @user.locations.new(location_params)
    if @location.save
      render json: @location
    else
      render json: { error: @location.errors }, status: :unprocessable_entity
    end
  end

  def update
    @loction = @user.locations.find(params[:id])
    if @location.update(location_params)
      render json: @location
    else
      render json: { error: @location.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @user.locations.find(params[:id]).destroy
    render json: { message: "Location deleted"}
  end

  private
    def location_params
      params.require(:location).permit(:state, :city)
    end

    def set_user
      @user = User.find(params[:user_id])
    end
  end
