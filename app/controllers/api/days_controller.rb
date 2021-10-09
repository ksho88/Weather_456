class Api::DaysController < ApplicationController
  before_action :set_forecast

    def index
      render json: @forecast.days
    end
    def show
      @day = @forecast.days.find(params[:id])
    end
    def create
      @days = @forecast.days.new(day_params)
      if @day.save
        render json: @day
      else
        render json: { error: @day.errors }, status: :unprocessable_entity
      end
    end
    def update
      @day = @forecast.days.find(params[:id])
      if @day.update(day_params)
        render json: @day
      else
        render json: { error: @day.errors }, status: :unprocessable_entity
      end
    end
    def destroy
      @forecast.days.find(params[:id]).destroy
      render json: { message: "Days deleted"}
    end
    private
      def day_params
        params.require(:day).permit(:date_dat, :time_hours)
      end
      def set_forcast
        @forecast = forcecast.find(params[:forecast_id])
      end
    end
