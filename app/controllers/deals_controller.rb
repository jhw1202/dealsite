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

  def create
    p params.inspect

    attributes = filter_params(Deal, params[:deal])

    deal = Deal.create(attributes)

    flash[:notice] = "Dollar dollar bill y'all"

    respond deal
  end

  def update
    return no_deal if no_deal?(params[:id])

    deal = Deal.find(params[:id]).update_attributes(filter_params(Deal, params[:deal]))

    respond deal
  end

  def destroy
    return no_deal if no_deal?(params[:id])

    deal = Deal.find(params[:id]).destroy

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
