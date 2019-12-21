# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

words = []
File.open("data/enable.txt","r").each do |line|
    new_word = line.strip
    w = Word.new
    w.name = new_word
    words.push(w)
end

Word.transaction do
    words.each do |word|
        word.save!
    end
end


puts "There are now #{Word.count} rows in the words"