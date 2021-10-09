class Api::ForecastsController < ApplicationController

  before_action :set_location

  def index
    render json: @location.forecasts
  end

  def show 
    @forecast = @location.forecasts.find(params[:id])
  end

  def create
    @forecast = @location.forecasts.new(forecast_params)
    if @forecast.save 
      render json: @forecast
    else
      render json: { error: @forecast.errors }, status: :unprocessable_entity
    end
  end

  def update 
    @forecast = @location.forecasts.find(params[:id])
    if @forecast.update(forecast_params)
      render json: @forecast
    else
      render json: { error: @forecast.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @location.forecasts.find(params[:id]).destroy
    render json: { message: "forecast deleted"}
  end

  private

    def forecast_params
      params.require(:forecast).permit(:rain, :snow, :sunshine, :wind)
    end

    def set_location
      @location = location.find(params[:location_id])
    end

end
