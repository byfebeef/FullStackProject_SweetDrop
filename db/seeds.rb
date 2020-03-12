# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Product.destroy_all

u1 = User.create({email: 'Guest_User@guest.com', password: 'password'})
u2 = User.create({email: 't@t', password: 'qwe123'})

c1 = Category.create({name: 'chocolate'})
c2 = Category.create({name: 'candy'})

p1 = Product.create({name: 'rum raison chocolate', price: 19, description: 'alcohol and chocolate. best combinations', category_id: c1.id, expired: false})
p2 = Product.create({name: 'chocolate truffle', price: 19, description: 'chocolate covered in more chocolate', category_id: c1.id, expired: false})
p3 = Product.create({name: 'fruit lollipops', price: 19, description: 'high quality fructose', category_id: c2.id, expired: false})
p4 = Product.create({name: 'coffee taffy', price: 19, description: 'sweeter morning fix', category_id: c2.id, expired: false})

