class Api::ProductsController < ApplicationController
    # before_action  :require_login, only: [:show]
    def index
        @products = Product.all
        render :index

    end
    
    def show
        @product = Product.find_by(id: params[:id])
        render :show
    end
end
