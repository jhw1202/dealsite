class DealsController < ApplicationController

  include ARD

  def index
    deals = ARD.attributes(Deal.all)

    respond deals
  end

  def show
    return no_deal if no_deal?(params[:id])

    deal = ARD.attributes(Deal.find(params[:id]))

    respond deal
  end



  private

  def no_deal
    respond 404, :error => 'deal_not_found'
  end

  def no_deal?(id)
    not id.blank? and not Deal.exists?(id)
  end

end
