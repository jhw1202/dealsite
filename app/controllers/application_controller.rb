class ApplicationController < ActionController::Base
  protect_from_forgery


  def filter_params(model_class, params)
    params.dup.extract!(*model_class.accessible_attributes.to_a[1..-1].map(&:to_sym))
  end

  def respond(code, data = nil)
    return respond(200, code) unless code.kind_of?(Integer) or code.kind_of?(Symbol)
    render :json => data, :status => code
  end
end
