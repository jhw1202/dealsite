class ApplicationController < ActionController::Base
  protect_from_forgery

  def respond(code, data = nil)
    return respond(200, code) unless code.kind_of?(Integer) or code.kind_of?(Symbol)
    render :json => data, :status => code
  end
end
