class ProductsController < ApplicationController
  def index
    @products = Product.all
    render json: { message: "ok", products_data: @products }
  end

  def show
    begin
      @product = Product.find(params[:id])
      render json: { message: "ok single", products_data: @product }
    rescue ActiveRecord::RecordNotFound
      render json: { message: "no product matches that ID" }
    rescue Exception
      render json: { message: "there was some other error" }
    end
  end

end
