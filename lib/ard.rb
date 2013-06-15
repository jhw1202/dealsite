module ARD
  extend self

  def attributes(object)
    if object.respond_to?(:map)
      attributes_for_records(object)
    else
      single_record_attributes(object)
    end
  end

  def attributes_for_records(records)
    records.map(&method(:single_record_attributes))
  end

  def single_record_attributes(record)
    record.attributes
  end

end
