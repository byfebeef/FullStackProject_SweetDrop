class Api::UsersController < ApplicationController

    before_action :require_login, only: [:show]

    def show
        @user = User.find_by(id: params[:id])
    end
    def create
        @user = User.new(user_params)

        if @user.save
        login!(@user)
        render :show
        else
         render json: @user.errors.full_messages, status: 422
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :password)
    end
end
