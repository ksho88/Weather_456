class Api::ForecastsController < ApplicationController

  before_action :set_todo

  def index
    render json: @todo.comments
  end

  def show 
    comment = @todo.comments.find(params[:id])
  end

  def create
    @comment = @todo.comments.new(comment_params)
    if @comment.save 
      render json: @comment
    else
      render json: { error: @comment.errors }, status: :unprocessable_entity
    end
  end

  def update 
    @comment = @todo.comments.find(params[:id])
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: { error: @comment.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @todo.comments.find(params[:id]).destroy
    render json: { message: "Comment deleted"}
  end

  private
    def comment_params
      params.require(:comment).permit(:rain, :snow, :sunshine)
    end

    def set_todo
      @todo = Todo.find(params[:todo_id])
    end

end
