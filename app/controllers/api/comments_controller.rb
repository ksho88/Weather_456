class Api::CommentsController < ApplicationController
  before_action :set_day
  
  def index
    render json: @day.comments
  end

  def show
    @comment = @day.comments.find(params[:id])
  end

  def create
    @comment = @day.comments.new(comment_params)
    if @commnet.save
      render json: @comment
    else
      render json: { error: @comment.erros }, status: :unprocessable_entity
    end
  end

  def update
    @comment = @day.comments.find(params[:id])
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: { error: @comment.erros }, status: :unprocessable_entity
    end
  end

  def destroy 
    @day.comments.find(params[:id]).destroy
    render json: { message: "Comment deleted"}
  end


  private
    def comment_params
      params.require(:comment).permit(:title, :body)
    end

    def set_day
      @day = Day.find(params[:day_id])
    end
  end
