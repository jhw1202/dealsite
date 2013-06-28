class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  include SessionsHelper

  after_filter  :set_csrf_cookie_for_bb, :flash_to_headers

  def flash_to_headers
    return unless request.xhr?
    response.headers['X-Message'] = flash[:notice]  unless flash[:notice].blank?
    # repeat for other flash types...

    flash.discard  # don't want the flash to appear when you reload page
  end

  def set_csrf_cookie_for_bb
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end

  def filter_params(model_class, params)
    params.dup.extract!(*model_class.accessible_attributes.to_a[1..-1].map(&:to_sym))
  end

  def respond(code, data = nil)
    return respond(200, code) unless code.kind_of?(Integer) or code.kind_of?(Symbol)
    render :json => data, :status => code
  end

end
