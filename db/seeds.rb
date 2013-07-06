# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
50.times do
  deal = Deal.create(title: Faker::Lorem.sentence,
              body:Faker::Lorem.paragraph,
              source: Faker::Internet.url,
              clicks: rand(0..9000),
              cents: rand(0..90000))


  if rand(3) == 0
		deal.update_attribute(:created_at, deal.created_at - rand(1..1440).minutes)
	else
		deal.update_attribute(:created_at, deal.created_at - rand(1450..90000).minutes)
	end

end
