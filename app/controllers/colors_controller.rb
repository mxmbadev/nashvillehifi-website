class ColorsController < ApplicationController
  before_action :find_color, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, except: [:index, :show]
  

  def new
    @color = Color.new
  end

  def create
    @color = Color.new color_params

    if @color.save
      redirect_to @color, notice: "New color created!"
    else
      render 'new', notice: "Sorry failed to create!!!"
    end
  end

  def edit
  end

  def update
    if @color.update color_params
      redirect_to @color, notice: "You Updated: #{@color.name}."
    else
      render 'edit'
    end
  end

  def show
    @colors = Color.all
  end

  def destroy
    @color.destroy
    redirect_to root_path
  end

  private

  def color_params
    params.require(:color).permit(:name)
  end

  def find_color
    @color = Color.find(params[:id])
  end 

end
